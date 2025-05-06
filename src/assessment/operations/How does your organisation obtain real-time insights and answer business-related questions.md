---
title: How does your organisation obtain real-time insights and answer business-related questions?
tags: operations
eleventyNavigation:
  parent: operations
---

### **SME Analysis with Limited Data Literacy Understanding**: Insights largely depend on subject matter experts who analyze available data and provide answers. These experts, while knowledgeable in their field, may not always have a high level of data literacy, making the process more costly and only point in time, not real-time.

#### **How to determine if this good enough**

If your organisation primarily relies on a small group of subject matter experts (SMEs) to interpret raw data and produce insights, you might consider it "good enough" if:

1. **Low Frequency of Data-Driven Questions**

   - Your operational or policy decisions rarely hinge on up-to-the-minute insights.
   - Data queries happen sporadically, and a slower manual approach remains acceptable.

1. **Very Specific Domain Knowledge**

   - Your SMEs possess deep domain expertise that general reporting tools cannot easily replicate.
   - The data sets are not extensive, so manually correlating them still works.

1. **No Immediate Performance or Compliance Pressures**
   - You do not face urgent NCSC or departmental mandates to provide real-time transparency.
   - Stakeholders accept periodic updates from SMEs instead of continuous data streams.

While this may work in smaller, stable environments, relying heavily on a few experts for analysis often creates bottlenecks, raises single-point-of-failure risks, and lacks scalability. Additionally, GOV.UK and NCSC guidance often encourage better data literacy and real-time monitoring for government services.

#### **How to do better**

Below are **rapidly actionable** steps to improve data literacy and real-time insight capabilities:

1. **Provide Basic Data Literacy Training**

   - Organise short workshops, possibly in partnership with [GOV.UK Data in government guidance](https://www.gov.uk/government/organisations/government-digital-service) or local councils, focusing on:
     - How to read and interpret basic charts or dashboards.
     - Terminology for metrics (e.g., "mean," "median," "time series," "confidence intervals").
   - This empowers more staff to self-serve on simpler data queries.

1. **Adopt a Simple Visualisation or BI Tool**

   - Introduce a basic tool that can produce automated reports from spreadsheets or CSV data:
     - [AWS QuickSight with direct CSV uploads or minimal database connections](https://docs.aws.amazon.com/quicksight/latest/user/what-is.html)
     - [Azure Power BI for quickly designing simple dashboards on Excel data](https://docs.microsoft.com/en-us/power-bi/fundamentals/service-get-started)
     - [GCP Data Studio (Looker Studio) connecting to Google Sheets or CSV data sources](https://cloud.google.com/looker-studio/docs/get-started)
     - [OCI Analytics Cloud for straightforward data visualisations](https://docs.oracle.com/en-us/iaas/Content/Observability/Concepts/observabilityoverview.htm)
     - [IBM Cloud Monitoring](https://cloud.ibm.com/docs/monitoring?topic=monitoring-getting-started#getting-started)
   - Even rudimentary dashboards reduce the SME dependency for repetitive questions.

1. **Pilot a Data Lake or Central Data Repository**

   - Instead of storing departmental data in multiple ad hoc spreadsheets or on local drives, centralise it:
     - [AWS S3-based data lake or AWS Glue for basic data cataloging](https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-aws-lake-formation.html)
     - [Azure Data Lake Storage or Azure Synapse for integrated data ingestion](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction)
     - [GCP Cloud Storage / BigQuery for storing curated data sets](https://cloud.google.com/storage/docs/cloud-storage-transfer-service)
     - [OCI Object Storage or Data Integration for simpler data consolidation](https://docs.oracle.com/en-us/iaas/Content/Object/Concepts/objectstorageoverview.htm)
     - [IBM Cloud - Cloud Object Storage](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage)
   - This central repository can feed into simple dashboards or queries.

1. **Encourage a Data Buddy System**

   - Pair domain experts with data-literate staff (or external analysts) who can guide them on structured data approaches.
   - This fosters knowledge transfer and upskills both sides.

1. **Reference Official Guidance on Data Handling**
   - For compliance and security, consult:
     - [NCSC Data Handling guidelines](https://www.ncsc.gov.uk/)
     - [NIST SP 800-53 for security controls around data access and analytics](https://csrc.nist.gov/)
     - [GOV.UK guidance on data ethics and data sharing](https://www.gov.uk/government/publications/data-ethics-framework)

By improving data literacy, introducing a basic BI tool, creating a pilot data repository, and pairing experts with data-savvy staff, you begin reducing your reliance on point-in-time manual analysis. Over time, these steps pave the way for real-time insights.

### **Basic Reporting Tools with Delayed Insights:** The organisation uses basic reporting tools that provide insights, but there is typically a delay in data processing and limited real-time capabilities.

#### **How to determine if this good enough**

If your organisation employs a standard BI or reporting tool (e.g., weekly or monthly data refreshes), you might regard it as "good enough" if:

1. **Acceptable Lag**

   - Stakeholders generally tolerate the existing delay, as they do not require sub-daily or immediate data.

1. **Modest Data Volume**

   - Data sets are not enormous, so overnight or batch processing remains practical for your current use cases.

1. **Basic Audit/Compliance**
   - You meet essential compliance with government data handling rules (e.g., anonymising personal data, restricted access for sensitive data), and the time lag doesn’t violate any SLAs.

While functional for monthly or weekly insights, delayed reporting can hinder quick decisions or hamper incident response when faster data is needed. In alignment with [GDS Service Manual](https://www.gov.uk/service-manual), near real-time data often improves service iteration.

#### **How to do better**

Below are **rapidly actionable** ways to transition from basic delayed reporting to more timely insights:

1. **Explore Incremental Data Refresh**

   - Instead of daily or weekly full loads, adopt incremental or micro-batch processing:
     - [AWS Glue or AWS Data Pipeline for partial updates, or AWS DMS for near real-time replication](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)
     - [Azure Data Factory with scheduled incremental copies, or Azure Synapse for micro-batches](https://docs.microsoft.com/en-us/azure/data-factory/concepts-incremental-copy)
     - [GCP Dataflow for near real-time streaming from Pub/Sub or database change logs](https://cloud.google.com/dataflow/docs/concepts/dataflow-service-overview)
     - [OCI Streaming + OCI Data Integration for event-driven data ingestion in smaller intervals](https://docs.oracle.com/en-us/iaas/Content/Streaming/Concepts/streamingoverview.htm)

1. **Add Near Real-Time Dashboards**

   - Maintain existing weekly summary reports while layering a near real-time view for critical metrics:
     - e.g., the number of service requests in the last hour or real-time error rates in a public-facing service.

1. **Improve Data Quality Checks**

   - If data quality or cleaning is causing delays, implement automated checks:
     - [AWS Data Wrangler or AWS Glue DataBrew for quick transformations and validations](https://docs.aws.amazon.com/glue/latest/dg/data-wrangler.html)
     - [Azure Data Factory Mapping Data Flows or Power BI Dataflows for lightweight transformation checks](https://docs.microsoft.com/en-us/azure/data-factory/concepts-data-flow-overview)
     - [GCP Dataflow templates or Dataprep for cleaning inbound data in near real-time](https://cloud.google.com/dataflow/docs/concepts/dataflow-service-overview)
     - [OCI Data Integration transformations and validation for consistent data ingestion flows](https://docs.oracle.com/en-us/iaas/Content/DataIntegration/Concepts/dataintegrationoverview.htm)

1. **Set Timeliness KPIs**

   - e.g., "All critical data sets must be updated at least every 2 hours," or "System error logs refresh in analytics within 15 minutes."
   - Over time, strive to meet or improve these targets.

1. **Align with NCSC and NIST Guidance on Continuous Monitoring**
   - Assess if your delayed insights hamper quick detection of security anomalies, referencing:
     - [NCSC Logging and Protective Monitoring guidance](https://www.ncsc.gov.uk/collection/logging-and-protective-monitoring)
     - [NIST SP 800-137 on continuous monitoring (for security and operations)](https://csrc.nist.gov/)

With incremental data refreshes, partial real-time dashboards, better data pipelines, and timeliness KPIs, you reduce the gap between data generation and insight delivery, improving responsiveness.

### **Intermediate Analytics with Some Real-Time Data:** A combination of analytics tools is used, offering some real-time data insights, though comprehensive, immediate access is limited.

#### **How to determine if this good enough**

In this stage, your organisation has partial real-time analytics for select key metrics, while other data sets update less frequently. You might see it as "good enough" if:

1. **Focused Real-Time Use Cases**

   - Critical dashboards (e.g., for incident management or user traffic) provide near real-time data, satisfying immediate operational needs.

1. **Hybrid Approach**

   - Some systems remain batch-oriented for complexity or cost reasons, while high-priority services stream data into dashboards.

1. **Occasional Gaps**
   - Some data sources or teams still rely on older processes, but you have enough real-time coverage for essential decisions.

If your partial real-time insights effectively meet operational demands and user expectations, it can suffice. However, expanding coverage often unlocks deeper cross-functional analyses and faster feedback loops.

#### **How to do better**

Below are **rapidly actionable** ways to enhance your partially real-time analytics:

1. **Adopt Stream Processing for More Datasets**

   - If only a few sources stream data, expand to additional streams:
     - [AWS Kinesis Data Streams + AWS Lambda transformations for broader event ingestion](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_Kinesis_Data_Streams.html)
     - [Azure Event Hubs or Azure Stream Analytics to parse real-time logs from multiple sources](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about)
     - [GCP Pub/Sub + Dataflow for continuous ingestion and transformation of new data flows](https://cloud.google.com/pubsub/docs/overview)
     - [OCI Streaming for real-time ingestion from on-prem or cloud apps, enabling near real-time dashboards](/TODO)

2. **Consolidate Real-Time Dashboards**

   - Instead of multiple tools, unify around one main real-time analytics platform:
     - e.g., [AWS QuickSight SPICE for interactive, sub-minute refresh or Amazon Managed Grafana for real-time queries](https://docs.aws.amazon.com/quicksight/latest/user/spice.html)
     - [Azure Power BI premium workspaces for near real-time dashboards or Azure Monitor workbooks](https://docs.microsoft.com/en-us/power-bi/service-premium-what-is)
     - [GCP Looker Studio (Data Studio) real-time connectors or Google BigQuery BI Engine for in-memory analytics](https://cloud.google.com/looker-studio/docs/get-started)
     - [OCI Analytics Cloud or third-party dashboards integrated with OCI data streams and objects](https://www.oracle.com/uk/business-analytics/analytics-platform/)

3. **Enhance Data Integration**

   - If certain data sets remain batch-only, try hybrid ingestion methods:
     - e.g., partial streaming for time-critical fields, scheduled for large historical loads.

4. **Conduct Cross-Team Drills**

   - Run mock scenarios (e.g., a surge in user transactions or a security event) to test if real-time analytics allow quick response.
   - Identify where missing or delayed data hampers resolution.

5. **Leverage Gov/Industry Guidance**
   - For data handling and streaming best practices:
     - [NIST Big Data Interoperability Framework for scaling analytics solutions](https://www.nist.gov/programs-projects/big-data-interoperability-framework)
     - [NCSC best practices for monitoring and incident response](https://www.ncsc.gov.uk/section/keep-up-to-date/guidance)

By increasing stream processing, consolidating dashboards, and expanding real-time coverage to more data sets, you minimise the blind spots in your analytics, enabling faster, more informed decisions across the board.

### **Advanced Analytics Tools with Broad Real-Time Access:** The organisation employs advanced analytics tools that provide broader access to real-time data, enabling quicker insights and decision-making.

#### **How to determine if this good enough**

At this level, your organisation invests in robust analytics solutions (e.g., data warehouses, near real-time dashboards, possibly machine learning predictions). You might consider it "good enough" if:

1. **Wide Real-Time Visibility**

   - Most or all key data streams update in minutes or seconds, letting staff see live operational trends.

1. **Data-Driven Decision Culture**

   - Leadership and teams rely on metrics for day-to-day decisions, verifying progress or pivoting quickly.

1. **Machine Learning or Predictive Efforts**

   - You may already run ML models for forecasting or anomaly detection, leveraging near real-time feeds for training or inference.

1. **Sufficient Data Literacy**
   - Users outside the data team can navigate dashboards or ask relevant questions, with moderate skill in interpretation.

If you already see minimal delays and strong adoption, you’re likely well-aligned with GOV.UK’s push for data-driven services. Still, full self-service or advanced ML might remain partially underutilised.

#### **How to do better**

Below are **rapidly actionable** ways to refine your advanced real-time analytics:

1. **Enhance Data Federation and Governance**

   - If data sits across multiple cloud or on-prem systems, implement a data mesh or robust governance policy:
     - [AWS Lake Formation for centralised access management across multiple data sources, integrated with AWS Glue or Athena](https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-aws-lake-formation.html)
     - [Azure Purview (Microsoft Purview) or Synapse for data discovery and lineage across the enterprise](https://docs.microsoft.com/en-us/azure/purview/overview)
     - [GCP Dataplex for a data mesh approach unifying data from BigQuery, Storage, etc.](https://cloud.google.com/dataplex/docs/overview)
     - [OCI Data Catalog and Governance solutions for a consistent metadata and policy layer](https://docs.oracle.com/en-us/iaas/Content/DataCatalog/Concepts/datacatalogoverview.htm)
   - Ensure compliance with relevant [NCSC data security](https://www.ncsc.gov.uk/) and [NIST data governance](https://csrc.nist.gov/) guidelines.

1. **Promote Self-Service BI**

   - Offer user-friendly dashboards with drag-and-drop analytics:
     - e.g., enabling policy officers, operation managers, or finance leads to build custom views without waiting on IT.

1. **Incorporate Automated Anomaly Detection**

   - Move beyond manual queries to ML-based insight:
     - [AWS Lookout for Metrics or QuickSight Q for natural language queries and anomaly detection](https://docs.aws.amazon.com/lookoutmetrics/latest/dev/what-is-lookoutmetrics.html)
     - [Azure Cognitive Services integrated with Power BI or Synapse analytics for predictive insights](https://docs.microsoft.com/en-us/azure/cognitive-services/welcome)
     - [GCP Vertex AI or AutoML models that feed alerts into your real-time dashboards for outlier detection](https://cloud.google.com/vertex-ai/docs/ml-ops/automl-tables)
     - [OCI Data Science or AI Services for anomaly detection on streaming data sets](https://docs.oracle.com/en-us/iaas/Content/DataScience/Concepts/datascienceoverview.htm)

1. **Support Data Literacy Initiatives**

   - Provide ongoing training, e.g., workshops or eLearning, referencing:
     - [GDS Academy data training courses](https://www.gov.uk/government/organisations/government-digital-service)
     - [NIST Big Data Public Working Group insights or relevant NCSC guidelines for data monitoring](https://csrc.nist.gov/)

1. **Set Real-Time Performance Goals**
   - e.g., "90% of operational metrics should be visible within 60 seconds of ingestion."
   - Routinely track how these goals are met or if data pipelines slow over time, making improvements as needed.

By strengthening data governance, encouraging self-service, adopting automated anomaly detection, and continuing to boost data literacy, you maximise the value of your advanced analytics environment.

### **Comprehensive Self-Service Dashboarding:** A self-service dashboarding capability is in place, offering wide access to various data points and enabling users across the organisation to derive real-time insights independently.

#### **How to determine if this good enough**

In this final stage, your organisation has a fully realised self-service analytics environment, with real-time data at users’ fingertips. You might consider it "good enough" if:

1. **High Adoption**

   - Most staff, from frontline teams to senior leadership, know how to navigate dashboards or create custom views, significantly reducing reliance on specialised data teams.

1. **Minimal Bottlenecks**

   - Data is curated, well-governed, and updated in real-time or near real-time. Users rarely encounter outdated or inconsistent metrics.

1. **Data Literacy Maturity**

   - Employees across departments can interpret charts, filter data, and ask relevant questions. The environment supports immediate insights for operational or policy decisions.

1. **Continuous Improvement Culture**
   - Dashboards evolve rapidly based on feedback, and new data sets are easily integrated into the self-service platform.

Even at this apex, there might be scope to embed advanced predictive analytics, integrate external data sources, or pioneer AI-driven functionalities that interpret data automatically.

#### **How to do better**

Below are **rapidly actionable** ways to refine self-service real-time insights:

1. **Expand Data Sources and Data Quality**

   - Enrich dashboards by integrating external open data or cross-department feeds:
     - e.g., integrating [UK open data from data.gov.uk](https://data.gov.uk/) or other public sector agencies for broader context.

1. **Introduce Natural Language or Conversational Queries**

   - Tools like:
     - [AWS QuickSight Q or Athena-based solutions letting staff type questions in plain English](https://docs.aws.amazon.com/quicksight/latest/user/q.html)
     - [Azure Power BI Q&A natural language engine for user-friendly querying](https://docs.microsoft.com/en-us/power-bi/collaborate-share/q-and-a-faq)
     - [GCP Looker Studio / BigQuery BI Engine with ML-based question answering features](https://cloud.google.com/looker-studio/docs/get-started)
     - [OCI Analytics solutions with AI-based language interfaces for data exploration](https://www.oracle.com/uk/business-analytics/analytics-platform/)

1. **Automate Governance and Access Controls**

   - Ensure compliance with data protection regulations (e.g., UK GDPR). Implement dynamic row-level or column-level security for sensitive data:
     - [AWS Lake Formation or AWS IAM-based row-level permissions in Athena/Redshift](https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-aws-lake-formation.html)
     - [Azure Purview or row-level security in Power BI or Synapse Analytics](https://docs.microsoft.com/en-us/azure/purview/overview)
     - [GCP BigQuery row-level security or IAM-based data access policies](https://cloud.google.com/bigquery/docs/security-overview)
     - [OCI Data Catalog with fine-grained access management for different user roles](https://docs.oracle.com/en-us/iaas/Content/DataCatalog/Concepts/datacatalogoverview.htm)

1. **Integrate Predictive Insights in Dashboards**

   - If you have ML models, embed their output directly into the dashboard:
     - e.g., forecasting future usage or risk, highlighting anomalies on live charts.

1. **Foster Cross-department Collaboration**
   - Share your best-practice dashboards or data schemas with other public sector bodies, referencing:
     - [NCSC guidelines for secure data exchange and logging practices](https://www.ncsc.gov.uk/)
     - [GOV.UK’s cross-department data sharing protocols](https://www.gov.uk/government/publications/data-sharing-and-open-data-for-government)

By expanding data sources, enabling natural language querying, automating governance, embedding predictive analytics, and partnering with other agencies, you ensure your comprehensive self-service environment stays at the cutting edge—empowering a data-driven culture in UK public sector organisations.

**Keep doing what you’re doing,** and consider blogging about your journey toward real-time analytics and self-service dashboarding. Submit pull requests to this guidance or other public sector best-practice repositories to help others learn from your successes in delivering timely, actionable insights.
