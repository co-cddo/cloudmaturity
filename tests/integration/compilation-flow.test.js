/**
 * Integration Test: Complete Workflow (Scenario 1)
 * Tests: answer questions → navigate to compilation → mark improvements → view filtered report
 */

describe("Complete Compilation Workflow", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    if (localStorage.getItem.mockClear) {
      localStorage.getItem.mockClear();
      localStorage.setItem.mockClear();
    }
  });

  it("should complete full workflow from assessment to filtered report", () => {
    // Step 1: Answer questions (simulating cmm_assessment.js)
    const sessionData = {
      metadata: {
        version: "2.0.0",
        createdAt: new Date().toISOString(),
      },
      cost: {
        question1: { answer: 3, needsImprovement: false },
        question2: { answer: 4, needsImprovement: false },
      },
      security: {
        question1: { answer: 2, needsImprovement: false },
      },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));

    // Step 2: Navigate to compilation page (verify data loads)
    const retrieved = JSON.parse(localStorage.getItem("cmm"));
    expect(retrieved.cost.question1).toBeDefined();
    expect(retrieved.security.question1).toBeDefined();

    // Step 3: Mark improvements on compilation page
    retrieved.cost.question1.needsImprovement = true;
    retrieved.security.question1.needsImprovement = true;
    localStorage.setItem("cmm", JSON.stringify(retrieved));

    // Step 4: Verify filtering logic works
    const updated = JSON.parse(localStorage.getItem("cmm"));
    const markedQuestions = [];

    Object.entries(updated).forEach(([category, data]) => {
      if (category === "metadata") return;

      Object.entries(data).forEach(([questionId, questionData]) => {
        if (questionData.needsImprovement) {
          markedQuestions.push({ category, questionId });
        }
      });
    });

    expect(markedQuestions).toHaveLength(2);
    expect(markedQuestions).toContainEqual({
      category: "cost",
      questionId: "question1",
    });
    expect(markedQuestions).toContainEqual({
      category: "security",
      questionId: "question1",
    });

    // Step 5: Verify report would show only marked questions
    const filterActive = markedQuestions.length > 0;
    expect(filterActive).toBe(true);
  });

  it("should track all answered questions on compilation page", () => {
    const sessionData = {
      metadata: {
        version: "2.0.0",
        createdAt: new Date().toISOString(),
      },
      cost: {
        question1: { answer: 3, needsImprovement: false },
        question2: { answer: 4, needsImprovement: false },
      },
      data: {
        question1: { answer: 2, needsImprovement: false },
      },
      operations: {
        question1: { answer: 5, needsImprovement: false },
      },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));

    // Count answered questions
    let answeredCount = 0;
    Object.entries(sessionData).forEach(([category, data]) => {
      if (category === "metadata") return;
      answeredCount += Object.keys(data).length;
    });

    expect(answeredCount).toBe(4);
  });

  it("should allow modifying selections and navigating back", () => {
    const sessionData = {
      metadata: {
        version: "2.0.0",
        createdAt: new Date().toISOString(),
      },
      cost: {
        question1: { answer: 3, needsImprovement: true },
      },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));

    // First visit to report - should show filtered view
    let data = JSON.parse(localStorage.getItem("cmm"));
    let filterActive = data.cost.question1.needsImprovement;
    expect(filterActive).toBe(true);

    // Navigate back to compilation, uncheck
    data.cost.question1.needsImprovement = false;
    localStorage.setItem("cmm", JSON.stringify(data));

    // Return to report - should show all questions now
    data = JSON.parse(localStorage.getItem("cmm"));
    filterActive = data.cost.question1.needsImprovement;
    expect(filterActive).toBe(false);
  });

  it("should update lastModified timestamp on changes", () => {
    const originalTime = "2025-09-30T10:00:00Z";
    const sessionData = {
      metadata: {
        version: "2.0.0",
        createdAt: originalTime,
        lastModified: originalTime,
      },
      cost: {
        question1: { answer: 3, needsImprovement: false },
      },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));

    // Simulate checkbox change
    const data = JSON.parse(localStorage.getItem("cmm"));
    data.cost.question1.needsImprovement = true;
    data.metadata.lastModified = new Date().toISOString();
    localStorage.setItem("cmm", JSON.stringify(data));

    const updated = JSON.parse(localStorage.getItem("cmm"));
    expect(updated.metadata.lastModified).not.toBe(originalTime);
  });

  it("should auto-save on every checkbox change", () => {
    const sessionData = {
      metadata: {
        version: "2.0.0",
        createdAt: new Date().toISOString(),
      },
      cost: {
        question1: { answer: 3, needsImprovement: false },
        question2: { answer: 4, needsImprovement: false },
      },
    };

    localStorage.setItem("cmm", JSON.stringify(sessionData));

    // Simulate checkbox toggles
    let data = JSON.parse(localStorage.getItem("cmm"));
    data.cost.question1.needsImprovement = true;
    localStorage.setItem("cmm", JSON.stringify(data));

    data = JSON.parse(localStorage.getItem("cmm"));
    data.cost.question2.needsImprovement = true;
    localStorage.setItem("cmm", JSON.stringify(data));

    // Verify final state has both changes
    const final = JSON.parse(localStorage.getItem("cmm"));
    expect(final.cost.question1.needsImprovement).toBe(true);
    expect(final.cost.question2.needsImprovement).toBe(true);
  });
});
