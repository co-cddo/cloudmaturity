---
title: How does your organisation manage user identities and authentication?
tags: security
eleventyNavigation:
  parent: security
---

### There are a few rules for managing user identities, and little checking.

#### **How to determine if this good enough**

Your organisation may lack formal identity and password guidelines, or each team creates ad hoc rules. This might be seen as acceptable if:

1. **Minimal Access Needs**

   - Only a handful of staff use cloud resources, making the risk of misconfiguration or credential sharing relatively low.

1. **No Strict Compliance**

   - You operate in an environment where official audits or regulatory demands for identity controls are currently absent.

1. **Limited Cloud Adoption**
   - You are still at an exploratory stage, so formalising identity policies hasn’t been prioritised yet.

However, lacking standard policies can result in weak or inconsistent credential practices, inviting security breaches. [NCSC’s Password Guidance](https://www.ncsc.gov.uk/blog-post/passwords-passwords-everywhere) and [NIST SP 800-63 on digital identity guidelines](https://csrc.nist.gov/) emphasize robust policy frameworks to mitigate credential-based threats.

#### **How to do better**

Below are **rapidly actionable** suggestions to introduce at least a minimal level of identity governance:

1. **Define a Basic Password/Passphrase Policy**

   - For instance, require passphrases of at least 14 characters, no enforced complexity that leads to repeated password re-use.
   - Consult [NCSC’s password guidance](https://www.ncsc.gov.uk/blog-post/problems-forcing-regular-password-expiry) for recommended best practices.

1. **Centralise Authentication for Cloud Services**

   - Use vendor-native IAM or single sign-on capabilities:
     - [AWS IAM with central AWS Organizations or AWS SSO for unified access](https://aws.amazon.com/iam/features/sso/)
     - [Azure AD for consistent cloud identity management across Microsoft services](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/whatis)
     - [GCP Identity with built-in IAM roles for Google Cloud resources](https://cloud.google.com/iam/docs/overview)
     - [OCI IAM compartments and policies for account management](https://www.oracle.com/cloud/free/oci-training/)

1. **Start Logging Identity Events**

   - At a minimum, enable auditing of logins, password resets, or privilege changes:
     - [AWS CloudTrail](https://aws.amazon.com/cloudtrail/), [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/overview), [GCP Cloud Logging](https://cloud.google.com/logging), [OCI Audit Logs](https://www.oracle.com/cloud/free/oci-training/)
   - This ensures you have some data to reference if suspicious activity occurs.

1. **Establish a Simple Governance Policy**

   - Even a one-page policy stating password length, no shared accounts, and periodic user review is better than nothing.
   - Possibly incorporate [NIST SP 800-53 AC-2 controls for account management](https://csrc.nist.gov/).

1. **Plan for Incremental Improvement**
   - Mark out a short timeline (e.g., 3-6 months) to adopt multi-factor authentication for privileged or admin roles next.

By introducing a foundational password policy, centralising authentication, enabling basic identity event logging, creating a minimal governance document, and scheduling incremental improvements, you’ll rapidly move beyond ad hoc practices toward a more secure, consistent approach.

### There are some rules, and these are sometimes checked by hand.

#### **How to determine if this good enough**

Your organisation has some formal rules for passwords, MFA, or user provisioning, but verifying compliance requires manual checks, sporadic log reviews, or retrospective audits. You might see it "good enough" if:

1. **Limited-Scale or Low Risk**

   - You can manage manual checks if you have fewer user accounts or only a small set of privileged users.

1. **Existing Staff Processes**

   - The team can handle manual policy checks (like monthly password rotation reviews), although it’s time-consuming.

1. **No Immediate Audit Pressures**
   - You have not recently encountered external security audits or compliance enforcements that require continuous, automated reporting.

While this approach fosters some consistency, manual processes often fail to catch misconfigurations promptly, risking security lapses. [NCSC’s identity management best practices](https://www.ncsc.gov.uk/collection/passwords/updating-your-approach) and [NIST frameworks](https://csrc.nist.gov/) generally advise automation to quickly detect and address policy violations.

#### **How to do better**

Below are **rapidly actionable** ways to automate and strengthen your identity policy enforcement:

1. **Deploy Automated Audits**

   - For each cloud environment, enable identity-related checks:
     - [AWS Config rules (e.g., "IAM password policy compliance") or AWS Security Hub for identity checks](https://aws.amazon.com/config/)
     - [Azure Policy enforcing password policy, Azure Security Center, or Microsoft Defender for Identity](https://learn.microsoft.com/en-us/azure/defender-for-identity/overview)
     - [GCP Cloud Asset Inventory + IAM Policy Analyzer or GCP Security Command Center checks](https://cloud.google.com/asset-inventory/docs/overview)
     - [OCI Security Advisor or IAM policy checks integrated with compartments/policies](https://www.oracle.com/cloud/free/oci-training/)

1. **Enforce Basic MFA for Privileged Accounts**

   - For all admin or highly privileged roles, mandate multi-factor authentication:
     - [NCSC strongly recommends multi-factor for accounts with elevated access](https://www.ncsc.gov.uk/collection/passwords/updating-your-approach).

1. **Establish Self-Service or Automated Access Reviews**

   - Implement a monthly or quarterly identity review:
     - e.g., a simple emailed listing of who has what roles, requiring managers to confirm or revoke access.

1. **Adopt Single Sign-On (SSO)**

   - Use a single IdP (Identity Provider) for all cloud accounts, e.g.:
     - [AWS SSO or Azure AD SSO solutions](https://aws.amazon.com/sso/), [GCP Identity Federation](https://cloud.google.com/identity/docs/overview), or [OCI integration with enterprise IdPs](https://www.oracle.com/cloud/free/oci-training/).
   - This reduces manual overhead and password sprawl.

1. **Store Policies & Logs in a Central Repo**
   - Keep your identity policy in version control and track changes:
     - Ensures updates are documented, and staff can reference them easily, aligning with [GOV.UK policy transparency norms](https://www.gov.uk/service-manual).

By automating audits, enforcing MFA, implementing automated access reviews, consolidating sign-on, and centralising policy documentation, you move from manual enforcement to a more efficient, consistently secure identity posture.

### There are rules, such as two-factor authentication for key accounts, and some automated checks.

#### **How to determine if this good enough**

You have implemented some automation for identity management—like requiring 2FA for admin roles and using scripting or built-in cloud tools for scanning compliance. It might be "good enough" if:

1. **Reduction in Manual Oversight**

   - Automated checks detect certain policy violations or stale accounts, though not everything is covered.

1. **Broader Governance**

   - The organisation has standard identity controls. Teams typically follow them, but some manual interventions remain.

1. **Improved Security Baseline**
   - Regular or partial identity audits reveal fewer misconfigurations or abandoned accounts.

You still can refine these partial automations to fully handle user lifecycle management, integrate single sign-on for all users, or adopt real-time security responses. [NIST SP 800-53 AC controls](https://csrc.nist.gov/) and [NCSC identity recommendations](https://www.ncsc.gov.uk/) consistently recommend deeper automation.

#### **How to do better**

Below are **rapidly actionable** ways to progress toward advanced identity automation:

1. **Expand MFA Requirements to All Users**

   - If only privileged users have 2FA, consider rolling out to all staff or external collaborators:
     - e.g., AWS, Azure, GCP, OCI support TOTP apps, hardware security keys, or SMS as fallback (not recommended if higher security needed).

2. **Use Role/Attribute-Based Access**

   - For each environment (AWS, Azure, GCP, OCI), define roles or groups with appropriate privileges:
     - Minimises the risk of over-privileged accounts, referencing [NCSC’s least privilege principle](https://www.ncsc.gov.uk/).

3. **Consolidate Identity Tools**

   - If you’ve multiple sub-accounts or subscriptions, unify identity management via:
     - [AWS Organizations + AWS SSO or Azure AD tenant-level controls](https://aws.amazon.com/sso/), [GCP Organization IAM](https://cloud.google.com/iam/docs/overview), [OCI compartments/policies with IDCS integration](https://www.oracle.com/cloud/free/oci-training/).

4. **Integrate Automated Deprovisioning**

   - Tie identity systems to HR or staff rosters, automatically disabling accounts when a staff leaves or changes roles:
     - e.g., [Azure AD user provisioning to SaaS apps](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/), [AWS SCIM integration](https://aws.amazon.com/scim/), [GCP Directory sync](https://cloud.google.com/identity/docs/overview), [OCI integration with enterprise directories](https://www.oracle.com/cloud/free/oci-training/).

5. **Enhance Monitoring & Alerting**
   - Add real-time alerts for suspicious identity events:
     - e.g., multiple failed logins, sudden role escalations, or new key creation.

By extending MFA to all, embracing role-based access, consolidating identity management, automating deprovisioning, and boosting real-time monitoring, you achieve more robust, near-seamless identity automation aligned with best practices for public sector security.

### There are central rules for all users, with most checks and enforcement automated. Single Sign-On and two-factor authentication are widely used.

#### **How to determine if this good enough**

Here, your organisation enforces a centralised identity solution with automated checks. Some manual steps may remain for edge cases, but 2FA or SSO is standard for all staff. This approach might be "good enough" if:

1. **High Standardisation**

   - All departments follow a uniform identity policy, with minimal exceptions.

1. **Frequent Automated Audits**

   - Tools or scripts detect anomalies (e.g., unused accounts, role expansions) and flag them without manual effort.

1. **User-Friendly SSO**
   - Staff log in once, accessing multiple cloud services, ensuring better compliance with security measures (like forced MFA).

Though highly mature, you can further refine short-lived credentials for non-human accounts, adopt advanced or zero-trust patterns, and integrate additional threat detection. [NIST SP 800-207 zero-trust architecture guidelines](https://csrc.nist.gov/) and [NCSC cloud security frameworks](https://www.ncsc.gov.uk/) suggest continuous iteration.

#### **How to do better**

Below are **rapidly actionable** steps to elevate advanced identity management:

1. **Adopt Conditional Access or Policy-based Access**

   - e.g., [AWS IAM condition keys](https://aws.amazon.com/iam/features/), [Azure Conditional Access](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview), [GCP Access Context Manager](https://cloud.google.com/access-context-manager/docs/overview), [OCI IAM condition-based policies](https://www.oracle.com/cloud/free/oci-training/):
     - Restrict or grant access based on device compliance, location, or time-based rules.

1. **Incorporate Just-In-Time (JIT) Privileges**

   - For admin tasks, require users to elevate privileges temporarily:
     - e.g., AWS IAM Permission boundaries, Azure Privileged Identity Management, GCP short-lived access tokens, OCI dynamic roles with short-lived credentials.

1. **Monitor Identity with SIEM or Security Analytics**

   - e.g., [AWS Security Hub, Azure Sentinel, GCP Security Command Center, OCI Logging Analytics] for real-time anomaly detection or advanced threat intelligence:
     - Ties into your identity logs to detect suspicious patterns.

1. **Engage in Regular "Zero-Trust" Drills**

   - Simulate partial network compromises to test if identity-based controls alone can protect resources:
     - referencing [NCSC zero trust architecture advice](https://www.ncsc.gov.uk/) or [NIST SP 800-207](https://csrc.nist.gov/).

1. **Promote Cross-Government Identity Standards**
   - If relevant, align with or propose solutions for single sign-on across multiple agencies to streamline staff movements within the public sector:
     - e.g., exploring [GOV.UK One Login or similar cross-government identity initiatives](https://www.gov.uk/).

By implementing conditional or JIT access, leveraging robust SIEM-based identity monitoring, holding zero-trust scenario drills, and sharing identity solutions across the public sector, you further strengthen an already advanced identity environment.

### All identity rules and checks are fully centralised and automated. This includes strong authentication, automated approval processes, and good reporting, especially for sensitive data access.

#### **How to determine if this good enough**

Your organisation has reached the top maturity level, with a fully centralised, automated identity management solution. You might see it "good enough" if:

1. **Enterprise-Grade IAM**

   - Every user (human or non-human) is governed by a central directory, applying strong MFA/SSO, with role-based or attribute-based controls for all resources.

1. **Zero Standing Privilege**

   - Privileged credentials are ephemeral, enforced by JIT or automated workflows.
   - Minimises exposure from compromised accounts.

1. **Continuous Compliance & Reporting**

   - Real-time dashboards or logs show who can access what, enabling immediate audits for regulatory or internal policy checks.

1. **Seamless Onboarding & Offboarding**
   - Automated provisioning grants roles upon hire or team assignment, revoking them upon departure to ensure no orphaned accounts.

Though highly advanced, you can refine multi-cloud identity federation, adopt specialised HPC/AI or cross-government identity sharing, and embed advanced DevSecOps patterns. [NCSC’s security architecture advice](https://www.ncsc.gov.uk/) and [NIST SP 800-53] encourage continuous improvement in a dynamic threat landscape.

#### **How to do better**

Even at the apex, below are **rapidly actionable** ways to further optimise:

1. **Multi-Cloud Single Pane IAM**

   - If you use multiple cloud providers, unify them under a single identity provider or a cross-cloud identity framework:
     - e.g., Azure AD for AWS + Azure + GCP roles, or a third-party IDaaS solution with robust zero-trust policies.

1. **Advanced Risk-Based Authentication**

   - Leverage vendor AI to detect unusual login behavior, then require step-up (MFA or manager approval):
     - [AWS Cognito or Azure AD Conditional Access with risk-based sign-on](https://aws.amazon.com/cognito/), [GCP Identity-Aware Proxy risk signals](https://cloud.google.com/identity-aware-proxy/docs/overview), [OCI adaptive security policies](https://www.oracle.com/cloud/free/oci-training/).

1. **Adopt Policy-as-Code for Identity**

   - Tools like [Open Policy Agent or vendor policy frameworks (AWS Organizations SCP, Azure Policy, GCP Organization Policy, OCI Security Zones)] to define identity controls in code:
     - Facilitates versioning, review, and auditable changes.

1. **Extend 2FA to Cross-Government Collaboration**

   - If staff from other agencies frequently collaborate, integrate cross-department SSO or federated identity, referencing [GOV.UK single sign-on possibilities or multi-department IAM bridging solutions](https://www.gov.uk/).

1. **Publish Regular Identity Health Reports**
   - Summaries of user activity, stale accounts, or re-certifications. Encourages transparency and fosters trust in your identity processes.

By unifying multi-cloud identity, implementing advanced risk-based authentication, using policy-as-code for identity controls, expanding cross-government 2FA, and regularly reporting identity health metrics, you maintain a cutting-edge identity management ecosystem. This ensures robust security, compliance, and agility for your UK public sector organisation in an evolving threat environment.

**Keep doing what you’re doing,** and consider writing up your experiences, success metrics, or blog posts on advanced identity management. Contribute pull requests to this guidance or other best-practice repositories so fellow UK public sector entities can learn from your identity management maturity journey.
