# Manual Validation Checklist - Report Compilation Feature

**Feature**: Report Compilation (001-currently-the-cloud)
**Date**: 2025-09-30
**Status**: Ready for Manual Testing
**Tester**: \***\*\*\*\*\***\_\***\*\*\*\*\***

## Prerequisites

- [ ] Build completed: `npm run build`
- [ ] All automated tests passing: `npm test` (90 tests)
- [ ] Dev server running: `npx @11ty/eleventy --serve`
- [ ] Browser opened to: http://localhost:8080

## Test Environment

- **Browser**: **\*\***\_\_\_\_**\*\*** (Chrome, Firefox, Safari, Edge)
- **OS**: **\*\***\_\_\_\_**\*\*** (macOS, Windows, Linux)
- **Screen Reader** (for Scenario 7): **\*\***\_\_\_\_**\*\*** (NVDA, JAWS, VoiceOver)

---

## Scenario 1: Complete End-to-End Workflow

**Objective**: Verify the full user journey from assessment through compilation to filtered report.

### Steps

1. [ ] Navigate to `/assessment/` page
2. [ ] Complete at least 5 questions across different categories
3. [ ] Click "View Your Report" or navigate to `/assessment/compilation/`
4. [ ] **Verify**: Compilation page loads with all answered questions displayed
5. [ ] **Verify**: Each question shows:
   - Question text (h2 heading)
   - Selected answer text (paragraph)
   - "How to determine if this good enough" guidance section
   - Checkbox labeled "I need to do better"
6. [ ] **Verify**: Progress indicators show:
   - "X of 35 questions answered"
   - "Y questions marked for improvement (Z%)"
   - Progress bar reflects marked count
7. [ ] Check 2-3 "I need to do better" checkboxes
8. [ ] **Verify**: Progress counter updates immediately without page reload
9. [ ] **Verify**: Selected questions have visual highlighting (light gray background, blue left border)
10. [ ] Click "Continue to Report" button
11. [ ] **Verify**: Report page loads
12. [ ] **Verify**: Filter banner displays: "Showing X of Y questions marked for improvement"
13. [ ] **Verify**: Summary table displays category breakdown
14. [ ] **Verify**: Only marked questions appear in report
15. [ ] **Verify**: Each shown question displays ONLY "How do I do better?" guidance (NOT "How to determine if this good enough")
16. [ ] **Verify**: Questions not marked for improvement are hidden

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Scenario 2: No Improvements Selected

**Objective**: Verify behavior when user doesn't mark any questions for improvement.

### Steps

1. [ ] Clear localStorage: Open DevTools Console, run `localStorage.clear()`
2. [ ] Complete assessment with 3-5 questions
3. [ ] Navigate to `/assessment/compilation/`
4. [ ] **Verify**: All questions shown with checkboxes unchecked
5. [ ] Do NOT check any "I need to do better" checkboxes
6. [ ] Click "Continue to Report"
7. [ ] **Verify**: Report shows "No areas marked for improvement" message OR shows all questions
8. [ ] **Verify**: No filter banner displayed (or shows "0 questions marked")

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Scenario 3: Partial Assessment Completion

**Objective**: Handle users who haven't answered all 35 questions.

### Steps

1. [ ] Clear localStorage
2. [ ] Answer only 3 questions in assessment
3. [ ] Navigate to `/assessment/compilation/`
4. [ ] **Verify**: Progress shows "3 of 35 questions answered"
5. [ ] **Verify**: Only 3 questions displayed
6. [ ] Mark 1 question for improvement
7. [ ] Continue to report
8. [ ] **Verify**: Report shows only the 1 marked question

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Scenario 4: Direct Report Access

**Objective**: Verify graceful handling when accessing report page directly.

### Steps

1. [ ] Clear localStorage
2. [ ] Navigate directly to `/assessment/report/` (without completing assessment)
3. [ ] **Verify**: Appropriate message shown (e.g., "No assessment data found" or "Please complete assessment first")
4. [ ] **Verify**: Link/button provided to return to `/assessment/`

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Scenario 5: Export and Import Workflow

**Objective**: Verify save/load functionality preserves all data and selections.

### Steps

1. [ ] Complete assessment with 5 questions
2. [ ] Mark 3 questions for improvement on compilation page
3. [ ] Navigate to report page
4. [ ] Click "Save Report" button
5. [ ] **Verify**: JSON file downloads with filename `cmm-assessment-YYYY-MM-DD.json`
6. [ ] Open downloaded file in text editor
7. [ ] **Verify**: JSON structure includes:
   - `exportMetadata` object with version, timestamps, counts
   - `assessmentData` object with all questions
8. [ ] Clear localStorage: `localStorage.clear()`
9. [ ] Reload page - verify data is gone
10. [ ] Click "Load Report" button and select downloaded JSON file
11. [ ] **Verify**: Assessment data restored
12. [ ] Navigate to `/assessment/compilation/`
13. [ ] **Verify**: Previously marked questions still show as checked
14. [ ] Navigate to `/assessment/report/`
15. [ ] **Verify**: Filter still applied, same questions shown

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Scenario 6: Keyboard Navigation

**Objective**: Verify all functionality accessible via keyboard only (no mouse).

### Steps

1. [ ] Navigate to `/assessment/compilation/` using Tab key
2. [ ] **Verify**: Tab order is logical (progress → questions → checkboxes → button → back link)
3. [ ] **Verify**: Focus indicator visible on all interactive elements (3px yellow outline)
4. [ ] Use Tab to reach first checkbox
5. [ ] Press Space to toggle checkbox
6. [ ] **Verify**: Checkbox changes state
7. [ ] **Verify**: Progress counter updates
8. [ ] **Verify**: Visual feedback applied to question (highlighting)
9. [ ] Tab to "Continue to Report" button
10. [ ] Press Enter to activate button
11. [ ] **Verify**: Report page loads
12. [ ] Tab through report page elements
13. [ ] **Verify**: Tab to "Modify improvement selections" button works
14. [ ] Press Enter on that button
15. [ ] **Verify**: Returns to compilation page

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Scenario 7: Screen Reader Testing

**Objective**: Verify screen reader announces all content correctly.

### Screen Reader Used: **\*\***\_\_\_**\*\***

### Steps

1. [ ] Enable screen reader (NVDA: Ctrl+Alt+N, JAWS: Insert+J, VoiceOver: Cmd+F5)
2. [ ] Navigate to `/assessment/compilation/`
3. [ ] **Verify**: Page title announced
4. [ ] **Verify**: Explanatory text announced ("Review your assessment...")
5. [ ] **Verify**: Progress indicators announced with values
6. [ ] **Verify**: Progress bar role="progressbar" announced with current/max values
7. [ ] Navigate to first question
8. [ ] **Verify**: Question heading (h2) announced
9. [ ] **Verify**: Answer text announced
10. [ ] **Verify**: Checkbox state announced (checked/unchecked)
11. [ ] **Verify**: Checkbox label announced ("I need to do better")
12. [ ] **Verify**: aria-label announced for checkbox context
13. [ ] Toggle checkbox
14. [ ] **Verify**: State change announced
15. [ ] Navigate to report page
16. [ ] **Verify**: Filter banner role="status" aria-live="polite" causes announcement
17. [ ] **Verify**: Summary table caption announced
18. [ ] **Verify**: Table headers announced with scope
19. [ ] **Verify**: Table data cells announced in context

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Scenario 8: Data Migration (v1 to v2)

**Objective**: Verify backward compatibility with old localStorage format.

### Steps

1. [ ] Open DevTools Console
2. [ ] Manually inject v1 format data:
   ```javascript
   localStorage.setItem(
     "cmm",
     JSON.stringify({
       operations: {
         monitoring: 2,
         insights: 3,
       },
       governance: {
         provisioning: 4,
       },
     }),
   );
   ```
3. [ ] Reload page
4. [ ] Navigate to `/assessment/compilation/`
5. [ ] **Verify**: Questions display correctly
6. [ ] **Verify**: No JavaScript errors in console
7. [ ] Open DevTools Console and check localStorage:
   ```javascript
   JSON.parse(localStorage.getItem("cmm"));
   ```
8. [ ] **Verify**: Data has been migrated to v2 format:
   - `metadata` object exists with `version: "2.0.0"`
   - Each question is now object: `{answer: X, needsImprovement: false}`
9. [ ] Mark a question for improvement
10. [ ] **Verify**: Migration preserves functionality

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Content Separation Verification

**Critical Requirement**: Different guidance shown on different pages.

### Steps

1. [ ] Complete assessment and navigate to compilation page
2. [ ] For first displayed question, **verify**:
   - [ ] Question text (h2) is present
   - [ ] Answer text is present
   - [ ] Section heading "How to determine if this good enough" is present
   - [ ] Guidance text under "How to determine if this good enough" is present
   - [ ] Section heading "How do I do better?" is **NOT** present
3. [ ] Mark that question for improvement
4. [ ] Continue to report page
5. [ ] Find same question on report page, **verify**:
   - [ ] Question text (h2) is present
   - [ ] Section heading "How do I do better?" is present
   - [ ] Guidance text under "How do I do better?" is present
   - [ ] Section heading "How to determine if this good enough" is **NOT** present
   - [ ] "Good enough" guidance text is **NOT** present

**Result**: PASS ☐ FAIL ☐
**Notes**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

## Cross-Browser Testing

Test compilation page and report page in each browser:

### Chrome

- [ ] Compilation page renders correctly
- [ ] Report page renders correctly
- [ ] Checkboxes work, progress updates
- [ ] Filter applied correctly
- **Version**: **\_\_\_**

### Firefox

- [ ] Compilation page renders correctly
- [ ] Report page renders correctly
- [ ] Checkboxes work, progress updates
- [ ] Filter applied correctly
- **Version**: **\_\_\_**

### Safari

- [ ] Compilation page renders correctly
- [ ] Report page renders correctly
- [ ] Checkboxes work, progress updates
- [ ] Filter applied correctly
- **Version**: **\_\_\_**

### Edge

- [ ] Compilation page renders correctly
- [ ] Report page renders correctly
- [ ] Checkboxes work, progress updates
- [ ] Filter applied correctly
- **Version**: **\_\_\_**

---

## Acceptance Criteria Summary

All scenarios must PASS for feature to be accepted:

- [ ] Scenario 1: Complete workflow PASSED
- [ ] Scenario 2: No improvements PASSED
- [ ] Scenario 3: Partial completion PASSED
- [ ] Scenario 4: Direct access PASSED
- [ ] Scenario 5: Export/import PASSED
- [ ] Scenario 6: Keyboard navigation PASSED
- [ ] Scenario 7: Screen reader PASSED
- [ ] Scenario 8: Data migration PASSED
- [ ] Content separation verified
- [ ] All target browsers tested

---

## Sign-Off

**Tester Name**: \***\*\*\*\*\***\_\***\*\*\*\*\***
**Date**: \***\*\*\*\*\***\_\***\*\*\*\*\***
**Overall Result**: PASS ☐ FAIL ☐

**Issues Found**: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***

---

---

**Approved for Production**: YES ☐ NO ☐

**Approver**: \***\*\*\*\*\***\_\***\*\*\*\*\***
**Date**: \***\*\*\*\*\***\_\***\*\*\*\*\***

---

## Additional Notes

_Use this space for any additional observations, edge cases discovered, or recommendations:_

---

---

---

---
