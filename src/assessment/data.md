---
layout: sub-navigation
tags: cmm
title: Data
sectionKey: Assessment
eleventyNavigation:
  parent: Assessment
---

<form name="{{page.fileSlug}}">
  {%- for post in collections[page.fileSlug] -%}
    {% include 'question.njk' %}
  {%- endfor -%}
  {% include 'nextAssessmentButton.njk' %}
</form>
