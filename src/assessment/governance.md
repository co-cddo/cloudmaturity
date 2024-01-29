---
layout: sub-navigation
title: Governance
eleventyNavigation:
  parent: Assessment
---

## What is your primary method for provisioning cloud services?[radios] =

() **Manual or Imperative Provisioning:** Cloud services are primarily provisioned manually through consoles, portals, CLI, or other tools, without significant automation.
() **Limited Scripting with No Standards:** Provisioning involves some scripting, but there are no formal standards or consistency across project teams.
() **Partial Declarative Automation:** Declarative automation is used for provisioning some cloud services across their lifecycle, but this practice is not uniform across all teams.
() **Widespread Use of Declarative Automation:** Most project teams employ declarative automation for cloud service provisioning, indicating a higher level of maturity in automation practices.
() **Mandatory Declarative Automation via CI/CD:** Declarative automation is mandated for provisioning all production services, and it is exclusively executed through Continuous Integration/Continuous Deployment (CI/CD) pipelines.

## How does your organization handle the creation and storage of build artifacts?[radios] =

() **Ad-Hoc or Non-Existent Artifact Management:** Build artifacts are not systematically managed; code and configurations are often edited live on servers.
() **Environment-Specific Rebuilds:** Artifacts are rebuilt in each environment, leading to potential inconsistencies and inefficiencies.
() **Basic Artifact Storage with Version Control:** Build artifacts are stored, possibly with version control, but without strong emphasis on immutability or security measures.
() **Pinned Dependencies with Cryptographic Verification:** All dependencies in build artifacts are tightly pinned to specific versions, with cryptographic signing or hashes to ensure integrity.
() **Immutable, Signed Artifacts with Audit-Ready Storage:** Immutable build artifacts are created and cryptographically signed, especially for production. All artifacts are stored in immutable storage for a defined period for audit purposes, with a clear process to recreate environments for thorough audits or criminal investigations.

## How is version control and branch strategy implemented in your organization?[radios] =

() **Limited Version Control Usage:** Version control is used minimally, indicating a lack of robust processes for managing code changes and history.
() **Custom, Unconventional Branch Strategy:** An invented branch strategy is in use, not aligning with standard methodologies and potentially leading to confusion or inefficiencies.
() **Adapted Recognized Branch Strategy:** The organization adapts a recognized branch strategy (like GitFlow or GitHubFlow), tailoring it to specific needs while maintaining some standard practices.
() **Textbook Implementation of a recognized branch strategy:** The organization adheres strictly to a model such as GitFlow, a recognized branch strategy suitable for managing complex development processes.
() **Textbook Implementation of a streamlined branch strategy:** The organization follows a streamlined branch strategy ideal for continuous delivery and simplified collaboration such as GitHubFlow precisely.

## How does your organization manage its cloud environment?[radios] =

() **Manual Click-Ops as Required:** Cloud management is performed manually as and when needed, without any systematic approach or automation.
() **Documented Manual Click-Ops:** Manual click-ops are used, but steps are documented. Operations may be tested in a similarly maintained non-production environment, though discrepancies likely exist between environments.
() **Semi-Automated with Some Scripting:** Some aspects of cloud management are automated, possibly through scripting, but manual interventions are still common for complex tasks or configurations.
() **Highly Automated with Standardized Processes:** Cloud management is largely automated with standardized processes across environments. Regular reviews and updates are made to ensure alignment with best practices.
() **Fully Managed by Declarative Code with Drift Detection:** Cloud management is fully automated and managed by declarative code. Continual automated drift detection is in place, with alerts for any deviations treated as significant incidents.

## How does your organization manage and update access policies and controls, and how are these changes communicated?[radios] =

() **Ad-Hoc Policy Management and Inconsistent Application:** Policies are not formally defined; decisions are based on individual opinion or past experience. Policies are not published, access controls are inconsistently applied, and exemptions are often granted without follow-up.
() **Basic Policy Documentation with Some Communication:** Access policies are documented, but updates and their communication are irregular. There is a lack of a systematic approach to applying and communicating policy changes.
() **Regular Policy Reviews with Formal Communication Processes:** Policies are regularly reviewed and updated, with formal processes for communicating changes to relevant stakeholders, though the process may not be fully transparent or collaborative.
() **Integrated Policy Management with Stakeholder Engagement:** Policy updates are managed through an integrated process involving key stakeholders. Changes are communicated effectively, ensuring clear understanding across the organization.
() **Policy as Code with Transparent, Collaborative Updates:** Policy intent and implementation are maintained in version control, accessible to all. The process for proposing updates is clear and well-understood, allowing for regular, transparent updates akin to software releases. Policies have testable side effects, ensuring clarity and comprehension.

## How is policy application and enforcement managed in your organization?[radios] =

() **No Policy Application:** Policies are not actively applied within the organization.
() **Policy Existence Without Enforcement:** Policies exist but are not actively enforced or monitored.
() **Process-Driven Application:** Policies are applied primarily through organizational processes without significant technical support.
() **Process-Driven with Limited Technical Control:** Policies are comprehensively applied through processes, supported by limited technical control mechanisms.
() **Fully Integrated Application and Enforcement:** Policies are applied and enforced comprehensively through well-established processes, with robust technical controls executed at all stages.

## How does the shared responsibility model influence your organization's approach to cloud consumption?[radios] =

() **Minimal Consideration of Shared Responsibility:** The shared responsibility model is not a primary factor in cloud consumption decisions, often leading to misunderstandings or gaps in responsibility.
() **Basic Awareness of Shared Responsibilities:** There is a basic understanding of the model, but it's not systematically applied or deeply understood across the organization.
() **Informed Decision-Making Based on Shared Responsibilities:** Decisions regarding cloud consumption are informed by the shared responsibility model, ensuring a clearer understanding of the division of responsibilities.
() **Strategic Integration of Shared Responsibility in Cloud Planning:** The shared responsibility model is strategically integrated into cloud consumption planning, with regular assessments to ensure responsibilities are well-managed. Decisions to retain responsibilities in house are documented and shared with the cloud vendor.
() **Critical Factor in Cloud Consumption and Value Assessment:** The shared responsibility model is central to all decision-making regarding cloud consumption. It's regularly revisited to assess value for money and optimize the division of responsibilities with the cloud vendor.

{% include 'nextAssessmentButton.njk' %}
