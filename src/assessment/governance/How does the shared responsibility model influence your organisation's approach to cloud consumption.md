---
title: How does the shared responsibility model influence your organisation's approach to cloud consumption?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Minimal Consideration of Shared Responsibility:** The shared responsibility model is not a primary factor in cloud consumption decisions, often leading to misunderstandings or gaps in responsibility.

#### **How to determine if this good enough**

When an organisation minimally accounts for the shared responsibility model, it often treats cloud services like a traditional outsourcing arrangement, assuming the provider handles most (or all) tasks. This might be considered "good enough" if:

1. **Limited Complexity or Strictly Managed Services**

   - You consume only highly managed or software-as-a-service (SaaS) solutions, so the cloud vendor’s scope is broad, and your responsibilities are minimal.
   - In such cases, misunderstandings about lower-level responsibilities might not immediately cause problems.

1. **Small Scale or Low-Risk Workloads**

   - You deploy minor pilot projects or non-sensitive data with minimal security or compliance overhead.
   - The cost and effort of clarifying responsibilities could feel disproportionate.

1. **Short-Term or Experimental Cloud Usage**
   - You might be running proof-of-concepts or test environments that you can shut down quickly if issues arise.
   - If a gap in responsibility surfaces, it may not significantly impact operations.

However, as soon as you scale up, handle sensitive information, or rely on the cloud for critical services, ignoring the shared responsibility model becomes risky. For most UK public sector bodies, data security, compliance, and operational continuity are paramount—overlooking even a small portion of your obligations can lead to non-compliance or service disruptions.

#### **How to do better**

Below are **rapidly actionable** steps to move beyond minimal consideration of shared responsibilities:

1. **Identify Your Specific Obligations**

   - Review provider documentation on the shared responsibility model:
     - [AWS Shared Responsibility Model Overview](/TODO)
     - [Azure Shared Responsibility in Cloud Adoption Framework](/TODO)
     - [GCP Shared Responsibility Guidelines](/TODO)
     - [OCI Shared Responsibility Model Documentation](/TODO)
   - Make a short list or matrix of tasks you must own (patching certain layers, data backups, encryption management, etc.) vs. what the vendor handles (infrastructure security, certain managed services).

1. **Apply Basic Tagging for Ownership**

   - Use resource tags or labels to clarify who is responsible for tasks like patching, rotating encryption keys, or daily backups:
     - [AWS: Resource Tagging and AWS Config to track compliance in your domain](https://docs.aws.amazon.com/config/latest/developerguide/tagging.html)
     - [Azure: Tagging strategy with Azure Policy to enforce consistent labeling of responsibilities](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies)
     - [GCP: Labels for identifying resource owners, e.g., "Owner=TeamX," "Responsibility=KeyRotation"](https://cloud.google.com/resource-manager/docs/creating-managing-labels)
     - [OCI: Tagging namespaces to define "PatchingOwner=PlatformTeam" or "BackupOwner=DataOps"](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)

1. **Conduct a Simple Risk Assessment**

   - Walk through a typical scenario (e.g., security incident or downtime) and identify who would act under the current arrangement.
   - Document any gaps (e.g., "We assumed the vendor patches the OS, but it’s actually an IaaS solution so we must do it ourselves.") and address them promptly.

1. **Raise Awareness with a Short Internal Briefing**

   - Present the shared responsibility model in a simple slide deck or lunch-and-learn:
     - Emphasize how it differs from on-prem or typical outsourcing.
     - Show real examples of misconfigurations that occurred because teams weren’t aware of their portion of responsibility.

1. **Involve Governance or Compliance Officers**
   - Ensure your information governance team or compliance officer sees the model. They can help flag missing responsibilities, especially around data protection (UK GDPR) or official classification levels.
   - This can prevent future misunderstandings.

By clarifying essential tasks, assigning explicit ownership, and performing a quick risk assessment, you proactively plug the biggest gaps that come from ignoring the shared responsibility model.

### **Basic Awareness of Shared Responsibilities:** There is a basic understanding of the model, but it's not systematically applied or deeply understood across the organisation.

#### **How to determine if this good enough**

At this stage, your teams recognise that some aspects of security, patching, and compliance belong to you and others fall to the cloud provider. You might see this as "good enough" if:

1. **General Understanding Among Key Staff**

   - Cloud architects, security leads, or DevOps teams can articulate the main points of the shared responsibility model.
   - They know the difference between SaaS, PaaS, and IaaS responsibilities.

1. **Minimal Incidents**

   - You’ve not encountered major operational issues or compliance failures that trace back to confusion over who handles what.
   - Day-to-day tasks (e.g., OS patches, DB backups) proceed smoothly in most cases.

1. **No Large, Complex Workloads**
   - If your usage is still relatively simple or in early phases, you might not need a fully systematic approach yet.

However, as soon as your environment grows or you onboard new teams or more complex solutions, "basic awareness" can be insufficient. If you rely on an ad hoc approach, you risk missing certain obligations (like security event monitoring or identity governance) and undermining consistent compliance.

#### **How to do better**

Here are **rapidly actionable** ways to convert basic awareness into structured alignment:

1. **Develop a Clear Responsibilities Matrix**

   - Create a simple spreadsheet or diagram that outlines specific responsibilities for each service model (IaaS, PaaS, SaaS). For example:
     - "Networking configuration: Cloud vendor is responsible for physical network security; we handle firewall rules."
     - "VM patching: We handle OS patches for IaaS; vendor handles it for managed PaaS."
   - Share this matrix with all relevant teams—developers, ops, security, compliance.

1. **Embed Responsibility Checks in CI/CD**

   - Include reminders or tasks in your pipeline for whichever responsibilities your organisation must handle:
     - [AWS CodePipeline or CodeBuild custom checks (e.g., verifying AMI patch level)](https://aws.amazon.com/codepipeline/)
     - [Azure DevOps Pipelines with tasks that confirm you’ve installed required agents or configured OS patches in your images](https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-vm-extension)
     - [GCP Cloud Build triggers that ensure container images used in GKE are up-to-date with your patches](https://cloud.google.com/build)
     - [OCI DevOps pipelines that check the latest patch version for your base images or container builds](https://www.oracle.com/cloud/free/oci-training/)

1. **Set Up Basic Compliance Rules**

   - Use native policy or configuration tools to ensure teams don’t forget their portion of security:
     - [AWS Config + AWS Security Hub with rules verifying encryption at rest, correct patch levels, etc.](https://docs.aws.amazon.com/securityhub/latest/userguide/backup-controls.html)
     - [Azure Policy for ensuring OS images are from trusted sources, or that all VMs meet your baseline security standard](https://learn.microsoft.com/en-us/azure/virtual-machines/policy-reference)
     - [GCP Organisation Policy to restrict usage of certain machine types or images that aren’t part of your approved sets](https://cloud.google.com/resource-manager/docs/organisation-policy/overview)
     - [OCI Security Zones or Cloud Guard for checking compliance against known good configurations](https://docs.oracle.com/en-us/iaas/Content/CloudGuard/Concepts/cloudguard_overview.htm)

1. **Create a Minimum Standards Document**

   - Summarise "We do X, vendor does Y" in a concise, 1- or 2-page reference for new hires, project leads, or procurement teams.
   - This helps each team swiftly verify if they’re meeting their obligations.

1. **Schedule Regular (Bi-Annual) Awareness Sessions**
   - As new people join or existing staff shift roles, re-run an internal training on the shared responsibility model.
   - This ensures knowledge doesn’t degrade over time.

By formalising the understanding into documented responsibilities, embedding checks in your workflows, and reinforcing compliance rules, you strengthen your posture beyond mere awareness and toward consistent application across teams.

### **Informed Decision-Making Based on Shared Responsibilities:** Decisions regarding cloud consumption are informed by the shared responsibility model, ensuring a clearer understanding of the division of responsibilities.

#### **How to determine if this good enough**

At this level, your organisation actively references the shared responsibility model when selecting, deploying, or scaling cloud services. You might consider this approach "good enough" if:

1. **Consistent Inclusion in Architecture and Procurement**

   - Whenever a new application is planned, an architecture review clarifies who will handle patching, logging, network security, etc.
   - The procurement or project scoping includes the vendor’s responsibilities vs. yours, documented in service agreements.

1. **Reduced Misconfigurations**

   - You see fewer incidents caused by someone assuming "the vendor handles it."
   - Teams rarely have to scramble for post-deployment fixes related to neglected responsibilities.

1. **Cross-Functional Alignment**

   - Security, DevOps, finance, and governance teams share the same interpretation of the model, preventing blame shifts or confusion.

1. **Auditable Evidence**
   - If challenged by an internal or external auditor, you can present decision logs or architecture documents showing how you accounted for each aspect of shared responsibility.

If your cloud consumption decisions reliably incorporate these checks and remain transparent to all stakeholders, you might meet day-to-day operational needs. Still, you can enhance the process by making it even more strategic, with regular updates and risk-based evaluations.

#### **How to do better**

Below are **rapidly actionable** improvements to reinforce your informed decision-making:

1. **Adopt a "Responsibility Checklist" in Every Project Kickoff**

   - Expand your architecture or project initiation checklist to include:
     - Security responsibilities (e.g., OS patching, identity management).
     - Data responsibilities (e.g., encryption key ownership, backups).
     - Operational responsibilities (e.g., scaling, monitoring, incident response).
   - Tools and References:
     - [AWS Well-Architected Tool with the Security and Operational Excellence pillars](https://aws.amazon.com/well-architected/)
     - [Azure Well-Architected Framework for sharing responsibilities in IaaS/PaaS/SaaS contexts](https://learn.microsoft.com/en-us/azure/architecture/framework/)
     - [GCP Architecture Framework covering responsibilities for different services](https://cloud.google.com/architecture/framework)
     - [OCI Well-Architected Review focusing on shared responsibility best practices](https://www.oracle.com/cloud/well-architected/)

2. **Integrate with Governance Boards or Change Advisory Boards (CAB)**

   - Whenever a major cloud solution is proposed, the governance board ensures the shared responsibility breakdown is explicit.
   - This formal gate fosters consistent compliance with your model.

3. **Track "Responsibility Gaps" in Risk Registers**

   - If you discover any mismatch—like you thought the vendor handled container OS patching, but it’s actually your job—log it in your risk register until resolved.
   - This encourages a quick fix and ensures no gap remains unaddressed.

4. **Conduct Periodic "Mock Incident" Exercises**

   - For key services, run a tabletop exercise or test scenario: e.g., a severe OS vulnerability or unexpected data leak.
   - Evaluate how well the team knows who must patch or respond. Document lessons learned to refine your decision-making process.

5. **Refine Cost Transparency**
   - Show how responsibilities can affect cost:
     - If you’re using a fully managed database, you pay a premium but shift more patching or upgrades to the vendor.
     - If you choose IaaS, you do more patching but may see lower direct service charges.
   - Provide a quick cost/responsibility matrix so teams can weigh these trade-offs effectively.

By embedding the model into architecture reviews, governance boards, risk tracking, and cost analysis, you ensure each cloud decision is well-informed and widely understood across the organisation.

### **Strategic Integration of Shared Responsibility in Cloud Planning:** The shared responsibility model is strategically integrated into cloud consumption planning, with regular assessments to ensure responsibilities are well-managed. Decisions to retain responsibilities in house are documented and shared with the cloud vendor.

#### **How to determine if this good enough**

At this stage, your organisation not only references shared responsibilities when building or buying new solutions, but actively uses them to shape strategic roadmaps and service-level agreements. You might see this as "good enough" if:

1. **Proactive Vendor Collaboration**

   - You regularly discuss boundary responsibilities with the cloud provider, clarifying tasks that remain in-house and tasks the vendor can adopt.
   - Contract renewals or expansions include updates to these responsibilities if needed.

1. **Routine Audits on Allocation of Responsibilities**

   - Perhaps every 6–12 months, you review how the model is working in practice—are vendor-managed responsibilities handled properly? Are your in-house tasks well-executed?

1. **Clear Documentation of In-House Retained Tasks**

   - For tasks like specialised security controls, data classification, or unique compliance checks, you deliberately keep them in house. You note these exceptions in your governance or vendor communication logs.

1. **Enhanced Risk Management**
   - The risk register or compliance logs show minimal "unknown responsibility" gaps, and there’s a structured process for addressing new or changing requirements.

If your cloud planning and vendor engagements revolve around the shared responsibility model, ensuring alignment at both strategic and operational levels, you might meet advanced governance requirements in the UK public sector. Still, you can deepen the approach to ensure ongoing optimisation of cost, performance, and compliance.

#### **How to do better**

Here are **rapidly actionable** ideas to refine your strategic integration:

1. **Formalise a "Shared Responsibility Roadmap"**

   - Outline how your responsibilities may shift as you adopt new services or modernise apps:
     - E.g., "We plan to transition from self-managed DB to a fully managed service, shifting patching to the vendor by Q4."
   - Maintain an updated doc or wiki, shared with vendor account managers if relevant.

1. **Implement Joint Incident-Response Protocols**

   - For critical workloads, define a response plan that involves both your team and the vendor:
     - [AWS Well-Architected Tool with the Security and Operational Excellence pillars](https://aws.amazon.com/well-architected/)
     - [Azure Well-Architected Framework for sharing responsibilities in IaaS/PaaS/SaaS contexts](https://learn.microsoft.com/en-us/azure/architecture/framework/)
     - [GCP Architecture Framework covering responsibilities for different services](https://cloud.google.com/architecture/framework)
     - [OCI Well-Architected Review focusing on shared responsibility best practices](https://www.oracle.com/cloud/well-architected/)
   - This ensures everyone knows their role if an incident arises—no confusion about who must take the first steps.

1. **Regular Joint Reviews of SLAs and MoUs**

   - MoU (Memorandum of Understanding) or contracts can explicitly reference responsibilities.
   - Revisit them at least annually to confirm they remain relevant, especially if the vendor introduces new features or if you adopt new compliance frameworks.

1. **Quantify Responsibility Impacts on Cost and Resource**

   - Evaluate how shifting responsibilities (e.g., from IaaS to PaaS) reduces your operational overhead or risk while potentially increasing subscription fees.
   - This cost-benefit analysis should guide strategic decisions about which responsibilities to keep in house.

1. **Publish Internal Case Studies**
   - Showcase a project that integrated the shared responsibility model successfully, explaining how it prevented major incidents or streamlined compliance.
   - This inspires other teams to replicate the approach.

By systematically planning your responsibilities roadmap, establishing joint incident protocols, and performing regular SLA reviews, you embed the shared responsibility model at the heart of your strategic cloud partnerships.

### **Critical Factor in Cloud Consumption and Value Assessment:** The shared responsibility model is central to all decision-making regarding cloud consumption. It's regularly revisited to assess value for money and optimise the division of responsibilities with the cloud vendor.

#### **How to determine if this good enough**

This final maturity level sees the shared responsibility model as a cornerstone of your cloud strategy:

1. **Continuous Governance and Optimisation**

   - Teams treat shared responsibilities as a dynamic factor—constantly reviewing how tasks, risk, or cost can be best allocated between you and the vendor.
   - It’s integrated with your architecture, security, compliance, and financial planning.

1. **Live Feedback Loops**

   - When new cloud features or vendor service upgrades appear, you evaluate if shifting responsibilities (e.g., to a new managed service) is beneficial or if continuing in-house control is more cost-effective or necessary for compliance.

1. **Frequent Collaboration with Vendor**

   - You hold regular "architecture alignment" or "service optimisation" sessions with the cloud provider, ensuring your responsibilities remain well-balanced as your environment evolves.

1. **High Transparency and Minimal Surprises**
   - Incidents or compliance checks rarely expose unknown gaps.
   - You have robust confidence in your risk management, cost forecasting, and operational readiness.

If you operate at this level, you’re likely reaping the full benefit of cloud agility, cost optimisation, and compliance. Even so, continued vigilance is needed to adapt to new regulations, technology changes, or organisational shifts.

#### **How to do better**

Even at the pinnacle, there are **actionable** strategies to maintain and refine:

1. **Incorporate Real-Time Observability of Shared Responsibilities**

   - Extend your monitoring dashboards to highlight any newly provisioned resources that don’t align with known responsibilities or best practices:
     - [AWS: Utilise AWS Config and Amazon EventBridge to monitor resource configurations and trigger alerts for non-compliant changes](https://docs.aws.amazon.com/config/latest/developerguide/monitor-config-with-cloudwatchevents.html)
     - [Azure: Configure Azure Monitor with custom alert rules to detect the deployment of services without the required security or compliance settings](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-create-activity-log-alert-rule)
     - [GCP: Set up EventArc and Cloud Functions to receive notifications of new resource creations and enforce compliance checks based on shared responsibility tags](https://cloud.google.com/eventarc/docs/tutorials/cloud-functions)
     - [OCI: Leverage Cloud Guard to detect resources that do not align with assigned responsibilities, generating immediate alerts](https://docs.oracle.com/en-us/iaas/Content/CloudGuard/Concepts/cloudguard_overview.htm)

1. **Conduct Regular Cost-Benefit Re-Evaluations**

   - At least quarterly, re-check if shifting more responsibilities to vendor-managed solutions or retaining them in house remains the best approach:
     - Some tasks might become cheaper or more secure if the vendor has introduced an improved managed feature or a new region with stronger compliance credentials.
   - Document these findings for leadership to see the ROI of the chosen approach.

1. **Shape Best Practices Across the Public Sector**

   - Share your advanced model with partner agencies, local councils, or central government departments.
   - Contribute to cross-government playbooks on cloud adoption, showing how the shared responsibility model fosters better outcomes.

1. **Combine Shared Responsibility Insights with Ongoing Cloud Transformation**

   - If you’re running modernisation or digital transformation programs, embed the shared responsibility model into new microservices, container deployments, or serverless expansions.
   - Constantly question: "Where does the boundary lie, and is it cost-effective or compliance-aligned to shift it?"

1. **Prepare for Regulatory Changes**
   - Monitor updates to UK data protection laws, the National Cyber Security Centre (NCSC) guidelines, or changes in vendor compliance certifications.
   - Adjust responsibilities quickly if new standards require a different approach (e.g., more encryption or different backup retention mandated by a new policy).

By ensuring real-time observability, frequent cost-benefit checks, sector-wide collaboration, and a readiness to pivot for regulatory shifts, you sustain a robust, adaptive shared responsibility model at the core of your cloud usage. This cements your organisation’s position as a leader in cost-effective, secure, and compliant public sector cloud adoption.

**Keep doing what you’re doing,** and consider sharing blog posts, case studies, or internal knowledge base articles on how your organisation integrates the shared responsibility model into cloud governance. Submit pull requests to this guidance or similar public sector best-practice repositories to help others learn from your success.
