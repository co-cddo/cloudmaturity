---
title: What is your approach to data retention?
tags: data
eleventyNavigation:
  parent: data
---

### We have policies and everyone knows them.

#### **How to determine if this good enough**

If your entire organisation has a defined data retention policy—aligning with UK legislative requirements (such as the Data Protection Act 2018, UK GDPR) or departmental mandates—and all relevant teams know they must comply, you might consider this stage "good enough" under these conditions:

1. **Clear, Written Policy**
   - Your organisation publishes retention durations for various data types, including official government data, personal data, or any data with a defined statutory retention period.

1. **Widespread Awareness**
   - Projects and programs understand how long to store data (e.g., 2 years, 7 years, or indefinite for certain record types).
   - Staff can articulate the policy at a basic level when asked.

1. **Minimal Enforcement Overhead**
   - If your data is relatively small or low-risk, the cost of automating or auditing might not seem immediately justified.
   - No major incidents or compliance breaches have surfaced yet.

1. **Simplicity Over Complexity**
   - You have a "one-size-fits-all" approach to retention because your data usage is not highly diverse.
   - The overhead of implementing multiple retention categories might not be warranted yet.

In short, if you maintain a straightforward environment and your leadership sees no pressing issues with data retention, organisation-level policy awareness might suffice. However, for many UK public sector bodies, data sprawl and diverse workloads can quickly complicate retention, making manual approaches risky.

#### **How to do better**

Below are **rapidly actionable** steps to strengthen your organisational policy awareness and transition toward more robust management:

1. **Map Policy to Actual Cloud Storage**
   - Encourage each team to identify where their data resides and apply your organisation’s retention timeline:
     - [AWS: Tag resources (e.g., "Retention=3Years"), or use AWS Config rules to check if S3 Lifecycle policies exist](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging-and-policies.html)
     - [Azure: Use Resource Tags or Azure Policy to track "RetentionDuration," especially for blob storage](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure)
     - [GCP: Set labels for buckets or BigQuery datasets with "RetentionPeriod" and regularly check them with Cloud Asset Inventory](https://cloud.google.com/resource-manager/docs/creating-managing-labels)
     - [OCI: Use tagging to mark "RetentionPeriod=2Years," and regularly query resources with Resource Search](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)
     - IBM Cloud: Use [Resource Tagging](https://cloud.ibm.com/docs/account?topic=account-tag&interface=ui)
   - This ensures that the policy is not just known but also visible in cloud environments.

1. **Implement Basic Lifecycle Rules for Key Data Types**
   - Even at an early stage, you can set simple time-based rules:
     - [AWS: S3 Lifecycle configuration to move objects to Glacier after X days, then delete at Y days](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html)
     - [Azure: Blob Storage Lifecycle Management rules (hot → cool → archive → delete)](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure)
     - [GCP: Object Lifecycle Management for buckets or table partition expiration in BigQuery](https://cloud.google.com/storage/docs/lifecycle)
     - [OCI: Object Storage lifecycle to auto-archive or delete objects after a set period](https://docs.oracle.com/iaas/Content/Object/Tasks/usinglifecyclepolicies.htm)
     - IBM Cloud: [Cloud Object Storage Lifecycle Management](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage)

1. **Offer Practical Guidelines**
   - Simplify your policy into short, scenario-based instructions. For instance:
     - "Project data that includes personal information must be kept for 2 years, then deleted."
     - "No indefinite retention without approval from Data Protection Officer."
   - Make these guidelines easily accessible (intranet page, project templates).

1. **Encourage Regular Self-Checks**
   - Have teams perform a quick "retention check" every quarter or release cycle to see if they are retaining any data beyond the policy.
   - Tools like:
     - [AWS Glue Data Catalog to identify old data sets](https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html)
     - [Azure Purview scans to locate stale data](https://learn.microsoft.com/en-us/purview/scan-data-sources)
     - [GCP Data Catalog or DLP for scanning data that’s been sitting too long](https://cloud.google.com/data-catalog/docs/how-to/lineage-gcp)
     - [OCI Data Catalog or resource tagging queries for identifying older objects](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)

1. **Align with Stakeholders**
   - Brief senior leadership, legal teams, and information governance officers on any proposed changes or automation.
   - Gains their support by showing how these improvements reduce compliance risk and free up unnecessary storage costs.

By proactively mapping retention policies to actual data, implementing simple lifecycle rules, and guiding teams with clear, scenario-based instructions, you reinforce "Organisation-Level Policy Awareness" with tangible, enforceable practices.

### Teams must show they follow our policies.

#### **How to determine if this good enough**

In this stage, each project/program must explicitly confirm they follow the retention rules. This might happen through project gating, sign-offs, or periodic reviews. You can consider it "good enough" if:

1. **Documented Accountability**
   - Each project lead or manager signs a statement or includes a section in project documentation confirming adherence to the retention schedule.
   - This accountability often fosters better data hygiene.

1. **Compliance Embedded in Project Lifecycle**
   - When new projects or services start, part of the onboarding includes discussing data retention needs.
   - Projects are less likely to "slip" on retention because they must address it at key milestones.

1. **Reduced Risk of Oversight**
   - If an audit occurs, you can point to each project’s attestation as evidence of compliance.
   - This stage often prevents ad hoc or "forgotten" data sets from persisting indefinitely.

However, attestation can be superficial if not backed by validation or partial audits. Teams might sign off on compliance but still store data in ways that violate policy. As data footprints grow, manual attestations can fail to catch hidden or newly spun-up environments.

#### **How to do better**

Below are **rapidly actionable** ways to ensure attestations translate to real adherence:

1. **Incorporate Retention Audits into CI/CD**
   - Automate checks whenever a new data store is created or an environment is updated:
     - [AWS CloudFormation Hooks to enforce a "RetentionPeriod" parameter](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/creating-and-managing-hooks.html)
     - [Azure Resource Manager / Bicep templates with a policy that rejects resources lacking a known retention rule](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/policy-reference)
     - [GCP Deployment Manager or Terraform guardrails enforcing lifecycle configurations on buckets/datasets](https://cloud.google.com/deployment-manager/docs/configuration/overview)
     - [OCI Resource Manager stack policies that mandate lifecycle rules for object storage or database backups](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Tasks/usingstackpolicies.htm)

1. **Spot-Check Attestations with Periodic Scans**
   - Randomly select a few projects each quarter to run data retention scans:
     - Compare declared retention schedules vs. actual lifecycle settings or creation dates.
     - Tools:
       - [AWS: S3 Inventory, Amazon Macie for sensitive data, or AWS Config to see if lifecycle policies match declared rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/configure-inventory.html)
       - [Azure Purview scanning, or custom scripts using Azure CLI to check each storage account’s policies](https://learn.microsoft.com/en-us/purview/register-scan-azure-blob-storage-source)
       - [GCP DLP or Cloud Functions scripts that query Cloud Storage retention settings vs. claimed policies](https://cloud.google.com/sensitive-data-protection/docs/dlp-gcs)
       - [OCI Cloud Shell + CLI scripts or Data Catalog scans verifying lifecycle alignment](https://docs.oracle.com/en-us/iaas/Content/Object/Tasks/usinglifecyclepolicies.htm)

1. **Centralise Retention Documentation**
   - Instead of scattered project documents, maintain a central registry or dashboard capturing:
     - Project name, data types, retention period, date of last attestation.
   - Provide read access to compliance and governance staff, ensuring quick oversight.

1. **Link Attestation to Funding or Approvals**
   - For large programmes, make data retention compliance a prerequisite for budget release or major go/no-go decisions.
   - This creates a strong incentive to maintain correct lifecycle settings.

1. **Short Mandatory Training**
   - Provide teams a bite-sized eLearning or workshop on how to configure retention in their chosen cloud environment.
   - This ensures they know the practical steps needed, so attestation isn’t just paperwork.

By coupling attestation with actual configuration checks, spot audits, centralised documentation, and relevant training, you boost confidence that claims of compliance match reality.

### We check that we're following policy and fix any problems we find.

#### **How to determine if this good enough**

Once regular audits and reviews are in place, your organisation systematically verifies whether teams are adhering to the mandated retention policies. This can be "good enough" if:

1. **Scheduled, Transparent Audits**
   - Every quarter or half-year, a designated group (e.g., an internal compliance team) or external auditor reviews data lifecycle settings, actual usage, and retention logs.

1. **Actionable Findings**
   - Audit outcomes lead to real change—if a project is over-retaining or missing a lifecycle rule, they must fix it promptly, with a follow-up check.

1. **Reduction in Non-Compliance Over Time**
   - Each review cycle sees fewer repeated issues or new violations, indicating the process is effective.

1. **Support from Leadership**
   - Senior leadership or governance boards take these findings seriously, dedicating resources to address them.

If your audits reveal minimal breaches and the cycle of reporting → fixing → re-checking runs smoothly, you might meet the operational needs of most public sector compliance frameworks. However, as data volumes scale, purely manual or semi-annual checks may miss real-time issues, leading to potential non-compliance between audits.

#### **How to do better**

Below are **rapidly actionable** ways to strengthen your audit and review process:

1. **Adopt Automated Compliance Dashboards**
   - Supplement periodic manual audits with near-real-time or daily checks:
     - [AWS Config conformance packs targeting retention-related rules (like S3 lifecycle policies or RDS backup windows)](https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html)
     - [Azure Policy guest configuration or automation runbooks generating compliance dashboards weekly](https://learn.microsoft.com/en-us/azure/governance/policy/how-to/get-compliance-data)
     - [GCP Policy Controller (Anthos Config Management) or custom scripts that summarize resources lacking retention policies](https://cloud.google.com/config-connector/docs/gke/overview)
     - [OCI Cloud Guard or Security Advisor customized to check for data lifecycle compliance](https://docs.oracle.com/en-us/iaas/Content/CloudGuard/Concepts/cloudguard_overview.htm)
   - This ensures frequent visibility, not just at audit time.

1. **Include Retention in Security Scans**
   - Many organisations focus on security misconfigurations but forget data retention. Integrate retention checks into:
     - [AWS Security Hub with custom standards referencing lifecycle settings](https://docs.aws.amazon.com/securityhub/latest/userguide/standards-reference.html)
     - [Azure Microsoft Defender for Cloud (formerly Security Center) with custom policy definitions around retention](https://learn.microsoft.com/en-us/azure/defender-for-cloud/create-custom-recommendations)
     - [GCP Security Command Center hooking into resource metadata for retention anomalies](https://cloud.google.com/security-command-center/docs/how-to/asset-inventory)
     - [OCI Cloud Guard custom detectors looking for missing lifecycle policies](https://docs.oracle.com/en-us/iaas/Content/CloudGuard/Concepts/cloudguard_overview.htm)
   - This ensures that retention policies are consistently enforced and monitored across your cloud environments.

1. **Track Action Plans to Closure**
   - Use a centralised ticketing or workflow tool (e.g., Jira, ServiceNow) to capture audit findings, track remediation, and confirm sign-off.
   - Tag each ticket with "Data Retention Issue" for easy reporting and trend analysis.

1. **Publish Trends and Success Metrics**
   - Show leadership the quarterly or monthly improvement in compliance percentage.
   - Celebrating zero major findings in a review cycle fosters a positive compliance culture and encourages teams to keep up the good work.

1. **Integrate with Other Governance Reviews**
   - Data retention checks can be coupled with data security, privacy, or cost reviews.
   - This holistic approach ensures teams address multiple dimensions of good data stewardship simultaneously.

By automating aspects of the review process, embedding retention checks into security tools, and systematically remediating findings, you evolve from static cyclical audits to a dynamic, ongoing compliance posture.

### We follow policy, make checks and record exceptions in a central risk register.

#### **How to determine if this good enough**

At this stage, your organisation recognises that not all data fits neatly into standard retention policies. Some sensitive projects or legal hold scenarios might require exceptions. You might be "good enough" if:

1. **Risk Awareness**
   - You systematically capture exceptions—like extended retention for litigation or indefinite archiving for historical records—within your official risk register.

1. **Clear Exception Processes**
   - Teams that need longer or shorter retention follow a documented procedure, including justification and sign-off from legal or governance staff.

1. **Risk-Based Decision Making**
   - Leadership reviews these exceptions periodically and weighs the potential risks (e.g., data breach, cost overhead, privacy concerns) against the need for extended retention.

1. **Traceable Accountability**
   - Each exception has an owner who ensures compliance with any additional safeguards (e.g., encryption, restricted access).

Such a model keeps compliance tight, as unusual retention cases are formally recognised and managed. Still, some organisations lack robust automation or real-time checks that link risk registers to actual data settings, leaving room for human error.

#### **How to do better**

Below are **rapidly actionable** ways to embed retention exceptions deeper into risk management:

1. **Automate Exception Labelling and Monitoring**
   - When a project is granted an exception, label or tag the data with "Exception=Approved" or "RetentionOverride=Yes," along with a reference ID:
     - [AWS: Resource tags, cross-referenced with AWS Config so any bucket tagged "RetentionOverride=Yes" triggers extra checks](https://docs.aws.amazon.com/config/latest/developerguide/tagging.html)
     - [Azure: Tag resources with "ExceptionID=123," then use Azure Policy or Purview to alert if it changes or lacks an expiry date](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies)
     - [GCP: Labels on buckets/datasets, or custom fields in Data Catalog referencing risk register items](https://cloud.google.com/resource-manager/docs/creating-managing-labels)
     - [OCI: Tag compartments or storage objects with "ExceptionCase=2023-456," automatically tracked in dashboards](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)

1. **Set Time-Bound Exceptions**
   - Rarely should exceptions be indefinite. Include an "exception end date" in your risk register.
   - Use cloud scheduling or lifecycle policies to revisit after that date:
     - E.g., if an exception ends in 1 year, revert to normal retention automatically unless renewed.

1. **Enhance Risk Register Integration**
   - Link risk items to your data inventory or data catalog so you can quickly see which resources are covered by the exception.
   - Tools like ServiceNow, Jira, or custom risk management solutions can cross-reference cloud resource IDs or labels.

1. **Reevaluate Exception Cases in Each Audit**
   - Incorporate exception checks into your regular data retention audits:
     - Confirm the exception is still valid and authorised.
     - If it’s no longer needed, remove it and revert to standard retention policies.

1. **Leverage Encryption or Extra Security for Exceptions**
   - If data must be stored longer than usual, apply enhanced controls:
     - [AWS KMS key with restricted access, or Amazon Macie scanning for extra sensitive data](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)
     - [Azure Key Vault for encryption at rest, or Microsoft Defender for Cloud continuous monitoring](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-key-vault-introduction)
     - [GCP CMEK (Customer-Managed Encryption Keys) or DLP auto-scans for extended-keep data](https://cloud.google.com/dlp/docs/overview)
     - [OCI Vault for keys tied to "exception data," plus Security Zones for stricter compliance controls](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)

By systematically capturing exceptions as risks, labeling them in cloud resources, setting expiry dates, and ensuring periodic review, your exceptions process remains controlled rather than a loophole. This approach mitigates the dangers of indefinite data hoarding and supports robust risk governance.

### We follow policy and use automated cloud tools to check that we do.

#### **How to determine if this good enough**

In this final, mature stage, your organisation uses automation to continuously track, enforce, and remediate data retention policies across all environments. It’s generally considered "good enough" if:

1. **Policy-as-Code**
   - Retention rules are embedded in your Infrastructure as Code templates or pipelines. When new data storage is provisioned, the lifecycle or retention policy is automatically set.

1. **Real-Time or Near Real-Time Enforcement**
   - If a project forgets to configure lifecycle rules or tries to extend retention beyond the allowed maximum, an automated policy corrects it or triggers an alert.

1. **Central Visibility**
   - A dashboard shows the overall compliance posture in near-real-time, flagging exceptions or misconfigurations.
   - Governance teams can quickly drill into any resource that violates the standard.

1. **Minimal Manual Intervention**
   - Staff rarely need to manually fix retention settings; automation handles the majority of routine tasks.
   - Audits confirm a high compliance rate, with issues addressed rapidly.

Although this represents a best-practice scenario, continuous improvements arise as new cloud services emerge or policy requirements change. Ongoing refinement ensures your automated approach stays aligned with departmental guidelines, security mandates, and potential changes in UK public sector data legislation.

#### **How to do better**

Even at the top maturity level, here are **rapidly actionable** ways to refine your automated enforcement:

1. **Deepen Integration with Data Catalog**
   - Ensure your automated retention engine references data classification in your catalog:
     - [AWS Glue Data Catalog or AWS Lake Formation integrated with S3 lifecycle rules based on classification tags](https://aws.amazon.com/blogs/storage/simplify-your-data-lifecycle-by-using-object-tags-with-amazon-s3-lifecycle/)
     - [Azure Purview classification feeding into Azure Policy to dynamically set or validate storage lifecycle settings](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure)
     - [GCP Data Catalog with labels that drive object lifecycle rules in Cloud Storage or partition expiration in BigQuery](https://cloud.google.com/storage/docs/lifecycle)
     - [OCI Data Catalog classification auto-applied to Object Storage lifecycle or DB retention policies](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)

1. **Leverage Event-Driven Remediation**
   - Use serverless functions or automation to react instantly to non-compliant provisioning:
     - [AWS Config + AWS Lambda (Custom Remediation) to auto-correct S3 buckets missing lifecycle rules](https://docs.aws.amazon.com/config/latest/developerguide/remediation.html)
     - [Azure Policy + Azure Functions "remediation tasks" that fix missing retention settings on creation](https://learn.microsoft.com/en-us/azure/governance/policy/how-to/remediate-resources)
     - [GCP EventArc/Cloud Functions triggered by resource creation to enforce retention parameters](https://cloud.google.com/eventarc/docs/tutorials/cloud-functions)
     - [OCI Event service + Functions to detect or fix newly created storage without lifecycle policies](https://docs.oracle.com/en-us/iaas/Content/Functions/Tasks/usingeventswithfunctions.htm)

1. **Expand to All Data Storage Services**
   - Beyond object storage, ensure automation covers databases, logs, and backups:
     - [AWS RDS backup retention, DynamoDB TTL, EBS snapshot lifecycle policies, CloudWatch Logs retention settings](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.BackupRetention.html)
     - [Azure SQL Database retention, Azure Monitor Log Analytics workspace retention, Azure Disk Encryption snapshots](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-configure)
     - [GCP Cloud SQL automatic backups, Datastore/Firestore TTL, Logging retention in Cloud Logging](https://cloud.google.com/logging/docs/routing/advanced-configuration)
     - [OCI Autonomous Database or DB System backups, Logging service retention, Block volume backups lifecycle](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)

1. **Adopt Predictive Monitoring for Storage Growth**
1. **Utilise Predictive Analytics for Data Growth and Anomaly Detection**
   - Employ predictive analytics to forecast data growth and identify anomalies when retention rules aren't effective:
     - [AWS QuickSight for analyzing S3 or RDS usage trends over time](https://docs.aws.amazon.com/quicksight/latest/user/forecast-function.html)
     - [Azure Monitor + Power BI for capacity trend analysis with alerts on unexpected growth in certain containers/databases](https://learn.microsoft.com/en-us/azure/azure-monitor/best-practices-analysis)
     - [GCP BigQuery usage dashboards or Looker Studio for capacity forecasting across buckets/datasets](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-forecast)
     - [OCI Performance Insights or Oracle Analytics Cloud to project future storage usage given retention policies](https://docs.oracle.com/en-us/iaas/Content/Analytics/Concepts/analytics_overview.htm)

1. **Continuously Update Policies for New Data Types**
   - As your department adopts new AI workloads, IoT sensor data, or unstructured media, confirm your automated retention tools can handle these new data flows.
   - Keep stakeholder alignment: if legislation changes (e.g., new FOI or data privacy rules), swiftly update your policy-as-code approach.

By aligning your advanced automation with data classification, extending coverage to all storage services, and employing event-driven remediation, you maintain an agile, reliable data retention program that rapidly adapts to technology or policy shifts. This ensures your UK public sector organisation upholds compliance, minimises data sprawl, and demonstrates best-in-class stewardship of public data.

**Keep doing what you’re doing,** and consider documenting or blogging about your journey to automated data retention enforcement. Submit pull requests to this guidance or share your success stories with the broader UK public sector community to help others achieve similarly robust data retention practices.
