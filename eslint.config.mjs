import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";

export default [
  // Ignore patterns
  {
    ignores: [
      "**/node_modules/**",
      "**/_site/**",
      "**/.cache/**",
      "**/dist/**",
      "**/*.css",
      "**/*.md",
      "**/.yarn/**",
      "**/.devcontainer/**",
    ],
  },

  // ES Module files (eslint.config.mjs, etc)
  {
    files: ["**/*.mjs"],
    plugins: { js },
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "module",
    },
  },

  // JavaScript files
  {
    files: ["**/*.{js,cjs}"],
    plugins: { js },
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "commonjs",
    },
    rules: {
      // Disable no-unused-vars for now
      "no-unused-vars": "off",
    },
  },

  // Test files with Jest globals
  {
    files: ["tests/**/*.js", "**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly",
      },
    },
  },

  // JSON files
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    ...json.configs.recommended,
    rules: {
      // Ignore JSON parsing errors for now
      "json/no-duplicate-keys": "off",
    },
  },
];
