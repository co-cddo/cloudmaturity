---
layout: sub-navigation
title: Governance
eleventyNavigation:
  parent: Assessment
---

## How are technology selections made for new projects within your organization?[radios] =

() **Ad-Hoc and Independent Selections:** Each project independently selects technologies, leading to a diverse and often incompatible technology estate.
() **Uniform Technology Mandate:** Technology choices are highly regulated, with a uniform, organization-wide technology stack that all projects must adhere to.
() **Guided by Outdated Resources:** A technology radar and some documented patterns exist, but they are outdated and not widely regarded as useful or relevant.
() **Current and Maintained Guidance:** A regularly updated technology radar, along with current documentation and patterns, covers a wide range of use cases and is actively used for guidance.
() **Collaborative and Evolving Ecosystem:** Regular show-and-tell sessions and collaboration with existing teams are encouraged. There's a strong emphasis on reusing and extending existing solutions, alongside rewarding innovation and experimentation.

## What strategies guide your decisions on geographical distribution and operational management of cloud workloads and data storage?[radios] =

() **Single Zone, Constant Operation:** All data and workloads are confined to a single availability zone within an approved region, with workloads typically running continuously.
() **Intra-Region Distribution:** Workloads and data are spread across multiple availability zones within a single region to enhance availability and resilience.
() **Selective Multi-Region Utilization:** An additional, legally compliant non-UK region is used for specific purposes, such as non-production workloads, certain data types, or as part of disaster recovery planning.
() **Capability and Sustainability-Driven Selection:** Regions are chosen based solely on their technical capabilities, cost-effectiveness, and environmental sustainability credentials, without any specific technical constraints.
() **Dynamic and Cost-Sustainable Distribution:** Workloads are dynamically allocated across various regions and availability zones, with scheduling optimized for cost-efficiency and sustainability, adapting in real-time to changing conditions.

## How does your organization plan, measure, and optimize the environmental sustainability and carbon footprint of its cloud compute resources?[radios] =

() **Basic Vendor Reliance:** Sustainability isn't actively measured internally; reliance is placed on cloud vendors who are contractually obligated to work towards carbon neutrality, likely through offsetting.
() **Initial Awareness and Basic Policies:** Some basic policies and goals for sustainability are set. Efforts are primarily focused on awareness and selecting vendors with better environmental records.
() **Active Measurement and Target Setting:** The organization actively measures its cloud compute carbon footprint and sets specific targets for reduction. This includes choosing cloud services based on their sustainability metrics.
() **Integrated Sustainability Practices:** Sustainability is integrated into cloud resource planning and usage. This includes regular monitoring and reporting on sustainability metrics and making adjustments to improve environmental impact.
() **Advanced Optimization and Dynamic Management:** Advanced strategies are in place, like automatic time and location shifting of workloads to minimize impact. Data retention and cloud product selection are deeply aligned with sustainability goals and carbon footprint metrics.

## What is your organization's approach to planning and preparing for incident response?[radios] =

() **Ad-Hoc and Basic Efforts:** Incident response is primarily ad-hoc, with some basic efforts in place but no formalized plan or structured approach.
() **Initial Documentation at Service Launch:** A documented incident response plan is required and established at the point of introducing a new service to the live environment.
() **Regularly Updated Incident Plan:** The incident response plan is not only documented but also periodically reviewed and updated to ensure its relevance and effectiveness.
() **Integrated and Tested Plans:** Incident response planning is integrated into the broader IT and business continuity planning. Regular testing of the plan is conducted to validate procedures and roles.
() **Rehearsed and Proven Response Capability:** Incident response plans are not only documented and regularly updated but also rigorously rehearsed. The organization is capable of successfully recovering critical systems within a working day.

## What is your approach to managing data retention within your organization?[radios] =

() **Organization-Level Policy Awareness:** Data retention policies are defined at the organization level, and all projects/programs are aware of their specific responsibilities.
() **Compliance Attestation by Projects:** Projects and programs are not only aware but also required to formally attest their compliance with the data retention policies.
() **Regular Audits and Reviews:** Data retention practices are periodically audited and reviewed for compliance, with findings addressed through action plans.
() **Inclusion in Risk Management:** Edge cases and exceptions in data retention are specifically identified and managed within the organization’s risk register.
() **Automated Enforcement with Cloud Tools:** Data retention is actively monitored and enforced using native cloud services and tools, ensuring adherence to policies through automation.

## How does your organization identify, classify, and manage its data storage and usage?[radios] =

() **Decentralized and Ad Hoc Management:** Data management is largely uncoordinated and informal, with limited organizational oversight of data storage locations and types.
() **Team-Based Documentation and Manual Policy Adherence:** Each team documents the data they handle, including its schema and sensitivity. Compliance with organizational data policies is managed manually by individual teams.
() **Inventoried and Classified Data:** An inventory of data, created manually or via scanning tools, exists. Data is classified by type [e.g., PII, card data], sensitivity, and regulatory requirements [e.g., retention, location].
() **Reviewed and Partially Documented Data Understanding:** There’s a comprehensive understanding of data location, classification, and sensitivity, with regular compliance reviews. Data lineage is generally understood but not consistently documented.
() **Advanced Data Catalog and Lineage Tracking:** A detailed data catalog exists, encompassing data types and metadata. It includes a user-friendly glossary, quality metrics, use cases, and thorough tracking of data lineage.

## What measures are in place in your organization to mitigate the risk of data breaches, including exfiltration, corruption, deletion, and non-availability?[radios] =

() **Manual Data Access Classification:** Data access is primarily managed through manual classification, with minimal automation or centralized control.
() **Centralized Policies and Controls:** A centralized set of policies and controls is in place to prevent unauthorized data access, forming the core of the data security strategy.
() **Policies with Limited Monitoring:** In addition to centralized policies and controls, limited monitoring for data exfiltration is conducted to identify potential breaches.
() **Comprehensive Controls with Automated Detection:** Preventative, detective, and corrective controls are implemented. Anomaly detection and correction are automated using a range of platforms and tools, providing a more robust defense.
() **Fully Automated Security and Proactive Monitoring:** Advanced, fully automated controls and anomaly detection systems are in place. This includes proactive monitoring, regular access reviews, and continuous auditing to ensure data security and compliance.

{% include 'nextAssessmentButton.njk' %}
