---
layout: sub-navigation
title: Data
eleventyNavigation:
  parent: Assessment
---

{%- for post in collections[page.fileSlug] -%}
{{ post.content }}
{%- endfor -%}
{% include 'nextAssessmentButton.njk' %}
