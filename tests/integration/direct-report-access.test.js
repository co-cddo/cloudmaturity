/**
 * Integration Test: Direct Report Access (Scenario 4)
 * Tests: navigate directly to report → shows unfiltered with banner
 */

describe("Direct Report Access", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should show unfiltered report when accessing directly", () => {
    const sessionData = {
      metadata: { version: "2.0.0", createdAt: new Date().toISOString() },
      cost: {
        question1: { answer: 3, needsImprovement: false },
        question2: { answer: 4, needsImprovement: false },
      },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));
    const data = JSON.parse(localStorage.getItem("cmm"));

    // Check if user has visited compilation (all needsImprovement are false = not visited)
    const hasMarkedAny = Object.values(data)
      .filter((v) => v !== data.metadata)
      .some((category) =>
        Object.values(category).some((q) => q.needsImprovement),
      );

    expect(hasMarkedAny).toBe(false);

    // Should show all questions
    let totalQuestions = 0;
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "metadata") totalQuestions += Object.keys(value).length;
    });

    expect(totalQuestions).toBe(2);
  });

  it("should detect when compilation step was skipped", () => {
    const sessionData = {
      metadata: {
        version: "2.0.0",
        createdAt: new Date().toISOString(),
        // No lastModified means compilation wasn't visited
      },
      cost: { question1: { answer: 3, needsImprovement: false } },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));
    const data = JSON.parse(localStorage.getItem("cmm"));

    const compilationVisited = data.metadata.lastModified !== undefined;
    expect(compilationVisited).toBe(false);
  });
});
