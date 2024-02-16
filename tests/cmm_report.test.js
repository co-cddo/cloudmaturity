const m = require("../src/assets/cmm_report.js");

describe("getCategories", () => {
  it("should return an array of categories", () =>
    expect(m.getCategories()).toBeInstanceOf(Array));
});
describe("getScorePercent", () => {
  it("should return a percent score", () =>
    expect(m.getScorePercent("tech")).toBe(0.07));
});
describe("getScore", () => {
  it("should return the score", () => expect(m.getScore("tech")).toBe(7));
});
describe("getScoreMax", () => {
  it("should return max score", () => expect(m.getScoreMax("tech")).toBe(100));
});
describe("getCategoryTitle", () => {
  it("should return the title", () =>
    expect(m.getCategoryTitle("tech")).toBe("Technology"));
});
describe("createEl", () => {
  it("Should create a DOM element in a parent one and return it", () => {
    const parent = document.createElement("body");
    expect(m.createEl("div", parent)).toBeInstanceOf(HTMLDivElement);
  });
});
describe("addRule", () => {
  it("Should add the CSS rule to the document", () => {
    m.addRule("div", { background: "blue" });
    const el = document.createElement("div");
    expect(getComputedStyle(el).background).toBe("blue");
  });
});
describe("getScoreTable", () => {
  it("should return the table", () =>
    expect(m.getScoreTable("tech")).toMatchSnapshot());
});
describe("renderReport", () => {
  it("Should add the table to the document", () => {
    let el = document.createElement("div");
    el.id = "report-goes-here";
    document.body.appendChild(el);
    m.renderReport();
    expect(document.getElementById("report_radar").outerHTML).toContain(
      "table",
    );
  });
});
