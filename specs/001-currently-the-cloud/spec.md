# Feature Specification: Report Compilation Step - Filtering Improvement Areas

**Feature Branch**: `001-currently-the-cloud`
**Created**: 2025-09-30
**Status**: Draft
**Input**: User description: "currently the cloud maturity model has a two step process, whereby step 1 you answer the questions, step 2 you get the report. without modifying any content in `src/assessment` you must introduce a third step, which shows people the `How to determine if this good enough` for each answer, with a checkbox that is by default off labelled "I need to do better". the user will complete this new intermeditary step before finally seeing the report page which will be filtered to show only the questions the user has selected they need to do better at. The session object recording the state of answered questions will also be updated to reflect this so that reports can be saved and loaded with this new level of data. the new intermediate step will be labelled "Report Compilation""

## Execution Flow (main)

```
1. Parse user description from Input
   → Completed: Introducing three-step assessment flow
2. Extract key concepts from description
   → Identified: assessment workflow, intermediate step, filtering, data persistence
3. For each unclear aspect:
   → Marked with [NEEDS CLARIFICATION] tags below
4. Fill User Scenarios & Testing section
   → Completed: User flow for self-improvement identification
5. Generate Functional Requirements
   → Completed: All requirements are testable
6. Identify Key Entities (if data involved)
   → Completed: Session data structure extension
7. Run Review Checklist
   → Ready for review
8. Return: SUCCESS (spec ready for planning)
```

---

## ⚡ Quick Guidelines

- ✅ Focus on WHAT users need and WHY
- ❌ Avoid HOW to implement (no tech stack, APIs, code structure)
- 👥 Written for business stakeholders, not developers

---

## Clarifications

### Session 2025-09-30

- Q: What content should appear on the Report Compilation step vs the Report page? → A: Compilation shows question + answer + "How to determine if this good enough" section. Report page shows only "How to do better" section (not "How to determine if this good enough")
- Q: When a user has NOT marked any questions as "I need to do better" and proceeds to the Report page, what should happen? → A: Show all questions with a banner message indicating "No items selected for improvement - showing all results"
- Q: When a user navigates directly to the Report page URL without having completed the "Report Compilation" step, what should happen? → A: Show the unfiltered report with a banner notice explaining they should visit Report Compilation to filter
- Q: When a user accesses the "Report Compilation" step but has not yet answered all assessment questions (only partial completion), what should the Report Compilation page show? → A: Show only the questions they have answered so far, allowing partial progress
- Q: How should the system handle saved reports from before this feature was implemented (backward compatibility)? → A: No backward compatibility required - tool is in alpha and breaking changes are acceptable
- Q: Should the "Report Compilation" step include explanatory text beyond just the title, to help users understand its purpose? → A: Yes - add brief instructions explaining users should review and select areas for improvement
- Q: Should the "Report Compilation" step show a summary count of answered questions to help users track their progress? → A: Yes - show both overall and per-category counts
- Q: Should the Report Compilation step provide a way to quickly select/deselect all questions within a category? → A: No - users should manually check each question individually
- Q: Should the filtered report show an indicator of how many questions were filtered out? → A: Yes - show both overall and per-category filtered counts
- Q: On the Report Compilation step, how should the "How to determine if this good enough" guidance text be displayed for each question? → A: Show only the "How to determine if this good enough" text on Report Compilation; full guidance appears on the Report page in the next step
- Q: Should there be a visual indicator on the Report Compilation step showing which questions the user has already marked as "I need to do better"? → A: Yes - provide both a count and visual highlighting
- Q: Should the system preserve the user's scroll position when they navigate back to the Report Compilation step from the Report page? → A: No - use default browser scroll behavior
- Q: Should the Report page include a link/button to return to the Report Compilation step to modify selections? → A: Yes - prominent button at the top of the page
- Q: Should the saved report file format be updated to include metadata about when the report was created and which questions were marked for improvement? → A: Yes - include timestamp and improvement selections in a structured format (e.g., JSON with metadata)
- Q: Should categories with zero answered questions be hidden on the Report Compilation step, or shown with a message? → A: Show categories with a message "No questions answered in this category yet"
- Q: Should there be a "Continue to Report" or "View Report" button on the Report Compilation step, or should users rely on navigation links? → A: Yes - button only at the bottom after reviewing all questions

---

## User Scenarios & Testing

### Primary User Story

A user completes the Cloud Maturity Model assessment by answering all questions across the seven categories (Cost, Data, Governance, Operations, People, Security, Technology). Currently, they immediately see a comprehensive report showing all their responses and recommendations. However, users find the full report overwhelming and want to focus only on areas where they specifically need to improve.

With the new three-step process, after completing all assessment questions (Step 1), users will be presented with a "Report Compilation" step (Step 2) where they review the "How to determine if this good enough" guidance for each of their selected answers. For each question, they can mark whether they "need to do better" using a checkbox. Finally, they proceed to the filtered report (Step 3) which shows only the questions and recommendations for areas they've marked as needing improvement.

### Acceptance Scenarios

1. **Given** a user has completed all assessment questions across all categories, **When** they navigate from the last assessment page, **Then** they should be directed to the "Report Compilation" step showing all their answered questions with corresponding "How to determine if this good enough" text and an unchecked checkbox labeled "I need to do better" for each question.

2. **Given** a user is on the "Report Compilation" step, **When** they check or uncheck "I need to do better" checkboxes, **Then** their selections should be automatically saved to browser local storage as part of the session data.

3. **Given** a user has selected specific questions for improvement on the "Report Compilation" step, **When** they proceed to the Report page, **Then** the report should display only the questions and recommendations for items they marked as "I need to do better".

4. **Given** a user has not marked any questions as "I need to do better", **When** they view the Report page, **Then** the report should display all questions with a banner message indicating "No items selected for improvement - showing all results".

5. **Given** a user saves their report from the Report page, **When** they later load that saved report, **Then** the loaded data should include their "I need to do better" selections, and the Report page should display only the filtered questions they previously selected.

6. **Given** a user has marked questions for improvement and views the filtered report, **When** they want to change their improvement selections, **Then** they must be able to navigate back to the "Report Compilation" step to modify their selections.

7. **Given** a user navigates directly to the Report page URL without completing the "Report Compilation" step, **When** the page loads, **Then** they should see the unfiltered report with a banner notice explaining they should visit the Report Compilation step to filter results to their improvement areas.

8. **Given** a user is on the "Report Compilation" step, **When** they have not yet answered all assessment questions, **Then** only the questions they have answered so far should appear on the compilation step, allowing them to mark improvement areas for their partial progress.

### Edge Cases

- What happens when a user clears their browser cache after marking improvement areas but before saving the report? (Expected: Data loss consistent with current behavior, warning banner already exists)
- How does the system handle users who have existing saved reports from before this feature was implemented? (Not applicable: Tool is in alpha, breaking changes are acceptable, no backward compatibility required)
- What if a user accesses the "Report Compilation" step with partially completed assessment sections? (Expected: Only answered questions appear, supporting incremental workflow)
- Can users toggle between filtered and unfiltered report views after making their selections? (Deferred to planning: Not explicitly required but could be addressed as enhancement if needed during implementation)

## Requirements

### Functional Requirements

- **FR-001**: System MUST introduce a new "Report Compilation" step that appears after completing assessment questions and before viewing the final report. The page MUST include a "Continue to Report" or "View Report" button positioned at the bottom of the page after all questions.

- **FR-002**: The "Report Compilation" step MUST display questions organized by category. Categories with answered questions MUST show those questions with the user's selected answer. Categories with zero answered questions MUST be shown with a message stating "No questions answered in this category yet". The step supports partial assessment completion.

- **FR-003**: For each answered question displayed on the "Report Compilation" step, system MUST show the question text, the user's selected answer, and the "How to determine if this good enough" guidance text that is associated with that answer level. The "How do I do better?" guidance does NOT appear on the Report Compilation step.

- **FR-004**: Each question on the "Report Compilation" step MUST have a checkbox labeled "I need to do better" that is unchecked by default. The page MUST display a count of marked questions (e.g., "You've marked 8 questions for improvement") and checked checkboxes MUST be visually distinguished from unchecked ones through styling (e.g., highlighting, color, or iconography).

- **FR-005**: System MUST persist the state of all "I need to do better" checkboxes in browser local storage as part of the existing session data structure.

- **FR-006**: System MUST automatically save checkbox state changes without requiring manual save actions from the user.

- **FR-007**: The Report page MUST filter displayed questions to show only those where the user has checked "I need to do better" on the "Report Compilation" step. If no questions are marked for improvement, the report MUST display all questions with a notification banner stating "No items selected for improvement - showing all results". When filtering is active, the report MUST display filter indicators showing both overall counts (e.g., "Showing 8 of 24 questions") and per-category counts (e.g., "Security: showing 3 of 8 questions").

- **FR-008**: The Report page MUST display only the "How do I do better?" guidance sections for each question, NOT the "How to determine if this good enough" sections (which were shown on the Report Compilation step). The filtered report displays the same "How do I do better?" detail (recommendations, guidance, vendor solutions) for selected questions as an unfiltered report shows for all questions.

- **FR-009**: System MUST include "I need to do better" selections when saving reports to file via the existing "Save this report" functionality. The saved file format MUST include metadata containing the report creation timestamp and improvement selections in a structured format.

- **FR-010**: System MUST restore "I need to do better" selections when loading previously saved reports via the existing "Load a previous report" functionality.

- **FR-011**: Users MUST be able to navigate between the "Report Compilation" step and the Report page to modify their improvement selections. The Report page MUST include a prominent button at the top of the page (e.g., "Modify improvement selections") that returns users to the Report Compilation step.

- **FR-012**: System MUST NOT modify any content within the `src/assessment` directory (existing question files and guidance content must remain unchanged).

- **FR-013**: The "Report Compilation" step MUST be clearly labeled with the title "Report Compilation" and include brief explanatory text that instructs users to review their answers and select areas where they need to improve. The page MUST display progress indicators showing both overall question count (e.g., "24 of 35 questions answered"), per-category counts (e.g., "Cost: 5/7, Security: 6/14"), percentage of marked items (e.g., "40% marked for improvement"), and a visual progress bar. The progress bar MUST use either HTML5 `<progress>` element or a styled div with `role="progressbar"` ARIA attribute for accessibility.

- **FR-014**: When users access the Report page directly via URL without having visited the "Report Compilation" step, system MUST display the unfiltered report with a notification banner explaining that users should visit the "Report Compilation" step to filter results to their improvement areas.

- **FR-015**: System does NOT require backward compatibility with previously saved reports. The tool is in alpha phase and breaking changes are acceptable.

### Non-Functional Requirements

- **Performance**: The "Report Compilation" step should load all answered questions and their "How to determine if this good enough" text within 2 seconds on standard broadband connections (5+ Mbps download, 1+ Mbps upload). LocalStorage read/write operations should complete within 100ms.

- **Accessibility**: The "Report Compilation" step must be fully keyboard navigable, all checkboxes must have proper ARIA labels, and screen readers must be able to announce the question text, answer selection, and guidance text clearly.

- **Usability**: Users should have clear visual indication of which questions they've marked for improvement. The "Report Compilation" step must include explanatory text guiding users to review their answers and select areas for improvement. A "Continue to Report" or "View Report" button must be positioned at the bottom of the page to encourage full review before proceeding. Navigation controls must be obvious and clearly labeled.

- **Security**: The feature must maintain the current data storage approach (browser local storage only) and must not transmit any assessment data to external servers.

### Key Entities

- **Session Data Structure**: Currently stores assessment answers organized by category and question ID with the selected answer value (0-5). Must be extended to include a boolean flag for each answered question indicating whether "I need to do better" is checked. When saved to file, must include metadata with report creation timestamp.

- **Report Compilation Entry**: Represents a single question on the "Report Compilation" step, containing: the question text, the user's selected answer level, the corresponding "How to determine if this good enough" guidance text for that answer level, and the "I need to do better" checkbox state. Does NOT include "How do I do better?" guidance.

- **Report Page Entry**: Represents a single question on the Report page, containing: the question text and the "How do I do better?" guidance text for the user's selected answer level. Does NOT include "How to determine if this good enough" guidance (which was shown on the Report Compilation step).

- **Filtered Report Data**: A subset of the full assessment results containing only questions where "I need to do better" is true, used to generate the filtered report view.

---

## Review & Acceptance Checklist

### Content Quality

- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed
- [x] Accessibility requirements specified where applicable
- [x] User guidance approach defined

### Requirement Completeness

- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified

---

## Execution Status

- [x] User description parsed
- [x] Key concepts extracted
- [x] Ambiguities marked
- [x] User scenarios defined
- [x] Requirements generated
- [x] Entities identified
- [x] Review checklist passed
- [x] Clarifications completed (5 questions resolved)

---
