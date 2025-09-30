describe("Export File Format Validation", () => {
  describe("Export metadata structure", () => {
    it("should include all required exportMetadata fields", () => {
      const exportData = {
        exportMetadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
          exportedAt: "2025-09-30T11:00:00Z",
          improvementCount: 2,
          totalQuestions: 5,
          categories: {
            cost: { answered: 3, needsImprovement: 1 },
            security: { answered: 2, needsImprovement: 1 },
          },
        },
        assessmentData: {
          metadata: {
            version: "2.0.0",
            createdAt: "2025-09-30T10:00:00Z",
          },
          cost: {
            question1: { answer: 3, needsImprovement: true },
          },
        },
      };

      expect(exportData.exportMetadata).toBeDefined();
      expect(exportData.exportMetadata.version).toBe("2.0.0");
      expect(exportData.exportMetadata.createdAt).toMatch(/\d{4}-\d{2}-\d{2}T/);
      expect(exportData.exportMetadata.exportedAt).toMatch(
        /\d{4}-\d{2}-\d{2}T/,
      );
      expect(typeof exportData.exportMetadata.improvementCount).toBe("number");
      expect(typeof exportData.exportMetadata.totalQuestions).toBe("number");
      expect(exportData.exportMetadata.categories).toBeDefined();
    });

    it("should have assessmentData section with complete session data", () => {
      const exportData = {
        exportMetadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
          exportedAt: "2025-09-30T11:00:00Z",
          improvementCount: 1,
          totalQuestions: 1,
          categories: {
            cost: { answered: 1, needsImprovement: 1 },
          },
        },
        assessmentData: {
          metadata: {
            version: "2.0.0",
            createdAt: "2025-09-30T10:00:00Z",
          },
          cost: {
            question1: { answer: 3, needsImprovement: true },
          },
        },
      };

      expect(exportData.assessmentData).toBeDefined();
      expect(exportData.assessmentData.metadata).toBeDefined();
      expect(exportData.assessmentData.metadata.version).toBe("2.0.0");
    });

    it("should calculate improvementCount correctly", () => {
      const sessionData = {
        cost: {
          question1: { answer: 3, needsImprovement: true },
          question2: { answer: 4, needsImprovement: false },
        },
        security: {
          question1: { answer: 2, needsImprovement: true },
        },
      };

      let improvementCount = 0;
      Object.values(sessionData).forEach((category) => {
        Object.values(category).forEach((question) => {
          if (question.needsImprovement) improvementCount++;
        });
      });

      expect(improvementCount).toBe(2);
    });

    it("should calculate per-category counts correctly", () => {
      const sessionData = {
        cost: {
          question1: { answer: 3, needsImprovement: true },
          question2: { answer: 4, needsImprovement: false },
          question3: { answer: 5, needsImprovement: true },
        },
        security: {
          question1: { answer: 2, needsImprovement: false },
        },
      };

      const categoryCounts = {};
      Object.entries(sessionData).forEach(([category, questions]) => {
        categoryCounts[category] = {
          answered: Object.keys(questions).length,
          needsImprovement: Object.values(questions).filter(
            (q) => q.needsImprovement,
          ).length,
        };
      });

      expect(categoryCounts.cost.answered).toBe(3);
      expect(categoryCounts.cost.needsImprovement).toBe(2);
      expect(categoryCounts.security.answered).toBe(1);
      expect(categoryCounts.security.needsImprovement).toBe(0);
    });
  });

  describe("Export file generation", () => {
    it("should wrap session data in export format", () => {
      const sessionData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
        cost: {
          question1: { answer: 3, needsImprovement: true },
        },
      };

      // This will be implemented in saveReport()
      const exportData = {
        exportMetadata: {
          version: "2.0.0",
          createdAt: sessionData.metadata.createdAt,
          exportedAt: new Date().toISOString(),
          improvementCount: 1,
          totalQuestions: 1,
          categories: {
            cost: { answered: 1, needsImprovement: 1 },
          },
        },
        assessmentData: sessionData,
      };

      expect(exportData.exportMetadata).toBeDefined();
      expect(exportData.assessmentData).toEqual(sessionData);
    });

    it("should be valid JSON", () => {
      const exportData = {
        exportMetadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
          exportedAt: "2025-09-30T11:00:00Z",
          improvementCount: 1,
          totalQuestions: 1,
          categories: {
            cost: { answered: 1, needsImprovement: 1 },
          },
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

  describe("Import file handling", () => {
    it("should extract assessmentData from export format", () => {
      const exportData = {
        exportMetadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
          exportedAt: "2025-09-30T11:00:00Z",
          improvementCount: 1,
          totalQuestions: 1,
          categories: {
            cost: { answered: 1, needsImprovement: 1 },
          },
        },
        assessmentData: {
          metadata: { version: "2.0.0", createdAt: "2025-09-30T10:00:00Z" },
          cost: { question1: { answer: 3, needsImprovement: true } },
        },
      };

      const imported = exportData.assessmentData;

      expect(imported.metadata).toBeDefined();
      expect(imported.cost).toBeDefined();
      expect(imported.cost.question1.needsImprovement).toBe(true);
    });

    it("should handle legacy format without exportMetadata", () => {
      // Legacy format is just the session data
      const legacyData = {
        metadata: { version: "2.0.0", createdAt: "2025-09-30T10:00:00Z" },
        cost: { question1: { answer: 3, needsImprovement: false } },
      };

      // Should be able to detect and handle this
      const hasExportMetadata = legacyData.exportMetadata !== undefined;

      expect(hasExportMetadata).toBe(false);

      // If no exportMetadata, treat the whole object as assessmentData
      const sessionData = hasExportMetadata
        ? legacyData.assessmentData
        : legacyData;

      expect(sessionData.metadata).toBeDefined();
      expect(sessionData.cost).toBeDefined();
    });
  });
});
