if (typeof Storage === "undefined") alert("Browser has disabled local storage");

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

window.addEventListener("load", restoreFormValues);

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
    const section = key.split("_")[0];
    report[section] = (report[section] || 0) + parseInt(localStorage[key]);
  }
  console.log(report);
  return report;
}
getReport();
