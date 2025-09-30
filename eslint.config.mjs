import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";

export default [
  // Ignore patterns
  {
    ignores: [
      "**/node_modules/**",
      "**/_site/**",
      "**/.cache/**",
      "**/dist/**",
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
      // Warn about unused vars but don't break builds
      "no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],
      "no-undef": "error",
    },
  },

  // Test files with Jest globals
  {
    files: ["tests/**/*.js", "**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // Already includes describe, test, it, expect, etc.
      },
    },
  },

  // JSON files
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    ...json.configs.recommended,
  },

  // Markdown files - disable all rules for now to allow progressive fixing
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    rules: {
      // Disable all markdown rules - will enable progressively
      "markdown/fenced-code-language": "off",
      "markdown/no-missing-label-refs": "off",
      "markdown/no-invalid-label-refs": "off",
      "markdown/no-duplicate-headings": "off",
      "markdown/no-empty-links": "off",
    },
  },

  // CSS files - disable all rules for now to allow progressive fixing
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    rules: {
      // Disable all CSS rules - will enable progressively
      "css/no-invalid-properties": "off",
      "css/no-important": "off",
      "css/use-baseline": "off",
      "css/no-duplicate-properties": "off",
      "css/no-shorthand-property-overrides": "off",
    },
  },
];
