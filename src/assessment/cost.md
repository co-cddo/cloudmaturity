---
layout: sub-navigation
title: Cost & Sustainability
eleventyNavigation:
  parent: Assessment
---

{%- for post in collections[page.fileSlug] -%}
{{ post.content }}
{%- endfor -%}

{% include 'nextAssessmentButton.njk' %}
