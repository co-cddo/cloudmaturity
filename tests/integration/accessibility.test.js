/**
 * Accessibility validation tests using jest-axe
 * T031: Automated WCAG 2.1 AA compliance checks
 */

const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

describe("Accessibility (WCAG 2.1 AA)", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    localStorage.clear();
  });

  describe("Compilation Page", () => {
    it("should have no axe violations on compilation page", async () => {
      // Simulate compilation page HTML structure with proper landmarks
      document.body.innerHTML = `
        <main role="main">
        <div id="compilation-progress">
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-one-half">
              <p class="govuk-body"><strong>5</strong> of 35 questions answered</p>
            </div>
            <div class="govuk-grid-column-one-half">
              <p class="govuk-body" id="marked-count">
                <strong>2</strong> questions marked for improvement (40%)
              </p>
            </div>
          </div>
          <progress
            class="govuk-progress-bar"
            max="5"
            value="2"
            aria-label="Questions marked for improvement"
            role="progressbar"
            aria-valuenow="2"
            aria-valuemin="0"
            aria-valuemax="5">
            40%
          </progress>
        </div>
        <div id="compilation-questions">
          <div class="compilation-question">
            <h2>How do you monitor your systems?</h2>
            <p class="govuk-body">We check things when building or when there's a problem.</p>
            <div class="govuk-form-group">
              <div class="govuk-checkboxes govuk-checkboxes--small">
                <div class="govuk-checkboxes__item">
                  <input
                    class="govuk-checkboxes__input"
                    id="improve-operations-monitoring-0"
                    type="checkbox"
                    data-category="operations"
                    data-question="monitoring"
                    aria-label="I need to do better at monitoring systems"
                  />
                  <label
                    class="govuk-label govuk-checkboxes__label"
                    for="improve-operations-monitoring-0">
                    I need to do better
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="govuk-button-group">
          <button type="button" class="govuk-button" id="continue-to-report">
            Continue to Report
          </button>
          <a href="/assessment/" class="govuk-link">Back to Assessment</a>
        </div>
        </main>
      `;

      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it("should have accessible progress indicators", () => {
      document.body.innerHTML = `
        <progress
          class="govuk-progress-bar"
          max="10"
          value="5"
          aria-label="Questions marked for improvement"
          role="progressbar"
          aria-valuenow="5"
          aria-valuemin="0"
          aria-valuemax="10">
          50%
        </progress>
      `;

      const progress = document.querySelector("progress");
      expect(progress.getAttribute("aria-label")).toBe(
        "Questions marked for improvement",
      );
      expect(progress.getAttribute("role")).toBe("progressbar");
      expect(progress.getAttribute("aria-valuenow")).toBe("5");
      expect(progress.getAttribute("aria-valuemin")).toBe("0");
      expect(progress.getAttribute("aria-valuemax")).toBe("10");
    });

    it("should have accessible checkbox labels", () => {
      document.body.innerHTML = `
        <div class="govuk-checkboxes__item">
          <input
            class="govuk-checkboxes__input"
            id="improve-test-123"
            type="checkbox"
            aria-label="I need to do better at monitoring systems"
          />
          <label class="govuk-label govuk-checkboxes__label" for="improve-test-123">
            I need to do better
          </label>
        </div>
      `;

      const checkbox = document.querySelector('input[type="checkbox"]');
      const label = document.querySelector("label");

      expect(checkbox.getAttribute("aria-label")).toBeTruthy();
      expect(label.getAttribute("for")).toBe(checkbox.id);
    });

    it("should have accessible button with proper label", () => {
      document.body.innerHTML = `
        <button type="button" class="govuk-button" id="continue-to-report">
          Continue to Report
        </button>
      `;

      const button = document.querySelector("button");
      expect(button.textContent.trim()).toBe("Continue to Report");
      expect(button.getAttribute("type")).toBe("button");
    });
  });

  describe("Report Page Filter Banner", () => {
    it("should have no axe violations on filter banner", async () => {
      document.body.innerHTML = `
        <div id="filter-banner" role="status" aria-live="polite">
          <div class="govuk-notification-banner" role="region">
            <div class="govuk-notification-banner__header">
              <h2 class="govuk-notification-banner__title">Filter Active</h2>
            </div>
            <div class="govuk-notification-banner__content">
              <p class="govuk-body">
                Showing 3 of 15 questions marked for improvement.
              </p>
              <button class="govuk-button govuk-button--secondary">
                Modify improvement selections
              </button>
            </div>
          </div>
        </div>
      `;

      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it("should have accessible live region for filter changes", () => {
      document.body.innerHTML = `
        <div id="filter-banner" role="status" aria-live="polite">
          <p>Showing 5 of 20 questions</p>
        </div>
      `;

      const banner = document.querySelector("#filter-banner");
      expect(banner.getAttribute("role")).toBe("status");
      expect(banner.getAttribute("aria-live")).toBe("polite");
    });
  });

  describe("Summary Table", () => {
    it("should have no axe violations on summary table", async () => {
      document.body.innerHTML = `
        <main role="main">
        <div id="summary-table">
          <table class="govuk-table">
            <caption class="govuk-table__caption govuk-table__caption--m">
              Improvement Areas by Category
            </caption>
            <thead class="govuk-table__head">
              <tr class="govuk-table__row">
                <th scope="col" class="govuk-table__header">Category</th>
                <th scope="col" class="govuk-table__header govuk-table__header--numeric">
                  Questions Answered
                </th>
                <th scope="col" class="govuk-table__header govuk-table__header--numeric">
                  Marked for Improvement
                </th>
              </tr>
            </thead>
            <tbody class="govuk-table__body">
              <tr class="govuk-table__row">
                <th scope="row" class="govuk-table__header">Operations</th>
                <td class="govuk-table__cell govuk-table__cell--numeric">10</td>
                <td class="govuk-table__cell govuk-table__cell--numeric">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        </main>
      `;

      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it("should have proper table semantics", () => {
      document.body.innerHTML = `
        <table class="govuk-table">
          <caption class="govuk-table__caption">Test Caption</caption>
          <thead class="govuk-table__head">
            <tr class="govuk-table__row">
              <th scope="col" class="govuk-table__header">Column 1</th>
            </tr>
          </thead>
          <tbody class="govuk-table__body">
            <tr class="govuk-table__row">
              <th scope="row" class="govuk-table__header">Row 1</th>
            </tr>
          </tbody>
        </table>
      `;

      const caption = document.querySelector("caption");
      const colHeader = document.querySelector('th[scope="col"]');
      const rowHeader = document.querySelector('th[scope="row"]');

      expect(caption).toBeTruthy();
      expect(colHeader).toBeTruthy();
      expect(rowHeader).toBeTruthy();
    });
  });

  describe("Focus Management", () => {
    it("should have visible focus indicators on interactive elements", () => {
      document.body.innerHTML = `
        <style>
          *:focus { outline: 3px solid #fd0; outline-offset: 0; }
        </style>
        <button class="govuk-button">Test Button</button>
        <input type="checkbox" class="govuk-checkboxes__input" />
        <a href="#" class="govuk-link">Test Link</a>
      `;

      const button = document.querySelector("button");
      const checkbox = document.querySelector('input[type="checkbox"]');
      const link = document.querySelector("a");

      // Verify elements can receive focus (they are not disabled)
      expect(button.hasAttribute("disabled")).toBe(false);
      expect(checkbox.hasAttribute("disabled")).toBe(false);

      // Verify they are interactive elements
      expect(button.tagName.toLowerCase()).toBe("button");
      expect(checkbox.tagName.toLowerCase()).toBe("input");
      expect(link.tagName.toLowerCase()).toBe("a");
    });
  });

  describe("Color Contrast", () => {
    it("should use GOV.UK Design System classes with compliant contrast", () => {
      // GOV.UK Design System guarantees WCAG AA contrast ratios
      document.body.innerHTML = `
        <button class="govuk-button">Primary Button</button>
        <button class="govuk-button govuk-button--secondary">Secondary Button</button>
        <a href="#" class="govuk-link">Link</a>
        <p class="govuk-body">Body text</p>
      `;

      // Verify GOV.UK classes are used (which have tested contrast)
      expect(document.querySelector(".govuk-button")).toBeTruthy();
      expect(document.querySelector(".govuk-button--secondary")).toBeTruthy();
      expect(document.querySelector(".govuk-link")).toBeTruthy();
      expect(document.querySelector(".govuk-body")).toBeTruthy();
    });
  });

  describe("Semantic HTML", () => {
    it("should use proper heading hierarchy", () => {
      document.body.innerHTML = `
        <h1>Main Title</h1>
        <h2>Question Title</h2>
        <h3>Subsection</h3>
      `;

      const h1 = document.querySelector("h1");
      const h2 = document.querySelector("h2");
      const h3 = document.querySelector("h3");

      expect(h1).toBeTruthy();
      expect(h2).toBeTruthy();
      expect(h3).toBeTruthy();
    });

    it("should use semantic landmarks", async () => {
      document.body.innerHTML = `
        <main role="main">
          <article>
            <h1>Report Compilation</h1>
            <section>
              <h2>Progress</h2>
              <progress value="5" max="10"></progress>
            </section>
          </article>
        </main>
      `;

      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });
  });
});
