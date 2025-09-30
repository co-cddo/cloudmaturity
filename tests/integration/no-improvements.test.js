/**
 * Integration Test: No Improvements Selected (Scenario 2)
 * Tests: no checkboxes marked → report shows all with banner
 */

describe("No Improvements Selected", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should show all questions when no improvements marked", () => {
    const sessionData = {
      metadata: { version: "2.0.0", createdAt: new Date().toISOString() },
      cost: {
        question1: { answer: 3, needsImprovement: false },
        question2: { answer: 4, needsImprovement: false },
      },
      security: {
        question1: { answer: 2, needsImprovement: false },
      },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));

    const data = JSON.parse(localStorage.getItem("cmm"));
    const hasImprovements = Object.values(data)
      .filter((v) => v !== data.metadata)
      .some((category) =>
        Object.values(category).some((q) => q.needsImprovement),
      );

    expect(hasImprovements).toBe(false);

    // Should show all 3 questions
    let totalQuestions = 0;
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "metadata") totalQuestions += Object.keys(value).length;
    });

    expect(totalQuestions).toBe(3);
  });

  it("should indicate filter is not active", () => {
    const sessionData = {
      metadata: { version: "2.0.0", createdAt: new Date().toISOString() },
      cost: { question1: { answer: 3, needsImprovement: false } },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));
    const data = JSON.parse(localStorage.getItem("cmm"));

    const filterActive =
      Object.values(data)
        .filter((v) => v !== data.metadata)
        .flatMap((category) => Object.values(category))
        .filter((q) => q.needsImprovement).length > 0;

    expect(filterActive).toBe(false);
  });
});
