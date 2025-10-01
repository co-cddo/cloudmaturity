---
layout: sub-navigation
title: Technology
sectionKey: Assessment
tags: cmm
eleventyNavigation:
  parent: Assessment
---

<form name="{{page.fileSlug}}">
  {%- for post in collections[page.fileSlug] -%}
    {% include 'question.njk' %}
  {%- endfor -%}
  {% include 'nextAssessmentButton.njk' %}
</form>
