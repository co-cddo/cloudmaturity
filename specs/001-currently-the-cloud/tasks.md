# Tasks: Report Compilation Step - Filtering Improvement Areas

**Input**: Design documents from `/specs/001-currently-the-cloud/`
**Prerequisites**: plan.md, data-model.md, contracts/session-data.schema.json, quickstart.md
**Tech Stack**: JavaScript ES6+, Eleventy 3.0.0, Jest 29.7.0, GOV.UK Design System
**Target**: 30-35 tasks as estimated in plan.md

## Execution Flow (main)

```
1. Load plan.md from feature directory
   → ✅ Loaded: Eleventy static site, localStorage, no backend
   → Extract: tech stack (JS ES6+, Jest, GOV.UK components)
2. Load optional design documents:
   → ✅ data-model.md: Session data v2, Export format, View models
   → ✅ contracts/: session-data.schema.json → schema validation
   → ✅ quickstart.md: 8 validation scenarios → integration tests
3. Generate tasks by category:
   → Setup: Dependencies, test infrastructure
   → Tests: Contract test, 8 integration test scenarios
   → Core: Data model, compilation page, report filtering
   → Integration: Navigation, visual indicators, progress bar
   → Polish: Accessibility, performance, documentation
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001-T033)
6. Generate dependency graph ✅
7. Create parallel execution examples ✅
8. Validate task completeness:
   → ✅ Contract has schema validation test
   → ✅ All 3 entities (Session, Export, View Model) have implementation
   → ✅ All 8 quickstart scenarios have integration tests
9. Return: SUCCESS (33 tasks ready for execution)
```

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- File paths relative to repository root
- All tasks follow TDD: tests before implementation

## Path Conventions

**Single project structure** (Eleventy static site):

- Source: `src/assessment/`, `src/assets/`, `src/_includes/`
- Tests: `tests/unit/`, `tests/integration/`
- Build: Eleventy generates static HTML from templates

## Phase 3.1: Setup & Infrastructure

- [ ] T001 **Verify dependencies installed**: Run `npm install` to ensure Eleventy 3.0.0, @x-govuk/govuk-eleventy-plugin 6.7.2, Jest 29.7.0, jest-environment-jsdom installed
- [ ] T002 **[P] Add Ajv for schema validation**: Install `ajv` and `ajv-formats` for JSON Schema validation in tests (`npm install --save-dev ajv ajv-formats`)
- [ ] T003 **[P] Configure Jest for localStorage**: Verify `tests/setup.js` includes localStorage mock for jsdom environment

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**

### Contract Tests

- [ ] T004 **[P] Schema validation test**: Write `tests/unit/session-schema.test.js` to validate localStorage data against `specs/001-currently-the-cloud/contracts/session-data.schema.json` using Ajv. Test should fail (no v2 data exists yet).

- [ ] T005 **[P] Export format validation test**: Write `tests/unit/export-format.test.js` to validate exported file structure includes exportMetadata with all required fields. Test should fail (export format not implemented yet).

### Integration Tests (from quickstart.md scenarios)

- [ ] T006 **[P] Complete workflow integration test**: Write `tests/integration/compilation-flow.test.js` covering Scenario 1 (answer questions → compilation → mark improvements → filtered report). Test should fail (compilation page doesn't exist yet).

- [ ] T007 **[P] No improvements integration test**: Write `tests/integration/no-improvements.test.js` covering Scenario 2 (no checkboxes marked → report shows all with banner). Test should fail.

- [ ] T008 **[P] Partial completion integration test**: Write `tests/integration/partial-completion.test.js` covering Scenario 3 (2 questions answered → compilation shows only those 2). Test should fail.

- [ ] T009 **[P] Direct report access test**: Write `tests/integration/direct-report-access.test.js` covering Scenario 4 (navigate directly to report → shows banner + unfiltered). Test should fail.

- [ ] T010 **[P] Save/load report integration test**: Write `tests/integration/save-load-report.test.js` covering Scenario 5 (save report → clear storage → load → verify selections restored). Test should fail.

- [ ] T011 **[P] Accessibility keyboard test**: Write `tests/integration/keyboard-navigation.test.js` covering Scenario 6 (Tab, Space, Enter through compilation page). Test should fail.

- [ ] T012 **[P] Data migration test**: Write `tests/integration/data-migration.test.js` covering Scenario 8 (v1 localStorage → auto-migrate to v2 on page load). Test should fail.

## Phase 3.3: Core Data Model (ONLY after tests are failing)

- [ ] T013 **[P] Session data structure extension**: In `src/assets/cmm_assessment.js`, extend `saveToLocalStorage()` function to use v2 schema with metadata (version, createdAt, lastModified) and needsImprovement boolean for each answer. Convert scalar answer values to objects `{answer: n, needsImprovement: false}`.

- [ ] T014 **[P] Data migration function**: In `src/assets/cmm_assessment.js`, add `migrateSessionData()` function to detect v1 data (no metadata field) and migrate to v2 format. Call on page load before reading data.

- [ ] T015 **Export metadata generation**: In `src/assets/cmm_report.js`, update `saveReport()` function to wrap session data in new export format with exportMetadata section (version, timestamps, counts, category breakdown).

- [ ] T016 **Import with metadata handling**: In `src/assets/cmm_report.js`, update `loadReport()` function to extract assessmentData from new export format and restore to localStorage including needsImprovement flags.

## Phase 3.4: Compilation Page Components

- [ ] T017 **Compilation page template**: Create `src/assessment/compilation.md` with frontmatter (layout, title "Report Compilation", eleventyNavigation: parent Assessment, order 1.5) and basic content structure with placeholders for progress indicators and question list.

- [ ] T018 **Compilation page partial template**: Create `src/_includes/compilation.njk` Nunjucks template using GOV.UK macros (`govukCheckboxes`, `govukButton`, `govukNotificationBanner`) to render answered questions with "How to determine if good enough" guidance and "I need to do better" checkboxes.

- [ ] T019 **Compilation page logic**: Create `src/assets/compilation.js` to load session data, fetch assessment question metadata, render questions grouped by category, handle checkbox changes with auto-save to localStorage, update needsImprovement flags and lastModified timestamp.

- [ ] T020 **Progress indicators component**: In `src/assets/compilation.js`, add functions to calculate and display overall count ("24 of 35 questions answered"), per-category counts ("Cost: 5/7"), percentage ("40% marked for improvement"), and progress bar visualization.

- [ ] T021 **Improvement counter**: In `src/assets/compilation.js`, add real-time counter that updates "You've marked N questions for improvement" as checkboxes are toggled. Add visual distinction styling for checked checkboxes (highlight/color/icon).

## Phase 3.5: Report Filtering & Summary

- [ ] T022 **Report filtering logic**: In `src/assets/cmm_report.js`, add `buildFilteredReport(sessionData)` function to check if any needsImprovement=true, filter questions accordingly, and generate filter statistics (showing X of Y total, per-category counts).

- [ ] T023 **Summary table component**: In `src/assets/cmm_report.js`, add `renderSummaryTable(filterStats)` function to generate category breakdown table/chart showing answered vs marked for improvement per category. Render at top of report page.

- [ ] T024 **Report page update**: Modify `src/assessment/report.md` to call filtering logic, display summary table, show filter indicators, and render "Modify improvement selections" button at top of page.

- [ ] T025 **Banner notifications**: In `src/assets/cmm_report.js`, add logic to display `govukNotificationBanner` when: (1) no improvements marked → "No items selected - showing all results", (2) direct access without compilation visit → "Visit Report Compilation to filter".

## Phase 3.6: Navigation & Visual Indicators

- [ ] T026 **Update Eleventy navigation**: In `.eleventy.js` or navigation config, ensure "Report Compilation" appears in navigation between Assessment and Report with correct ordering (order: 1.5).

- [ ] T027 **Assessment page visual indicators**: In `src/assets/cmm_assessment.js`, add function to check needsImprovement status for current question and apply visual highlight/badge class to question container if marked.

- [ ] T028 **Navigation improvement indicators**: In navigation template (likely `src/_includes/navigation.njk` or similar), add logic to display small indicator/badge next to category names that have any questions marked needsImprovement=true.

- [ ] T029 **Continue to Report button**: In `src/_includes/compilation.njk`, add `govukButton` labeled "Continue to Report" or "View Report" positioned at bottom of page that navigates to `/assessment/report/`.

- [ ] T030 **Modify selections button**: In report page template, add `govukButton` labeled "Modify improvement selections" at top of page that navigates back to `/assessment/compilation/`.

## Phase 3.7: Polish & Validation

- [ ] T031 **[P] Accessibility validation**: Run `npm run test` for accessibility tests (T011 keyboard navigation). Verify all checkboxes have proper ARIA labels, focus visible, Tab order logical, Space/Enter work. Use jest-axe for automated WCAG 2.1 AA checks.

- [ ] T032 **[P] Performance validation**: Measure page load times for compilation page with 35 questions. Target <2s. Measure localStorage read/write operations. Target <100ms. Log results to confirm within performance budget.

- [ ] T033 **Manual quickstart validation**: Execute all 8 scenarios from `specs/001-currently-the-cloud/quickstart.md` manually in browser. Verify each acceptance criterion passes. Document any issues found.

## Dependencies

**Phase Order**:

1. Setup (T001-T003) before everything
2. Tests (T004-T012) before implementation (T013-T030)
3. Data model (T013-T016) before UI components (T017-T021)
4. Compilation page (T017-T021) before Report updates (T022-T025)
5. Core features (T013-T025) before navigation/indicators (T026-T030)
6. Everything (T001-T030) before polish (T031-T033)

**Task-Level Dependencies**:

- T013, T014 (data model) block T017-T021 (compilation page needs data structure)
- T013-T016 (data model) block T022-T025 (report filtering needs needsImprovement field)
- T017, T018 (templates) block T019 (logic needs DOM elements)
- T019-T021 (compilation page) block T026-T030 (navigation integration)
- T001-T030 (implementation) block T031-T033 (validation needs working feature)

**Parallel Opportunities**:

- T002, T003 (different package installs, different config files)
- T004, T005 (different test files)
- T006-T012 (all different test files, no shared state)
- T013, T014 (same file `cmm_assessment.js` - T014 depends on T013 structure)
- T015, T016 (same file `cmm_report.js` - sequential)
- T017, T018 (different files - compilation.md vs compilation.njk)
- T031, T032 (different validation types, different tooling)

## Parallel Execution Examples

### Setup Phase (T002-T003 in parallel)

```bash
# Install dependencies concurrently
npm install --save-dev ajv ajv-formats &
# (T003 is verification only, no parallel action needed)
```

### Contract Tests (T004-T005 in parallel)

```javascript
// Run Jest with multiple test files
npm test tests/unit/session-schema.test.js tests/unit/export-format.test.js
```

### Integration Tests (T006-T012 in parallel)

```javascript
// All integration tests can run together
npm test tests/integration/
// Or explicitly:
npm test tests/integration/compilation-flow.test.js \
         tests/integration/no-improvements.test.js \
         tests/integration/partial-completion.test.js \
         tests/integration/direct-report-access.test.js \
         tests/integration/save-load-report.test.js \
         tests/integration/keyboard-navigation.test.js \
         tests/integration/data-migration.test.js
```

### Templates (T017-T018 in parallel)

```bash
# Edit different files concurrently
code src/assessment/compilation.md &
code src/_includes/compilation.njk &
```

### Validation (T031-T032 in parallel)

```bash
# Run accessibility and performance tests together
npm test tests/integration/keyboard-navigation.test.js &
npm run test:performance &
wait
```

## Notes

- **[P] marker**: Tasks marked [P] work on different files with no dependencies. These can be executed in parallel to speed up development.
- **Test-driven**: All tests (T004-T012) must be written and failing before implementation (T013-T030) begins. This ensures correctness and prevents regression.
- **localStorage mock**: Tests use jsdom environment with localStorage mock. Real browser testing in T033 (manual validation).
- **No backend**: Everything is client-side. No API calls, no server-side processing. Data persists in browser localStorage only.
- **Breaking change acceptable**: Per plan.md FR-015, no backward compatibility required with pre-v2 export files (tool is in alpha).
- **Commit strategy**: Commit after completing each task or logical group of parallel tasks. Meaningful commit messages following conventional commits format.

## Task Generation Rules

_Applied during main() execution_

1. **From Contracts**:

   - session-data.schema.json → T004 (schema validation test)

2. **From Data Model**:

   - Session Data entity → T013, T014 (extend structure, migration)
   - Export File Format entity → T015, T016 (metadata generation, import handling)
   - Compilation View Model entity → T019, T020 (page logic, progress indicators)
   - Report Filter Model entity → T022, T023 (filtering logic, summary table)

3. **From User Stories (quickstart.md)**:

   - Scenario 1 (Complete workflow) → T006
   - Scenario 2 (No improvements) → T007
   - Scenario 3 (Partial completion) → T008
   - Scenario 4 (Direct access) → T009
   - Scenario 5 (Save/load) → T010
   - Scenario 6 (Keyboard) → T011
   - Scenario 8 (Migration) → T012
   - Manual validation → T033

4. **From Plan Enhancements**:

   - Progress visualization (%, progress bar) → T020
   - Summary table → T023
   - Visual indicators → T027
   - Navigation indicators → T028

5. **Ordering**:
   - Setup (T001-T003) → Tests (T004-T012) → Data (T013-T016) → UI (T017-T021) → Integration (T022-T030) → Polish (T031-T033)

## Validation Checklist

_GATE: Checked by main() before returning_

- [x] All contracts have corresponding tests (T004 for session-data.schema.json)
- [x] All entities have model tasks (T013-T016 cover Session, Export, View, Filter models)
- [x] All tests come before implementation (T004-T012 before T013-T030)
- [x] Parallel tasks truly independent (verified file paths, no shared state)
- [x] Each task specifies exact file path (all tasks include `src/` or `tests/` paths)
- [x] No task modifies same file as another [P] task (T013-T014 sequential, T015-T016 sequential)
- [x] Accessibility validation included (T011 keyboard navigation, T031 WCAG validation)
- [x] Security validation included (T004 schema validation prevents malformed data)
- [x] All 8 quickstart scenarios covered (T006-T012, T033)
- [x] Performance validation included (T032 measures page load and localStorage operations)

---

**Total Tasks**: 33 (within 30-35 estimate from plan.md)
**Parallel Tasks**: 15 marked [P] (45% parallelizable)
**Critical Path**: Setup → Tests → Data Model → Compilation Page → Report Updates → Navigation → Polish
**Estimated Completion**: 33 tasks × TDD cycle = ~3-5 days for experienced developer

---

_Generated from plan.md, data-model.md, contracts/session-data.schema.json, quickstart.md following TDD constitutional principles._
