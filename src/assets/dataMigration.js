// Central data migration service for session data schema evolution
class DataMigrationService {
  static CURRENT_VERSION = "2.0.0";

  /**
   * Migrate session data to current version
   * @param {Object|null} data - Raw data from localStorage
   * @returns {Object} Migrated data at current version
   */
  static migrate(data) {
    if (!data) return this.createNew();

    const version = data.metadata?.version || "1.0.0";

    if (version === this.CURRENT_VERSION) {
      return this.validateAndClean(data);
    }

    // Apply migrations sequentially
    let migrated = data;
    if (version === "1.0.0") {
      migrated = this.migrateV1ToV2(migrated);
    }
    // Future migrations can be added here
    // if (version === "2.0.0") { migrated = this.migrateV2ToV3(migrated); }

    return this.validateAndClean(migrated);
  }

  /**
   * Create new empty session data structure
   * @returns {Object} New session data object
   */
  static createNew() {
    return {
      metadata: {
        version: this.CURRENT_VERSION,
        createdAt: new Date().toISOString(),
      },
      cost: {},
      data: {},
      governance: {},
      operations: {},
      people: {},
      security: {},
      tech: {},
    };
  }

  /**
   * Migrate from v1 (scalar values) to v2 (objects with needsImprovement)
   * @param {Object} v1Data - Version 1 data structure
   * @returns {Object} Version 2 data structure
   */
  static migrateV1ToV2(v1Data) {
    const v2Data = {
      metadata: {
        version: "2.0.0",
        createdAt: new Date().toISOString(),
      },
    };

    Object.entries(v1Data).forEach(([category, questions]) => {
      if (category === "metadata") return;

      v2Data[category] = {};
      if (questions && typeof questions === "object") {
        Object.entries(questions).forEach(([questionId, answer]) => {
          v2Data[category][questionId] = {
            answer: typeof answer === "number" ? answer : parseInt(answer) || 0,
            needsImprovement: false,
          };
        });
      }
    });

    return v2Data;
  }

  /**
   * Validate schema structure and clean invalid data
   * @param {Object} data - Data to validate
   * @returns {Object} Cleaned valid data
   */
  static validateAndClean(data) {
    if (!this.validateSchema(data)) {
      console.warn("Invalid schema detected, creating new data structure");
      return this.createNew();
    }
    return data;
  }

  /**
   * Validate session data schema
   * @param {Object} data - Data to validate
   * @returns {boolean} True if valid
   */
  static validateSchema(data) {
    if (!data || typeof data !== "object") return false;
    if (!data.metadata || typeof data.metadata !== "object") return false;
    if (
      !data.metadata.version ||
      typeof data.metadata.version !== "string" ||
      !data.metadata.version.match(/^\d+\.\d+\.\d+$/)
    )
      return false;
    if (
      !data.metadata.createdAt ||
      typeof data.metadata.createdAt !== "string"
    )
      return false;

    // Validate category structure
    const validCategories = [
      "cost",
      "data",
      "governance",
      "operations",
      "people",
      "security",
      "tech",
    ];

    for (const category of validCategories) {
      if (data[category]) {
        if (typeof data[category] !== "object") return false;
        // Validate each question in category
        for (const questionHash in data[category]) {
          const question = data[category][questionHash];
          if (typeof question !== "object") return false;
          if (
            typeof question.answer !== "number" ||
            question.answer < 0 ||
            question.answer > 5
          )
            return false;
          if (typeof question.needsImprovement !== "boolean") return false;
        }
      }
    }

    return true;
  }

  /**
   * Load session data from localStorage with migration
   * @returns {Object|null} Migrated session data or null
   */
  static loadFromStorage() {
    try {
      const raw = localStorage.getItem("cmm");
      if (!raw) return null;

      const data = JSON.parse(raw);
      const migrated = this.migrate(data);

      // Save back if migration occurred
      if (data.metadata?.version !== this.CURRENT_VERSION) {
        this.saveToStorage(migrated);
      }

      return migrated;
    } catch (error) {
      console.error("Error loading session data:", error);
      return null;
    }
  }

  /**
   * Save session data to localStorage
   * @param {Object} data - Session data to save
   * @returns {boolean} True if saved successfully
   */
  static saveToStorage(data) {
    try {
      localStorage.setItem("cmm", JSON.stringify(data));
      return true;
    } catch (error) {
      console.error("Error saving session data:", error);
      return false;
    }
  }
}

// Export for use in other modules
if (typeof module === "object") {
  module.exports = { DataMigrationService };
}