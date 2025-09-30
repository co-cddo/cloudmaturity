---
layout: sub-navigation
order: 1
title: Assessment
eleventyNavigation:
  key: Assessment
eleventyImport:
  collections: ["cmm"]
---

{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/notification-banner/macro.njk" import govukNotificationBanner %}

Welcome to the **Cloud Maturity Model and Assessment Tool**. This quick, self-guided assessment helps you understand where your organisation stands on various aspects of cloud usage—covering governance, security, operations, cost management, and more. Each answer will generate immediate, targeted guidance, aligned with best practices from industry standards, [NCSC](https://www.ncsc.gov.uk/), [NIST](https://csrc.nist.gov/), and [GOV.UK](https://www.gov.uk/).

You can **begin** a new assessment now or **load** an existing report to build upon your previous results.

{{ govukNotificationBanner({
  text: "Your answers are only saved in your browser's local storage, so if you clear your browser's cache or cookies, you will lose your progress, we do not collect or store any data."
}) }}

{{ govukFileUpload({
  id: "reportUpload",
  name: "reportUpload",
  classes: "govuk-!-display-none",
  attributes: {
    onChange: "loadReport(event)"
  }
}) }}

{{ govukButton({
  text: "Begin",
  href: (collections.all | eleventyNavigation("Assessment") | sort(false, true, 'key') | first).url
})}}

{{ govukButton({
  text: "Load a previous report",
  attributes: {
    onClick: "document.getElementById('reportUpload').click()"
  },
  classes: "govuk-button--secondary"
})}}

<script src="/{{"assets/dataMigration.js" | htmlBaseUrl}}"></script>
<script src="/{{"assets/cmm_report.js" | htmlBaseUrl}}"></script>
<script src="/{{"assets/cmm_assessment.js" | htmlBaseUrl}}"></script>
