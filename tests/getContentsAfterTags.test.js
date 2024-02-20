const getContentsAfterTags = require("../plugins/getContentsAfterTags");

describe("html formatter", () => {
  it("returns an empty array if the input is empty", () => {
    const input = "";
    const tagName = "h3";
    expect(getContentsAfterTags(input, tagName)).toEqual([]);
  });
  it("returns a correct example", () => {
    const input = `<p>hi2</p><h3>hi3</h3><p>stuff here</p><h3>hi4</h3><p>more stuff here</p><h3>hi5</h3><span>haa</span>`;
    const tagName = "h3";
    const expected = [
      `<p>hi2</p>`,
      `<h3>hi3</h3><p>stuff here</p>`,
      `<h3>hi4</h3><p>more stuff here</p>`,
      `<h3>hi5</h3><span>haa</span>`,
    ];
    expect(getContentsAfterTags(input, tagName)).toEqual(expected);
  });
});
