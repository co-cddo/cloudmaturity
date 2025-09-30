# Implementation Plan: Report Compilation Step - Filtering Improvement Areas

**Branch**: `001-currently-the-cloud` | **Date**: 2025-09-30 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-currently-the-cloud/spec.md`

## Execution Flow (/plan command scope)

```
1. Load feature spec from Input path
   → ✅ Loaded successfully
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → ✅ No NEEDS CLARIFICATION found - spec fully resolved
   → Detect Project Type: Static site (Eleventy) with client-side JS
   → Set Structure Decision: Single project with src/ layout
3. Fill the Constitution Check section
   → ✅ Complete
4. Evaluate Constitution Check section
   → ✅ PASS - All principles satisfied
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → ✅ Complete
6. Execute Phase 1 → data-model.md, quickstart.md, CLAUDE.md
   → ✅ Complete
7. Re-evaluate Constitution Check section
   → ✅ PASS - Design maintains constitutional compliance
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach
   → ✅ Complete
9. STOP - Ready for /tasks command
   → ✅ Planning complete
```

**IMPORTANT**: The /plan command STOPS at step 9. Phases 2-4 are executed by other commands:

- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary

This feature introduces a "Report Compilation" step between completing assessment questions and viewing the final report. Users review "How to determine if this good enough" guidance for each answered question and mark areas needing improvement with checkboxes. The Report page then filters to show only selected improvement areas. The session data structure is extended to persist these selections, and the save/load functionality is updated to include this metadata.

**Technical Approach**: Extend existing client-side JavaScript modules (cmm_assessment.js, cmm_report.js) to manage improvement selections in local storage. Create new Report Compilation page using Eleventy/Nunjucks templates with GOV.UK Design System components. Implement filtering logic in report generation and update file export format with structured metadata.

## Technical Context

**Language/Version**: JavaScript (ES6+), Node.js 20+
**Primary Dependencies**: Eleventy 3.0.0, @x-govuk/govuk-eleventy-plugin 6.7.2, Jest 29.7.0
**Storage**: Browser localStorage (existing pattern)
**Testing**: Jest with jsdom environment
**Target Platform**: Static site deployed via GitHub Pages, client-side execution in modern browsers
**Project Type**: Static site generator (single project)
**Performance Goals**: Page load <2s, localStorage operations <100ms
**Constraints**: No backend/server-side processing, no external data transmission, WCAG 2.1 AA compliance
**Scale/Scope**: 7 categories, ~35 assessment questions, supports partial completion

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

**Principle Compliance**:

- [x] **User-Centered Design**: Feature provides targeted guidance by filtering to user-selected improvement areas, reducing report overwhelm
- [x] **Accessibility First**: Plan includes WCAG 2.1 AA validation (keyboard navigation, ARIA labels, screen reader testing)
- [x] **Test-Driven Development**: Test tasks scheduled before implementation (contract tests, integration tests, unit tests)
- [x] **Simplicity & Maintainability**: Extends existing patterns (localStorage, Eleventy templates, GOV.UK components), no new dependencies
- [x] **Security & Open Standards**: Client-side only (no data transmission), structured JSON export format, input validation for localStorage data

**Violations & Justifications**:
None - all constitutional principles are satisfied by this design.

## Project Structure

### Documentation (this feature)

```
specs/001-currently-the-cloud/
├── spec.md              # Feature specification
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
└── contracts/           # Phase 1 output (/plan command)
    └── session-data.schema.json
```

### Source Code (repository root)

```
src/
├── assessment/
│   ├── compilation.md       # NEW: Report Compilation page template
│   └── report.md            # MODIFIED: Add filtering logic
├── assets/
│   ├── cmm_assessment.js    # MODIFIED: Add improvement tracking
│   ├── cmm_report.js        # MODIFIED: Add filtering and metadata
│   └── compilation.js       # NEW: Report Compilation page logic
└── _includes/
    └── compilation.njk      # NEW: Compilation page partial template

tests/
├── unit/
│   ├── cmm_assessment.test.js      # MODIFIED: Test improvement tracking
│   ├── cmm_report.test.js          # MODIFIED: Test filtering logic
│   └── compilation.test.js         # NEW: Test compilation page logic
└── integration/
    ├── compilation-flow.test.js    # NEW: End-to-end compilation workflow
    └── report-filtering.test.js    # NEW: Report filtering scenarios
```

**Structure Decision**: Single project structure maintained. This is a static Eleventy site with client-side JavaScript. New files follow existing conventions: Markdown pages in `src/assessment/`, JavaScript modules in `src/assets/`, Nunjucks templates in `src/_includes/`.

## Phase 0: Outline & Research

### Research Questions

1. **Eleventy navigation**: How to add new step to navigation between assessment and report?
2. **GOV.UK components**: Which components for checkboxes, progress indicators, banners?
3. **localStorage schema**: How to extend existing session structure without breaking compatibility?
4. **File export format**: What format for metadata (JSON structure)?
5. **Assessment question parsing**: How to extract "How to determine if this good enough" text from existing markdown files?

### Research Findings

See [research.md](./research.md) for detailed findings on:

- Eleventy navigation configuration and page ordering
- GOV.UK Design System component patterns (checkboxes, notification banners, buttons)
- localStorage data structure extension strategy
- Structured JSON export format with metadata
- Markdown frontmatter and content parsing for assessment questions

**Output**: ✅ research.md complete with all technical decisions documented

## Phase 1: Design & Contracts

_Prerequisites: research.md complete_

### Data Model

**Session Data Extension** (see [data-model.md](./data-model.md)):

```
{
  "cmm": {
    "metadata": {
      "version": "2.0.0",
      "createdAt": "ISO-8601 timestamp",
      "lastModified": "ISO-8601 timestamp"  // NEW: Track modification timestamp
    },
    "intro": { /* existing */ },
    "cost": {
      "question1": {
        "answer": 3,
        "needsImprovement": false  // NEW
      }
    },
    // ... other categories
  }
}
```

### Contract Tests

Contract tests verify localStorage schema and file export format:

- `contracts/session-data.schema.json` - JSON Schema for session data structure
- `tests/unit/session-schema.test.js` - Validates localStorage data against schema
- `tests/unit/export-format.test.js` - Validates exported file format

### Integration Test Scenarios

From user stories → test scenarios (see [quickstart.md](./quickstart.md)):

1. Navigate from assessment to compilation → verify page loads with questions
2. Check improvement checkboxes → verify saved to localStorage
3. Continue to report → verify filtered display
4. Modify selections → verify navigation and update
5. Save report → verify metadata included
6. Load report → verify selections restored

### Agent Context Update

**Output**: ✅ Updated CLAUDE.md with:

- Eleventy 3.0 site structure
- GOV.UK Design System components
- localStorage patterns for assessment data
- Recent change: Report Compilation filtering feature

**Output Files**:

- ✅ data-model.md
- ✅ contracts/session-data.schema.json
- ✅ Failing contract tests (session-schema.test.js, export-format.test.js)
- ✅ quickstart.md
- ✅ CLAUDE.md updated

## Plan Enhancements (Post-Planning Session)

The following design enhancements were clarified to strengthen implementation success:

### UI/UX Decisions

**Progress Visualization**:

- ✅ Add percentage display (e.g., "40% marked for improvement")
- ✅ Add visual progress bar that fills as checkboxes are checked
- ❌ No report preview on compilation page (use Continue → Modify workflow)
- ❌ No category filtering/collapsing (single scrollable list sufficient)

**User Autonomy**:

- ❌ No auto-suggestions or smart defaults (user-driven decisions)
- ❌ No confirmation dialogs (frictionless navigation)
- ❌ No data expiration (user controls their data)

**Enhanced Context**:

- ✅ Report summary table/chart showing category breakdown at top
- ✅ Visual indicators on assessment pages for improvement-marked questions
- ✅ Navigation indicators showing which categories have improvements marked
- ✅ Track last modification timestamp in metadata (not displayed to users)

**Privacy & Simplicity**:

- ❌ No analytics or telemetry (fully client-side and private)

### Updated Task Categories

These enhancements add the following implementation requirements:

1. **Contract Tests** (Phase 0 - Parallel)

   - Write session data schema validation test
   - Write export format validation test

2. **Data Model** (Phase 1 - Parallel)

   - Extend session data structure in cmm_assessment.js
   - Add lastModified timestamp to metadata
   - Implement metadata generation in cmm_report.js

3. **UI Components** (Phase 2 - Sequential)

   - Create compilation.md page template
   - Create compilation.njk partial template
   - Implement compilation.js page logic with progress bar/percentage
   - Add summary table component for report page
   - Add visual indicators for assessment question pages

4. **Integration** (Phase 3 - Sequential)

   - Update report.md with filtering logic and summary table
   - Update cmm_report.js with filter implementation
   - Update navigation configuration with improvement indicators
   - Add visual states to assessment pages

5. **Testing** (Phase 4 - Parallel)
   - Write integration tests for compilation workflow
   - Write integration tests for report filtering
   - Write tests for progress visualization
   - Write tests for navigation indicators
   - Write accessibility tests

## Phase 2: Task Planning Approach

_This section describes what the /tasks command will do - DO NOT execute during /plan_

**Task Generation Strategy**:

- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (data model, contracts, quickstart)
- Include enhancement requirements (progress bar, summary table, indicators)
- Each contract → contract test task [P]
- Each data model entity → implementation task [P]
- Each user story → integration test task
- Implementation tasks ordered by TDD: tests before code

**Ordering Strategy**:

- TDD order: Contract tests → Data model tests → Implementation
- Dependency order: Data model → UI components → Integration
- Mark [P] for parallel execution (independent modules)
- Accessibility validation as final gate

**Estimated Output**: 30-35 numbered, ordered tasks in tasks.md (increased from 25-30 due to enhancements)

**Enhancement Impact on Task Count**:

- +2 tasks for progress visualization (percentage, progress bar)
- +3 tasks for summary table component (design, implement, test)
- +4 tasks for navigation/visual indicators (assessment pages, navigation, styling, tests)
- +1 task for lastModified timestamp in metadata

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation

_These phases are beyond the scope of the /plan command_

**Phase 3**: Task execution (/tasks command creates tasks.md)
**Phase 4**: Implementation (execute tasks.md following constitutional principles)
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation, accessibility audit)

## Complexity Tracking

_Fill ONLY if Constitution Check has violations that must be justified_

No complexity violations - design follows existing patterns and constitutional principles.

## Progress Tracking

_This checklist is updated during execution flow_

**Phase Status**:

- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [x] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:

- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented (N/A)

---

_Based on Constitution v1.0.0 - See `.specify/memory/constitution.md`_
