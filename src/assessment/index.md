---
layout: sub-navigation
order: 1
title: Assessment
eleventyNavigation:
  key: Assessment
---

{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}
{% from "govuk/components/input/macro.njk" import govukInput %}

## How to use this tool

{{ govukInput({
  label: {
    text: "Name of report"
  },
  id: "input-cmm_intro_department",
  name: "cmm_intro_department",
  attributes: {
    placeholder: "My Organisation"
  }
}) }}

> This could be the name of your department or directorate, or any other name you like, it isn't saved and only displayed on the report at the end.

{{ govukFileUpload({
  id: "reportUpload",
  name: "reportUpload",
  classes: "govuk-!-display-none",
  attributes: {
    onChange: "loadReport(event)"
  }
}) }}
{% include 'nextAssessmentButton.njk' %}
{{ govukButton({
  text: "Load a previous report",
  attributes: {
    onClick: "document.getElementById('reportUpload').click()"
  },
  classes: "govuk-button--secondary"
})}}

<script src="/{{"assets/cmm_report.js" | htmlBaseUrl}}"></script>
