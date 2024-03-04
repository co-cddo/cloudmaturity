if (typeof Storage === "undefined")
  alert(
    "Browser has disabled local storage, you will be unable to save your results from one page to another or generate a report.",
  );

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
  Array.from(document.querySelectorAll("input")).forEach((el) => {
    const [model, section, question] = el.name.split("_");
    const value = JSON.parse(localStorage.getItem(model))?.[section]?.[
      question
    ];
    if (el.type === "text" && value) el.value = value;
    if (el.type === "radio" && value && el.value === value) el.checked = true;
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
    const workingModel = JSON.parse(localStorage.getItem(model)) || {};
    Object.entries(sections).forEach(
      ([sectionName, section]) => (workingModel[sectionName] = section),
    );

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
