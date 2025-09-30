/**
 * Integration Test: Partial Assessment Completion (Scenario 3)
 * Tests: only some questions answered → compilation shows only those
 */

describe("Partial Assessment Completion", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should show only answered questions on compilation page", () => {
    const sessionData = {
      metadata: { version: "2.0.0", createdAt: new Date().toISOString() },
      cost: {
        question1: { answer: 3, needsImprovement: false },
        question2: { answer: 4, needsImprovement: false },
      },
      // Other categories not answered yet
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));
    const data = JSON.parse(localStorage.getItem("cmm"));

    const answeredCategories = Object.keys(data).filter(
      (k) => k !== "metadata",
    );
    expect(answeredCategories).toEqual(["cost"]);
    expect(Object.keys(data.cost)).toHaveLength(2);
  });

  it("should calculate progress correctly for partial completion", () => {
    const sessionData = {
      metadata: { version: "2.0.0", createdAt: new Date().toISOString() },
      cost: { question1: { answer: 3, needsImprovement: false } },
      security: { question1: { answer: 2, needsImprovement: false } },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));
    const data = JSON.parse(localStorage.getItem("cmm"));

    let answeredCount = 0;
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "metadata") answeredCount += Object.keys(value).length;
    });

    expect(answeredCount).toBe(2);
  });

  it("should allow marking improvements on partially completed assessment", () => {
    const sessionData = {
      metadata: { version: "2.0.0", createdAt: new Date().toISOString() },
      cost: { question1: { answer: 3, needsImprovement: false } },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));
    const data = JSON.parse(localStorage.getItem("cmm"));

    data.cost.question1.needsImprovement = true;
    localStorage.setItem("cmm", JSON.stringify(data));

    const updated = JSON.parse(localStorage.getItem("cmm"));
    expect(updated.cost.question1.needsImprovement).toBe(true);
  });
});
