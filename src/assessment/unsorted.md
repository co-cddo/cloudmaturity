---
layout: sub-navigation
order: 99
title: Unsorted
eleventyNavigation:
  parent: Assessment
---

## What level of executive sponsorship supports your organization's 100% cloud adoption initiative?[radios] =

() **No Executive Sponsorship:** There is no executive support for cloud adoption, indicating a lack of strategic prioritization at the leadership level.
() **Senior Management Sponsorship:** The initiative is sponsored by senior management, indicating some level of support but potentially lacking full executive influence.
() **C-Level Executive Sponsorship:** One or more C-level executives sponsor the cloud adoption, demonstrating significant commitment at the highest levels of leadership.
() **Comprehensive C-Level Sponsorship with Roadmap:** Full sponsorship from C-level executives, accompanied by a shared, strategic roadmap for cloud adoption and migration.
() **C-Level Sponsorship Driving Cloud-First Culture:** Comprehensive C-level sponsorship not only provides strategic direction but also actively fosters a culture of cloud-first adoption, experimentation, and innovation throughout the organization.

## What are the success criteria for your cloud team?[radios] =

() **No Defined Success Criteria:** The cloud team operates without specific, defined criteria for measuring success.
() **Initial Achievements with Proofs of Concept:** Success is measured by completing initial proofs of concept or developing a 'minimum viable cloud/platform'.
() **Launching Workloads in Production:** Success includes transitioning one or more workloads into a live production environment on the cloud.
() **Scaling Prototypes to Core Services:** Success involves scaling initial prototypes to operate core technical services in the cloud, supporting business-critical applications.
() **Innovation and Value Creation Alignment:** The organization has established success criteria that not only focus on cloud-based innovation and experimentation but also on creating tangible value through transformation initiatives, all aligned with the organization’s broader goals and strategy.

## What is your primary method for provisioning cloud services?[radios] =

() **Manual or Imperative Provisioning:** Cloud services are primarily provisioned manually through consoles, portals, CLI, or other tools, without significant automation.
() **Limited Scripting with No Standards:** Provisioning involves some scripting, but there are no formal standards or consistency across project teams.
() **Partial Declarative Automation:** Declarative automation is used for provisioning some cloud services across their lifecycle, but this practice is not uniform across all teams.
() **Widespread Use of Declarative Automation:** Most project teams employ declarative automation for cloud service provisioning, indicating a higher level of maturity in automation practices.
() **Mandatory Declarative Automation via CI/CD:** Declarative automation is mandated for provisioning all production services, and it is exclusively executed through Continuous Integration/Continuous Deployment (CI/CD) pipelines.

## How does your organization release updates to its applications and services?[radios] =

() **Downtime for Updates:** Updates are applied by shutting down production, updating applications in place, and restarting. Rollbacks rely on backups if needed.
() **Rolling Updates During Maintenance Windows:** Updates are performed using rolling updates, impacting production capacity to some extent, usually scheduled during maintenance windows.
() **Manual Cut-Over with New Versions:** New versions of applications are deployed without impacting existing production, with a manual transition to the new version during a maintenance window. Manual rollback to the previous version is possible if needed.
() **Canary or Blue/Green Strategy with Manual Transition:** Updates are released using a canary or blue/green strategy, allowing manual transition between current and new versions. Formal maintenance windows are not routinely necessary.
() **Dynamic Canary/Blue/Green Strategy without Maintenance Windows:** Updates are managed via a canary or blue/green strategy with dynamic transitioning of users between versions. This approach eliminates the need for formal maintenance windows.

## How comprehensive is the use of CI/CD tooling in your organization?[radios] =

() **No CI/CD Tooling:** Traditional build, test, and deploy practices are in use, with no implementation of CI/CD tooling.
() **Limited CI/CD Tooling on Some Projects:** CI/CD tooling is used by some projects, but there are no formal standards or widespread adoption across the organization.
() **Varied CI/CD Tooling Across Teams:** Many project teams use CI/CD tooling, though the choice of tools and practices is based on individual team preferences.
() **Widespread, Team-Preferred CI/CD Tooling:** Most project teams employ CI/CD tooling, largely based on team preferences, with traditional practices being very limited.
() **Standardized and Consistent CI/CD Practices:** A standardized CI/CD pipeline is consistently used across project teams organization-wide, indicating a high level of maturity in deployment practices.

## What characterizes the majority of your current technology stack?[radios] =

() **Monolithic Applications with Wide Technology Stack:** The predominant architecture is monolithic, with applications deployed as single, indivisible units encompassing a wide range of technologies.
() **Modular but Not Independently Deployable:** Applications are broken down into modules, offering greater development flexibility, yet these modules are not deployable as independent components.
() **Modularized and Individually Deployable Components:** Applications are structured into self-contained, individually deployable components. However, significant interdependencies add complexity to testing.
() **Mostly Independent Deployment with Some Monoliths:** While most application components are independently deployable and testable, a few core system components still rely on a monolithic architecture.
() **Fully Component-Based Modular Architecture:** The technology stack consistently utilizes a component-based modular approach. All components are independently testable and deployable, free from monolithic stack dependencies.

## How does your organization approach the use of compute services in the cloud?[radios] =

() **Long-Running Homogeneous VMs:** Workloads are consistently deployed on long-running, homogeneously sized Virtual Machines (VMs), without variation or optimization.
() **Primarily Long-Running VMs with Limited Experimentation:** Most workloads are on long-running VMs, with some limited experimentation in containers or function-based services for non-critical tasks.
() **Mixed Use with Some Advanced Compute Options:** Some production workloads are run in containers or function-based compute services. Ad-hoc use of short-lived VMs is practiced, with efforts to right-size based on workload needs.
() **Regular Use of Short-Lived VMs and Containers:** There is regular use of short-lived VMs and containers, along with some function-based compute services. This indicates a move towards more flexible and scalable compute options.
() **'Fit for Purpose' Approach with Rigorous Right-Sizing:** Cloud services selection is driven by a strict 'fit for purpose' approach. This includes a rigorous continual right-sizing process and a solution evaluation hierarchy favoring SaaS > FaaS > Containers as a Service > Platform/Orchestrator as a Service > Infrastructure as a Service.

## How does the shared responsibility model influence your organization's approach to cloud consumption?[radios] =

() **Minimal Consideration of Shared Responsibility:** The shared responsibility model is not a primary factor in cloud consumption decisions, often leading to misunderstandings or gaps in responsibility.
() **Basic Awareness of Shared Responsibilities:** There is a basic understanding of the model, but it's not systematically applied or deeply understood across the organization.
() **Informed Decision-Making Based on Shared Responsibilities:** Decisions regarding cloud consumption are informed by the shared responsibility model, ensuring a clearer understanding of the division of responsibilities.
() **Strategic Integration of Shared Responsibility in Cloud Planning:** The shared responsibility model is strategically integrated into cloud consumption planning, with regular assessments to ensure responsibilities are well-managed.
() **Critical Factor in Cloud Consumption and Value Assessment:** The shared responsibility model is central to all decision-making regarding cloud consumption. It's regularly revisited to assess value for money and optimize the division of responsibilities with the cloud vendor.

## How does your organization ensure that applications are built and deployed in a timely manner?[radios] =

() **No Routine Measurements, Slow Processes:** There are no routine measurements for build and deployment times. Builds and deployments often take days to plan and hours to execute, with little monitoring for SLA compliance.
() **Basic Tracking with Some Delays:** Some basic tracking of build and deployment times is in place, but processes are still relatively slow, often resulting in delays.
() **Moderate Efficiency with Occasional Monitoring:** The organization has moderately efficient build and deployment processes, with occasional monitoring and efforts to adhere to timelines.
() **Streamlined Processes with Regular Monitoring:** Builds and deployments are streamlined and regularly monitored, ensuring that they are completed within reasonable timeframes.
() **Continual Improvement with Rapid Execution:** The organization has a strong focus on continual improvement and efficiency. 99% of builds and deployments are completed in single-digit minutes, with consistent monitoring and optimization efforts.

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
() **Textbook Implementation of GitFlow:** The organization adheres strictly to the GitFlow model, a recognized branch strategy suitable for managing complex development processes.
() **Textbook Implementation of GitHubFlow:** The organization follows the GitHubFlow model precisely, a streamlined branch strategy ideal for continuous delivery and simplified collaboration.

## How is your deployment and QA pipeline structured?[radios] =

() **Manual Scheduled QA Process:** Deployment and QA are handled through a manually scheduled process, lacking automation and continuous integration.
() **Basic Automation with Infrequent Deployments:** Some level of automation exists in the QA process, but deployments are infrequent and partially manual.
() **Integrated Deployment and Regular QA Checks:** Deployment is integrated with regular QA checks, featuring a moderate level of automation and consistency in the pipeline.
() **CI/CD with Automated Testing:** A Continuous Integration/Continuous Deployment (CI/CD) pipeline is in place, including automated testing and frequent, reliable deployments.
() **On-Demand Ephemeral Environments:** Deployment and QA utilize short-lived, ephemeral environments provisioned on demand, indicating a highly sophisticated, efficient, and agile pipeline.

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

## How does your organization engage with cloud providers to develop capabilities and services?[radios] =

() **Minimal Interaction with Cloud Providers:** The relationship with cloud providers is transactional, limited to accessing their services without any significant contact or support from their account or technical teams.
() **Basic Support Utilization:** Some basic support services from cloud providers are utilized, such as occasional technical assistance or access to standard documentation and resources.
() **Regular Interaction and Support:** There is regular interaction with cloud provider account managers, including access to standard training and support services to assist in leveraging cloud capabilities.
() **Proactive Engagement and Tailored Support:** The organization engages proactively with cloud providers, receiving tailored support, training, and workshops that align with specific needs and goals.
() **Strategic Partnership with Comprehensive Support:** Cloud providers are engaged as strategic partners, offering comprehensive support, including regular training, workshops, and active collaboration. This partnership is instrumental in realizing strategic goals and includes opportunities for the organization to showcase its work through the provider's platforms.

## How does your organization obtain real-time insights and answer business-related questions?[radios] =

() **Dependence on Expert Analysis:** Insights are primarily gained through experts who can analyze data and answer questions, but this process is costly and not in real-time.
() **Basic Reporting Tools with Delayed Insights:** The organization uses basic reporting tools that provide insights, but there is typically a delay in data processing and limited real-time capabilities.
() **Intermediate Analytics with Some Real-Time Data:** A combination of analytics tools is used, offering some real-time data insights, though comprehensive, immediate access is limited.
() **Advanced Analytics Tools with Broad Real-Time Access:** The organization employs advanced analytics tools that provide broader access to real-time data, enabling quicker insights and decision-making.
() **Comprehensive Self-Service Dashboarding:** A self-service dashboarding capability is in place, offering wide access to various data points and enabling users across the organization to derive real-time insights independently.

{% include 'nextAssessmentButton.njk' %}
