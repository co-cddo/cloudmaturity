---
layout: sub-navigation
title: Cost & Sustainability
eleventyNavigation:
  parent: Assessment
---

## -How do you plan, measure, and optimize your cloud spend?[radios] = 
() Visibility of billing is protected visible to management and finance teams
() Finance teams use the information to make pre-committed spend where appropriate
() Environments and applications are configured to terminate when not needed or scale down. e.g. non-production environments are spun down to zero at evenings and weekends.
() Developers and engineers have visibility of cost on a daily basis and plan for the impact of their choices
() Spend alerts are configured at several thresholds and set to be sent to increasing escalatory points in the business who are empowered to act upon them in short order. Developers regularly formally reflect on the cost effectiveness of the system and prioritize substantially beneficial rework.

## -How do you allocate capacity for production workloads?[radios] = 

() Typically provision for peak.
() Provision for average consumption and manually scale up and down seasonally as needed.
() Autoscaling enabled for some components with simple capacity or utilization-based metrics.
() Autoscaling usage is common with limited use of log or application metrics.
() Ubiquitous use of autoscaling based on log or application metrics.

{% include 'nextAssessmentButton.njk' %}
