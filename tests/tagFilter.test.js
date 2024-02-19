const extractContentByTag = require("../plugins/tagFilter");

describe("extractContentByTag", () => {
  test("extracts content for single matching tag", () => {
    const htmlString = "<div>Content</div>";
    const tagName = "div";
    expect(extractContentByTag(htmlString, tagName)).toEqual(["Content"]);
  });

  test("extracts content for multiple matching tags", () => {
    const htmlString = "<p>First</p><p>Second</p>";
    const tagName = "p";
    expect(extractContentByTag(htmlString, tagName)).toEqual([
      "First",
      "Second",
    ]);
  });

  test("returns empty array if no matching tags found", () => {
    const htmlString = "<div>No Match Here</div>";
    const tagName = "span";
    expect(extractContentByTag(htmlString, tagName)).toEqual([]);
  });

  test("extracts content ignoring attributes", () => {
    const htmlString =
      '<span class="highlight">Highlighted</span><span>Normal</span>';
    const tagName = "span";
    expect(extractContentByTag(htmlString, tagName)).toEqual([
      "Highlighted",
      "Normal",
    ]);
  });

  test("extracts content for nested tags", () => {
    const htmlString = "<div><span>Nested</span> Content</div>";
    const tagName = "div";
    expect(extractContentByTag(htmlString, tagName)).toEqual([
      "<span>Nested</span> Content",
    ]);
  });
});
