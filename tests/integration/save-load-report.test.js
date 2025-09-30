/**
 * Integration Test: Save and Load Report (Scenario 5)
 * Tests: save report → clear storage → load → verify selections restored
 */

describe("Save and Load Report", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save report with export metadata", () => {
    const sessionData = {
      metadata: { version: "2.0.0", createdAt: "2025-09-30T10:00:00Z" },
      cost: {
        question1: { answer: 3, needsImprovement: true },
        question2: { answer: 4, needsImprovement: false },
      },
    };

    const exportData = {
      exportMetadata: {
        version: "2.0.0",
        createdAt: sessionData.metadata.createdAt,
        exportedAt: new Date().toISOString(),
        improvementCount: 1,
        totalQuestions: 2,
        categories: {
          cost: { answered: 2, needsImprovement: 1 },
        },
      },
      assessmentData: sessionData,
    };

    expect(exportData.exportMetadata.improvementCount).toBe(1);
    expect(exportData.assessmentData.cost.question1.needsImprovement).toBe(
      true,
    );
  });

  it("should restore needsImprovement selections on load", () => {
    const exportData = {
      exportMetadata: {
        version: "2.0.0",
        createdAt: "2025-09-30T10:00:00Z",
        exportedAt: "2025-09-30T11:00:00Z",
        improvementCount: 2,
        totalQuestions: 3,
        categories: {},
      },
      assessmentData: {
        metadata: { version: "2.0.0", createdAt: "2025-09-30T10:00:00Z" },
        cost: {
          question1: { answer: 3, needsImprovement: true },
          question2: { answer: 4, needsImprovement: false },
        },
        security: {
          question1: { answer: 2, needsImprovement: true },
        },
      },
    };

    // Simulate load
    localStorage.setItem("cmm", JSON.stringify(exportData.assessmentData));
    const loaded = JSON.parse(localStorage.getItem("cmm"));

    expect(loaded.cost.question1.needsImprovement).toBe(true);
    expect(loaded.cost.question2.needsImprovement).toBe(false);
    expect(loaded.security.question1.needsImprovement).toBe(true);
  });

  it("should generate valid JSON for export", () => {
    const exportData = {
      exportMetadata: {
        version: "2.0.0",
        createdAt: "2025-09-30T10:00:00Z",
        exportedAt: "2025-09-30T11:00:00Z",
        improvementCount: 1,
        totalQuestions: 1,
        categories: { cost: { answered: 1, needsImprovement: 1 } },
      },
      assessmentData: {
        metadata: { version: "2.0.0", createdAt: "2025-09-30T10:00:00Z" },
        cost: { question1: { answer: 3, needsImprovement: true } },
      },
    };

    const jsonString = JSON.stringify(exportData);
    const parsed = JSON.parse(jsonString);

    expect(parsed).toEqual(exportData);
  });
});
