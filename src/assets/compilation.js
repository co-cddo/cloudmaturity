// T019: Compilation page logic
// T020: Progress indicators component
// T021: Improvement counter
// Works with server-rendered question HTML from compilation.md
/* global DataMigrationService, safeDOMQuery, safeDOMOperation, safeLocalStorageGet, safeLocalStorageSet */

if (typeof Storage === "undefined") {
  alert(
    "Browser has disabled local storage, you will be unable to save your selections.",
  );
}

// T020: Calculate and display progress indicators
function renderProgressIndicators(answeredCount, totalPossible, markedCount) {
  const progressDiv = document.getElementById("compilation-progress");
  if (!progressDiv) return;

  const percentage =
    answeredCount > 0 ? Math.round((markedCount / answeredCount) * 100) : 0;

  progressDiv.innerHTML = `
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-one-half">
        <p class="govuk-body"><strong>${answeredCount}</strong> of ${totalPossible} questions answered</p>
      </div>
      <div class="govuk-grid-column-one-half">
        <p class="govuk-body" id="marked-count">
          <strong>${markedCount}</strong> question${markedCount !== 1 ? "s" : ""} marked for improvement (${percentage}%)
        </p>
      </div>
    </div>
    <progress
      class="govuk-progress-bar"
      max="${answeredCount}"
      value="${markedCount}"
      aria-label="Questions marked for improvement"
      role="progressbar"
      aria-valuenow="${markedCount}"
      aria-valuemin="0"
      aria-valuemax="${answeredCount}">
      ${percentage}%
    </progress>
    <style>
      .govuk-progress-bar {
        width: 100%;
        height: 30px;
        margin: 20px 0;
      }
    </style>
  `;
}

// T021: Update improvement counter
function updateImprovementCount() {
  const checkboxes = document.querySelectorAll(".improvement-checkbox:checked");

  let sessionData;
  try {
    sessionData = JSON.parse(localStorage.getItem("cmm")) || {};
  } catch (error) {
    console.error("Failed to load session data for count:", error);
    sessionData = {};
  }

  let totalAnswered = 0;
  Object.entries(sessionData).forEach(([key, value]) => {
    if (key !== "metadata" && key !== "intro") {
      totalAnswered += Object.keys(value).length;
    }
  });

  // Calculate total possible questions from all rendered questions in the DOM
  const totalPossibleQuestions = document.querySelectorAll(
    ".compilation-question",
  ).length;

  renderProgressIndicators(
    totalAnswered,
    totalPossibleQuestions,
    checkboxes.length,
  );
}

// T019: Load and show answered questions from server-rendered HTML
function renderCompilationPage() {
  let sessionData;
  try {
    sessionData = JSON.parse(localStorage.getItem("cmm"));
  } catch (e) {
    console.error("Invalid session data:", e);
    showErrorMessage(
      "Your session data appears corrupted. Please start over.",
      "/assessment/",
    );
    return;
  }

  if (!sessionData || !sessionData.metadata) {
    showErrorMessage(
      "Please complete your assessment first.",
      "/assessment/",
      "No assessment data found",
    );
    return;
  }

  // Validate schema structure
  if (!validateSessionSchema(sessionData)) {
    console.error("Invalid session format");
    showErrorMessage(
      "Invalid session format. Please refresh and try again.",
      "/assessment/",
    );
    return;
  }

  let totalAnswered = 0;
  let totalMarked = 0;

  // Process each category with safe DOM operations
  Object.entries(sessionData).forEach(([categoryKey, categoryData]) => {
    if (categoryKey === "metadata" || categoryKey === "intro") return;

    const categoryDiv = safeDOMQuery(
      `.compilation-category[data-category="${categoryKey}"]`,
    );
    if (!categoryDiv) return;

    let categoryHasAnswers = false;

    // Process each question in this category
    Object.entries(categoryData).forEach(([questionHash, questionData]) => {
      const questionDiv = safeDOMQuery(
        `.compilation-question[data-category="${categoryKey}"][data-question="${questionHash}"]`,
      );
      if (!questionDiv) return;

      // Only show questions that have been answered (answer > 0)
      if (!questionData.answer || questionData.answer <= 0) return;

      categoryHasAnswers = true;
      totalAnswered++;

      // Show the question with safe operation
      safeDOMOperation(questionDiv, (el) => {
        el.style.display = "block";
      });

      // Show the correct answer guidance div (includes full answer text + guidance)
      const answerLevel = parseInt(questionData.answer);
      const guidanceDivs = questionDiv.querySelectorAll(".answer-guidance");
      guidanceDivs.forEach((div) => {
        const level = parseInt(div.getAttribute("data-level"));
        if (level === answerLevel) {
          safeDOMOperation(div, (el) => {
            el.style.display = "block";
          });
        }
      });

      // Set checkbox state
      const checkbox = questionDiv.querySelector(".improvement-checkbox");
      if (checkbox) {
        safeDOMOperation(checkbox, (el) => {
          el.checked = questionData.needsImprovement || false;
        });
        if (questionData.needsImprovement) {
          totalMarked++;
        }
      }
    });

    // Hide category if it has no answered questions
    if (!categoryHasAnswers) {
      categoryDiv.style.display = "none";
    }
  });

  // T020: Render initial progress
  const totalPossibleQuestions = document.querySelectorAll(
    ".compilation-question",
  ).length;
  renderProgressIndicators(totalAnswered, totalPossibleQuestions, totalMarked);

  // T019: Add event listeners to checkboxes for auto-save
  cleanupEventListeners();
  document.querySelectorAll(".improvement-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
    eventListeners.set(checkbox, handleCheckboxChange);
  });
}

// Store references for cleanup
const eventListeners = new Map();

function cleanupEventListeners() {
  eventListeners.forEach((handler, element) => {
    element.removeEventListener("change", handler);
  });
  eventListeners.clear();
}

// T019: Handle checkbox changes with auto-save
function handleCheckboxChange(event) {
  const checkbox = event.target;
  const category = checkbox.getAttribute("data-category");
  const question = checkbox.getAttribute("data-question");

  let sessionData;
  try {
    sessionData = JSON.parse(localStorage.getItem("cmm"));
  } catch (error) {
    console.error("Failed to load session data:", error);
    alert("Failed to load your data. Please refresh the page.");
    return;
  }

  if (
    !sessionData ||
    !sessionData[category] ||
    !sessionData[category][question]
  ) {
    return;
  }

  // Update needsImprovement flag
  sessionData[category][question].needsImprovement = checkbox.checked;

  // Update lastModified timestamp
  sessionData.metadata.lastModified = new Date().toISOString();

  // Save to localStorage
  try {
    localStorage.setItem("cmm", JSON.stringify(sessionData));
  } catch (error) {
    console.error("Failed to save changes:", error);
    alert("Failed to save your selection. Please try again.");
    // Revert checkbox state
    checkbox.checked = !checkbox.checked;
    return;
  }

  // T021: Update counter
  updateImprovementCount();

  // Visual feedback
  const questionDiv = checkbox.closest(".compilation-question");
  if (checkbox.checked) {
    questionDiv.style.backgroundColor = "#f3f2f1";
    questionDiv.style.borderLeft = "4px solid #1d70b8";
    questionDiv.style.paddingLeft = "16px";
  } else {
    questionDiv.style.backgroundColor = "";
    questionDiv.style.borderLeft = "";
    questionDiv.style.paddingLeft = "";
  }
}

// Initialize on page load
window.addEventListener("load", () => {
  if (document.getElementById("compilation-questions")) {
    renderCompilationPage();
  }
});

// Clean up on page unload
window.addEventListener("unload", cleanupEventListeners);

// Helper function to show error messages
function showErrorMessage(message, linkHref, title = "Error") {
  const container = document.getElementById("compilation-questions");
  if (!container) return;

  // Clear existing content
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const banner = document.createElement("div");
  banner.className = "govuk-notification-banner";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-labelledby", "error-title");

  const header = document.createElement("div");
  header.className = "govuk-notification-banner__header";

  const headerTitle = document.createElement("h2");
  headerTitle.className = "govuk-notification-banner__title";
  headerTitle.id = "error-title";
  headerTitle.textContent = title;

  header.appendChild(headerTitle);
  banner.appendChild(header);

  const content = document.createElement("div");
  content.className = "govuk-notification-banner__content";

  const heading = document.createElement("p");
  heading.className = "govuk-notification-banner__heading";
  heading.textContent = message;

  const body = document.createElement("p");
  body.className = "govuk-body";

  const link = document.createElement("a");
  link.className = "govuk-notification-banner__link";
  link.href = linkHref;
  link.textContent =
    linkHref === "/assessment/" ? "Go to Assessment" : "Go back";

  body.appendChild(link);
  content.appendChild(heading);
  content.appendChild(body);
  banner.appendChild(content);
  container.appendChild(banner);
}

// Validate session data schema - delegates to DataMigrationService
function validateSessionSchema(data) {
  if (typeof DataMigrationService !== "undefined") {
    return DataMigrationService.validateSchema(data);
  }
  console.error("DataMigrationService not loaded");
  return false;
}

if (typeof module === "object") {
  module.exports = {
    renderCompilationPage,
    updateImprovementCount,
    renderProgressIndicators,
    handleCheckboxChange,
  };
}
