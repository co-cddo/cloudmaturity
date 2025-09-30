# Data Model: Report Compilation Session Data

**Date**: 2025-09-30
**Feature**: Report Compilation filtering workflow

## Overview

This document defines the data structures for the Report Compilation feature, focusing on the extended session data model stored in browser localStorage and the export file format.

## Entities

### 1. Session Data (localStorage)

**Storage Key**: `"cmm"`
**Version**: 2.0.0 (upgrade from implicit v1.0.0)

**Structure**:

```javascript
{
  // NEW: Metadata section
  "metadata": {
    "version": "2.0.0",              // Schema version for migration
    "createdAt": "ISO-8601 timestamp" // When assessment started
  },

  // EXISTING: Intro section (unchanged)
  "intro": {
    "email": "string (optional)",
    "organisation": "string (optional)"
  },

  // MODIFIED: Category sections (7 categories)
  "cost": {
    "question1": {
      "answer": 0-5,                 // EXISTING: Selected answer level
      "needsImprovement": boolean    // NEW: Improvement checkbox state
    },
    "question2": { /* same structure */ }
  },

  "data": { /* same structure as cost */ },
  "governance": { /* same structure as cost */ },
  "operations": { /* same structure as cost */ },
  "people": { /* same structure as cost */ },
  "security": { /* same structure as cost */ },
  "tech": { /* same structure as cost */ }
}
```

**Field Definitions**:

| Field                                      | Type              | Required | Default           | Description                          |
| ------------------------------------------ | ----------------- | -------- | ----------------- | ------------------------------------ |
| `metadata.version`                         | string            | Yes      | "2.0.0"           | Schema version for migration logic   |
| `metadata.createdAt`                       | string (ISO-8601) | Yes      | current timestamp | When assessment session started      |
| `intro.*`                                  | object            | No       | {}                | Optional user metadata               |
| `{category}.{questionId}.answer`           | number (0-5)      | Yes      | -                 | Selected answer level (0=unanswered) |
| `{category}.{questionId}.needsImprovement` | boolean           | Yes      | false             | Whether user marked for improvement  |

**Validation Rules**:

- `version` must match supported versions (currently "2.0.0" or legacy format)
- `createdAt` must be valid ISO-8601 timestamp
- `answer` must be integer 0-5 (0 = unanswered, 1-5 = answer levels)
- `needsImprovement` must be boolean

**State Transitions**:

1. **Initial**: User starts assessment → metadata created with timestamp
2. **Answering**: User selects answers → answer values updated, needsImprovement remains false
3. **Compilation**: User checks improvement → needsImprovement updated to true
4. **Modification**: User can toggle needsImprovement anytime on compilation page
5. **Persistence**: All changes auto-saved to localStorage immediately

### 2. Export File Format

**File Name Pattern**: `cmm-assessment-YYYY-MM-DD.json`

**Structure**:

```javascript
{
  // NEW: Export-specific metadata
  "exportMetadata": {
    "version": "2.0.0",              // Schema version
    "createdAt": "ISO-8601 timestamp", // Original assessment start
    "exportedAt": "ISO-8601 timestamp", // When file was exported
    "improvementCount": number,      // Count of needsImprovement=true
    "totalQuestions": number,        // Count of answered questions
    "categories": {                  // Per-category breakdown
      "cost": {
        "answered": number,
        "needsImprovement": number
      },
      // ... other categories
    }
  },

  // Assessment data (same structure as localStorage)
  "assessmentData": {
    "metadata": { /* ... */ },
    "intro": { /* ... */ },
    "cost": { /* ... */ },
    // ... other categories
  }
}
```

**Field Definitions**:

| Field                                              | Type   | Required | Description                              |
| -------------------------------------------------- | ------ | -------- | ---------------------------------------- |
| `exportMetadata.version`                           | string | Yes      | Schema version                           |
| `exportMetadata.createdAt`                         | string | Yes      | Original assessment timestamp            |
| `exportMetadata.exportedAt`                        | string | Yes      | Export timestamp                         |
| `exportMetadata.improvementCount`                  | number | Yes      | Total questions marked for improvement   |
| `exportMetadata.totalQuestions`                    | number | Yes      | Total answered questions                 |
| `exportMetadata.categories.{cat}.answered`         | number | Yes      | Answered questions in category           |
| `exportMetadata.categories.{cat}.needsImprovement` | number | Yes      | Improvement-marked questions in category |
| `assessmentData`                                   | object | Yes      | Complete session data                    |

### 3. Compilation Page View Model

**Purpose**: Client-side data structure for rendering Report Compilation page

**Structure**:

```javascript
{
  "categories": [
    {
      "id": "cost",
      "title": "Cost & Sustainability",
      "answeredCount": number,
      "totalCount": number,
      "questions": [
        {
          "id": "question1",
          "title": "How do you manage costs?",
          "answerLevel": 0-5,
          "answerText": "Our finance team...",
          "guidance": "How to determine if this good enough text...",
          "needsImprovement": boolean
        }
      ]
    }
  ],
  "overallProgress": {
    "answered": number,
    "total": number,
    "improvementMarked": number
  }
}
```

**Construction**: Built client-side by:

1. Loading session data from localStorage
2. Loading assessment questions from global data (Eleventy-generated)
3. Matching answers to questions
4. Filtering to only answered questions
5. Adding computed counts

### 4. Report Filter Model

**Purpose**: Client-side data structure for filtered report generation

**Structure**:

```javascript
{
  "filterActive": boolean,          // True if any improvements marked
  "categories": [
    {
      "id": "cost",
      "title": "Cost & Sustainability",
      "totalQuestions": number,      // All answered in category
      "filteredCount": number,       // Marked for improvement
      "showCategory": boolean,       // True if any questions in category
      "questions": [
        {
          "id": "question1",
          "answerLevel": number,
          "fullGuidance": "How do I do better text...",
          "recommendations": [...],
          "resources": [...]
        }
      ]
    }
  ],
  "overallStats": {
    "totalAnswered": number,
    "showing": number,
    "filtered": number
  }
}
```

**Filtering Logic**:

```javascript
function buildFilteredReport(sessionData, assessmentContent) {
  const hasImprovements = Object.values(sessionData)
    .some(cat => Object.values(cat)
      .some(q => q.needsImprovement === true));

  if (!hasImprovements) {
    // Show all questions with banner
    return { filterActive: false, categories: /* all */ };
  }

  // Filter to improvements only
  const filtered = categories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q =>
      sessionData[cat.id][q.id]?.needsImprovement === true
    )
  })).filter(cat => cat.questions.length > 0);

  return { filterActive: true, categories: filtered };
}
```

## Relationships

```
Session Data (localStorage)
  └─> contains N Categories
       └─> contains N Questions
            ├─> has 1 Answer (0-5)
            └─> has 1 ImprovementFlag (boolean)

Export File
  ├─> contains Export Metadata (summary stats)
  └─> contains Session Data (full assessment)

Compilation View Model
  └─> built from Session Data + Assessment Questions
       └─> filtered to Answered Questions only

Report Filter Model
  └─> built from Session Data + Assessment Content
       └─> filtered to Improvement-Marked Questions (if any)
```

## Data Volume Estimates

**localStorage Size**:

- Current (v1): ~10KB (35 questions × 7 categories)
- New (v2): ~15KB (+metadata, +needsImprovement flags)
- Well under browser limit (5-10MB typical)

**Export File Size**:

- Typical: ~20KB (includes summary metadata)
- Maximum: ~30KB (all questions answered with improvements)

**Page Load Data**:

- Compilation page: ~5KB (answered questions only)
- Report page: ~10KB (full assessment data + content)

## Migration Strategy

**From v1 (implicit) to v2**:

```javascript
function migrateToV2(legacyData) {
  // Detect v1: no metadata field, scalar question values
  if (legacyData.metadata?.version === "2.0.0") {
    return legacyData; // Already v2
  }

  const v2Data = {
    metadata: {
      version: "2.0.0",
      createdAt: new Date().toISOString(),
    },
  };

  // Convert each category
  for (const [categoryId, questions] of Object.entries(legacyData)) {
    if (categoryId === "metadata") continue;

    v2Data[categoryId] = {};
    for (const [questionId, answer] of Object.entries(questions)) {
      v2Data[categoryId][questionId] = {
        answer: typeof answer === "number" ? answer : 0,
        needsImprovement: false, // Default for existing answers
      };
    }
  }

  return v2Data;
}
```

**Migration Trigger**: On first access to any page that reads localStorage, run migration if needed.

**Backward Compatibility**: Not required (per FR-015), but migration preserves existing user data as courtesy during alpha.

## Validation Schema

See [contracts/session-data.schema.json](./contracts/session-data.schema.json) for JSON Schema definition used in contract tests.

**Key Validations**:

- Schema version must be "2.0.0"
- Timestamps must be valid ISO-8601
- Answer values must be 0-5
- needsImprovement must be boolean
- No extra properties allowed (strict schema)

## Performance Considerations

**localStorage Operations**:

- Read entire session: <10ms
- Update single question: <5ms
- Full write: <50ms

**Data Processing**:

- Parse JSON: <10ms for 15KB
- Filter to answered: <5ms
- Filter to improvements: <5ms
- Build view models: <20ms total

**Target Performance**: All data operations complete in <100ms, well under 2s page load budget.

---

**Status**: ✅ Data model complete - Ready for contract generation
