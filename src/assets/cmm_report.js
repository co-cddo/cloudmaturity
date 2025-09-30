/* global safeLocalStorageGet, safeLocalStorageSet */

const titles = {
  cost: "Cost & Sustainability",
  data: "Data",
  governance: "Governance",
  operations: "Operations",
  people: "People",
  security: "Security",
  tech: "Technology",
};
function cmm() {
  const data = { categories: {} };
  let payload;
  try {
    payload = JSON.parse(localStorage.getItem("cmm"));
  } catch (error) {
    console.error("Failed to parse session data:", error);
    payload = null;
  }
  if (payload)
    Object.entries(payload).forEach(([category, v]) => {
      if (category === "intro" || category === "metadata") return;
      const questions = {};
      Object.entries(v).forEach(([question, questionData]) => {
        // Handle both v1 (scalar) and v2 (object) formats
        const answer =
          typeof questionData === "object" ? questionData.answer : questionData;
        questions[question] = parseInt(answer) || 0;
      });
      data.categories[category] = {
        questions,
        title: titles[category],
        max: Object.keys(v).length * 5,
      };
    });
  return data;
}

function getCategories() {
  return Object.keys(cmm().categories);
}

function getScorePercent(category) {
  return getScore(category) / getScoreMax(category);
}

function getScore(category) {
  return Object.values(cmm().categories[category].questions).reduce(
    (a, c) => a + c,
    0,
  );
}

function getScoreMax(category) {
  return cmm().categories[category].max;
}

function getCategoryTitle(category) {
  return cmm().categories[category].title;
}

function createEl(tag, parent) {
  let el = document.createElement(tag);
  parent.appendChild(el);
  return el;
}

var addRule = (function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
    var propText =
      typeof css === "string"
        ? css
        : Object.keys(css)
            .map(function (p) {
              return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
            })
            .join(";");
    sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
  };
})(document.createElement("style"));

function getScoreTable() {
  let tbl = document.createElement("table");
  tbl.id = "report_radar";
  tbl.className = "radar chaarts";
  let thr = createEl("tr", createEl("thead", tbl));
  let tr = createEl("tr", createEl("tbody", tbl));
  const categories = getCategories();
  for (var i = 0; i < categories.length; i++) {
    const category = categories[i];
    let th = createEl("th", thr);
    th.textContent = getCategoryTitle(category);
    th.scope = "col";
    addRule(`.chaarts.radar [scope=col]:nth-child(${i + 1})::after`, {
      content: `${getScore(category)} / ${getScoreMax(category)}`,
    });
    tbl.style.setProperty(`--${i + 1}`, getScorePercent(category));
    let td = createEl("span", createEl("td", tr));
    td.textContent = getScorePercent(category);
  }
  tbl.style.setProperty("--items", categories.length);
  tbl.style.setProperty(`--${i + 1}`, "var(--1)");

  return tbl;
}

function getPreviousSibling(elem, selector) {
  var sibling = elem.previousElementSibling;
  if (!selector) return sibling;
  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.previousElementSibling;
  }
}

function renderFullReport() {
  for (const elem of document.querySelectorAll(".report_answer_section")) {
    const [category, question, answer] = elem.id.split("_");
    const provided_answer = cmm()?.categories[category]?.questions[question];

    if (parseInt(provided_answer) === parseInt(answer)) {
      elem.style.display = "initial";
      if (getPreviousSibling(elem, "h3"))
        getPreviousSibling(elem, "h3").style.display = "block";
      continue;
    }
    elem.style.display = "none";
  }
}

function renderReport() {
  if (document.getElementById("report-goes-here"))
    document
      .getElementById("report-goes-here")
      .insertAdjacentHTML("beforebegin", getScoreTable().outerHTML);
}

function saveReport() {
  // T015: Wrap session data in export format with metadata
  const sessionData = JSON.parse(localStorage.getItem("cmm"));
  if (!sessionData) {
    alert("No assessment data to save");
    return;
  }

  // Calculate counts
  let improvementCount = 0;
  let totalQuestions = 0;
  const categoryCounts = {};

  Object.entries(sessionData).forEach(([category, questions]) => {
    if (category === "intro" || category === "metadata") return;

    const answered = Object.keys(questions).length;
    const needsImprovement = Object.values(questions).filter(
      (q) => q.needsImprovement,
    ).length;

    categoryCounts[category] = { answered, needsImprovement };
    totalQuestions += answered;
    improvementCount += needsImprovement;
  });

  const exportData = {
    exportMetadata: {
      version: "2.0.0",
      createdAt: sessionData.metadata?.createdAt || new Date().toISOString(),
      exportedAt: new Date().toISOString(),
      improvementCount,
      totalQuestions,
      categories: categoryCounts,
    },
    assessmentData: sessionData,
  };

  const fileName = `cmm-assessment-${new Date().toISOString().split("T")[0]}.json`;
  download(JSON.stringify(exportData, null, 2), fileName, "application/json");
}
function loadReport(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  if (file.type && file.type !== "application/json") {
    alert("File is not a JSON.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const json = JSON.parse(event.target.result);

      // T016: Extract assessmentData from export format
      let sessionData;
      if (json.exportMetadata && json.assessmentData) {
        // New export format with metadata wrapper
        sessionData = json.assessmentData;
      } else {
        // Legacy format or direct session data
        sessionData = json;
      }

      localStorage.setItem("cmm", JSON.stringify(sessionData));
      window.location.reload();
    } catch (e) {
      alert("Error parsing JSON: " + e.message);
    }
  };

  reader.readAsText(file);
}

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// T022: Report filtering logic
function buildFilteredReport() {
  const sessionData = JSON.parse(localStorage.getItem("cmm"));
  if (!sessionData) return null;

  let hasImprovements = false;
  let totalAnswered = 0;
  let totalMarked = 0;
  const categoryCounts = {};

  Object.entries(sessionData).forEach(([category, questions]) => {
    if (category === "intro" || category === "metadata") return;

    const answered = Object.keys(questions).length;
    const marked = Object.values(questions).filter(
      (q) => q.needsImprovement,
    ).length;

    categoryCounts[category] = { answered, marked };
    totalAnswered += answered;
    totalMarked += marked;

    if (marked > 0) hasImprovements = true;
  });

  return {
    filterActive: hasImprovements,
    totalAnswered,
    totalMarked,
    categoryCounts,
  };
}

// T023: Summary table component
function renderSummaryTable(filterStats) {
  const summaryDiv = document.getElementById("summary-table");
  if (!summaryDiv || !filterStats) return;

  if (filterStats.filterActive) {
    summaryDiv.innerHTML = `
      <div class="govuk-!-margin-bottom-6">
        <h2 class="govuk-heading-m">Your improvement focus</h2>
        <p class="govuk-body">
          Showing <strong>${filterStats.totalMarked}</strong> of <strong>${filterStats.totalAnswered}</strong> questions you marked for improvement.
        </p>
        <table class="govuk-table">
          <thead class="govuk-table__head">
            <tr class="govuk-table__row">
              <th scope="col" class="govuk-table__header">Category</th>
              <th scope="col" class="govuk-table__header govuk-table__header--numeric">Answered</th>
              <th scope="col" class="govuk-table__header govuk-table__header--numeric">Focus areas</th>
            </tr>
          </thead>
          <tbody class="govuk-table__body">
            ${Object.entries(filterStats.categoryCounts)
              .filter(([_, counts]) => counts.answered > 0)
              .map(
                ([category, counts]) => `
              <tr class="govuk-table__row">
                <td class="govuk-table__cell">${titles[category]}</td>
                <td class="govuk-table__cell govuk-table__cell--numeric">${counts.answered}</td>
                <td class="govuk-table__cell govuk-table__cell--numeric ${counts.marked > 0 ? "govuk-!-font-weight-bold" : ""}">${counts.marked}</td>
              </tr>
            `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  } else {
    summaryDiv.innerHTML = "";
  }
}

// T025: Banner notifications
function renderFilterBanner(filterStats) {
  const bannerDiv = document.getElementById("filter-banner");
  if (!bannerDiv || !filterStats) return;

  const compilationVisited = JSON.parse(localStorage.getItem("cmm"))?.metadata
    ?.lastModified;

  if (!filterStats.filterActive && !compilationVisited) {
    // Direct access without visiting compilation
    bannerDiv.innerHTML = `
      <div class="govuk-notification-banner" role="region" aria-labelledby="direct-access-title">
        <div class="govuk-notification-banner__header">
          <h2 class="govuk-notification-banner__title" id="direct-access-title">
            Notice
          </h2>
        </div>
        <div class="govuk-notification-banner__content">
          <p class="govuk-notification-banner__heading">
            You haven't selected improvement areas yet.
          </p>
          <p class="govuk-body">
            <a class="govuk-notification-banner__link" href="/assessment/compilation/">Visit Report Compilation</a> to focus your report on specific areas.
          </p>
        </div>
      </div>
    `;
  } else if (!filterStats.filterActive && compilationVisited) {
    // No improvements selected
    bannerDiv.innerHTML = `
      <div class="govuk-notification-banner" role="region" aria-labelledby="no-selections-title">
        <div class="govuk-notification-banner__header">
          <h2 class="govuk-notification-banner__title" id="no-selections-title">
            Information
          </h2>
        </div>
        <div class="govuk-notification-banner__content">
          <p class="govuk-notification-banner__heading">
            No items selected for improvement - showing all results
          </p>
        </div>
      </div>
    `;
  } else {
    bannerDiv.innerHTML = "";
  }
}

// Apply filtering to report display
function applyReportFilter() {
  const filterStats = buildFilteredReport();
  if (!filterStats) return;

  renderFilterBanner(filterStats);
  renderSummaryTable(filterStats);

  // If filtering is active, hide questions not marked for improvement
  if (filterStats.filterActive) {
    const sessionData = JSON.parse(localStorage.getItem("cmm"));

    document.querySelectorAll(".report_answer_section").forEach((elem) => {
      const [category, question, answer] = elem.id.split("_");
      const questionData = sessionData?.[category]?.[question];

      // If question not answered or not marked for improvement, hide it
      if (!questionData || !questionData.needsImprovement) {
        elem.style.display = "none";

        // Hide the h3 question title (check if not already hidden to avoid redundant operations)
        const h3 = getPreviousSibling(elem, "h3");
        if (h3 && h3.style.display !== "none") {
          h3.style.display = "none";
        }
      }
    });

    // Add "no areas marked for improvement" message to empty categories
    document
      .querySelectorAll(".govuk-accordion__section-content")
      .forEach((section) => {
        const visibleH3 = section.querySelectorAll(
          'h3[style*="display: block"], h3:not([style*="display: none"])',
        );
        if (visibleH3.length === 0) {
          // Check if message already exists
          if (!section.querySelector(".no-improvements-message")) {
            const message = document.createElement("p");
            message.className = "govuk-body no-improvements-message";
            message.textContent = "No areas marked for improvement";
            section.insertBefore(message, section.firstChild);
          }
        }
      });
  }
}

window.addEventListener("load", renderReport);
window.addEventListener("load", renderFullReport);
window.addEventListener("load", applyReportFilter);

if (typeof module === "object")
  module.exports = {
    getCategories,
    getScorePercent,
    getScore,
    getScoreMax,
    getCategoryTitle,
    getScoreTable,
    createEl,
    addRule,
    renderReport,
    loadReport,
    renderFullReport,
    saveReport,
    getPreviousSibling,
    buildFilteredReport,
    renderSummaryTable,
    renderFilterBanner,
    applyReportFilter,
  };
