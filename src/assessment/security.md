---
layout: sub-navigation
title: Security
eleventyNavigation:
  parent: Assessment
---

TODO: insert GovAssure baseline? or excerpt from?

## What is your approach to privileged access management?[radios] = 

() Privileged credentials are managed ad hoc by system administrators.
() Technology controls are in place to support centralized processes with initial password and key vaulting, integrated logs, and policy-based activities.
() Identity administration controls and processes for privileged access and use of one-time passwords exist.
() Automated, risk-based workflows and controls to grant privileged access into cloud environments, with a consistent platform-wide monitoring strategy.
() Just-in-time privileges – using context to determine system access (i.e., time-based emergency break-glass access to perform critical maintenance). Real-time alerting of policy exceptions.


## How do you monitor and remediate supply chain security?[radios] = 
() Dependencies and versions are defined at when added to the project and only updated inline with overarching project releases when there are bug fixes provided or high profile advisories issued.
() Some teams use tools to monitor and remediate supply chain security ad hoc, by scanning the repositories dependency manifests, updates are periodically applied in line with overarching project releases.
() All repositories are monitored with proactive remediations automatically created. Updates are periodically applied in line with overarching project releases.
() All repositories are monitored and an aggregate view visible to a empowered centralised SOC that is informing the overarching risk position of the organisation, and capable of priotising and then coordinating remediation for high severity issues.
() In addition to above, the aggregate view is automatically triaged based on the context of where and how the dependency is used in order to focus attention on the most relevant critical issues and avoid the risk of false positives. 

## How do you monitor and remediate threats, vulnerabilities and misconfigurations?[radios] = 
() TODO: central soc/siem etc. continuously, at build time, annual ITHCs. empowered SOC analyst teams
() .
() .
() .
() .

## How do you monitor, evaluate, manage, and improve the effectiveness of your security and privacy programs?[radios] = 
() TODO: Are you continuously monitoring, evaluating, managing, and improving the effectiveness of your security and privacy programs?
() .
() .
() .
() .

{% include 'nextAssessmentButton.njk' %}
