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
  const payload = JSON.parse(localStorage.getItem("cmm"));
  if (payload)
    Object.entries(payload).forEach(([category, v]) => {
      if (category === "intro") return;
      const questions = {};
      Object.entries(v).forEach(([question, answer]) => {
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
    if (provided_answer && parseInt(provided_answer) === parseInt(answer)) {
      elem.style.display = "initial";
      console.log(cmm());
      if (getPreviousSibling(elem, "h2"))
        getPreviousSibling(elem, "h2").style.display = "block";
      continue;
    }
    elem.style.display = "none";
  }
}

function renderReport() {
  document
    .getElementById("report-goes-here")
    .insertAdjacentHTML("beforebegin", getScoreTable().outerHTML);
}

window.addEventListener("load", renderReport);
window.addEventListener("load", renderFullReport);

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
    renderFullReport,
    getPreviousSibling,
  };
