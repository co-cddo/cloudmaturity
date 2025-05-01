---
title: How does your organisation handle user provisioning for cloud systems, focusing on authentication for human users?
tags: security
eleventyNavigation:
  parent: security
---

### **Shared Accounts and Manual Account Management:** Accounts are shared or reused between multiple people with limited ability to discern who carried out an action from any logs collected. Where individual accounts exist for each user they are manually created, deleted, updated, and assigned, involving significant manual effort and potential for inconsistency.

#### **How to determine if this good enough**

Your organisation might rely on shared or manually managed individual accounts for cloud systems, with minimal traceability. This can feel "good enough" if:

1. **Minimal Operational Complexity**

   - The cloud usage is small-scale, and staff prefer quick, ad-hoc solutions.

1. **Limited or Non-Critical Workloads**

   - The risk from poor traceability is low if the environment does not hold sensitive data or mission-critical services.

1. **Short-Term or Pilot**
   - You see the current manual or shared approach as a temporary measure during initial trials or PoCs.

However, sharing accounts blurs accountability, violates [NCSC’s principle of user accountability](https://www.ncsc.gov.uk/collection/cloud-security) and contravenes [NIST SP 800-53 AC-2 for unique identification](https://csrc.nist.gov/). Manually managing accounts can also lead to mistakes (e.g., failing to revoke ex-employee access).

#### **How to do better**

Below are **rapidly actionable** steps to move beyond shared/manual accounts:

1. **Eliminate Shared Accounts**

   - Mandate each user has an individual account, referencing [NCSC’s identity best practices](https://www.ncsc.gov.uk/).
   - This fosters actual accountability and compliance with typical public sector guidelines.

1. **Set Up Basic IAM**

   - Use vendor-native identity tools to define unique accounts, e.g.:
     - [AWS IAM users/roles or AWS SSO for centralised user management](https://aws.amazon.com/iam/)
     - [Azure AD for custom roles plus Azure Portal user creation, or Azure DevOps user management](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/add-users-azure-active-directory)
     - [GCP Cloud Identity for user provisioning, or short-lived tokens with GCP IAM roles](https://cloud.google.com/identity)
     - [OCI IAM compartments/policies with custom user accounts or integration to identity providers](https://www.oracle.com/cloud/free/oci-training/)

1. **Document a Minimal Process**

   - Write a short policy on how to add or remove users, referencing [NIST SP 800-53 AC controls](https://csrc.nist.gov/).

1. **Enable Basic Audit Logging**

   - Turn on logs for sign-in or role usage in each cloud environment:
     - [AWS CloudTrail, Azure Activity Log, GCP Cloud Logging, OCI Audit Log](https://aws.amazon.com/cloudtrail/), [IBM Cloud Monitoring](https://cloud.ibm.com/docs/monitoring?topic=monitoring-getting-started#getting-started) & [IBM Cloud Logs](https://cloud.ibm.com/docs/cloud-logs?topic=cloud-logs-about-cl)
   - Identifies who does what in the system.

1. **Move to a Single Sign-On Approach**
   - Plan to adopt SSO with a single user directory in the next phase:
     - Minimises manual overhead and ensures consistency.

By ensuring each user has an individual account, using vendor IAM for creation, documenting a minimal lifecycle process, enabling audit logging, and preparing for SSO, you remedy the major pitfalls of shared/manual account approaches.

### **Identity Repository with Manual Processes:** An organisational identity repository (like Active Directory or LDAP) is used as the user source of truth, but processes for cloud system integration are manual or inconsistent.

#### **How to determine if this good enough**

Your organisation might store all user info in a standard directory (e.g., Active Directory or LDAP) but each cloud integration is handled manually. This can be "good enough" if:

1. **Consistent On-Prem Directory**

   - You can reliably create and remove user entries in your on-prem directory, so internal processes generally work.

1. **Limited Cloud Footprint**

   - Only a few cloud services rely on these user accounts, so manual processes don’t create major friction.

1. **Medium Risk Tolerance**
   - The environment accepts manual integrations, though certain compliance or security requirements aren’t strict.

However, manual synchronisation or ad-hoc provisioning to cloud systems often leads to out-of-date accounts, security oversights, or duplication. [NCSC’s identity and access management guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-53 AC (Access Controls)](https://csrc.nist.gov/) recommend consistent, automated user lifecycle management across on-prem and cloud.

#### **How to do better**

Below are **rapidly actionable** steps to unify and automate your on-prem identity repository with cloud systems:

1. **Enable Federation or SSO**

   - e.g., [AWS Directory Service + AD trust](https://aws.amazon.com/directoryservice/), [Azure AD Connect](https://learn.microsoft.com/en-us/azure/active-directory/hybrid/whatis-azure-ad-connect), [GCP Cloud Identity Sync](https://cloud.google.com/identity/docs/sync), [OCI Identity Federation with AD/LDAP](https://www.oracle.com/cloud/free/oci-training/):
   - Minimises manual user creation in each cloud service.

1. **Deploy Basic Automation Scripts**

   - If a full federation is not possible immediately, create scripts that read from your directory and auto-provision or auto-delete accounts in cloud:
     - e.g., using vendor CLIs or REST APIs.

1. **Standardise User Roles**

   - For each cloud environment, define roles that map to on-prem groups:
     - e.g., "Developer group in AD -> Dev role in AWS."
   - Ensures consistent privileges across systems, referencing [NCSC’s least-privilege principle](https://www.ncsc.gov.uk/).

1. **Implement a Scheduled Sync**

   - Regularly compare your on-prem directory with each cloud environment to detect orphaned or mismatch accounts.
   - Could be monthly or weekly initially.

1. **Transition to Identity Provider Integration**
   - If feasible, shift to a modern IDP (Azure AD, Okta, GCP Identity, etc.) so manual processes fade out:
     - This might also meet [NIST guidelines on cross-domain identity management (SCIM, etc.)](https://csrc.nist.gov/).

By federating or automating the sync between your directory and cloud, standardising roles, scheduling periodic comparisons, and eventually adopting a modern identity provider, you gradually remove manual friction and potential security gaps.

### **Common Standards for Identity Management:** Standardised protocols and practices are in place for managing and mapping user identities between identity providers and cloud systems. Non-compliant services are less preferred.

#### **How to determine if this good enough**

Your organisation has established guidelines for user provisioning, adopting standard protocols (e.g., SAML, OIDC) or dedicated identity bridging solutions. This is likely "good enough" if:

1. **Consistent Approach**

   - Teams or new projects follow the same identity integration pattern, reducing one-off solutions.

1. **Moderate Automation**

   - User accounts typically auto-provision or sync from a central IDP, though some edge cases may require manual effort.

1. **Reduced Shadow IT**
   - You discourage or block cloud services that lack compliance with standard identity integration, referencing [NCSC supply chain security guidance](https://www.ncsc.gov.uk/collection/supply-chain-security).

You may strengthen these standards by further automating account lifecycle, ensuring short-lived credentials for privileged tasks, or integrating advanced analytics for anomaly detection. [NIST SP 800-63 or 800-53] highlight deeper identity proofing and continuous monitoring strategies.

#### **How to do better**

Below are **rapidly actionable** ways to refine standard identity management:

1. **Require SSO or Federation for All Services**

   - For new cloud apps, mandate SAML/OIDC/SCIM compliance:
     - e.g., [AWS SSO integration](https://aws.amazon.com/sso/), [Azure AD enterprise apps](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/manage-app-portal), [GCP Identity-Aware Proxy](https://cloud.google.com/identity-aware-proxy), [OCI IDCS federation](https://www.oracle.com/cloud/free/oci-training/).

1. **Implement Access Workflows**

   - Use built-in or third-party approval workflows:
     - e.g., [Azure AD Privileged Identity Management](https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/), [AWS SSO access request workflows](https://aws.amazon.com/sso/), [GCP Identity Groups](https://cloud.google.com/identity/docs/groups), [OCI workflow integrations](https://www.oracle.com/cloud/free/oci-training/).
   - Ensures no direct admin changes bypass the standardised process.

1. **Continuously Evaluate Cloud Services**

   - Maintain a whitelist of services that meet your identity standards:
     - If a service can’t integrate with SSO or can’t match your password/MFA policies, strongly discourage its use.

1. **Include Role Mapping in a Central Catalog**

   - Publish a short doc or portal mapping each standard role to corresponding cloud privileges, referencing [NCSC’s RBAC best practice](https://www.ncsc.gov.uk/).

1. **Expand Logging & Alerting**
   - If your identity bridging sees repeated login failures, quickly alert managers or security teams:
     - e.g., [AWS Security Hub](https://aws.amazon.com/security-hub/), [Azure Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/), [GCP SCC](https://cloud.google.com/security-command-center/docs/overview), [OCI security logs integrated with SIEM tools](https://www.oracle.com/cloud/free/oci-training/).

By enforcing SSO/federation for all services, deploying structured access workflows, continuously evaluating new cloud offerings, documenting role-to-privilege mappings, and bolstering security alerting, you ensure consistent, secure user identity alignment across your cloud ecosystem.

### **Automated Federated Identity Management:** Federated identity management is fully automated, ensuring consistent user provisioning across all systems. Non-compliant services are isolated with appropriate mitigations.

#### **How to determine if this good enough**

Your organisation’s identity is seamlessly managed by a central provider, with minimal manual intervention:

1. **Automatic User Lifecycle**

   - Hiring, role changes, or terminations sync instantly to cloud services—no manual updates needed.

1. **Strong Policy Enforcement**

   - Services without SAML/OIDC or SCIM compliance are either disallowed or strictly sandboxed.

1. **Robust Security & Efficiency**
   - The user experience is simplified with single sign-on, while security logs track every permission change, referencing [NCSC’s recommended identity assurance levels](https://www.ncsc.gov.uk/).

You might further refine by adopting ephemeral credentials or advanced risk-based access policies. [NIST SP 800-207 zero trust architecture](https://csrc.nist.gov/) suggests dynamic, continuous verification of user sessions.

#### **How to do better**

Below are **rapidly actionable** ways to reinforce automated federated identity:

1. **Adopt Short-Lived Credentials**

   - e.g., ephemeral tokens from your IDP for each session, referencing [AWS STS](https://aws.amazon.com/sts/), [Azure AD tokens](https://learn.microsoft.com/en-us/azure/active-directory/develop/access-tokens), [GCP short-lived tokens](https://cloud.google.com/iam/docs/creating-short-lived-service-account-keys), [OCI dynamic tokens](https://www.oracle.com/cloud/free/oci-training/).
   - Reduces standing privileges.

1. **Implement Policy-as-Code for Identity**

   - Use [Open Policy Agent](https://www.openpolicyagent.org/) or vendor-based solutions ([AWS SCP](https://aws.amazon.com/service-authorisation/scps/), [Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview), [GCP Org Policy](https://cloud.google.com/resource-manager/docs/organisation-policy/overview), [OCI Security Zones](https://www.oracle.com/cloud/free/oci-training/)) to define identity governance in code, ensuring version-controlled and auditable changes.

1. **Add Real-Time Security Monitoring**

   - If a user tries to access a new or high-risk service, enforce additional checks:
     - e.g., multi-factor step-up, manager approval, location-based restrictions.

1. **Integrate Cross-department SSO**

   - If staff frequently collaborate across multiple public sector agencies, explore cross-government identity solutions:
     - e.g., bridging Azure AD tenants or adopting solutions that unify NHS, local council, or central government credentials.

1. **Review & Update Roles Continuously**
   - Encourage monthly or quarterly role usage analyses, removing unneeded entitlements automatically:
     - Minimises risk from leftover privileges.

By adopting short-lived credentials, storing identity policy in code, enabling real-time security checks, exploring cross-department SSO, and continuously reviewing role usage, you transform a solid federation setup into a robust and adaptive identity ecosystem.

### **Unified Cloud-Based Identity Provider:** A fully cloud-based user directory or identity provider acts as the single source of truth. Centralised management is aligned with user onboarding, movements, and terminations. Services not supporting federated identity have been phased out.

#### **How to determine if this good enough**

At the highest maturity, your organisation uses a single, cloud-based IdP (e.g., Azure AD, AWS SSO, GCP Identity, or third-party SSO) for all user lifecycle events, and systems not integrating with it are deprecated or replaced. You might see it "good enough" if:

1. **Complete Lifecycle Automation**

   - All new hires automatically get relevant roles, moving staff trigger role changes, and departures instantly remove access.

1. **Zero Trust & Full Federation**

   - Every service or app you rely on supports SAML, OIDC, or SCIM, leaving no manual provisioning.

1. **Strong Compliance & Efficiency**
   - Auditors easily confirm who has access to what, and staff enjoy a frictionless SSO experience.
   - Aligns well with [NCSC’s guidelines for enterprise identity solutions](https://www.ncsc.gov.uk/) and [NIST’s recommended identity frameworks](https://csrc.nist.gov/).

Even so, you can continuously refine cross-department identity, advanced DevSecOps integration, or adopt next-gen identity features (e.g., risk-based authentication or passwordless technologies).

#### **How to do better**

Below are **rapidly actionable** ways to refine an already unified, cloud-based identity approach:

1. **Implement Passwordless or Phishing-Resistant MFA**

   - e.g., FIDO2 security keys, Microsoft Authenticator passwordless, or [AWS hardware MFA tokens](https://aws.amazon.com/iam/features/), [GCP Titan Security Keys](https://cloud.google.com/titan-security-key/docs/overview), [OCI-based FIDO solutions](https://www.oracle.com/cloud/free/oci-training/) to further reduce credential compromise risks.

1. **Add Dynamic Risk Scoring**

   - Use advanced AI to evaluate user login contexts:
     - e.g., abnormal location, device compliance checks, referencing [Azure AD Identity Protection](https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection) or [AWS Identity anomaly detection](https://aws.amazon.com/iam/features/), [GCP security analytics](https://cloud.google.com/security-command-center/docs/overview), [OCI risk-based authentication features](https://www.oracle.com/cloud/free/oci-training/).

1. **Extend Identity to Third-Party Collaboration**

   - If outside contractors or multi-department teams need access, enable B2B or cross-tenant solutions:
     - [Azure AD B2B](https://learn.microsoft.com/en-us/azure/active-directory/external-identities/what-is-b2b), [AWS SSO external identity providers](https://aws.amazon.com/sso/), [GCP external identity federation](https://cloud.google.com/identity/docs/overview), [OCI cross-tenant identity sharing](https://www.oracle.com/cloud/free/oci-training/).

1. **Encourage Cross-Public Sector Federation**

   - Explore or pilot solutions that unify multiple agencies’ directories, aligned with [GOV.UK single sign-on or identity assurance frameworks](https://www.gov.uk/service-manual).

1. **Regularly Assess Identity Posture**
   - Perform security posture reviews or zero-trust evaluations (e.g., referencing [NCSC’s zero trust guidance](https://www.ncsc.gov.uk/) or [NIST SP 800-207 for zero-trust architecture](https://csrc.nist.gov/)):
     - Ensures you keep pace with evolving threats.

By adopting passwordless MFA, integrating dynamic risk scoring, enabling external collaborator identity, exploring cross-public sector federation, and performing continuous zero-trust posture checks, you achieve an exceptionally secure, efficient environment—exemplifying best practices for user provisioning and identity management in the UK public sector.

**Keep doing what you’re doing,** and consider publishing blog posts or opening pull requests to share your experiences in creating a unified, cloud-based identity approach. By collaborating with others in the UK public sector, you help propagate secure, advanced authentication practices across government services.
