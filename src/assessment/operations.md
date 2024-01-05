---
layout: sub-navigation
title: Operations
eleventyNavigation:
  parent: Assessment
---

## What is the structure of your organization in terms of managing cloud operations?[radios] =

() **Developer-Managed Cloud Operations:** There is no dedicated cloud team; application developers are responsible for managing all aspects of cloud operations.
() **Fully Outsourced Cloud Operations and Strategy:** All cloud operations, including the definition of strategic direction, are outsourced to a third-party supplier.
() **Outsourced Operations with Internal Strategic Ownership:** Cloud operations are outsourced, but the strategic direction for cloud usage is developed and owned internally by the department.
() **Hybrid Approach with Outsourced Augmentation:** A mix of in-house and outsourced resources is used. Third-party suppliers provide additional capabilities (e.g., on-call support), while strategic cloud direction is led by departmental leaders.
() **Dedicated In-House Cloud Team:** A robust, dedicated cloud team exists within the organization, comprising at least 5 civil/public servant employees per cloud platform. This team has a shared roadmap for cloud capabilities, adoption, and migration.

## How is your organization structured to develop and implement its cloud vision and strategy?[radios] =

() **No Dedicated Cloud Team:** There is no specific team focusing on cloud strategy; teams operate in silos based on traditional, on-premises role definitions.
() **Informal Cloud Expertise:** Informal groups or individuals with cloud expertise exist, facilitating some degree of cross-organizational collaboration.
() **Formal Cross-Functional Cloud Team/COE:** A formal Cloud Center of Excellence or equivalent cross-functional team exists, providing foundational support and guidance for cloud operations.
() **Integrated Cloud Teams Following COE Standards:** Cloud teams across the organization follow standards and patterns established by the Cloud COE. Cross-functional roles are increasingly common within development teams.
() **Advanced Cloud COE Operating Model:** The Cloud COE has matured into a comprehensive operating model with fully autonomous, cross-functional teams that include experts in all necessary technology and process domains.

## How does your organization monitor and observe its cloud infrastructure and application data?[radios] =

() **Reactive and Development-Focused Observation:** Observations are primarily made during the development phase or in response to issues, with no continuous monitoring in place.
() **Basic Monitoring Tools and Manual Checks:** Basic monitoring tools are used. Checks are often manual and are not fully integrated across different cloud services.
() **Systematic Monitoring with Alerts:** Systematic monitoring is in place with alert systems for potential issues. However, the integration of infrastructure and application data is still developing.
() **Advanced Monitoring with Partial Integration:** Advanced monitoring tools are used, providing more comprehensive data. There's a degree of integration between infrastructure and application monitoring, but it's not fully seamless.
() **Integrated 'Single Pane of Glass' Monitoring:** A sophisticated, integrated monitoring system is in place, offering a 'single pane of glass' view. This system provides actionable insights from both infrastructure and application data.

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

## How does your organization ensure that applications are built and deployed in a timely manner?[radios] =

() **No Routine Measurements, Slow Processes:** There are no routine measurements for build and deployment times. Builds and deployments often take days to plan and hours to execute, with little monitoring for SLA compliance.
() **Basic Tracking with Some Delays:** Some basic tracking of build and deployment times is in place, but processes are still relatively slow, often resulting in delays.
() **Moderate Efficiency with Occasional Monitoring:** The organization has moderately efficient build and deployment processes, with occasional monitoring and efforts to adhere to timelines.
() **Streamlined Processes with Regular Monitoring:** Builds and deployments are streamlined and regularly monitored, ensuring that they are completed within reasonable timeframes.
() **Continual Improvement with Rapid Execution:** The organization has a strong focus on continual improvement and efficiency. 99% of builds and deployments are completed in single-digit minutes, with consistent monitoring and optimization efforts.

## How is your deployment and QA pipeline structured?[radios] =

() **Manual Scheduled QA Process:** Deployment and QA are handled through a manually scheduled process, lacking automation and continuous integration.
() **Basic Automation with Infrequent Deployments:** Some level of automation exists in the QA process, but deployments are infrequent and partially manual.
() **Integrated Deployment and Regular QA Checks:** Deployment is integrated with regular QA checks, featuring a moderate level of automation and consistency in the pipeline.
() **CI/CD with Automated Testing:** A Continuous Integration/Continuous Deployment (CI/CD) pipeline is in place, including automated testing and frequent, reliable deployments.
() **On-Demand Ephemeral Environments:** Deployment and QA utilize short-lived, ephemeral environments provisioned on demand, indicating a highly sophisticated, efficient, and agile pipeline.

## How does your organization obtain real-time insights and answer business-related questions?[radios] =

() **Dependence on Expert Analysis:** Insights are primarily gained through experts who can analyze data and answer questions, but this process is costly and not in real-time.
() **Basic Reporting Tools with Delayed Insights:** The organization uses basic reporting tools that provide insights, but there is typically a delay in data processing and limited real-time capabilities.
() **Intermediate Analytics with Some Real-Time Data:** A combination of analytics tools is used, offering some real-time data insights, though comprehensive, immediate access is limited.
() **Advanced Analytics Tools with Broad Real-Time Access:** The organization employs advanced analytics tools that provide broader access to real-time data, enabling quicker insights and decision-making.
() **Comprehensive Self-Service Dashboarding:** A self-service dashboarding capability is in place, offering wide access to various data points and enabling users across the organization to derive real-time insights independently.

## What is your organization's approach to planning and preparing for incident response?[radios] =

() **Ad-Hoc and Basic Efforts:** Incident response is primarily ad-hoc, with some basic efforts in place but no formalized plan or structured approach.
() **Initial Documentation at Service Launch:** A documented incident response plan is required and established at the point of introducing a new service to the live environment.
() **Regularly Updated Incident Plan:** The incident response plan is not only documented but also periodically reviewed and updated to ensure its relevance and effectiveness.
() **Integrated and Tested Plans:** Incident response planning is integrated into the broader IT and business continuity planning. Regular testing of the plan is conducted to validate procedures and roles.
() **Rehearsed and Proven Response Capability:** Incident response plans are not only documented and regularly updated but also rigorously rehearsed. The organization is capable of successfully recovering critical systems within a working day.

{% include 'nextAssessmentButton.njk' %}
