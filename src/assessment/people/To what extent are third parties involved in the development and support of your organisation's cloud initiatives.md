---
title: To what extent are third parties involved in the development and support of your organisation's cloud initiatives?
tags: people
eleventyNavigation:
  parent: people
---

### **Complete Reliance on Third Parties:** Third parties are fully responsible for all cloud work, with unrestricted access to the entire cloud infrastructure.

#### **How to determine if this good enough**

Your organisation might rely entirely on external suppliers or integrators to handle every aspect of your cloud environment (deployment, operations, security, cost optimisation). You may see this "good enough" if:

1. **Minimal Internal Capability or Resource**

   - Your team lacks capacity or skills to manage cloud tasks in-house, so outsourcing everything seems more efficient.

1. **Stable, Low-Risk Environments**

   - You have not encountered major issues or compliance demands; the environment is small enough that handing all access to a trusted third party is acceptable.

1. **Rigid Budget Constraints**
   - Management prefers paying a single supplier cost rather than investing in building in-house skills or a DevOps team.

However, complete third-party control often creates risk if the supplier fails, is compromised, or does not align with [NCSC best practices on supply chain security](https://www.ncsc.gov.uk/collection/supply-chain-security). Also, [NIST SP 800-161 supply chain risk management](https://csrc.nist.gov/) advises caution in giving total external control over strategic assets.

#### **How to do better**

Below are **rapidly actionable** ways to reduce over-dependence on a single third party:

1. **Retain Critical Access**

   - Designate at least one in-house staff member with admin or break glass rights, ensuring your organisation can still operate if the supplier is unavailable.
   - Cloud providers typically support delegated access models:
     - [AWS Organizations or IAM for multiple accounts](https://aws.amazon.com/organizations/)
     - [Azure RBAC with custom roles to limit or share admin permissions](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles)
     - [GCP Organization-level IAM to distribute ownership across internal staff](https://cloud.google.com/iam/docs/organization-policy-management)
     - [OCI IAM compartments and policies for partial or full admin rights](https://www.oracle.com/cloud/free/oci-training/)

1. **Require Transparent Documentation**

   - Request the third party produce architecture diagrams, runbooks, and logs:
     - So your internal teams can reference them and step in if needed.

1. **Set Clear SLAs and Security Requirements**

   - Stipulate compliance with [NCSC’s cloud security principles](https://www.ncsc.gov.uk/collection/cloud-security), any relevant [NIST frameworks](https://csrc.nist.gov/), and cost accountability:
     - This helps ensure strong security posture and predictable budgeting.

1. **Conduct Periodic Access Reviews**

   - Evaluate who has root-level or full access privileges. Revoke or reduce if not absolutely necessary:
     - Minimises the impact if the supplier or a contractor is compromised.

1. **Begin In-House Skill Development**
   - While outsourcing can remain an option, create a roadmap for building minimal internal cloud literacy:
     - e.g., sponsor staff to complete fundamental vendor certs or attend free training from [AWS Skill Builder](https://aws.amazon.com/training/skill-builder/), [Azure Learn](https://learn.microsoft.com/en-us/training/), [GCP Skill Boost](https://cloud.google.com/training/free-tier), or [OCI Free Training](https://www.oracle.com/cloud/free/oci-training/).

By retaining critical admin access, demanding thorough documentation, setting rigorous SLAs, auditing access, and growing your internal skill base, you hedge against supplier lock-in or failure and maintain some sovereignty over crucial cloud operations.

### **Significant Third-Party Involvement:** Third parties play a major role in delivering certain aspects of cloud work and have full access to cloud accounts.

#### **How to determine if this good enough**

If your organisation still grants external partners or suppliers broad control of cloud resources, but you handle some tasks in-house, you might deem it acceptable if:

1. **Shared Responsibilities**

   - Your staff can manage day-to-day tasks while suppliers handle complex architecture, major updates, or advanced security.

1. **Periodic Oversight**

   - You monitor or audit the supplier’s activity at intervals, ensuring alignment with departmental standards.

1. **Reasonable Security and Compliance**
   - The supplier meets basic compliance checks and commits to [NCSC supply chain security best practices](https://www.ncsc.gov.uk/collection/supply-chain-security) or relevant [NIST SP 800-53/800-161] controls.

However, full account-level access can still introduce risk—particularly around misconfigurations, cost overruns, or insufficient security hardening if not carefully supervised. Evolving your posture can ensure robust, granular control.

#### **How to do better**

Below are **rapidly actionable** improvements:

1. **Use Granular IAM Permissions**

   - Instead of giving suppliers full admin rights, adopt least privilege:
     - e.g., [AWS IAM roles and permission boundaries](https://aws.amazon.com/iam/), [AWS Control Tower for policy governance](https://aws.amazon.com/controltower/)
     - [Azure RBAC with custom roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles), [Azure Blueprints for multi-subscription security baselines](https://learn.microsoft.com/en-us/azure/governance/blueprints/overview)
     - [GCP IAM with folder/project-level access](https://cloud.google.com/iam/docs/organization-policy-management), [Organization Policy constraints for security controls](https://cloud.google.com/iam/docs/organization-policy-management)
     - [OCI IAM compartments, tagging, and policy statements limiting scope of supplier access](https://www.oracle.com/cloud/free/oci-training/)

1. **Create Supplier-Specific Accounts or Subscriptions**

   - Segment your cloud environment so suppliers only see or modify what’s relevant:
     - This helps contain damage if credentials leak or get misused.

1. **Mandate Activity Logging & Auditing**

   - Configure [AWS CloudTrail, Azure Monitor, GCP Cloud Logging, OCI Audit] to track every privileged action:
     - Helps detect anomalies or investigate incidents quickly.

1. **Conduct Scheduled Joint Reviews**

   - Align on cost management, architecture updates, security posture with the supplier monthly or quarterly:
     - e.g., use [AWS Trusted Advisor / Azure Advisor / GCP Recommender / OCI Advisor] to see if best practices are followed.

1. **Plan for Possible Transition**
   - If you decide to reduce the supplier’s role in the future, ensure documentation or staff knowledge exist to avoid single-point dependencies.

By applying least privilege IAM, isolating supplier access, logging all privileged actions, collaborating on architecture/cost reviews, and planning for possible transitions, you maintain high security while leveraging external expertise effectively.

### **Specialised Third-Party Support with Limited Access:** Third-party providers contribute specialised knowledge and maintain 'break glass' (emergency) admin access only.

#### **How to determine if this good enough**

Here, your organisation typically handles daily operations, but calls on external experts for advanced tasks or emergencies—granting them only minimal privileged credentials. You might see it as "good enough" if:

1. **Mature Internal Team**

   - Your staff can handle common issues; third parties fill skill gaps in HPC, ML, or specialised security incidents.

1. **Controlled Access**

   - The supplier can escalate to "admin" only under defined protocols (e.g., break-glass accounts), reducing continuous broad privileges.

1. **Balanced Costs**
   - You avoid paying for full outsourcing; instead, pay for specialised or on-demand engagements.

This approach offers strong security control while ensuring advanced expertise is available if required. [NCSC’s principle of "least privilege" and "need-to-know" aligns with limiting third-party access in normal operations. NIST SP 800-161 supply chain risk guidance similarly endorses restricting vendor privileges.

#### **How to do better**

Below are **rapidly actionable** ways to refine specialised third-party support:

1. **Automate Break-Glass Processes**

   - e.g., storing break-glass credentials in a secure vault (like [AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, OCI Vault]) requiring multi-party approval or temporary permission escalation.

1. **Develop Clear Incident Protocols**

   - Document precisely when to invoke the supplier’s "emergency" access and how to revoke it once resolved:
     - e.g., reference [NCSC incident management guidelines](https://www.ncsc.gov.uk/collection/incident-management).

1. **Perform Yearly Access Drills**

   - Simulate a scenario requiring supplier intervention:
     - Validate that the break-glass account retrieval process, notifications, and post-incident re-lock steps all work smoothly.

1. **Enforce Accountability**

   - Keep robust logs of every action taken under break-glass credentials, analyzing for anomalies:
     - [AWS CloudTrail](https://aws.amazon.com/cloudtrail/), [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/), [GCP Cloud Logging](https://cloud.google.com/logging), [OCI Audit](https://www.oracle.com/cloud/free/oci-training/) with mandatory MFA for break-glass usage.

1. **Periodic Skills Transfer**
   - Let external experts run short workshops, training sessions, or knowledge transfers:
     - e.g., HPC performance tuning, advanced DevSecOps, or AI/ML best practices—improving your team’s ability to handle issues without always relying on break-glass.

By automating break-glass credentials, establishing clear incident protocols, conducting annual drills, logging all privileged actions, and regularly upskilling staff with supplier-led sessions, you can maintain strong security while accessing specialised expertise only when needed.

### **Specialised Knowledge without Privileged Access:** Third parties provide specialised expertise but do not have any form of privileged access to cloud infrastructure.

#### **How to determine if this good enough**

Your organisation fully manages its cloud environment, relying on external experts for design reviews, architecture guidance, or training—but without granting them direct infrastructure permissions. This might be "good enough" if:

1. **Sufficient In-House Ops and Security**

   - You have a capable ops and security team able to implement supplier recommendations without handing over admin keys.

1. **Low Risk of Supply Chain Compromise**

   - Restricting external access to "view-only" or no direct access ensures minimal risk of unauthorised actions by a third party.

1. **Strong Cultural Collaboration**
   - Communication flows well; suppliers can guide your staff effectively on advanced topics.

However, if you need external support for certain operational tasks, not giving them any direct access could slow response times or hamper complex troubleshooting. [NCSC’s supply chain security advice](https://www.ncsc.gov.uk/collection/supply-chain-security) advocates balancing minimal necessary access with real-world support requirements.

#### **How to do better**

Below are **rapidly actionable** ways to leverage specialised knowledge further:

1. **Add Read-Only or Auditor Roles**

   - If a supplier needs to see logs or metrics, create limited read-only access:
     - [AWS IAM "Auditor" roles](https://aws.amazon.com/iam/), [Azure "Reader" role](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader), [GCP "Viewer" role](https://cloud.google.com/iam/docs/understanding-roles), [OCI "Read-Only" policy for compartments](https://www.oracle.com/cloud/free/oci-training/).
   - This streamlines feedback without giving them admin powers.

1. **Enable Collaborative Architecture Reviews**

   - Provide sanitised environment data or architecture diagrams for the supplier to review:
     - e.g., removing any sensitive info but enough detail to yield beneficial recommendations.

1. **Request Proactive Security or Cost Analysis**

   - Possibly share cost usage dashboards ([AWS Cost Explorer](https://aws.amazon.com/cost-explorer/), [Azure Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/), [GCP Billing](https://cloud.google.com/billing), [OCI Cost Analysis](https://www.oracle.com/cloud/free/oci-training/)) or security posture data so the supplier can offer suggestions.

1. **Formalise Knowledge Transfer**

   - For each engagement, define deliverables like architectural guidelines, best-practice documents, or mini-lab sessions with staff.
   - Ensures that specialised advice becomes actionable in-house expertise.

1. **Regular Check-Ins and Feedback Loop**
   - If they have no direct access, schedule monthly or quarterly calls to review changing requirements or new services, referencing relevant [NCSC or NIST updates on secure cloud operations](https://csrc.nist.gov/).

By granting read-only roles for better collaboration, scheduling architecture or security reviews, requesting continuous cost/security analysis, and structuring knowledge transfers, you maximise the benefits of external specialists while maintaining tight control over your environment.

### **Minimal or Augmentative Third-Party Role:** Third parties are either not used at all or serve purely as staff augmentation, without any privileged access or holding exclusive knowledge.

#### **How to determine if this good enough**

At this highest maturity level, your organisation has robust internal cloud teams, perhaps occasionally hiring contract staff or specialised freelancers to augment efforts—but with no exclusive control or privileged role. You might consider it "good enough" if:

1. **Self-Sufficient Internal Capability**

   - Your workforce covers all major cloud operations (DevOps, security, architecture, cost optimisation), reducing dependence on external vendors.

1. **Minimal or Temporary Outsourcing**

   - External help is short-term, under strict direction, and does not lead or own critical processes.

1. **Complete Knowledge Ownership**
   - No vendor or contractor has unique knowledge. All runbooks, configurations, or code remain well documented in-house.

If your internal team effectively manages all cloud tasks, external specialists only add temporary capacity. However, if new advanced needs arise (e.g., HPC, AI, specialised security audits), you might reintroduce deeper third-party involvement—so readiness for that possibility is key.

#### **How to do better**

Below are **rapidly actionable** ways to refine a minimal/augmentative third-party approach:

1. **Maintain Partnerships Without Access**

   - Keep a list of vetted specialised vendors (e.g., HPC, big data, AI/ML, security) for future on-demand projects:
     - [AWS HPC Competency or Data Analytics Competency partners](https://aws.amazon.com/partners/competencies/), [Azure HPC specialized consultancies](https://azure.microsoft.com/en-us/resources/cloud-computing/azure-fast-track-solutions), [GCP ML specialized partners](https://cloud.google.com/partners/specialized-partners), [OCI HPC experts](https://www.oracle.com/cloud/free/oci-training/).

1. **Ensure Proper Documentation and Knowledge Transfer**

   - Whenever you briefly hire contingent staff, they must update runbooks, diagrams, or code repos:
     - Mitigates risk of "knowledge walkout."

1. **Incorporate Cross-Government Collaboration**

   - For advanced or new cloud initiatives, consider partnering with other public sector bodies first, exchanging staff or expertise:
     - e.g., short secondments or co-located sprints can accelerate learning while minimising external costs.

1. **Benchmark Internal Teams Regularly**

   - Evaluate your staff’s readiness for new features, security approaches, or multi-cloud expansions.
   - Use [NCSC skill frameworks](https://www.ncsc.gov.uk/) or [NIST workforce standards](https://csrc.nist.gov/) to ensure coverage.

1. **Public Sector Thought Leadership**
   - If you have minimal external dependencies, you likely have strong internal mastery—consider sharing success stories or best practices across local councils or [GOV.UK communities of practice](https://www.gov.uk/service-manual).

By maintaining a supplier list without granting them privileged access, enforcing thorough knowledge transfer, collaborating cross-government for specialised expertise, continuously benchmarking in-house capabilities, and showcasing your self-reliant approach, you preserve a high level of operational independence aligned with secure, cost-effective public sector cloud usage.

**Keep doing what you’re doing,** and consider writing about your strategies for third-party involvement in cloud initiatives or creating pull requests to this guidance. This helps other UK public sector organisations learn how to balance external expertise with robust internal control over their cloud environment.
