# Cloud Maturity Model and Assessment Tool

[![CI](https://github.com/co-cddo/cloudmaturity/actions/workflows/ci.yaml/badge.svg)](https://github.com/co-cddo/cloudmaturity/actions/workflows/ci.yaml)
[![CodeQL](https://github.com/co-cddo/cloudmaturity/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/co-cddo/cloudmaturity/actions/workflows/github-code-scanning/codeql)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/co-cddo/cloudmaturity/badge)](https://scorecard.dev/viewer/?uri=github.com/co-cddo/cloudmaturity)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8980/badge)](https://www.bestpractices.dev/projects/8980)
![GitHub License](https://img.shields.io/github/license/co-cddo/cloudmaturity)
![GitHub deployments](https://img.shields.io/github/deployments/co-cddo/cloudmaturity/github-pages)

A self-assessment tool that helps organisations understand their cloud maturity and provides targeted, actionable guidance for improvement.

![Screenshot from report page](images/report-screengrab.png)

## Overview

The Cloud Maturity Model provides a structured way to evaluate your organisation's cloud capabilities across multiple dimensions. Rather than producing a simple score, it delivers contextual guidance that respects the principle of proportionality—what's appropriate for a critical national service differs from what's needed for a departmental intranet.

**This project is currently in alpha.** Contributions are very welcome.

## How It Works

### The Assessment

Each question presents five attestation levels, ranging from minimal capability to best practice. You select the statement that best describes your current state.

The intent is not to push everyone toward the highest level. Scoring "low" isn't necessarily bad—in fact, scoring too "high" might indicate over-engineering for your context. A highly resilient, zero-trust architecture makes sense for passport validation services but would be disproportionate for publishing the canteen menu.

### The Report

Based on your attestations, the report helps you:

1. **Understand if your current state is appropriate** for your risk profile and service criticality
2. **Get explicit, targeted guidance** on how to reach the next level when improvement is warranted

## What This Tool Is Not

This is **not** an assurance or compliance tool. Results are not collected or reported centrally. It exists solely to help organisations:

- Recognise where they are
- Understand what risks they're operating with
- Learn specifically how to improve their position

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Running Tests

```bash
npm test
```

## Contributing

Contributions are welcome! The repository is configured with [dev containers](https://containers.dev/), so you can use [GitHub Codespaces](https://github.com/features/codespaces) or any [compatible editor](https://containers.dev/supporting#editors).

### Adding or Modifying Questions

All questions and guidance live in [`./src/assessment`](./src/assessment/). Each question is a markdown file with the following structure:

```markdown
---
title: Question Title
tags: category
eleventyNavigation:
  parent: category
---

### Answer 1

#### **How to determine if this good enough**

Guidance text...

#### **How to do better**

Improvement guidance...

### Answer 2

...and so on through Answer 5
```

Simply add a new file to create a new question, or modify existing ones as needed.

## Tech Stack

- [Eleventy 3.0](https://www.11ty.dev/) - Static site generator
- [@x-govuk/govuk-eleventy-plugin](https://x-govuk.github.io/govuk-eleventy-plugin/) - GOV.UK Design System integration
- [Jest](https://jestjs.io/) - Testing framework

## Licence

[MIT](LICENSE)
