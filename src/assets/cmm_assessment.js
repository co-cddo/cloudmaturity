if (typeof Storage === "undefined") alert("Browser has disabled local storage");

// TODO: if you change a question title, the old will still be in local storage and then added to the total when the report runs

document
  .querySelectorAll("input")
  .forEach((input) =>
    input.addEventListener("change", (event) =>
      localStorage.setItem(event.target.name, event.target.value)
    )
  );

function clearFormValues() {
  console.log("fo");
  localStorage.clear();
}

function restoreFormValues() {
  for (var i = 0, len = localStorage.length; i < len; i++) {
    const key = localStorage.key(i);
    document
      .querySelectorAll(`input[name='${key}'][value='${localStorage[key]}']`)
      .forEach((el) => (el.checked = true));
  }
}

function collectTotals() {
  document.querySelectorAll("input[type=checkbox]").forEach((el) => {
    console.log(el);
  });
  // .forEach((el) => el.addEventListener("change", renderReport));
}

window.addEventListener("load", restoreFormValues);
window.addEventListener("load", collectTotals);

if (document.getElementById("resetButton"))
  document
    .getElementById("resetButton")
    .addEventListener("click", (e) =>
      confirm("Are you sure you want to reset the entire report?")
        ? clearFormValues()
        : e.preventDefault()
    );

function getReport() {
  const report = {};
  for (var i = 0, len = localStorage.length; i < len; i++) {
    const key = localStorage.key(i);
    if (key.split("_")[0] !== "cmm") continue;
    const section = key.split("_")[1];
    report[section] = report[section] || {};
    report[section].total = (report[section].total || 0) + 4;
    report[section].score =
      (report[section].score || 0) + parseInt(localStorage[key] - 1);
    report[section].percent = report[section].score / report[section].total;
  }
  return report;
}

function setScoreMax(category, max) {
  localStorage.setItem(`cmm_${category}_max`, max);
}
function setScore(category, score) {
  localStorage.setItem(`cmm_${category}`, score);
}
