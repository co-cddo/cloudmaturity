---
layout: sub-navigation
title: Report Compilation
eleventyNavigation:
  parent: Assessment
  key: Report Compilation
  order: 1.5
---

{%- from "govuk/components/checkboxes/macro.njk" import govukCheckboxes -%}
{%- from "govuk/components/button/macro.njk" import govukButton -%}

## Review your assessment and select areas for improvement

You've completed your cloud maturity assessment. Review each answer below and check "I need to do better" for any areas where you'd like to improve.

Your report will then show detailed guidance for only the areas you've selected, helping you focus on what matters most to your organization.

<div id="compilation-progress">
  <p id="progress-summary">Loading your responses...</p>
</div>

<div id="compilation-questions">
  {%- for section in collections.cmm -%}
    <div class="compilation-category" data-category="{{section.fileSlug}}">
      <h3 class="govuk-heading-m" id="category-{{section.fileSlug}}">
        {{section.data.title}}
      </h3>

      {%- for question in collections[section.fileSlug] -%}
        {%- set questionHash = question.data.title | hash -%}
        {%- set questionId = section.fileSlug + "_" + questionHash -%}

        <div class="compilation-question"
             id="compilation-{{questionId}}"
             data-category="{{section.fileSlug}}"
             data-question="{{questionHash}}"
             style="display: none;">

          <h4 class="govuk-heading-s">{{question.data.title | safe}} <a href="/assessment/{{section.fileSlug}}#{{questionHash}}" aria-label="change your answer to {{question.data.title | safe}}" class="govuk-link">[change your answer]</a></h4>

          {%- for answer in question.content | getContentsAfterTags("h3") -%}
            {%- set answerParts = answer | getContentsAfterTags("h4") -%}
            <div class="answer-guidance" data-level="{{loop.index}}" data-for="{{questionId}}" style="display: none;">
              {# Show answer option text in highlighted box #}
              <div class="govuk-inset-text">
                <strong>Your answer:</strong>
                {{- answerParts[0] | safe -}}
              </div>

              {# Show "How to determine if this good enough" section #}
              {{- answerParts[1] | safe -}}
            </div>
          {%- endfor -%}

          <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
            <div class="govuk-checkboxes__item">
              <input
                class="govuk-checkboxes__input improvement-checkbox"
                id="improve-{{questionId}}"
                name="improve-{{questionId}}"
                type="checkbox"
                data-category="{{section.fileSlug}}"
                data-question="{{questionHash}}"
                aria-label="I need to do better at {{question.data.title | safe}}"
              />
              <label class="govuk-label govuk-checkboxes__label" for="improve-{{questionId}}">
                I need to do better
              </label>
            </div>
          </div>

          <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">
        </div>
      {%- endfor -%}
    </div>

{%- endfor -%}

</div>

<div class="govuk-button-group">
  {{- govukButton({
    text: "Continue to Report",
    href: "/assessment/report/",
    attributes: {
      id: "continue-to-report"
    }
  }) -}}
  <a href="/assessment/" class="govuk-link">Back to Assessment</a>
</div>

<script src="/assets/compilation.js"></script>
