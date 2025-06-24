---
title: How do you develop and implement your cloud strategy?
tags: operations
eleventyNavigation:
  parent: operations
---

### We don't have a cloud strategy team.

#### **How to determine if this good enough**

Your organisation may run cloud operations without a formal cloud-oriented structure, relying on legacy or on-prem roles. This might be considered "good enough" if:

1. **Low Cloud Adoption**
   - You only use minimal cloud services for pilot or non-critical workloads, making specialised cloud roles seem unnecessary.

1. **Stable or Limited Growth**
   - Infrastructure demands rarely change, so a dedicated cloud team is not yet recognised as a priority.

1. **No Formal Strategy**
   - Senior leadership or departmental heads are content with the status quo. No urgent requirement (e.g., cost optimisation, advanced digital services) drives a need for specialised cloud skills.

However, lacking a dedicated cloud focus often results in uncoordinated efforts, missed security best practices, and slow adoption of modern technologies. [NCSC cloud security guidelines](https://www.ncsc.gov.uk/collection/cloud-security) encourage establishing clear accountability and specialised skills for public sector cloud operations.

#### **How to do better**

Below are **rapidly actionable** steps to start formalising a cloud-oriented approach:

1. **Identify a Cloud Advocate**
   - Appoint a single volunteer (or a small group) as the go-to person(s) for cloud questions:
     - They can gather and share best practices, referencing [NCSC guidance on secure cloud migrations](https://www.ncsc.gov.uk/).

1. **Host Internal Workshops**
   - Invite vendor public sector teams ([AWS Public Sector](https://aws.amazon.com/public-sector/), [Azure for Government](https://azure.microsoft.com/en-us/resources/cloud-computing-for-government/), [GCP Public Sector](https://cloud.google.com/public-sector), or [Oracle Government Cloud](https://www.oracle.com/government/)) for short awareness sessions on cloud fundamentals and cost management.

1. **Create a Cloud Starter Doc**
   - Summarise the organisation’s existing cloud usage, known gaps, and next steps for improvement.
   - Include references to [GOV.UK’s technology code of practice](https://www.gov.uk/government/publications/technology-code-of-practice/technology-code-of-practice) or [NIST’s cloud computing guidelines](https://csrc.nist.gov/projects/cloud-computing) for alignment.

1. **Pilot a Small Cross-Functional Team**
   - If you have an upcoming project with cloud components, assemble a temporary team from different departments (development, security, finance) to coordinate on cloud decisions.

1. **Define Basic Cloud Roles**
   - Even without a dedicated cloud team, define who handles security reviews, cost optimisation checks, or architectural guidance.

By designating a cloud advocate, introducing basic cloud knowledge sessions, and forming a small cross-functional group for a pilot project, you lay the groundwork for a more coordinated approach to cloud strategy and operations.

### Some people have cloud skills and help others when needed.

#### **How to determine if this good enough**

When some staff have cloud knowledge and organically help colleagues, your organisation achieves partial cloud collaboration. This may be "good enough" if:

1. **Moderate Cloud Adoption**
   - You already operate a few production workloads in the cloud, and ad hoc experts resolve issues or give guidance sufficiently well.

1. **Flexible Culture**
   - Teams are open to sharing cloud tips and best practices, but there’s no formal structure or authority behind it.

1. **No Pressing Need for Standardisation**
   - Departments might be content with slight variations in cloud usage as long as top-level goals are met.

While better than complete silos, purely informal networks can cause challenges in scaling solutions, ensuring consistent security measures, or presenting a cohesive cloud vision at the organisational level.

#### **How to do better**

Below are **rapidly actionable** ideas to strengthen informal cloud expertise:

1. **Formalise a Community of Practice**
   - Schedule monthly or bi-monthly meetups for cloud practitioners across teams:
     - They can share success stories, approaches to cost management, referencing [AWS Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/cost-explorer-getting-started.html), [Azure Cost Management](https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis), or [GCP Cloud Billing dashboards](https://cloud.google.com/billing/docs/how-to/view-billing-data).

1. **Create a Shared Knowledge Base**
   - Host a wiki, Slack channel, or Teams group to store common Q&As or how-to guides:
     - Link to relevant [NCSC cloud security resources](https://www.ncsc.gov.uk/collection/cloud-security) and [GOV.UK technology code of practice](https://www.gov.uk/government/publications/technology-code-of-practice).

1. **Encourage One-Stop Repos**
   - For repeated patterns (e.g., Terraform templates for secure VMs or container deployments), maintain a Git repo that all teams can reference.

1. **Promote Shared Governance**
   - Align on a minimal set of "must do" controls (e.g., mandatory encryption, logging).
   - Consider referencing [NIST SP 800-53 controls](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final) for cloud resource security responsibilities.

1. **Pilot a Small Formal Working Group**
   - If informal collaboration works well, create a small "Cloud Working Group" recognised by leadership.
   - They can propose consistent patterns or cost-saving tips for cross-team usage.

By forming a community of practice, establishing a knowledge base, and beginning minimal governance alignment, you transition from ad hoc experts toward a more structured, widely beneficial cloud strategy.

### We have a cross-team group that guides all cloud work.

#### **How to determine if this good enough**

At this stage, you’ve established a Cloud Center of Excellence (COE) or similar body that offers resources, best practices, and guidelines for cloud usage. It may be "good enough" if:

1. **Visibility and Authority**
   - The COE is recognised by senior management or departmental leads, shaping cloud-related decisions across the organisation.

1. **Standardised Practices**
   - The COE maintains patterns for infrastructure as code, security baselines, IAM policies, and cost optimisation.
   - Teams typically consult these guidelines for new cloud projects.

1. **Growing Cloud Adoption**
   - The COE’s existence accelerates confident use of cloud resources, boosting agility without sacrificing compliance.

If the COE is well-integrated and fosters consistent cloud usage, it might suffice. However, you can further embed COE standards into daily workflows or empower product teams with more autonomy.

#### **How to do better**

Below are **rapidly actionable** strategies to improve a formal Cloud COE:

1. **Offer Self-Service Catalogs or Templates**
   - Provide easily consumable Terraform or CloudFormation templates for standard workloads:
     - [AWS Service Catalog or AWS CloudFormation StackSets for consistent rollout](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html)
     - [Azure Blueprints or Bicep modules for repeatable environment creation](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview)
     - [GCP Deployment Manager or Terraform modules with COE-defined best practices](https://cloud.google.com/deployment-manager/docs/overview)
     - [OCI Resource Manager stacks with governance policies baked in](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Concepts/stacksoverview.htm)

1. **Extend COE Services**
   - e.g., specialised security reviews, compliance checks referencing [NCSC 14 Cloud Security Principles](https://www.ncsc.gov.uk/collection/cloud-security), or cost optimisation workshops that unify departmental approaches.

1. **Set up a Community of Practice**
   - Have the COE coordinate monthly open sessions for all cloud practitioners to discuss new vendor features, success stories, or security enhancements.

1. **Embed COE Members in Key Projects**
   - Provide "COE ambassadors" who temporarily join project teams to share knowledge and shape architecture from the start.

1. **Consult NIST and GOV.UK for Strategy Guidance**
   - e.g., [NIST Cloud Computing Reference Architecture](https://csrc.nist.gov/publications/detail/sp/500-292/final) or [GOV.UK recommendations on technology strategies](https://www.gov.uk/government/publications/technology-code-of-practice) can strengthen your COE's strategic approach.

By delivering self-service solutions, deeper security reviews, and an active cloud community, the COE matures into a vital driver for consistent, secure, and cost-effective cloud adoption across the organisation.

### Cloud teams use shared standards and patterns.

#### **How to determine if this good enough**

Here, the COE’s guidance and patterns have been widely adopted. Project-specific cloud teams incorporate cross-functional roles (e.g., security, networking, DevOps). You might see it as "good enough" if:

1. **Unified Governance**
   - Nearly all new cloud deployments adhere to COE-sanctioned architectures, security configurations, and cost policies.

1. **Broad Collaboration**
   - Teams across the organisation share knowledge, follow standard templates, and integrate cloud best practices early in development.

1. **Accelerated Delivery**
   - Because each project leverages proven patterns, time to deliver new cloud-based services is significantly reduced.

Still, certain advanced areas—like fully autonomous product teams or dynamic ephemeral environments—might remain underutilised, and you might expand the COE’s influence further.

#### **How to do better**

Below are **rapidly actionable** steps to further integrate the COE’s standards into everyday operations:

1. **Adopt "Cloud-First" or "Cloud-Smart" Policies**
   - Mandate that new solutions default to cloud-based approaches unless there’s a compliance or cost reason not to.
   - Reference relevant policy from [GOV.UK’s Cloud First policy](https://www.gov.uk/guidance/government-cloud-first-policy) for alignment.

1. **Introduce Automated Compliance Checks**
   - Bake COE standards into automated tools:
     - [AWS Config or AWS Service Control Policies to enforce resource configurations organization-wide](https://docs.aws.amazon.com/config/latest/developerguide/config-overview.html)
     - [Azure Policy for controlling VM sizes, storage encryption, or tagging compliance](https://docs.microsoft.com/en-us/azure/azure-policy/overview)
     - [GCP Organization Policy for restricting certain resources or requiring encryption at rest](https://cloud.google.com/resource-manager/docs/organization-policy/overview)
     - [OCI Security Zones or IAM policies that enforce certain best practices across compartments](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/securityzones.htm)
   - This ensures no team can inadvertently deviate from security or cost baselines.

1. **Enable On-Demand Cloud Labs/Training**
   - Provide hands-on workshops or sandbox accounts where staff can experiment with new cloud services in a safe environment.
   - Encourages further skill growth and cross-pollination.

1. **Measure Outcomes and Iterate**
   - Track success metrics: e.g., time to provision environments, frequency of security incidents, cost savings realised by standard patterns.
   - Present these metrics in monthly or quarterly leadership updates, aligning with [NCSC operational resilience guidance](https://www.ncsc.gov.uk/).

1. **Improve Cross-Functional Team Composition**
   - Incorporate security engineers and cloud architects directly into product squads for new digital services, reducing handoffs.

By mandating automated compliance checks, fostering a "cloud-first" approach, expanding skill-building labs, and embedding security/architecture roles into each delivery team, you further entrench consistent, effective cloud usage across the public sector organisation.

### Teams work together across roles, with experts in all the areas we need them.

#### **How to determine if this good enough**

At this final stage, you have a highly sophisticated COE model where product teams are fully empowered with cloud skills, processes, and governance. You might consider it "good enough" if:

1. **High Autonomy, Low Friction**
   - Teams can spin up secure, cost-efficient cloud resources independently, referencing well-documented patterns, without bottlenecks or repeated COE approvals.

1. **Robust Governance**
   - The COE remains a guiding entity rather than a gatekeeper, ensuring continuous compliance with [NCSC guidelines](https://www.ncsc.gov.uk/) or [NIST standards](https://csrc.nist.gov/) via automated controls.

1. **Continuous Innovation**
   - Because cross-functional teams handle security, DevOps, architecture, and user needs holistically, new services roll out quickly and reliably.

1. **Data-Driven & Secure**
   - Cost usage, security posture, and performance metrics are all visible organisation-wide, enabling proactive decisions and swift incident response.

Though you’re at an advanced state, ongoing adaptation to new cloud technologies, security challenges, or legislative updates remains crucial for sustained leadership in digital transformation.

#### **How to do better**

Below are **rapidly actionable** ways to refine an already advanced operating model:

1. **Introduce FinOps Practices**
   - Link cost optimisation more tightly with developer workflows:
     - [AWS Cost Explorer or AWS Budgets integrated into Slack/Teams alerts for cost anomalies](https://docs.aws.amazon.com/cost-management/latest/userguide/cost-explorer-getting-started.html)
     - [Azure Cost Management with real-time dashboards for DevOps squads to see cost implications of their deployments](https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis)
     - [GCP Billing Export + Looker Studio or BigQuery for self-service cost visibility](https://cloud.google.com/billing/docs/how-to/view-billing-data)
     - [OCI Cost Analysis or Budgets for real-time notifications on cost spikes shared with product teams](https://docs.oracle.com/en-us/iaas/Content/Cost/Concepts/cost-analysis.htm)

1. **Enable Self-Service Data & AI**
   - If each product team can not only provision compute but also harness advanced analytics or ML on demand:
     - Speeds up data-driven policy or service improvements.

1. **Adopt Policy-as-Code**
   - Extend your automated governance:
     - e.g., using [Open Policy Agent (OPA) or AWS Service Control Policies, Azure Policy, GCP Organisation Policy, or OCI Security Zones] to ensure consistent rules across the entire estate.

1. **Engage in Cross-Government Collaboration**
   - Share your advanced COE successes with other departments, local councils, or healthcare orgs:
     - Possibly present at [GOV.UK community meetups](https://www.gov.uk/service-manual/agile-delivery), or work on open-source infrastructure modules that other public bodies can reuse.

1. **Stay Current with Tech and Security Trends**
   - Periodically assess new NCSC or NIST advisories, cloud vendor releases, or best-practice updates to keep your operating model fresh, secure, and cost-effective.

By incorporating robust FinOps, self-service AI, policy-as-code, cross-government collaboration, and continuous trend analysis, you ensure your advanced COE model remains at the forefront of effective and secure cloud adoption in the UK public sector.

**Keep doing what you’re doing,** and consider writing blog posts or internal knowledge-sharing articles about your advanced Cloud COE. Submit pull requests to this guidance or other public sector best-practice repositories to help others learn from your successes in structuring cross-functional cloud teams and ensuring an effective operating model.
