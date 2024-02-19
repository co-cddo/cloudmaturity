---
layout: sub-navigation
title: Security
eleventyNavigation:
  parent: Assessment
---

TODO: insert GovAssure baseline? or excerpt from?

{%- for post in collections[page.fileSlug] -%}
{{ post.content }}
{%- endfor -%}

{% include 'nextAssessmentButton.njk' %}
