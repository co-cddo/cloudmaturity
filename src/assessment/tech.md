---
layout: sub-navigation
title: Technology
eleventyNavigation:
  parent: Assessment
---

## How are technology selections made for new projects within your organization?[radios] =

() **Ad-Hoc and Independent Selections:** Each project independently selects technologies, leading to a diverse and often incompatible technology estate.
() **Uniform Technology Mandate:** Technology choices are highly regulated, with a uniform, organization-wide technology stack that all projects must adhere to.
() **Guided by Outdated Resources:** A technology radar and some documented patterns exist, but they are outdated and not widely regarded as useful or relevant.
() **Current and Maintained Guidance:** A regularly updated technology radar, along with current documentation and patterns, covers a wide range of use cases and is actively used for guidance.
() **Collaborative and Evolving Ecosystem:** Regular show-and-tell sessions and collaboration with existing teams are encouraged. There's a strong emphasis on reusing and extending existing solutions, alongside rewarding innovation and experimentation.

## What characterizes the majority of your current technology stack?[radios] =

() **Monolithic Applications with Wide Technology Stack:** The predominant architecture is monolithic, with applications deployed as single, indivisible units encompassing a wide range of technologies.
() **Modular but Not Independently Deployable:** Applications are broken down into modules, offering greater development flexibility, yet these modules are not deployable as independent components.
() **Modularized and Individually Deployable Components:** Applications are structured into self-contained, individually deployable components. However, significant interdependencies add complexity to testing.
() **Mostly Independent Deployment with Some Monoliths:** While most application components are independently deployable and testable, a few core system components still rely on a monolithic architecture.
() **Fully Component-Based Modular Architecture:** The technology stack consistently utilizes a component-based modular approach. All components are independently testable and deployable, free from monolithic stack dependencies.

{% include 'nextAssessmentButton.njk' %}
