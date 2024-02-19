---
layout: sub-navigation
title: People
eleventyNavigation:
  parent: Assessment
---

{%- for post in collections[page.fileSlug] -%}
{{ post.content }}
{%- endfor -%}

{% include 'nextAssessmentButton.njk' %}
