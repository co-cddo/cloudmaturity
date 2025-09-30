# Quickstart: Report Compilation Feature Validation

**Date**: 2025-09-30
**Feature**: Report Compilation filtering workflow

## Purpose

This quickstart guide provides step-by-step validation scenarios to verify the Report Compilation feature works correctly. It serves as both manual testing instructions and a blueprint for integration tests.

## Prerequisites

- Development server running (`npm start`)
- Browser with localStorage enabled
- Clean state (no existing assessment data)

## Validation Scenarios

### Scenario 1: Complete Workflow (Happy Path)

**Objective**: Verify entire flow from assessment through compilation to filtered report.

**Steps**:

1. **Start Assessment**

   - Navigate to `/assessment/`
   - Click "Begin" button
   - ✅ Verify: Assessment page loads

2. **Answer Questions**

   - Select answer for "How do you manage costs?" (Cost category)
   - Select answer for "How does your organization govern data?" (Data category)
   - Select answer for "How do you monitor operations?" (Operations category)
   - ✅ Verify: Answers auto-save to localStorage
   - ✅ Verify: localStorage contains `metadata.version: "2.0.0"`

3. **Navigate to Compilation**

   - Click navigation link to "Report Compilation"
   - ✅ Verify: Page loads with title "Report Compilation"
   - ✅ Verify: Explanatory text explains purpose
   - ✅ Verify: Progress indicators show "3 of 35 questions answered"
   - ✅ Verify: Per-category counts show (Cost: 1/7, Data: 1/3, Operations: 1/11)

4. **Review Guidance**

   - ✅ Verify: Each answered question displays:
     - Question title
     - Selected answer text
     - "How to determine if this good enough" guidance
     - Unchecked checkbox labeled "I need to do better"
   - ✅ Verify: Unanswered categories show "No questions answered in this category yet"

5. **Mark Improvements**

   - Check "I need to do better" for Cost question
   - Check "I need to do better" for Operations question
   - Leave Data question unchecked
   - ✅ Verify: Count updates to "You've marked 2 questions for improvement"
   - ✅ Verify: Checked boxes visually distinguished (highlight/color/icon)
   - ✅ Verify: Changes auto-save to localStorage

6. **Continue to Report**

   - Click "Continue to Report" button at bottom of page
   - ✅ Verify: Report page loads
   - ✅ Verify: Filter indicator shows "Showing 2 of 3 questions"
   - ✅ Verify: Per-category indicators show (Cost: showing 1 of 1, Operations: showing 1 of 1)
   - ✅ Verify: Only Cost and Operations questions displayed
   - ✅ Verify: Data question NOT displayed
   - ✅ Verify: Full "How do I do better?" guidance shown for filtered questions

7. **Modify Selections**
   - ✅ Verify: "Modify improvement selections" button visible at top of report
   - Click "Modify improvement selections" button
   - ✅ Verify: Returns to Report Compilation page
   - ✅ Verify: Previous selections preserved (Cost and Operations checked)
   - Uncheck Operations question
   - Check Data question
   - Click "Continue to Report"
   - ✅ Verify: Report now shows Cost and Data questions only

### Scenario 2: No Improvements Selected

**Objective**: Verify behavior when user marks no improvements.

**Steps**:

1. Complete Scenario 1 steps 1-4 (Answer questions, reach Compilation)
2. Leave all checkboxes unchecked
3. Click "Continue to Report"
4. ✅ Verify: Report shows ALL 3 answered questions
5. ✅ Verify: Banner displays "No items selected for improvement - showing all results"
6. ✅ Verify: No filter indicators shown

### Scenario 3: Partial Assessment Completion

**Objective**: Verify compilation works with partially completed assessment.

**Steps**:

1. Answer only 2 questions from Cost category
2. Navigate directly to Report Compilation (via URL or navigation)
3. ✅ Verify: Only Cost category shows questions
4. ✅ Verify: All other categories show "No questions answered in this category yet"
5. ✅ Verify: Progress shows "2 of 35 questions answered"
6. ✅ Verify: Can mark improvements and continue to report
7. ✅ Verify: Report shows only the 2 Cost questions

### Scenario 4: Direct Report Access (No Compilation Visit)

**Objective**: Verify report behavior when accessed directly without visiting compilation.

**Steps**:

1. Complete assessment (answer 3+ questions)
2. Navigate directly to `/assessment/report/` (skip compilation)
3. ✅ Verify: Report loads with all answered questions
4. ✅ Verify: Banner shows "You haven't selected improvement areas yet. Visit Report Compilation to filter your report."
5. ✅ Verify: No filter indicators shown
6. ✅ Verify: "Modify improvement selections" button still present

### Scenario 5: Save and Load Report

**Objective**: Verify export/import preserves improvement selections.

**Steps**:

1. Complete Scenario 1 (mark improvements, view filtered report)
2. Click "Save this report" button
3. ✅ Verify: File downloads as `cmm-assessment-YYYY-MM-DD.json`
4. Open downloaded file in text editor
5. ✅ Verify: File structure matches export schema:
   ```json
   {
     "exportMetadata": {
       "version": "2.0.0",
       "createdAt": "...",
       "exportedAt": "...",
       "improvementCount": 2,
       "totalQuestions": 3,
       "categories": {
         /* ... */
       }
     },
     "assessmentData": {
       /* ... */
     }
   }
   ```
6. Clear localStorage (simulate new browser)
7. Click "Load a previous report" button
8. Select the downloaded file
9. ✅ Verify: Assessment data restored
10. Navigate to Report Compilation
11. ✅ Verify: Improvement checkboxes match saved state
12. Navigate to Report
13. ✅ Verify: Report filtered to saved improvement selections

### Scenario 6: Keyboard Navigation

**Objective**: Verify full keyboard accessibility.

**Steps**:

1. Navigate to Report Compilation (after answering questions)
2. Use only keyboard (Tab, Enter, Space):
   - Tab through all checkboxes
   - ✅ Verify: Focus visible on each checkbox
   - ✅ Verify: Focus order logical (top to bottom)
   - Space to toggle checkboxes
   - ✅ Verify: Checkboxes toggle with Space key
   - Tab to "Continue to Report" button
   - ✅ Verify: Button receives focus
   - Enter to activate button
   - ✅ Verify: Navigates to report
3. On Report page:
   - Tab to "Modify improvement selections" button
   - ✅ Verify: Button receives focus
   - Enter to activate
   - ✅ Verify: Returns to compilation

### Scenario 7: Screen Reader Announcement

**Objective**: Verify screen reader accessibility.

**Prerequisites**: Screen reader enabled (NVDA, JAWS, or VoiceOver)

**Steps**:

1. Navigate to Report Compilation with screen reader active
2. ✅ Verify: Page title announced
3. ✅ Verify: Explanatory text announced
4. ✅ Verify: Progress indicators announced with numbers
5. Tab through checkboxes:
   - ✅ Verify: Each checkbox announces:
     - Question text
     - "Checkbox not checked" or "Checkbox checked"
     - Label "I need to do better"
6. ✅ Verify: Count updates announced when checkbox toggled
7. ✅ Verify: "Continue to Report" button announced correctly

### Scenario 8: Data Migration (Legacy to v2)

**Objective**: Verify migration from v1 (legacy) to v2 schema.

**Steps**:

1. Manually set localStorage to v1 format:
   ```javascript
   localStorage.setItem(
     "cmm",
     JSON.stringify({
       cost: { question1: 3, question2: 4 },
       data: { question1: 2 },
     }),
   );
   ```
2. Refresh page and navigate to Report Compilation
3. ✅ Verify: Data migrated to v2 format
4. Check localStorage:
   ```javascript
   JSON.parse(localStorage.getItem("cmm"));
   ```
5. ✅ Verify: Structure matches v2:
   ```json
   {
     "metadata": { "version": "2.0.0", "createdAt": "..." },
     "cost": {
       "question1": { "answer": 3, "needsImprovement": false },
       "question2": { "answer": 4, "needsImprovement": false }
     },
     "data": {
       "question1": { "answer": 2, "needsImprovement": false }
     }
   }
   ```
6. ✅ Verify: All questions display correctly with default needsImprovement=false

## Acceptance Criteria

**Feature is READY when**:

- [ ] All 8 scenarios pass validation
- [ ] No console errors during any scenario
- [ ] localStorage data matches schema after each operation
- [ ] Keyboard navigation works without mouse
- [ ] Screen reader announces all content correctly
- [ ] Export file format valid JSON matching schema
- [ ] Page load times <2s on standard connection
- [ ] Visual feedback clear for all state changes

## Performance Benchmarks

**Measured During Validation**:

- [ ] Compilation page load: <2s
- [ ] Checkbox toggle response: <100ms (immediate)
- [ ] localStorage save: <50ms
- [ ] Navigation to report: <1s
- [ ] Filter computation: <100ms
- [ ] Export file generation: <200ms
- [ ] Import file processing: <300ms

## Known Limitations

- No backward compatibility with pre-v2 exported files (per FR-015, acceptable in alpha)
- Filter toggle feature not implemented (deferred as optional enhancement)
- No bulk select/deselect (per design decision, manual selection intentional)

---

**Status**: ✅ Quickstart scenarios defined - Ready for test implementation
