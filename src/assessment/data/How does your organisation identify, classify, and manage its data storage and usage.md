---
title: How does your organisation identify, classify, and manage its data storage and usage?
tags: data
eleventyNavigation:
  parent: data
---

### **Decentralised and Ad Hoc Management:** Data management is largely uncoordinated and informal, with limited organisational oversight of data storage locations and types.

#### **How to determine if this good enough**

In the "Decentralised and Ad Hoc Management" stage, each department, team, or project might handle data in its own way, with minimal organisational-level policies or guidance. You might consider this setup "good enough" under the following conditions:

1. **Very Small or Low-Risk Datasets**

   - If your organisation handles mostly unclassified or minimal-risk data, and the volume is modest enough that the cost of implementing formal oversight isn’t easily justified.

1. **Early Phases or Pilot Projects**

   - You might be in a startup-like environment testing new digital services, with no immediate demand for robust data governance.

1. **Minimal Regulatory/Compliance Pressure**

   - If you’re not subject to strict data protection, privacy regulations, or public accountability—for example, a small-scale internal project with no personally identifiable information (PII).

1. **Low Complexity**
   - If your data usage is straightforward (e.g., only a few spreadsheets or simple cloud storage buckets), with minimal sharing across teams or external partners.

However, for most UK public sector bodies, even "unofficial" data systems can become large or sensitive over time. In addition, compliance requirements from the UK GDPR, the Data Protection Act 2018, and departmental data security policies (e.g., Government Security Classifications) often dictate at least a baseline level of oversight. Therefore, truly "Decentralised and Ad Hoc" management is rarely sustainable.

#### **How to do better**

Here are **rapidly actionable** steps to establish foundational data management and reduce risks:

1. **Identify and Tag All Existing Data Stores**

   - Start by running a quick inventory or "data discovery" across your cloud environment:
     - [AWS: Use AWS Resource Tagging and AWS Config to identify S3 buckets, EBS volumes, RDS instances, etc.](https://docs.aws.amazon.com/config/latest/developerguide/tagging.html)
     - [Azure: Azure Resource Graph or tagging to locate Storage Accounts, SQL Databases, etc.](https://docs.microsoft.com/en-us/azure/governance/resource-graph/first-query)
     - [GCP: Cloud Asset Inventory to search for Cloud Storage buckets, BigQuery datasets, etc.](https://cloud.google.com/asset-inventory/docs/asset-inventory-overview)
     - [OCI: Resource Search and tagging to find Object Storage buckets, block volumes, databases, etc.](https://docs.oracle.com/iaas/Content/Search/Tasks/queryingresources.htm)
     - IBM Cloud: Use [Resource Tagging](https://cloud.ibm.com/docs/account?topic=account-tag&interface=ui)
   - Even if you only have partial naming standards, tag each discovered resource with "owner," "purpose," and "data type." This immediately lowers the risk of data sprawl.

1. **Establish Basic Data Handling Guidelines**

   - Document a short set of rules about where teams should store data, who can access it, and minimal security classification steps (e.g., "Use only these approved folders/buckets for OFFICIAL-SENSITIVE data").
   - Reference the [Government Security Classification Policy (GSCP)](https://www.gov.uk/government/publications/government-security-classifications) or departmental guidelines to outline baseline compliance steps.

1. **Enable Basic Monitoring and Access Controls**

   - Ensure you have simple controls in place:
     - [AWS: S3 Bucket Policies, AWS IAM Access Analyzer to detect overly open buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-analyzer.html)
     - [Azure: Role-Based Access Control (RBAC) for storage accounts, Azure Policy for restricting public endpoints](https://learn.microsoft.com/en-us/azure/storage/common/policy-reference)
     - [GCP: IAM policies for Cloud Storage, VPC Service Controls for perimeter security](https://cloud.google.com/vpc-service-controls/docs/overview)
     - [OCI: IAM compartments and security zone policies for restricting data exposure](https://docs.oracle.com/en-us/iaas/security-zone/using/security-zones.htm)
     - IBM Cloud: [Implement IAM Access Controls](https://cloud.ibm.com/docs/account?topic=account-access-management-overview)
   - This helps prevent accidental public exposure or misconfigurations.

1. **Educate Teams on Data Sensitivity**

   - Run short, targeted training or lunch-and-learns on recognising PII, official data, or other categories.
   - Emphasize that storing data in an "unofficial" manner can violate data protection laws or hamper future compliance efforts.

1. **Draft an Interim Data Policy**
   - Outline a simple, interim policy that sets initial standards for usage. For example:
     - "Always store sensitive data (OFFICIAL-SENSITIVE) in an encrypted bucket or database.
     - "Tag resources with project name, data owner, and data sensitivity level."
   - Having any policy is better than none, setting the stage for more formal governance.

By identifying your data storage resources, applying minimal security tagging, and sharing initial guidelines, you shift from ad hoc practices to a basic, more controlled environment. This foundation paves the way for adopting robust data governance tools and processes down the line.

### **Team-Based Documentation and Manual Policy Adherence:** Each team documents the data they handle, including its schema and sensitivity. Compliance with organisational data policies is managed manually by individual teams.

#### **How to determine if this good enough**

Here, you’ve moved from having no formal oversight to each team at least keeping track of their data usage—potentially in spreadsheets or internal wikis. You might view this as sufficient if:

1. **Moderate Complexity but Clear Ownership**

   - Each department or project has well-defined data owners who can articulate what data they store, how sensitive it is, and where it resides.

1. **Manual Policy is Consistently Applied**

   - You have a basic organisational data policy, and each team enforces it themselves, without heavy central governance.
   - So far, you haven’t encountered major incidents or confusion over compliance.

1. **Low Rate of Cross-Team Data Sharing**

   - If data seldom flows between departments, manual documentation might not be overly burdensome.

1. **Acceptable Accuracy**
   - Although the process is manual, your teams keep it reasonably up to date. External audits or departmental reviews find no glaring misalignment.

However, manual adherence becomes error-prone as soon as data volumes grow or cross-team collaborations increase. The overhead of maintaining separate documentation can lead to duplication, versioning issues, or compliance gaps—particularly in the UK public sector, where data sharing among services can escalate quickly.

#### **How to do better**

Below are **rapidly actionable** ways to improve upon team-based documentation:

1. **Adopt Centralised Tagging/Labeling Policies**

   - Instead of each team inventing its own naming or classification, unify your approach:
     - [AWS: Resource Tagging Strategy, e.g., "data_sensitivity=OFFICIAL" or "data_owner=TeamX"](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html)
     - [Azure Policy for enforcing tags, e.g., "Env=Production; DataClassification=PersonalData"](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies)
     - [GCP Organization Policy + labels for standard classification (like PII, OFFICIAL-SENSITIVE, etc.)](https://cloud.google.com/resource-manager/docs/organization-policy/tags-organization-policy)
     - [OCI tag namespaces, e.g., "Department: HR; Sensitivity: OFFICIAL-SENSITIVE"](https://docs.oracle.com/en-us/iaas/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm)
   - This fosters consistent data metadata across teams.

1. **Introduce Lightweight Tools for Schema and Documentation**

   - Even if you can’t deploy a full data catalog, encourage teams to use a shared wiki or knowledge base that references cloud resources directly:
     - [AWS Glue Data Catalog for structured data sets](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)
     - [Azure Purview (Microsoft Purview) for scanning and labeling data](https://learn.microsoft.com/en-us/purview/purview)
     - [GCP Data Catalog for managing metadata and simple search across datasets](https://cloud.google.com/data-catalog)
     - [OCI Data Catalog for metadata management on Oracle Cloud data sources](https://www.oracle.com/a/ocom/docs/ebook-cloud-infrastructure-data-catalog.pdf)
   - This can evolve into a more formal data inventory.

1. **Standardise on Security and Compliance Checklists**

   - Provide each team with a short checklist:
     - Data classification verified?
     - Encryption enabled?
     - Access controls (RBAC/IAM) aligned with sensitivity?
   - Tools and references:
     - [AWS IAM Access Analyzer + S3 Default Encryption checks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-analyzer.html)
     - [Azure Policy/Blueprint to enforce encryption at rest, secure endpoints](https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-atrest)
     - [GCP Data Loss Prevention (DLP) scanning or default bucket encryption checks](https://cloud.google.com/dlp/docs)
     - [OCI Security Advisor for storage encryption and IAM best practices](https://docs.oracle.com/en-us/iaas/Content/Security/Concepts/securityadvisor.htm)

1. **Schedule Quarterly or Semi-Annual Data Reviews**

   - Even if managed by each team, commit to an organisational cycle:
     - They update their data inventories, verify classification, and confirm no stale or untagged storage resources.
     - Summarise findings to central governance or a data protection officer for quick oversight.

1. **Motivate with Quick Wins**
   - Share success stories: "Team X saved money by archiving old data after a manual review, or prevented a compliance risk by discovering unencrypted PII."
   - This fosters cultural buy-in and continuous improvement.

By implementing standardised tagging, shared documentation tools, and routine checklists, you enhance consistency and reduce errors. You’re also positioning yourself for the next maturity level, which often involves more automated scanning and classification across the organisation.

### **Inventoried and Classified Data:** An inventory of data, created manually or via scanning tools, exists. Data is classified by type (e.g., PII, card data), sensitivity, and regulatory requirements (e.g., retention, location).

#### **How to determine if this good enough**

Now you have a formal data inventory that might combine manual inputs from teams and automated scans to detect data types (e.g., presence of national insurance numbers or other PII). This can be "good enough" if:

1. **You Know Where Your Data Lives**

   - You’ve mapped key data stores—cloud buckets, databases, file systems—and keep these records relatively up to date.

1. **Consistent Data Classification**

   - You apply recognised categories like "OFFICIAL," "OFFICIAL-SENSITIVE," "RESTRICTED," or other departmental terms.
   - Teams are aware of which data must follow special controls (e.g., personal data under UK GDPR, payment card data under PCI-DSS, etc.).

1. **Proactive Compliance**

   - You can respond to data subject requests or FOI (Freedom of Information) inquiries quickly, because you know which systems contain personal or sensitive data.
   - Auditors or data protection officers can trace the location of specific data sets.

1. **Clarity on Retention and Disposal**
   - You have at least basic retention timelines for certain data types (e.g., "Keep these records for 2 years, then archive or securely delete").
   - This helps you reduce storage bloat and security risk.

If your organisation can maintain this inventory without excessive overhead, meet compliance requirements, and quickly locate or delete data upon request, you might be satisfied. However, if data usage is growing or you’re facing more complex analytics and cross-team usage, you likely need more advanced governance, lineage tracking, and automation.

#### **How to do better**

To refine your "Inventoried and Classified Data" approach, apply these **rapidly actionable** enhancements:

1. **Automate Scanning and Classification**

   - Supplement manual entries with scanning tools that detect PII, sensitive patterns, or regulated data:
     - [AWS Macie for S3 data classification, or Amazon Comprehend for advanced text insights](https://docs.aws.amazon.com/macie/)
     - [Azure Purview (Microsoft Purview) scanning storage accounts, Azure SQL DB, or Azure Synapse for sensitive info](https://learn.microsoft.com/en-us/purview/)
     - [GCP Data Loss Prevention (DLP) API for scanning Cloud Storage or BigQuery data](https://cloud.google.com/sensitive-data-protection/docs)
     - [OCI Data Catalog with data profiling and classification modules](https://docs.oracle.com/en-us/iaas/data-catalog/home.htm)
   - Regularly schedule these scans so new data is automatically classified.

1. **Introduce Basic Lineage Tracing**

   - Even if partial, track how data flows from source to destination:
     - For instance, a CRM system exporting daily CSV to an S3 bucket for analytics, then into a data warehouse.
   - Tools like:
     - [AWS Glue for ETL job lineage, combined with AWS Athena queries over logs](https://aws.amazon.com/blogs/big-data/build-data-lineage-for-data-lakes-using-aws-glue-amazon-neptune-and-spline/)
     - [Azure Data Factory lineage features or Microsoft Purview lineage mapping](https://learn.microsoft.com/en-us/purview/concept-data-lineage)
     - [GCP Data Catalog + Dataflow or Dataproc lineage integration](https://cloud.google.com/data-catalog/docs/how-to/lineage-gcp)
     - [OCI Data Integration lineage capability or separate metadata tooling](https://blogs.oracle.com/cloud-infrastructure/post/where-did-the-data-come-from-data-lineage)
   - This practice enhances data traceability and supports compliance efforts.

1. **Align with Legal & Policy Requirements**

   - Mark data sets with relevant regulations—UK GDPR, FOI, PCI-DSS, etc.
   - Build retention policies that automatically archive or delete data when it meets disposal criteria:
     - [AWS S3 Lifecycle rules, or versioning + replication for specific compliance domains](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)
     - [Azure Blob Lifecycle management with tiering or timed deletion for certain containers](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)
     - [GCP Object Lifecycle policies for buckets, or BigQuery partition expiration](https://cloud.google.com/storage/docs/lifecycle)
     - [OCI Object Storage lifecycle management to archive or delete data automatically](https://docs.oracle.com/en-us/iaas/Content/Object/Tasks/managinglifecyclepolicies.htm)

1. **Create a Single "Data Inventory" Dashboard**

   - Consolidate classification statuses in a simple dashboard or spreadsheet so data governance leads can track changes at a glance.
   - If possible, generate monthly or quarterly "data classification health" reports.

1. **Provide Self-Service Tools for Teams**
   - Offer them a quick way to see if their new dataset might include sensitive fields or which storage option is recommended for OFFICIAL-SENSITIVE data.
   - Maintaining "responsible autonomy" fosters compliance while reducing central bottlenecks.

With scanning, lineage insights, policy-aligned retention, and better visibility, you not only maintain your inventory but move it toward a dynamic, living data map. This sets the stage for deeper data understanding and advanced catalog solutions.

### **Reviewed and Partially Documented Data Understanding:** There’s a comprehensive understanding of data location, classification, and sensitivity, with regular compliance reviews. Data lineage is generally understood but not consistently documented.

#### **How to determine if this good enough**

In this phase, your organisation has established processes to classify and review data regularly. You likely have:

1. **Well-Established Inventory and Processes**

   - You know exactly where crucial data resides (cloud databases, file shares, analytics platforms).
   - Teams reliably classify new data sets, typically with centralised or automated oversight.

1. **Ongoing Compliance Audits**

   - Internal audits or external assessors confirm that data is generally well-managed, meeting security classifications and retention rules.
   - Incidents or policy violations are rare and quickly addressed.

1. **Partial Lineage Documentation**

   - Teams can verbally or via some diagrams explain how data flows through the organisation.
   - However, it’s not uniformly captured in a single system or data catalog.

1. **Confidence in Day-to-Day Operations**
   - You have fewer unexpected data exposures or confusion over who can access what.
   - Cost inefficiencies or data duplication might still lurk if lineage isn’t fully integrated into everyday tools.

If your broad compliance posture is solid, and your leadership or data protection officer is satisfied with the frequency of reviews, you might remain comfortable here. Yet incomplete lineage documentation can hamper advanced analytics, complicated cross-team data usage, or hamper efficient data discoverability.

#### **How to do better**

Below are **rapidly actionable** steps to deepen your data lineage and documentation:

1. **Adopt or Expand a Data Catalog with Lineage Features**

   - Introduce or enhance tooling that can map data flows automatically or semi-automatically:
     - [AWS Glue Data Catalog lineage (part of AWS Glue Studio) or AWS Lake Formation cross-lake lineage features](https://aws.amazon.com/blogs/big-data/build-data-lineage-for-data-lakes-using-aws-glue-amazon-neptune-and-spline/)
     - [Azure Purview (Microsoft Purview) with lineage detection for Data Factory/Databricks pipelines](https://learn.microsoft.com/en-us/azure/data-factory/tutorial-push-lineage-to-purview)
     - [GCP Data Catalog’s lineage extension or third-party lineage solutions (e.g., Collibra) integrated with BigQuery/Dataflow](https://cloud.google.com/data-catalog/docs/how-to/lineage-gcp)
     - [OCI Data Catalog lineage modules, or integrative metadata tools for Oracle DB, Object Storage, etc.](https://blogs.oracle.com/cloud-infrastructure/post/new-data-lineage-features-oci-data-catalog)

1. **Create a Standard Operating Procedure for Lineage Updates**

   - Whenever a new data pipeline is created or an ETL job changes, staff must add or adjust lineage documentation.
   - Ensure this ties into your DevOps or CI/CD process:
     - E.g., new code merges automatically trigger updates in Purview or Data Catalog.

1. **Encourage Data Reuse and Collaboration**

   - With partial lineage, teams might still re-collect or duplicate data. Create incentives for them to discover existing data sets:
     - Host a monthly "Data Discovery Forum" or internal knowledge-sharing session.
     - Highlight "success stories" where reusing a known dataset saved time or reduced duplication.

1. **Set Up Tiered Access Policies**

   - Understanding lineage helps define more granular access control. If you see that certain data flows from a core system to multiple departmental stores, you can apply consistent RBAC or attribute-based access control:
     - [AWS Lake Formation for fine-grained table/column access in a data lake environment](https://docs.aws.amazon.com/lake-formation/latest/dg/access-control-fine-grained.html)
     - [Azure Synapse RBAC / Purview classification-based access policies](https://learn.microsoft.com/en-us/azure/synapse-analytics/security/synapse-workspace-synapse-rbac-roles)
     - [GCP BigQuery column-level security or row-level security with labels from Data Catalog classification](https://cloud.google.com/bigquery/docs/column-level-security)
     - [OCI Data Lake security controls with IAM for detailed partition or schema-based policies](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)

1. **Integrate with Risk and Compliance Dashboards**
   - If you have a departmental risk register, link data classification/lineage issues into that.
   - This ensures any changes or gaps in lineage are recognised as potential compliance or operational risks.

By systematically building out lineage features and embedding them in everyday workflows, you move closer to a truly integrated data environment. Over time, each dataset’s path through your infrastructure becomes transparent, boosting collaboration, reducing duplication, and easing regulatory compliance.

### **Advanced Data Catalog and Lineage Tracking:** A detailed data catalog exists, encompassing data types and metadata. It includes a user-friendly glossary, quality metrics, use cases, and thorough tracking of data lineage.

#### **How to determine if this good enough**

In this final stage, your organisation has an extensive data catalog that covers:

1. **Comprehensive Metadata and Glossary**

   - You store definitions, owners, classification details, transformations, and usage patterns in a single platform.
   - Non-technical staff can also search and understand data context easily (e.g., "Which dataset includes housing records for local authorities?").

1. **Automated Lineage from Source to Consumption**

   - ETL pipelines, analytics jobs, and data transformations are captured, so you see exactly how data moves from one place to another.
   - If a compliance or FOI request arises, you can trace the entire path of relevant data instantly.

1. **Embedded Data Quality and Governance**

   - The catalog might track data quality metrics (e.g., completeness, validity, duplicates) and flags anomalies.
   - Governance teams can set or update policy rules in the catalog, automatically enforcing them across various tools.

1. **High Reusability and Collaboration**
   - Teams discover and reuse existing data sets rather than re-collect or replicate them.
   - Cross-departmental projects benefit from consistent definitions and robust lineage, accelerating digital transformation within the UK public sector.

If you meet these criteria with minimal friction or overhead, your advanced catalog approach is likely "good enough." Nonetheless, technology and data demands evolve—particularly with new AI/ML, geospatial, or real-time streaming data. Ongoing iteration keeps your catalog valuable and aligned with shifting data strategies.

#### **How to do better**

Even at the highest maturity, here are **actionable** ways to refine:

1. **Incorporate Real-Time or Streaming Data**

   - Expand your catalog’s scope to include real-time pipelines, e.g., streaming from IoT devices or sensor networks:
     - [AWS Kinesis Data Streams or AWS MSK lineage integration with Glue or Lake Formation](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect-kinesis-home.html)
     - [Azure Event Hubs + Databricks or Stream Analytics lineage in Purview](https://learn.microsoft.com/en-us/samples/microsoft/purview-adb-lineage-solution-accelerator/azure-databricks-to-purview-lineage-connector/)
     - [GCP Pub/Sub or Dataflow lineage detection in Data Catalog with advanced tags](https://cloud.google.com/data-catalog/docs/how-to/lineage-gcp)
     - [OCI Streaming service integrated with Data Integration or Data Catalog lineage updates](https://blogs.oracle.com/cloud-infrastructure/post/where-did-the-data-come-from-data-lineage)

1. **Add Automated Data Quality Rules and Alerts**

   - Configure threshold-based triggers that check data quality daily:
     - e.g., "If more than 5% of new rows fail validation, alert the data steward."
   - Some vendor-native tools or third-party solutions can embed these checks in your data pipeline or catalog.

1. **Leverage AI/ML to Classify and Suggest Metadata**

   - Let machine learning simplify classification:
     - [AWS Macie for advanced PII detection, combined with AI-driven suggestions for new data sets in AWS Glue Data Catalog](https://aws.amazon.com/blogs/big-data/enrich-your-aws-glue-data-catalog-with-generative-ai-metadata-using-amazon-bedrock/)
     - [Azure Purview with AI-based classifiers, integrated with Azure Cognitive Services for text analysis](https://techcommunity.microsoft.com/blog/microsoftmechanicsblog/ai-powered-data-classification--microsoft-purview/3919206)
     - [GCP Data Catalog + DLP + Document AI to automatically label unstructured data](https://cloud.google.com/blog/products/ai-machine-learning/document-ai-custom-extractor-powered-by-generative-ai-is-now-ga)
     - [OCI Data Catalog with Oracle Machine Learning add-ons for pattern recognition in large data sets](https://blogs.oracle.com/ai-and-datascience/post/using-ai-and-ml-to-enrich-metadata-in-data-catalog)

1. **Integrate Catalog with Wider Public Sector Ecosystems**

   - If your data catalog can integrate with cross-government data registries or share metadata with partner organisations, you reduce duplication and improve interoperability. For instance:
     - Some local authorities or NHS trusts might share standardised definitions or [GDS guidelines](https://www.gov.uk/guidance/gds-data-standards).
     - Tools or APIs that facilitate federation with external catalogs can open up broad data collaboration.

1. **Continuously Evaluate Security, Access, and Usage**
   - Review who actually accesses data vs. who is authorised, adjusting policies based on usage patterns.
   - If certain data sets see heavy usage from a new department, ensure lineage, classification, and approvals remain correct.

At this advanced level, your main goal is to keep your data catalog living, dynamic, and well-integrated with the rest of your technology stack and governance frameworks. By embracing new data sources, automating quality checks, leveraging ML classification, and ensuring interoperability across the UK public sector, you solidify your position as a model of data governance and strategic data management.

**Keep doing what you’re doing,** and consider publishing blog posts or internal case studies about your data governance journey. Submit pull requests to this guidance or relevant public sector repositories to share innovative approaches. By swapping best practices, we collectively improve data maturity, compliance, and service quality across the entire UK public sector.
