const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const fs = require("fs");
const path = require("path");

describe("Session Data Schema Validation", () => {
  let ajv;
  let schema;

  beforeAll(() => {
    // Load JSON Schema
    const schemaPath = path.join(
      __dirname,
      "../../specs/001-currently-the-cloud/contracts/session-data.schema.json",
    );
    schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

    // Initialize Ajv with formats
    ajv = new Ajv({ allErrors: true, strict: false });
    addFormats(ajv);
  });

  describe("Valid v2 session data", () => {
    it("should validate minimal valid session data", () => {
      const validData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(validData);

      expect(valid).toBe(true);
      if (!valid) console.log(validate.errors);
    });

    it("should validate session data with one answered question", () => {
      const validData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
        cost: {
          question1: {
            answer: 3,
            needsImprovement: false,
          },
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(validData);

      expect(valid).toBe(true);
      if (!valid) console.log(validate.errors);
    });

    it("should validate session data with multiple categories", () => {
      const validData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
        cost: {
          question1: { answer: 3, needsImprovement: true },
          question2: { answer: 4, needsImprovement: false },
        },
        security: {
          question1: { answer: 2, needsImprovement: true },
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(validData);

      expect(valid).toBe(true);
      if (!valid) console.log(validate.errors);
    });

    it("should validate with intro section", () => {
      const validData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
        intro: {
          email: "test@example.com",
          organisation: "Test Org",
        },
        cost: {
          question1: { answer: 3, needsImprovement: false },
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(validData);

      expect(valid).toBe(true);
      if (!valid) console.log(validate.errors);
    });
  });

  describe("Invalid session data", () => {
    it("should reject data without metadata", () => {
      const invalidData = {
        cost: {
          question1: { answer: 3, needsImprovement: false },
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(invalidData);

      expect(valid).toBe(false);
      expect(validate.errors).toBeDefined();
    });

    it("should reject metadata with wrong version", () => {
      const invalidData = {
        metadata: {
          version: "1.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(invalidData);

      expect(valid).toBe(false);
    });

    it("should reject answer values outside 0-5 range", () => {
      const invalidData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
        cost: {
          question1: { answer: 6, needsImprovement: false },
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(invalidData);

      expect(valid).toBe(false);
    });

    it("should reject needsImprovement as non-boolean", () => {
      const invalidData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
        cost: {
          question1: { answer: 3, needsImprovement: "true" },
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(invalidData);

      expect(valid).toBe(false);
    });

    it("should reject invalid timestamp format", () => {
      const invalidData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30",
        },
      };

      const validate = ajv.compile(schema);
      const valid = validate(invalidData);

      expect(valid).toBe(false);
    });
  });

  describe("localStorage integration", () => {
    it("should validate data retrieved from localStorage", () => {
      const sessionData = {
        metadata: {
          version: "2.0.0",
          createdAt: "2025-09-30T10:00:00Z",
        },
        cost: {
          question1: { answer: 3, needsImprovement: true },
        },
      };

      localStorage.setItem("cmm", JSON.stringify(sessionData));
      const retrieved = JSON.parse(localStorage.getItem("cmm"));

      const validate = ajv.compile(schema);
      const valid = validate(retrieved);

      expect(valid).toBe(true);
    });
  });
});
