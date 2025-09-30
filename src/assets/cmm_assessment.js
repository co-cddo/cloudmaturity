if (typeof Storage === "undefined")
  alert(
    "Browser has disabled local storage, you will be unable to save your results from one page to another or generate a report.",
  );

// T014: Data migration from v1 to v2
function migrateSessionData() {
  const data = JSON.parse(localStorage.getItem("cmm"));
  if (!data) return null;

  // Check if already v2
  if (data.metadata?.version === "2.0.0") {
    return data;
  }

  // Migrate from v1 (scalar values) to v2 (objects with needsImprovement)
  const v2Data = {
    metadata: {
      version: "2.0.0",
      createdAt: new Date().toISOString(),
    },
  };

  Object.entries(data).forEach(([category, questions]) => {
    if (category === "metadata") return;

    v2Data[category] = {};
    Object.entries(questions).forEach(([questionId, answer]) => {
      v2Data[category][questionId] = {
        answer: typeof answer === "number" ? answer : parseInt(answer) || 0,
        needsImprovement: false,
      };
    });
  });

  // Save migrated data
  localStorage.setItem("cmm", JSON.stringify(v2Data));
  return v2Data;
}

function getFormValues() {
  const save = {};
  const field_names = Array.from(document.querySelectorAll("input"))
    .map((el) => el.name)
    .filter((item, index, self) => self.indexOf(item) === index);

  field_names.forEach((name) => {
    const [model, section, question] = name.split("_");
    setPropertySafely(save, [model, section, question], "");
    document
      .querySelectorAll(
        `input[type=text][name=${name}], input[type=radio][name=${name}]:checked`,
      )
      .forEach((el) =>
        setPropertySafely(save, [model, section, question], el.value),
      );
  });
  return save;
}

function restoreFormValues() {
  // T013: Migrate data on page load before restoring
  migrateSessionData();

  Array.from(document.querySelectorAll("input")).forEach((el) => {
    const [model, section, question] = el.name.split("_");
    const data = JSON.parse(localStorage.getItem(model));
    const questionData = data?.[section]?.[question];

    // Handle both v1 (scalar) and v2 (object) formats
    const value =
      typeof questionData === "object" ? questionData.answer : questionData;

    if (el.type === "text" && value) el.value = value;
    if (el.type === "radio" && value && el.value == value) el.checked = true;
  });
}
function setPropertySafely(obj, keys, value) {
  keys.reduce((acc, key, index) => {
    if (index === keys.length - 1) {
      acc[key] = value;
    } else {
      acc[key] = acc[key] || {};
    }
    return acc[key];
  }, obj);
}
document
  .querySelectorAll("input")
  .forEach((input) => input.addEventListener("change", saveFormValues));

function saveFormValues() {
  Object.entries(getFormValues()).forEach(([model, sections]) => {
    let workingModel = JSON.parse(localStorage.getItem(model)) || {};

    // T013: Ensure v2 format with metadata
    if (!workingModel.metadata) {
      workingModel = {
        metadata: {
          version: "2.0.0",
          createdAt: new Date().toISOString(),
        },
      };
    }

    // Update lastModified timestamp
    workingModel.metadata.lastModified = new Date().toISOString();

    Object.entries(sections).forEach(([sectionName, section]) => {
      if (!workingModel[sectionName]) {
        workingModel[sectionName] = {};
      }

      // Convert values to v2 format {answer: value, needsImprovement: false}
      Object.entries(section).forEach(([questionId, value]) => {
        const existingQuestion = workingModel[sectionName][questionId];
        workingModel[sectionName][questionId] = {
          answer: parseInt(value) || 0,
          needsImprovement: existingQuestion?.needsImprovement || false,
        };
      });
    });

    localStorage.setItem(model, JSON.stringify(workingModel));
  });
}

function clearFormValues(item) {
  localStorage.removeItem(item);
}

function clearCategoryValues(storageItem, category) {
  var data = JSON.parse(localStorage.getItem(storageItem));
  delete data[category];
  localStorage.setItem(storageItem, JSON.stringify(data));
}

if (typeof module === "object")
  module.exports = {
    getFormValues,
    setPropertySafely,
    saveFormValues,
    clearFormValues,
    clearCategoryValues,
    migrateSessionData,
  };

window.addEventListener("load", restoreFormValues);

if (document.getElementById("resetButton"))
  document
    .getElementById("resetButton")
    .addEventListener("click", (e) =>
      confirm("Are you sure you want to reset the entire report?")
        ? clearFormValues("cmm")
        : e.preventDefault(),
    );

if (document.getElementById("resetSectionButton")) {
  // Take any element of the document input (we take the first)
  // Then split it by _ to [model, section, question], taking the section
  const section = document.querySelectorAll("input")[0].name.split("_")[1];

  document
    .getElementById("resetSectionButton")
    .addEventListener("click", (e) =>
      confirm("Are you sure you want to reset this section?")
        ? clearCategoryValues("cmm", section)
        : e.preventDefault(),
    );
}
