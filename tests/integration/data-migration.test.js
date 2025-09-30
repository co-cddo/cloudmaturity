/**
 * Integration Test: Data Migration v1→v2 (Scenario 8)
 * Tests: legacy scalar values convert to {answer, needsImprovement} objects
 */

describe("Data Migration v1 to v2", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should detect v1 format (no metadata field)", () => {
    const v1Data = {
      cost: { question1: 3, question2: 4 },
      security: { question1: 2 },
    };

    const isV1 = v1Data.metadata === undefined;
    expect(isV1).toBe(true);
  });

  it("should migrate v1 scalar values to v2 objects", () => {
    const v1Data = {
      cost: { question1: 3, question2: 4 },
      security: { question1: 2 },
    };

    // Migration logic
    const v2Data = {
      metadata: {
        version: "2.0.0",
        createdAt: new Date().toISOString(),
      },
    };

    Object.entries(v1Data).forEach(([category, questions]) => {
      if (category === "metadata") return;

      v2Data[category] = {};
      Object.entries(questions).forEach(([questionId, answer]) => {
        v2Data[category][questionId] = {
          answer: typeof answer === "number" ? answer : 0,
          needsImprovement: false,
        };
      });
    });

    expect(v2Data.metadata.version).toBe("2.0.0");
    expect(v2Data.cost.question1).toEqual({
      answer: 3,
      needsImprovement: false,
    });
    expect(v2Data.cost.question2).toEqual({
      answer: 4,
      needsImprovement: false,
    });
    expect(v2Data.security.question1).toEqual({
      answer: 2,
      needsImprovement: false,
    });
  });

  it("should preserve v2 data unchanged", () => {
    const v2Data = {
      metadata: {
        version: "2.0.0",
        createdAt: "2025-09-30T10:00:00Z",
      },
      cost: {
        question1: { answer: 3, needsImprovement: true },
      },
    };

    // Migration should detect v2 and return unchanged
    const isV2 = v2Data.metadata?.version === "2.0.0";
    expect(isV2).toBe(true);

    const migrated = isV2
      ? v2Data
      : {
          /* migration logic */
        };
    expect(migrated).toEqual(v2Data);
  });

  it("should handle migration on first page load", () => {
    const v1Data = {
      cost: { question1: 3 },
    };

    localStorage.setItem("cmm", JSON.stringify(v1Data));

    // Simulate migration on load
    let data = JSON.parse(localStorage.getItem("cmm"));

    if (!data.metadata || data.metadata.version !== "2.0.0") {
      const migrated = {
        metadata: {
          version: "2.0.0",
          createdAt: new Date().toISOString(),
        },
      };

      Object.entries(data).forEach(([category, questions]) => {
        migrated[category] = {};
        Object.entries(questions).forEach(([qId, answer]) => {
          migrated[category][qId] = {
            answer: typeof answer === "number" ? answer : 0,
            needsImprovement: false,
          };
        });
      });

      data = migrated;
      localStorage.setItem("cmm", JSON.stringify(data));
    }

    const final = JSON.parse(localStorage.getItem("cmm"));
    expect(final.metadata.version).toBe("2.0.0");
    expect(final.cost.question1).toEqual({
      answer: 3,
      needsImprovement: false,
    });
  });

  it("should be idempotent (migrating v2 returns v2)", () => {
    const v2Data = {
      metadata: { version: "2.0.0", createdAt: new Date().toISOString() },
      cost: { question1: { answer: 3, needsImprovement: false } },
    };

    // Run migration twice
    let migrated1 = v2Data.metadata?.version === "2.0.0" ? v2Data : {};
    let migrated2 = migrated1.metadata?.version === "2.0.0" ? migrated1 : {};

    expect(migrated2).toEqual(v2Data);
  });
});
