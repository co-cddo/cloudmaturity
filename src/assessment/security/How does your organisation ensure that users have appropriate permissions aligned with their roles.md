---
title: How does your organisation ensure that users have appropriate permissions aligned with their roles?
tags: security
eleventyNavigation:
  parent: security
---

### **Ad-Hoc and Informal Review Process:** User entitlements and profiles are reviewed in an ad-hoc, informal manner with administrators manually managing these as they see fit.

#### **How to determine if this good enough**

Your organisation lacks a formal or scheduled approach to verifying user access, relying on admin discretion. This might be acceptable if:

1. **Small or Static Environments**

   - Fewer staff changes, so new or removed accounts are manageable without a structured process.

1. **No Critical Data or Systems**

   - Low sensitivity or risk if accounts remain overprivileged or are never deactivated.

1. **Minimal Budgets/Resources**
   - The current state is all you can handle, with no immediate impetus to formalise.

However, ad-hoc reviews often result in outdated or excessive privileges, violating the [NCSC’s principle of least privilege](https://www.ncsc.gov.uk/collection/cloud-security) and ignoring [NIST SP 800-53 AC (Access Control) controls](https://csrc.nist.gov/). This can lead to security breaches or cost inefficiencies.

#### **How to do better**

Below are **rapidly actionable** steps to transition from ad-hoc reviews to basic structured processes:

1. **Define a Minimal Access Policy**

   - Even one page stating all roles must have least privilege, with approvals required for additional rights.
   - Reference [NCSC’s Access Management best practices](https://www.ncsc.gov.uk/).

1. **Create a Simple RACI for Access Management**

   - Identify who is Responsible, Accountable, Consulted, and Informed for each step (e.g., granting, revoking, auditing).
   - Helps clarify accountability if something goes wrong.

1. **Leverage Built-In Cloud IAM Tools**

   - [AWS IAM](https://aws.amazon.com/iam/), [Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview), [GCP IAM](https://cloud.google.com/iam/docs/overview), [OCI IAM compartments/policies](https://www.oracle.com/cloud/free/oci-training/) can define or limit privileges.
   - Minimises guesswork in manual permission assignments.

1. **Maintain a Basic User Inventory**

   - Keep a spreadsheet or list of all privileged users, what roles they have, and last update date:
     - So you can spot dormant accounts or over-privileged roles.

1. **Plan for Periodic Checkpoints**
   - Commit to a small monthly or quarterly access sanity check with relevant admins, reducing overlooked issues over time.

By laying out a minimal access policy, assigning RACI for administration, adopting cloud-native IAM, maintaining a simple user inventory, and scheduling monthly or quarterly check-ins, you’ll quickly improve from ad-hoc reviews to a more reliable approach.

### **Periodic Manual Reviews with Limited Action:** Periodic manual reviews of access rights are conducted for some systems, but access is rarely revoked or reduced due to concerns about unintended consequences.

#### **How to determine if this good enough**

Your organisation periodically inspects user entitlements—maybe annually or every six months—but rarely adjusts them, fearing interruptions if privileges are revoked. This might be considered "good enough" if:

1. **Basic Governance in Place**

   - At least you have a schedule or routine for checking access.

1. **Minimal Overhead**

   - The burden of frequent changes or potential disruptions might exceed perceived risk from leftover permissions.

1. **No Evidence of Abuse**
   - If you haven’t encountered security incidents or cost leaks due to over-privileged accounts.

Yet continuously retaining excessive privileges invites risk. [NCSC’s guidelines](https://www.ncsc.gov.uk/) and [NIST SP 800-53 AC-6 on least privilege](https://csrc.nist.gov/) emphasize actively removing unneeded privileges to shrink your attack surface.

#### **How to do better**

Below are **rapidly actionable** ways to evolve beyond limited-action reviews:

1. **Mandate a "Test Before Revoke" Procedure**

   - If concerns about "breaking something" hinder revocations, adopt a short test environment to confirm the user or system truly needs certain permissions.

1. **Categorise Users by Risk**

   - For high-risk roles (e.g., admin accounts with access to production data), enforce stricter reviews or more frequent re-validation:
     - Potentially referencing [AWS IAM Access Analyzer](https://aws.amazon.com/iam/features/), [Azure AD Access Reviews](https://learn.microsoft.com/en-us/azure/active-directory/governance/access-reviews-overview), [GCP’s IAM Recommender](https://cloud.google.com/iam/docs/access-reviews), [OCI IAM tools](https://www.oracle.com/cloud/free/oci-training/).

1. **Implement Review Dashboards**

   - Summarise each user’s privileges, last login, or role usage:
     - If certain roles are not used in X days, consider removing them.

1. **Show Leadership Examples**

   - Have a pilot case where you successfully reduce access for a role with no negative consequences, building confidence.

1. **Incentivise or Recognise Proper Clean-Up**
   - Acknowledge teams or managers who diligently remove no-longer-needed permissions:
     - Encourages a habit of safe privilege reduction.

By adopting test environments before revoking privileges, classifying user risk levels, building simple dashboards, demonstrating safe revocations, and recognising best practices, you reduce hesitancy and further align with security best practices.

### **Regular Manual Reviews, Primarily Additive:** Regular, manual reviews of access rights are conducted across most systems. However, changes to access are generally additive rather than reductive.

#### **How to determine if this good enough**

Your organisation systematically checks user access on a regular basis, but typically only grants new privileges (additive changes). Rarely do you remove or reduce existing entitlements. This may be "good enough" if:

1. **Frequent or Complex Role Changes**

   - Staff rotate roles or new tasks come up often, so you keep adding privileges to accommodate new responsibilities.

1. **Better Than Irregular Audits**

   - At least you’re reviewing systematically, capturing some improvements over purely ad-hoc or partial reviews.

1. **No Major Security Incidents**
   - You haven’t experienced negative consequences from leftover or stale permissions yet.

However, purely additive processes lead to privilege creep. Over time, users accumulate broad access, conflicting with [NCSC’s least privilege principle](https://www.ncsc.gov.uk/) and [NIST SP 800-53 AC-6 compliance](https://csrc.nist.gov/). Reductions are vital to maintain a minimal attack surface.

#### **How to do better**

Below are **rapidly actionable** steps to incorporate permission reduction:

1. **Implement a "Use it or Lose it" Policy**

   - If a user’s permission or role is unused for a set period (e.g., 30 days), it’s automatically flagged for removal:
     - Tools like [AWS IAM Access Analyzer](https://aws.amazon.com/iam/features/), [Azure AD Access Reviews](https://learn.microsoft.com/en-us/azure/active-directory/governance/access-reviews-overview), [GCP IAM Recommender](https://cloud.google.com/iam/docs/access-reviews), or [OCI IAM metrics](https://www.oracle.com/cloud/free/oci-training/) can show which roles are not used.

1. **Mark Temporary Access with Expiry**

   - For short-term projects, set an end date for extra privileges:
     - e.g., using AWS or Azure policy conditions, GCP short-lived tokens, or OCI compartments-based ephemeral roles.

1. **Combine with Slack/Teams Approvals**

   - Automate revocation requests: if an admin sees stale permissions, they click a button to remove them, and a second manager approves:
     - Minimises fear of accidental breakage.

1. **Reward "Right-sizing"**

   - Celebrate teams that proactively reduce permission sprawl, referencing cost savings or risk reduction:
     - e.g., mention in staff newsletters or internal security updates.

1. **Refine Review Frequency**
   - If reviews are monthly or quarterly, consider stepping up to weekly or adopting a continuous scanning approach for business-critical accounts.

By adding a usage-based revocation policy, setting expiry for short-lived roles, integrating quick approval workflows, recognising teams that successfully remove unused privileges, and potentially increasing review frequency, you shift from additive-only changes to an environment that truly enforces minimal privileges.

### **Regular Reviews with Defined Expiry Dates:** Access is regularly reviewed, certified, and remediated. Role allocations include defined expiry dates, necessitating review and re-certification.

#### **How to determine if this good enough**

Your organisation systematically reviews user access with clear renewal or expiry deadlines, ensuring no indefinite privileges. This indicates a strong security posture. It’s likely "good enough" if:

1. **Automated or Well-Managed Reviews**

   - The process is consistent, with each role or permission requiring re-validation after a certain period.

1. **Minimal Privilege Creep**

   - Because roles expire, staff or contractors do not accumulate unneeded rights over time.

1. **High Confidence in Access Data**
   - You maintain accurate data on who has which roles, and changes occur only after formal approval or re-certification.

Though robust, you can further refine by integrating real-time risk signals or adopting advanced identity analytics. [NCSC’s operational resilience](https://www.ncsc.gov.uk/collection/operational-resilience) and [NIST SP 800-53 Access Controls (AC-2, AC-3)](https://csrc.nist.gov/) generally encourage continuous improvement in automated checks.

#### **How to do better**

Below are **rapidly actionable** methods to enhance expiry-based reviews:

1. **Use Cloud-Native Access Review Tools**

   - e.g., [AWS IAM Access Analyzer](https://aws.amazon.com/iam/features/), [AWS SSO user provisioning with rotation](https://aws.amazon.com/sso/), [Azure Access Reviews in Azure AD](https://learn.microsoft.com/en-us/azure/active-directory/governance/access-reviews-overview), [GCP IAM Recommender with time-based checks](https://cloud.google.com/iam/docs/access-reviews), [OCI IAM compartments with automated policy review triggers](https://www.oracle.com/cloud/free/oci-training/).
   - Minimises manual overhead.

1. **Adopt Automated Alerts for Upcoming Expiries**

   - If a role is nearing its expiry date, the user and manager receive an email or Slack notice to re-certify or let it lapse.

1. **Incorporate Risk Scoring**

   - If an account has high privileges or sensitive system access, require more frequent or thorough re-validation:
     - e.g., monthly for privileged accounts, quarterly for standard user roles.

1. **Implement Delegated Approvals**

   - For major role changes, define a short chain (e.g., a user’s manager + security lead) to re-approve before extension of privileges.
   - Align with [NCSC’s supply chain or internal access control best practices](https://www.ncsc.gov.uk/).

1. **Maintain Audit Trails**
   - Store logs of who re-approved or revoked each role, referencing [AWS CloudTrail](https://aws.amazon.com/cloudtrail/), [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/overview), [GCP Logging](https://cloud.google.com/logging), or [OCI Audit logs](https://www.oracle.com/cloud/free/oci-training/).
   - Demonstrates compliance if audited, per GOV.UK or departmental policies.

By leveraging cloud-native review tools, alerting for soon-to-expire roles, risk-scoring high-privilege accounts for more frequent checks, implementing delegated re-approval processes, and storing thorough audit trails, you maintain an agile, secure environment aligned with best practices.

### **Automated, Risk-Based Access Reviews:** Fully integrated, automated reviews ensure users have permissions appropriate to their roles. Access rights are dynamically adjusted based on role changes or review outcomes. Both access roles and their allocations have expiry dates for mandatory review and re-certification.

#### **How to determine if this good enough**

At the apex of maturity, your organisation uses a fully automated, risk-based system for managing user permissions. You might consider it "good enough" if:

1. **Zero Standing Privileges**

   - Privileges are automatically granted, adjusted, or revoked based on real-time role changes, with minimal human intervention.

1. **Frequent or Continuous Verification**

   - A system or pipeline regularly checks each user’s entitlements, triggers escalations if anomalies arise.

1. **Synchronised with HR Systems**

   - Staff transitions—new hires, promotions, departures—instantly reflect in user permissions, preventing orphaned or leftover access.

1. **Strong Governance**
   - The process enforces compliance with [NCSC identity best practices](https://www.ncsc.gov.uk/) or relevant [NIST AC (Access Control) guidelines](https://csrc.nist.gov/) through policy-as-code or advanced IAM solutions.

Although highly mature, you can still enhance cross-government collaboration or adopt real-time risk-based authentication. [NCSC’s zero-trust architecture or advanced DevSecOps suggestions](https://www.ncsc.gov.uk/) encourage ongoing adaptation to new technology or threat vectors.

#### **How to do better**

Below are **rapidly actionable** ways to refine a fully automated, risk-based review system:

1. **Incorporate Real-Time Risk Signals**

   - E.g., require additional verification for suspicious location logins or rapidly changing user behaviors:
     - [AWS Macie or GuardDuty alerts](https://aws.amazon.com/macie/), [Azure AD Identity Protection](https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection), [GCP Security Command Center anomaly detection](https://cloud.google.com/security-command-center/docs/overview), [OCI Security Advisor signals](https://www.oracle.com/cloud/free/oci-training/).

1. **Use Policy-as-Code for Access**

   - Tools like [Open Policy Agent or vendor-based solutions (AWS Organizations SCP, Azure Policy, GCP Organization Policy, OCI Security Zones)] can define rules for dynamic role allocation.

1. **Ensure Continuous Oversight**

   - Provide dashboards for leadership or security officers, showing current risk posture, overdue re-certifications, or upcoming role changes:
     - Minimises the chance of an overlooked anomaly.

1. **Extend to Multi-Cloud or Hybrid**

   - If your department spans AWS, Azure, GCP, or on-prem systems, unify identity reviews under a single orchestrator or Identity Governance tool:
     - e.g., [Azure AD Identity Governance](https://learn.microsoft.com/en-us/azure/active-directory/identity-governance/overview-identity-governance), [Okta](https://www.okta.com/), [Ping](https://www.pingidentity.com/), etc. with multi-cloud connectors.

1. **Cross-Government Sharing**
   - Publish a success story or best-practice playbook so other agencies can replicate your automated approach, aligning with [GOV.UK digital collaboration initiatives](https://www.gov.uk/service-manual) and [NCSC supply chain security best practices](https://www.ncsc.gov.uk/).

By integrating real-time risk analysis, employing policy-as-code for dynamic role assignment, offering continuous oversight dashboards, supporting multi-cloud/hybrid scenarios, and sharing insights across government bodies, you further refine an already advanced, automated identity review system. This ensures minimal security risk and maximum agility in the public sector context.

**Keep doing what you’re doing,** and consider publishing blog posts or making pull requests to this guidance about your advanced access review processes. Sharing experiences helps other UK public sector organisations adopt similarly robust, automated solutions for managing user permissions.
