---
layout: sub-navigation
title: Security
eleventyNavigation:
  parent: Assessment
---

TODO: insert GovAssure baseline? or excerpt from?

<form name="{{page.fileSlug}}">
  {%- for post in collections[page.fileSlug] -%}
    {% include 'question.njk' %}
  {%- endfor -%}
  {% include 'nextAssessmentButton.njk' %}
</form>
