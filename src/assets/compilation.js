// T019: Compilation page logic
// T020: Progress indicators component
// T021: Improvement counter
// Works with server-rendered question HTML from compilation.md

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
  const sessionData = JSON.parse(localStorage.getItem("cmm")) || {};

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
  const sessionData = JSON.parse(localStorage.getItem("cmm"));

  if (!sessionData || !sessionData.metadata) {
    document.getElementById("compilation-questions").innerHTML = `
      <div class="govuk-notification-banner" role="region" aria-labelledby="no-data-title">
        <div class="govuk-notification-banner__header">
          <h2 class="govuk-notification-banner__title" id="no-data-title">
            No assessment data found
          </h2>
        </div>
        <div class="govuk-notification-banner__content">
          <p class="govuk-notification-banner__heading">
            Please complete your assessment first.
          </p>
          <p class="govuk-body">
            <a class="govuk-notification-banner__link" href="/assessment/">Go to Assessment</a>
          </p>
        </div>
      </div>
    `;
    return;
  }

  let totalAnswered = 0;
  let totalMarked = 0;

  // Process each category
  Object.entries(sessionData).forEach(([categoryKey, categoryData]) => {
    if (categoryKey === "metadata" || categoryKey === "intro") return;

    const categoryDiv = document.querySelector(
      `.compilation-category[data-category="${categoryKey}"]`,
    );
    if (!categoryDiv) return;

    let categoryHasAnswers = false;

    // Process each question in this category
    Object.entries(categoryData).forEach(([questionHash, questionData]) => {
      const questionDiv = document.querySelector(
        `.compilation-question[data-category="${categoryKey}"][data-question="${questionHash}"]`,
      );
      if (!questionDiv) return;

      // Only show questions that have been answered (answer > 0)
      if (!questionData.answer || questionData.answer <= 0) return;

      categoryHasAnswers = true;
      totalAnswered++;

      // Show the question
      questionDiv.style.display = "block";

      // Show the correct answer guidance div (includes full answer text + guidance)
      const answerLevel = parseInt(questionData.answer);
      const guidanceDivs = questionDiv.querySelectorAll(".answer-guidance");
      guidanceDivs.forEach((div) => {
        const level = parseInt(div.getAttribute("data-level"));
        if (level === answerLevel) {
          div.style.display = "block";
        }
      });

      // Set checkbox state
      const checkbox = questionDiv.querySelector(".improvement-checkbox");
      if (checkbox) {
        checkbox.checked = questionData.needsImprovement || false;
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
  document.querySelectorAll(".improvement-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });
}

// T019: Handle checkbox changes with auto-save
function handleCheckboxChange(event) {
  const checkbox = event.target;
  const category = checkbox.getAttribute("data-category");
  const question = checkbox.getAttribute("data-question");

  const sessionData = JSON.parse(localStorage.getItem("cmm"));
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
  localStorage.setItem("cmm", JSON.stringify(sessionData));

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

if (typeof module === "object") {
  module.exports = {
    renderCompilationPage,
    updateImprovementCount,
    renderProgressIndicators,
    handleCheckboxChange,
  };
}
