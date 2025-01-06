---
title: How does your organization plan, measure, and optimize the environmental sustainability and carbon footprint of its cloud compute resources?
tags: cost
eleventyNavigation:
  parent: cost
---

### **Basic Vendor Reliance:** Sustainability isn't actively measured internally; reliance is placed on cloud vendors who are contractually obligated to work towards carbon neutrality, likely through offsetting.

#### **How to determine if this good enough**

In this stage, your organization trusts its cloud provider to meet green commitments through mechanisms like carbon offsetting or renewable energy purchases. You likely have little to no visibility of actual carbon metrics. For UK public sector bodies, you might find this acceptable if:

1. **Limited Scope and Minimal Usage**
   - Your cloud footprint is extremely small (e.g., a handful of testing environments).
   - The cost and complexity of internal measurement may not seem justified at this scale.
1. **No Immediate Policy or Compliance Pressures**
   - You face no urgent departmental or legislative requirement to detail your carbon footprint.
   - Senior leadership may not yet be asking for sustainability reports.
1. **Strong Confidence in Vendor Pledges**
   - Your contract or statements of work (SoW) reassure you that the provider is pursuing net zero or carbon neutrality.
   - You have no immediate impetus to verify or go deeper into the supply chain or usage details.

If you are in this situation and operate with minimal complexity, "Basic Vendor Reliance" might be temporarily "good enough." However, the UK public sector is increasingly required to evidence sustainability efforts, particularly under initiatives like the [Greening Government Commitments](https://www.gov.uk/government/publications/greening-government-commitments-2021-to-2025). Larger or rapidly growing workloads will likely outgrow this approach. If you anticipate expansions, cost concerns, or scrutiny from oversight bodies, it is wise to move beyond vendor reliance.

#### **How to do better**

Below are **rapidly actionable** steps that provide greater visibility and ensure you move beyond mere vendor assurances:

1. **Request Vendor Transparency**

   - Ask your provider for UK-region-specific energy usage information and carbon intensity data. For example:
     - [AWS Customer Carbon Footprint Tool](https://aws.amazon.com/aws-cost-management/aws-customer-carbon-footprint-tool/)
     - [Azure Emissions Impact Dashboard](https://www.microsoft.com/en-us/sustainability/emissions-impact-dashboard)
     - [Google Cloud Carbon Footprint](https://cloud.google.com/sustainability/carbon-footprint)
     - [OCI Sustainability Dashboards](https://www.oracle.com/cloud/sustainability/)
   - Even if the data is approximate, it helps you begin to monitor trends.

1. **Enable Basic Billing and Usage Reports**

   - Activate native cost-and-usage tooling to gather baseline compute usage:
     - [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) with daily or hourly granularity.
     - [Azure Cost Management](https://azure.microsoft.com/en-us/services/cost-management/)
     - [GCP Billing Export to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery)
     - [OCI Cost Analysis](https://www.oracle.com/cloud/cost-management/)
   - While these tools focus on monetary spend, you can correlate usage data with the vendor’s sustainability information.

1. **Incorporate Sustainability Clauses in Contracts**

   - When renewing or issuing new calls on frameworks like [G-Cloud](https://www.gov.uk/guidance/g-cloud-templates-and-legal-documents), add explicit language for carbon reporting.
   - Request quarterly or annual updates on how your usage ties into the vendor’s net-zero or carbon offset strategies.

   Incorporating sustainability clauses into your contracts is essential for ensuring that your cloud service providers align with your environmental goals. The [Crown Commercial Service](https://www.crowncommercial.gov.uk/g-cloud-13-contract-terms-and-conditions) offers guidance on integrating such clauses into the G-Cloud framework. Additionally, the [Chancery Lane Project](https://chancerylaneproject.org/clauses/carbon-contract-clauses-for-environmental-performance-and-associated-incentives-and-remedies) provides model clauses for environmental performance, which can be adapted to your contracts.

   By proactively including these clauses, you can hold vendors accountable for their sustainability commitments and ensure that your organization's operations contribute positively to environmental objectives.

1. **Track Internal Workload Growth**

   - Even if you rely on vendor neutrality claims, set up a simple spreadsheet or a lightweight tracker for each of your main cloud workloads (service name, region, typical CPU usage, typical memory usage). If usage grows, you will notice potential new carbon hotspots.

1. **Raise Internal Awareness**

   - Create a short briefing note for leadership or relevant teams (e.g., finance, procurement) highlighting:
     1. Your current reliance on vendor offsetting, and
     1. The need for baseline data collection.

   This ensures any interest in deeper environmental reporting can gather support before usage grows further.

### **Initial Awareness and Basic Policies:** Some basic policies and goals for sustainability are set. Efforts are primarily focused on awareness and selecting vendors with better environmental records.

#### **How to determine if this good enough**

At this stage, you have moved beyond "vendor says they’re green." You may have a written policy stating that you will prioritize environmentally responsible suppliers or aim to reduce your cloud emissions. For UK public sector organizations, "Initial Awareness" may be adequate if:

1. **Formal Policy Exists, but Execution Is Minimal**

   - You have a documented pledge or departmental instruction to pick greener vendors or to reduce carbon, but it’s largely aspirational.

1. **Some Basic Tracking or Guidance**

   - Procurement teams might refer to environmental credentials during tendering, especially if you’re using Crown Commercial Service frameworks.
   - Staff are aware that sustainability is important, but lack practical steps.

1. **Minimal External Oversight**
   - You might not yet be required to publish detailed carbon metrics in annual reports or meet stringent net zero timelines.
   - The policy helps reduce reputational risk, but you have not turned it into tangible workflows.

This approach is a step up from total vendor reliance. However, it often lacks robust measurement or accountability. If your workload, budget, or public scrutiny around environmental impact is increasing—particularly in line with the [Greening Government Commitments](https://www.gov.uk/government/publications/greening-government-commitments-2021-to-2025) you will likely need more rigorous strategies soon.

#### **How to do better**

Here are quick wins to strengthen your approach and make it more actionable:

1. **Use Vendor Sustainability Tools for Basic Estimation**

   - Enable the carbon or sustainability dashboards in your chosen cloud platform to get monthly or quarterly snapshots:
     - [AWS Well-Architected Tool with Sustainability Pillar](https://aws.amazon.com/well-architected-tool/)
     - [Azure Sustainability Calculator with Power BI integration](https://www.microsoft.com/en-us/sustainability/emissions-impact-dashboard)
     - [GCP Carbon Footprint with BigQuery export](https://cloud.google.com/sustainability/carbon-footprint)
     - [Oracle Cloud Advisor for sustainability insights](https://www.oracle.com/cloud/solutions/sustainability.html)

1. **Create Simple Internal Guidelines**

   - Expand beyond policy statements:
     1. **Resource Tagging**: Mandate that every new resource is tagged with an owner, environment, and a sustainability tag (e.g., "non-prod, auto-shutdown" vs. "production, high-availability").
     1. **Preferred Regions**: If feasible, prefer data centers that the vendor identifies as more carbon-friendly. For example, some AWS and Azure UK-based regions rely on greener energy sourcing than others.

1. **Schedule Simple Sustainability Checkpoints**

   - Alongside your standard procurement or architectural reviews, add a sustainability review item. E.g.:
     - "Does the new service use the recommended low-carbon region?"
     - "Is there a plan to power down dev/test resources after hours?"
   - This ensures your new policy is not forgotten in day-to-day activities.

1. **Offer Quick Training or Knowledge Sessions**

   - Host short lunch-and-learn events or internal micro-training on "Cloud Sustainability 101" for staff. Show them how they can use:
     - [AWS Trusted Advisor’s Basic Cost and Usage Recommendations](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/)
     - [Azure Advisor Energy Efficiency Recommendations](https://learn.microsoft.com/en-us/azure/advisor/advisor-reference-performance-recommendations)
     - [Google Cloud Recommender for VM Sizing and Usage Patterns](https://cloud.google.com/recommender)
     - [OCI Advisor for Environment Optimization](https://docs.oracle.com/en/cloud/paas/oci-advisor/)

   The point is to connect cost optimization with sustainability—over-provisioned resources burn more carbon.

1. **Publish Simple Reporting**
   - Create a once-a-quarter dashboard or presentation highlighting approximate cloud emissions. Even if the data is partial or not perfect, transparency drives accountability.

By rapidly applying these steps—using native vendor tools to measure usage, establishing minimal but meaningful guidelines, and scheduling brief training or check-ins—you elevate your policy from mere awareness to actual practice.

### **Active Measurement and Target Setting:** The organization actively measures its cloud compute carbon footprint and sets specific targets for reduction. This includes choosing cloud services based on their sustainability metrics.

#### **How to determine if this good enough**

Here, you have begun quantifying your cloud-based carbon output. You might set yearly or quarterly reduction goals (e.g., a 10% decrease in carbon from last year). You also factor environmental impacts into your choice of instance types, storage classes, or regions. Signs this might be "good enough" include:

1. **Regular Carbon Footprint Data**

   - You have monthly or quarterly reports from vendor dashboards or a consolidated internal system (e.g., pulling data from cost/billing APIs plus vendor carbon intensity metrics).

1. **Formal Targets and Milestones**

   - Leadership acknowledges these targets. They appear in your departmental objectives or technology strategy.

1. **Procurement Reflects Sustainability**

   - RFQs or tenders explicitly weigh sustainability factors, awarding points to vendors or proposals that commit to lower carbon usage.
   - You might require prospective suppliers to share energy efficiency data for their services.

1. **Leadership or External Bodies Approve**
   - Senior managers or oversight bodies see your target-setting approach as credible.
   - Your reports are used in annual reviews or compliance documentation.

While "Active Measurement and Target Setting" is a robust step forward, you may still discover that your usage continues to increase due to scaling demands or new digital services. Additionally, you might lack advanced optimization practices like continuous resource right-sizing or dynamic load shifting.

#### **How to do better**

Focus on **rapid, vendor-native steps** to convert targets into tangible reductions:

1. **Automate Right-Sizing**

   - Many providers have native tools to recommend more efficient instance sizes:
     - [AWS Compute Optimizer](https://aws.amazon.com/compute-optimizer/) to identify underutilized EC2, EBS, or Lambda resources
     - [Azure Advisor Right-Sizing](https://docs.microsoft.com/en-us/azure/advisor/advisor-right-sizing-recommendations) for VMs and databases
     - [GCP Recommender for VM rightsizing](https://cloud.google.com/recommender/docs/compute/instance-rightsizing)
     - [OCI Adaptive Intelligence for resource optimization](https://docs.oracle.com/en/cloud/paas/oci-advisor/)

   By automatically resizing or shifting to lower-tier SKUs, you reduce both cost and emissions.

1. **Implement Scheduled Autoscaling**

   - Introduce or refine your autoscaling policies so that workloads scale down outside peak times:
     - [AWS Auto Scaling groups with scheduled actions](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html)
     - [Azure Scale Sets with auto-scale schedules](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview)
     - [GCP Managed Instance Group Autoscaling](https://cloud.google.com/compute/docs/autoscaler)
     - [OCI Instance Configuration and Autoscaling](https://docs.oracle.com/en/cloud/paas/compute-cloud/creating-a-schedule-based-autoscaling-policy.html)

   This directly lowers carbon usage by removing idle capacity.

1. **Leverage Serverless or Container Services**

   - Where feasible, re-platform certain workloads to serverless or container-based architectures that scale to zero. Rapid wins can be found by:
     - [AWS Fargate or Lambda for ephemeral tasks](https://aws.amazon.com/fargate/)
     - [Azure Functions or Container Apps for event-driven usage](https://azure.microsoft.com/en-us/services/functions/)
     - [GCP Cloud Run or Functions for on-demand scaling](https://cloud.google.com/run)
     - [OCI Functions for serverless patterns](https://www.oracle.com/cloud/compute/functions.html)

   Serverless can significantly cut wasted resources, which aligns with your reduction targets.

1. **Adopt "Carbon Budgets" in Project Plans**

   - For every new app or service, define a carbon allowance. If estimates exceed the budget, require design changes. Incorporate vendor solutions that show region-level carbon data:
     - [Azure Region Carbon Intensity Mapping](https://learn.microsoft.com/en-us/azure/carbon-optimization/view-emissions)
     - [AWS Region Carbon Differences in Well-Architected Tool](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/region-selection.html)
     - [GCP Region Picker with Carbon Insight](https://cloud.google.com/sustainability/carbon-footprint)

These tools provide insights into the carbon emissions associated with different regions, enabling more sustainable decision-making.

1. **Align with Departmental or National Sustainability Goals**
   - Update your internal reporting to reflect how your targets link to national net zero obligations or departmental commitments (e.g., the NHS net zero plan, local authority climate emergency pledges). This ensures your measurement and goals remain relevant to broader public sector accountability.

Implementing these steps swiftly helps ensure you don’t just measure but actually reduce your carbon footprint. Regular iteration—checking usage data, right-sizing, adjusting autoscaling—ensures continuous progress toward your stated targets.

### **Integrated Sustainability Practices:** Sustainability is integrated into cloud resource planning and usage. This includes regular monitoring and reporting on sustainability metrics and making adjustments to improve environmental impact.

#### **How to determine if this good enough**

At this stage, sustainability isn’t a separate afterthought—it’s part of your default operational processes. Indications that you might be "good enough" for UK public sector standards include:

1. **Frequent/Automated Monitoring**

   - Carbon metrics are tracked at least weekly, if not daily, using integrated dashboards.
   - You have alerts for unexpected surges in usage or carbon-intense resources.

1. **Cultural Adoption Across Teams**

   - DevOps, procurement, and governance leads all know how to incorporate sustainability criteria.
   - Architects regularly consult carbon metrics during design sessions, akin to how they weigh cost or security.

1. **Regular Public or Internal Reporting**

   - You might publish simplified carbon reports in your annual statements or internally for senior leadership.
   - Stakeholders can see monthly/quarterly improvements, reflecting a stable, integrated practice.

1. **Mapping to Strategic Objectives**
   - The departmental net zero or climate strategy references your integrated approach as a key success factor.
   - You can demonstrate tangible synergy: e.g., your cost savings from scaling down dev environments are also cutting carbon.

Despite these achievements, additional gains can still be made, especially in advanced workload scheduling or region selection. If you want to stay ahead of new G-Cloud requirements, carbon scoring frameworks, or stricter net zero mandates, you may continue optimizing your environment.

#### **How to do better**

Actionable steps to deepen your integrated approach:

1. **Set Up Automated Governance Rules**

   - Enforce region-based or instance-based policies automatically:
     - [AWS Service Control Policies to block high-carbon region usage in non-essential cases](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)
     - [Azure Policy for "Allowed Locations" or "Tagging Enforcement" with sustainability tags](https://learn.microsoft.com/en-us/azure/governance/policy/tutorials/govern-tags)
     - [GCP Organization Policy to limit usage to certain carbon-friendly regions](https://cloud.google.com/resource-manager/docs/organization-policy/understanding-policies)
     - [OCI Security Zones or policies restricting resource deployment](https://docs.oracle.com/en/cloud/paas/compute-cloud/oci-security-zones.html)

Implementing these policies ensures that resources are deployed in regions with lower carbon footprints, aligning with your sustainability objectives.

1. **Adopt Full Lifecycle Management**

   - Extend sustainability beyond compute:
     - **Automate data retention**: Move older data to cooler or archive storage for lower energy usage:
       - [AWS S3 Lifecycle Policies](https://aws.amazon.com/s3/lifecycle/)
       - [Azure Blob Lifecycle Management](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure)
       - [GCP Storage Lifecycle Policies](https://cloud.google.com/storage/docs/lifecycle)
       - [OCI Object Storage Lifecycle Policies](https://www.oracle.com/cloud/free/oci-training/)
     - **Review ephemeral development**: Ensure test environments are automatically cleaned after a set period.

1. **Use Vendor-Specific Sustainability Advisors**

   - Some providers offer "sustainability pillars" or specialized frameworks:
     - [AWS Well-Architected Sustainability Pillar Recommendations](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html)
     - [Azure Advisor – Sustainability category (Preview/Trial)](https://learn.microsoft.com/en-us/azure/carbon-optimization/reduce-emissions)
     - [GCP’s Carbon Sense tools in the console](https://cloud.google.com/sustainability/carbon-sense)
     - [OCI Advisor checks for unused resources or energy-saving configurations](https://docs.oracle.com/en/cloud/paas/compute-cloud/oci-advisor.html)

   Incorporate these suggestions directly into sprint backlogs or monthly improvement tasks.

1. **Embed Sustainability in DevOps Pipelines**

   - Modify build/deployment pipelines to check resource usage or region selection:
     - If a new environment is spun up in a high-carbon region or with large instance sizes, the pipeline can prompt a warning or require an override.
     - Tools like [GitHub Actions](https://docs.github.com/en/actions) or [Azure DevOps Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-pipelines&tabs=yaml) can call vendor APIs to fetch sustainability metrics and fail a build if it’s non-compliant.

1. **Promote Cross-Functional "Green Teams"**
   - Form a small working group or "green champions" network across procurement, DevOps, governance, and finance, meeting monthly to share best practices and track new optimization opportunities.
   - This approach keeps your integrated practices dynamic, ensuring you respond quickly to new vendor features or updated government climate guidance.

By adding these automated controls, pipeline checks, and cross-functional alignment, you ensure that your integrated sustainability approach not only continues but evolves in real time. You become more agile in responding to shifting requirements and new tools, maintaining a leadership stance in UK public sector cloud sustainability.

### **Advanced Optimization and Dynamic Management:** Advanced strategies are in place, like automatic time and location shifting of workloads to minimize impact. Data retention and cloud product selection are deeply aligned with sustainability goals and carbon footprint metrics.

#### **How to determine if this good enough**

At the pinnacle of cloud sustainability maturity, your organization leverages sophisticated methods such as:

1. **Real-Time or Near-Real-Time Workload Scheduling**

   - When feasible and compliant with data sovereignty, you shift workloads to times/locations with lower carbon intensity.
   - You may monitor the UK grid’s real-time carbon intensity and schedule large batch jobs during off-peak, greener times.

1. **Full Lifecycle Carbon Costing**

   - Every service or data set has an associated "carbon cost," influencing decisions from creation to archival/deletion.
   - You constantly refine how your application code runs to reduce unnecessary CPU cycles, memory usage, or data transfers.

1. **Continuous Improvement Culture**

   - Teams treat carbon optimization as essential as cost or performance. Even minor improvements (e.g., 2% weekly CPU usage reduction) are celebrated.

1. **Cross-Government Collaboration**
   - As a leader, you might share advanced scheduling or dynamic region selection techniques with other public sector bodies.
   - You might co-publish guidance for G-Cloud or Crown Commercial Service frameworks on advanced sustainability requirements.

If you have truly dynamic optimization but remain within the constraints of UK data protection or performance needs, you have likely achieved a highly advanced state. However, there’s almost always room to push boundaries, such as exploring new hardware (e.g., ARM-based servers) or adopting emergent best practices in green software engineering.

#### **How to do better**

Even at this advanced level, below are further actions to refine your dynamic management:

1. **Build or Leverage Carbon-Aware Autoscaling**

   - Many providers offer advanced scaling rules that consider multiple signals. Integrate carbon signals:
     - [AWS EventBridge + Lambda triggers that check region carbon intensity before scaling up large clusters](https://docs.aws.amazon.com/autoscaling/ec2/userguide/automating-ec2-auto-scaling-with-eventbridge.html)
     - [Azure Monitor + Azure Functions to re-schedule HPC tasks when the grid is greener](https://devblogs.microsoft.com/ise/saving-co2-using-location-and-time-shifting-in-azure/)
     - [GCP Cloud Scheduler + Dataflow for time-shifted batch jobs based on carbon metrics](https://cloud.google.com/scheduler/docs/)
     - [OCI Notifications + Functions to enact advanced scheduling policies](https://docs.oracle.com/en-us/iaas/Content/Notification/home.htm)

1. **Collaborate with BEIS or Relevant Government Bodies**

   - The Department for Business, Energy & Industrial Strategy (BEIS) or other departments may track grid-level carbon. If you can integrate their public data (e.g., real-time carbon intensity in the UK), you can refine your scheduling.
   - Seek synergy with national digital transformation or sustainability pilot programmes that might offer new tools or funding for experimentation.

1. **AI or ML-Driven Forecasting**

   - Incorporate predictive analytics that forecast your usage spikes and align them with projected carbon intensity (peak/off-peak). Tools like:
     - [AWS Forecast](https://aws.amazon.com/forecast/)
     - [Azure Machine Learning Predictive Services](https://azure.microsoft.com/en-us/services/machine-learning/)
     - [GCP Vertex AI Time Series Predictions](https://cloud.google.com/vertex-ai/docs/tabular-data/forecasting/overview)
     - [OCI Data Science for forecasting modules](https://www.oracle.com/cloud/data-science/)

   Then automatically shift or throttle workloads accordingly.

1. **Innovate with Low-Power Hardware**

   - Evaluate next-gen or specialized hardware solutions with lower energy profiles:
     - [AWS Graviton (ARM-based) Instances for better performance-per-watt](https://aws.amazon.com/ec2/graviton/)
     - [Azure Arm-based VMs (Preview/limited release)](https://azure.microsoft.com/en-us/blog/azure-virtual-machines-with-ampere-altra-arm-based-processors-generally-available/)
     - [GCP Tau T2A (ARM-based) Instances](https://cloud.google.com/blog/products/compute/tau-t2a-is-first-compute-engine-vm-on-an-arm-chip)
     - [OCI Ampere A1 Compute for ARM workloads](https://www.oracle.com/cloud/compute/arm/)

   Typically, these instance families consume less energy for similar workloads, further reducing carbon footprints.

1. **Automated Data Classification and Tiering**

   - For advanced data management, use AI to classify data in real-time and automatically place it in the most sustainable storage tier:
     - [AWS S3 Intelligent-Tiering + S3 Glacier for archived data](https://aws.amazon.com/s3/storage-classes/intelligent-tiering/)
     - [Azure Blob Storage Lifecycle with Intelligent Tiering rules](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure)
     - [GCP Storage Auto Class transitions with object metadata scanning](https://cloud.google.com/storage/docs/autoclass)
     - [OCI Archive Storage with auto-tiering policies](https://docs.oracle.com/en-us/iaas/Content/ArchiveStorage/Concepts/archivestorageoverview.htm)

   This ensures minimal energy overhead for data retention.

1. **Set an Example through Openness**
   - If compliance allows, publish near real-time dashboards illustrating your advanced scheduling successes or hardware usage.
   - Share code or Infrastructure-as-Code templates with other public sector teams to accelerate mutual learning.

By implementing these advanced tactics, you sharpen your dynamic optimization approach, continuously pushing the envelope of what’s possible in sustainable cloud operations—while respecting legal constraints around data sovereignty and any performance requirements unique to public services.

**Keep doing what you’re doing,** and consider documenting or blogging about your experiences. Submit pull requests to this guidance so other UK public sector organizations can accelerate their own sustainability journeys. By sharing real-world results and vendor-specific approaches, you help shape a greener future for public services across the entire nation.
