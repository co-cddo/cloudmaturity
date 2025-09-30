---
layout: sub-navigation
order: 2
title: Report
---

{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}

<!-- T024: Filter indicators and modify selections button -->
<div id="filter-banner"></div>
<div id="summary-table"></div>

{{ govukButton({
  text: "Modify improvement selections",
  href: "/assessment/compilation/",
  classes: "govuk-button--secondary govuk-!-margin-bottom-4"
})}}

<div id="report-goes-here"></div>
<style>
  :root {
    --foreground-lightness: 0%;
    --foreground-o-25: hsl(0deg 0% var(--foreground-lightness)/25%);
    --foreground-o-10: hsl(0deg 0% var(--foreground-lightness)/10%);
    --chaarts-purple: rgba(29,112,184,0.5);
    --to-radians: 0.01745329251;
    --scale: 1;
    --step: 0.3;
  }
  main .app-prose-scope>h2.govuk-heading-l, main .app-prose-scope>h3.govuk-heading-m {
    display: none;
  }
  #report_radar:hover {
  --chaarts-purple: rgba(29,112,184,0.9);
  }
  .chaarts[class*=radar] span {
  transition: background 1s;
  }

</style>

{{ govukFileUpload({
  id: "reportUpload",
  name: "reportUpload",
  classes: "govuk-!-display-none",
  attributes: {
    onChange: "loadReport(event)"
  }
}) }}
{{ govukButton({
  text: "Save this report",
  attributes: {
    onClick: "saveReport()"
  }
})}}
{{ govukButton({
  text: "Load a previous report",
  attributes: {
    onClick: "document.getElementById('reportUpload').click()"
  },
  classes: "govuk-button--secondary"
})}}

{%- include 'report.njk' -%}

<script src="/{{"assets/domHelpers.js" | htmlBaseUrl}}"></script>
<script src="/{{"assets/dataMigration.js" | htmlBaseUrl}}"></script>
<script src="/{{"assets/cmm_report.js" | htmlBaseUrl}}"></script>
<link rel="stylesheet" href="/{{"assets/chaarts.min.css" | htmlBaseUrl}}"/>
