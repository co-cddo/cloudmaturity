const m = require("../src/assets/cmm_assessment.js");

describe("restoreFormValues", () => {
  it.todo("should restore form values to expected state");
});

describe("eventListeners", () => {
  it.todo("should add event listeners to the form");
});

describe("setPropertySafely", () => {
  it("should set the value at the correct depth", () => {
    const save = {};
    m.setPropertySafely(save, ["foo", "bar", "la"], 1);
    expect(save.foo.bar.la).toBe(1);
  });

  it("should create nested objects if they do not exist", () => {
    const save = {};
    m.setPropertySafely(save, ["foo", "bar", "la"], 1);
    expect(typeof save.foo).toBe("object");
    expect(typeof save.foo.bar).toBe("object");
  });

  it("should not override existing objects", () => {
    const save = { foo: { existing: 2 } };
    m.setPropertySafely(save, ["foo", "bar", "la"], 1);
    expect(save.foo.existing).toBe(2);
    expect(save.foo.bar.la).toBe(1);
  });
});

describe("getFormValues", () => {
  it("should get form values with the correct structure", () => {
    document.body.innerHTML = `
      <input type="text" name="model1_section1_question1" value="answer1">
      <input type="text" name="model1_section1_question2" value="answer2">
      <input type="text" name="model1_section1_question3" value="">
      <input type="radio" name="model1_section2_question1" value="option1" checked>
      <input type="radio" name="model1_section2_question1" value="option2">
      <input type="radio" name="model2_section1_question1" value="foo">
    `;
    expect(m.getFormValues()).toEqual({
      model1: {
        section1: {
          question1: "answer1",
          question2: "answer2",
          question3: "",
        },
        section2: {
          question1: "option1",
        },
      },
      model2: {
        section1: {
          question1: "",
        },
      },
    });
  });
});

describe("saveFormValues", () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = `
      <input type="text" name="model1_section1_question1" value="answer1">
    `;
    m.saveFormValues();
  });
  it("should save form values correctly", () => {
    const result = JSON.parse(localStorage.getItem("model1"));
    expect(result.metadata).toBeDefined();
    expect(result.metadata.version).toBe("2.0.0");
    expect(result.section1.question1).toEqual({
      answer: 0, // "answer1" parses to 0
      needsImprovement: false,
    });
  });

  it("shouldn't overwrite other sections", () => {
    document.body.innerHTML = `<input type="text" name="model1_section2_question1" value="3">`;
    m.saveFormValues();
    const result = JSON.parse(localStorage.getItem("model1"));
    expect(result.metadata).toBeDefined();
    expect(result.section1.question1).toEqual({
      answer: 0,
      needsImprovement: false,
    });
    expect(result.section2.question1).toEqual({
      answer: 3,
      needsImprovement: false,
    });
  });
  it("shouldn't overwrite other models", () => {
    document.body.innerHTML = `<input type="text" name="model2_section1_question1" value="5">`;
    m.saveFormValues();
    const result = JSON.parse(localStorage.getItem("model1"));
    expect(result.metadata).toBeDefined();
    expect(result.section1.question1).toEqual({
      answer: 0,
      needsImprovement: false,
    });
  });

  it("should overwrite sections supplied", () => {
    document.body.innerHTML = `<input type="text" name="model1_section1_question4" value="5">`;
    m.saveFormValues();
    const result = JSON.parse(localStorage.getItem("model1"));
    expect(result.metadata).toBeDefined();
    expect(result.section1.question4).toEqual({
      answer: 5,
      needsImprovement: false,
    });
  });
});

describe("clearFormValues", () => {
  beforeAll(() => {
    localStorage.setItem("foo", "bar");
    localStorage.setItem("bar", "foo");
    m.clearFormValues("foo");
  });
  afterAll(() => localStorage.clear());

  it("should remove the item from localStorage", () =>
    expect(localStorage.getItem("foo")).toBeNull());
  it("should not remove other items from localStorage", () =>
    expect(localStorage.getItem("bar")).toEqual("foo"));
  it.todo("should ask for confirmation before acting");
});

describe("clearCategoryValues", () => {
  beforeAll(() => {
    localStorage.setItem(
      "foo",
      JSON.stringify({
        categoryA: "a",
        categoryB: "b",
      }),
    );
    localStorage.setItem("bar", "foo");
    m.clearCategoryValues("foo", "categoryA");
  });
  afterAll(() => localStorage.clear());

  it("should update the object in localStorage", () =>
    expect(localStorage.getItem("foo")).toEqual(
      JSON.stringify({ categoryB: "b" }),
    ));
  it("should not remove other items from localStorage", () =>
    expect(localStorage.getItem("bar")).toEqual("foo"));
});
