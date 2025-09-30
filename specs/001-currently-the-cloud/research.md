# Research: Report Compilation Step - Technical Decisions

**Date**: 2025-09-30
**Feature**: Report Compilation filtering workflow

## Research Questions & Findings

### 1. Eleventy Navigation Configuration

**Question**: How to add new step to navigation between assessment and report?

**Research Findings**:

- Eleventy uses `eleventyNavigation` front matter to define navigation structure
- Current assessment pages use `eleventyNavigation.parent` to group under "Assessment"
- Report page is separate navigation item at same level as Assessment
- Navigation order controlled by `order` property in front matter

**Decision**: Create `compilation.md` with:

```yaml
---
layout: sub-navigation
order: 1.5
title: Report Compilation
eleventyNavigation:
  key: Report Compilation
  parent: Assessment
---
```

**Rationale**: Placing compilation under Assessment parent with order 1.5 positions it between assessment questions (order 1) and report (order 2). This maintains logical flow while keeping existing navigation intact.

**Alternatives Considered**:

- Separate top-level navigation item: Rejected - creates clutter, breaks assessment workflow
- Dynamic navigation based on state: Rejected - requires client-side navigation, breaks static site model

### 2. GOV.UK Design System Components

**Question**: Which components for checkboxes, progress indicators, banners?

**Research Findings**:

- @x-govuk/govuk-eleventy-plugin provides Nunjucks macros for all GOV.UK components
- `govukCheckboxes` macro supports hint text, conditional reveals
- `govukNotificationBanner` for informational messages
- `govukButton` for primary actions
- No built-in progress indicator component - need custom implementation

**Decision**:

- Use `govukCheckboxes` macro for "I need to do better" checkboxes
- Use `govukNotificationBanner` for status messages (no selections, direct access)
- Use `govukButton` for "Continue to Report" and "Modify selections" actions
- Implement custom progress indicators using GOV.UK typography and spacing

**Rationale**: Leverages existing design system for consistency and accessibility. Custom progress indicators follow GOV.UK styling guidelines while meeting specific feature needs.

**Alternatives Considered**:

- Third-party progress components: Rejected - adds dependency, may not match GOV.UK styling
- Plain HTML without macros: Rejected - loses accessibility features, harder to maintain

### 3. localStorage Schema Extension

**Question**: How to extend existing session structure without breaking compatibility?

**Research Findings**:

- Current localStorage uses key "cmm" with nested category objects
- Each question stored as `category.questionId: answerValue`
- No version field in current schema
- `cmm_assessment.js` uses `JSON.parse(localStorage.getItem("cmm"))` pattern

**Decision**: Extend schema with:

1. Add `metadata` object at root level with `version` and `createdAt`
2. Change question value from scalar to object: `{ answer: number, needsImprovement: boolean }`
3. Migrate existing data on first load (if no metadata, convert scalars to objects)

**Data Structure**:

```javascript
{
  "cmm": {
    "metadata": {
      "version": "2.0.0",
      "createdAt": "2025-09-30T10:00:00Z"
    },
    "intro": { /* existing intro data */ },
    "cost": {
      "question1": {
        "answer": 3,
        "needsImprovement": false
      }
    }
  }
}
```

**Migration Strategy**:

```javascript
function migrateSessionData() {
  const data = JSON.parse(localStorage.getItem("cmm"));
  if (!data || data.metadata?.version === "2.0.0") return data;

  // Migrate v1 to v2
  const migrated = {
    metadata: { version: "2.0.0", createdAt: new Date().toISOString() },
  };

  for (const [category, questions] of Object.entries(data)) {
    migrated[category] = {};
    for (const [qid, answer] of Object.entries(questions)) {
      migrated[category][qid] = {
        answer: typeof answer === "number" ? answer : 0,
        needsImprovement: false,
      };
    }
  }

  localStorage.setItem("cmm", JSON.stringify(migrated));
  return migrated;
}
```

**Rationale**: Object-based structure allows future extensions. Metadata enables version detection for future migrations. Automatic migration maintains user data without manual intervention.

**Alternatives Considered**:

- Separate localStorage key for improvement flags: Rejected - creates sync issues, harder to manage
- Keep scalar values, use separate structure: Rejected - increases complexity, prone to desync
- No migration, force re-assessment: Rejected - violates user-centered design, alpha status allows but unnecessary

### 4. File Export Format

**Question**: What format for metadata (JSON structure)?

**Research Findings**:

- Current `saveReport()` in `cmm_report.js` exports JSON stringified data as downloadable file
- No metadata in current export
- File named with timestamp: `cmm-assessment-YYYY-MM-DD.json`

**Decision**: Extend export format with top-level metadata:

```json
{
  "exportMetadata": {
    "version": "2.0.0",
    "createdAt": "2025-09-30T10:00:00Z",
    "exportedAt": "2025-09-30T11:30:00Z",
    "improvementCount": 8,
    "totalQuestions": 24
  },
  "assessmentData": {
    /* existing cmm data structure with v2 schema */
  }
}
```

**Rationale**: Separate metadata section distinguishes export info from assessment data. Includes summary statistics for quick reference. Backward compatible with version field.

**Alternatives Considered**:

- Extend existing structure with metadata inside: Rejected - mixes concerns, harder to parse
- Separate metadata file: Rejected - increases file management complexity, poor UX
- Human-readable text format: Rejected - harder to parse for programmatic import

### 5. Assessment Question Parsing

**Question**: How to extract "How to determine if this good enough" text from existing markdown files?

**Research Findings**:

- Assessment questions stored as markdown files in `src/assessment/[category]/`
- Each file contains multiple answer levels (h3 headings)
- "How to determine if this good enough" is h4 heading under each answer level
- Content follows h4 until next heading

**Example Structure**:

```markdown
### Answer Level 1

#### How to determine if this good enough

[Guidance text here...]

#### How do I do better?

[Improvement guidance...]

### Answer Level 2

...
```

**Decision**: Parse markdown at build time using Eleventy data processing:

1. Read markdown files during Eleventy build
2. Parse content structure using markdown-it or regex
3. Extract "How to determine if good enough" sections per answer level
4. Store in Eleventy data for template access
5. Generate JSON data file for client-side JavaScript access

**Implementation Approach**:

```javascript
// .eleventy.js or custom data file
module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("assessmentGuidance", () => {
    // Parse all assessment markdown files
    // Extract guidance sections
    // Return structured data
  });
};
```

**Rationale**: Build-time parsing avoids client-side markdown processing. Data available to both templates and JavaScript. Maintains single source of truth (markdown files).

**Alternatives Considered**:

- Client-side markdown parsing: Rejected - adds dependency, slower, unnecessary processing
- Duplicate guidance in separate files: Rejected - violates DRY, maintenance burden
- Hardcode guidance in JavaScript: Rejected - breaks constraint "do not modify src/assessment/"

## Technology Stack Summary

**Confirmed Technologies**:

- **Frontend**: Eleventy 3.0.0 (static site generator)
- **Templating**: Nunjucks with @x-govuk/govuk-eleventy-plugin
- **Client JS**: Vanilla JavaScript ES6+, no frameworks
- **Storage**: Browser localStorage
- **Testing**: Jest 29.7.0 with jsdom
- **Styling**: GOV.UK Design System (via plugin)

**No New Dependencies Required**: All functionality achievable with existing stack.

## Performance Considerations

**localStorage Operations**:

- Read: <10ms (synchronous)
- Write: <50ms (synchronous)
- Size: Current ~10KB, new structure ~15KB (well under 5MB limit)

**Page Load**:

- Compilation page: Minimal data (answered questions only)
- Parsing localStorage: <50ms
- Rendering checkboxes: <100ms for 35 questions
- Total target: <2s (easily achievable)

**Build Time**:

- Markdown parsing: +0.5s per category (7 categories = +3.5s total)
- Acceptable for static site generation
- Could optimize with caching if needed

## Accessibility Considerations

**WCAG 2.1 AA Requirements Met By**:

- Keyboard navigation: GOV.UK components handle natively
- Screen reader support: `govukCheckboxes` includes proper ARIA labels
- Focus management: GOV.UK Design System best practices
- Color contrast: GOV.UK design tokens ensure compliance
- Semantic HTML: Templates use proper heading hierarchy

**Testing Strategy**:

- Automated: jest-axe for component-level accessibility
- Manual: Screen reader testing (NVDA/JAWS/VoiceOver)
- Keyboard-only navigation verification

## Security Considerations

**No Security Risks Identified**:

- All data remains client-side (localStorage)
- No external data transmission
- No user-generated content (assessment questions are static)
- Export format is JSON (no code execution risk)

**Input Validation**:

- Validate localStorage data structure on load
- Sanitize any dynamically inserted content (though none expected)
- Handle malformed JSON gracefully with error messages

## Open Questions Resolved

All research questions have been resolved with concrete technical decisions. No remaining unknowns that would block implementation planning.

---

**Status**: ✅ Research complete - Ready for Phase 1 (Design & Contracts)
