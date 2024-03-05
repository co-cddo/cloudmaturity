---
title: How does your organization manage its cloud environment?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Manual Click-Ops as Required:** Cloud management is performed manually as and when needed, without any systematic approach or automation.

#### How to determine if this good enough?

Cloud vendors have heavily invested in graphical user interfaces that make their services rapidly consumable with minimal upfront investment in up skilling, allowing for fast experimentation and exploration.

While this is an enormous benefit and accelerator on a micro level for individual workloads, the aggregate effect over time will inevitably lead to issues with misconfigurations which may manifest themselves in:

- Security breaches, exposing sensitive data
- Unexpected cost overruns
- Over provisioned resources
- Lack of accountability and traceability
- Apprehension to make changes due to complexity and unknown side effects
- Inconsistencies between multiple 'environments' such as dev, test, staging and production
- Over dependence on key individuals
- Employee Dissatisfaction and reduced productivity due to a disproportionate amount of time spent addressing incidents arising to misconfigurations

#### How do I do better?

##### Runbooks and Playbooks

You should start developing Runbooks and Playbooks to help you manage your cloud environment, these will be an essential first step towards identifying processes that can be later totally automated, so will have long term benefits in helping you on your cloud journey.

- [AWS Runbooks](https://wa.aws.amazon.com/wat.concept.runbook.en.html) and [AWS Playbooks](https://wa.aws.amazon.com/wat.concept.playbook.en.html)
- TODO oci links
- TODO azure links
- TODO gcp links
- TODO aws links

These documents must be readily accessible whilst not include any sensitive information such as passwords.

It is imperative to ruthlessly maintain the documentation with every change made, if deviations are even suspected the documentation will inevitably find itself immediately dismissed as irrelevant and unreliable; and divergences will only grow.

##### Change Logs and Audit Logs

Most cloud service providers provide a means of recording some audibility of changes that have been applied capturing the _who_, _when_, _what_, and _how_ of the change, however by their nature they do not provide a means of capturing the _why_ of the change.

You should ensure that this audit logging is enabled and familiarize yourself with its storage, how to query it, and its fundamental limitations.

After which you should develop a similar pattern to your runbooks of recording changes to your cloud environment, with a rationale behind them.

### **Documented Manual Click-Ops:** Manual click-ops are used, but steps are documented. Operations may be tested in a similarly maintained non-production environment, though discrepancies likely exist between environments.

### **Semi-Automated with Some Scripting:** Some aspects of cloud management are automated, possibly through scripting, but manual interventions are still common for complex tasks or configurations.

### **Highly Automated with Standardized Processes:** Cloud management is largely automated with standardized processes across environments. Regular reviews and updates are made to ensure alignment with best practices.

### **Fully Managed by Declarative Code with Drift Detection:** Cloud management is fully automated and managed by declarative code. Continual automated drift detection is in place, with alerts for any deviations treated as significant incidents.
