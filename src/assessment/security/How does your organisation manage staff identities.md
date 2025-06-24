---
title: How do you manage staff identities?
tags: security
eleventyNavigation:
  parent: security
---

### Each service manages its own identities.

#### **How to determine if this good enough**

Your organisation might allow each application or service to store and manage user accounts in its own silo. This can be considered "good enough" if:

1. **Very Small Scale**
   - Each service supports only a handful of internal users; overhead of separate sign-ons or user directories is minimal.

1. **Low Risk or Early Pilot**
   - No critical data or compliance need to unify identities; you’re still evaluating core cloud or digital services.

1. **No Immediate Need for Central Governance**
   - With minimal overlap among applications, the cost or effort of centralising identities doesn’t seem justified yet.

While this approach can initially appear simple, it typically leads to scattered identity practices, poor visibility, and heightened risk (e.g., orphaned accounts). [NCSC’s Identity and Access Management guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-53 AC controls](https://csrc.nist.gov/) suggest unifying identity for consistent security and reduced overhead.

#### **How to do better**

Below are **rapidly actionable** steps to move beyond isolated identity management:

1. **Create a Basic Directory or SSO Pilot**
   - For new services, define a single user store or IDP:
     - e.g., [AWS Directory Service or AWS SSO](https://aws.amazon.com/directoryservice/), [Azure AD](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/whatis), [GCP Identity](https://cloud.google.com/identity/docs/overview), or [OCI IDCS](https://www.oracle.com/cloud/free/oci-training/), [IBM Cloud AppID](https://cloud.ibm.com/docs/appid?topic=appid-cd-sso)
   - Minimises further fragmentation for new apps.

1. **Maintain a Simple User Inventory**
   - List out each app’s user base and identify duplicates or potential orphan accounts:
     - Helps to see the scale of the fragmentation problem.

1. **Encourage Unique Credentials**
   - Discourage password re-use and adopt basic password policies referencing [NCSC password guidance](https://www.ncsc.gov.uk/blog-post/problems-forcing-regular-password-expiry).

1. **Plan a Gradual Migration**
   - Set a short timeline (e.g., 6-12 months) to unify at least a few key services under a single ID provider.

1. **Highlight Quick-Wins**
   - If consolidating one or two widely used services to a shared login shows immediate benefits (less support overhead, better logs), use that success to rally internal support.

By implementing a small shared ID approach for new services, maintaining an org-wide user inventory, encouraging unique credentials with basic password hygiene, scheduling partial migrations, and publicising quick results, you steadily reduce the complexity and risk of scattered service-specific identities.

### We have a central identity system, but not all services use it.

#### **How to determine if this good enough**

Your organisation has introduced a centralised identity solution (e.g., Active Directory, Azure AD, or an open-source LDAP), but only some cloud services plug into it. This might be "good enough" if:

1. **Partial Coverage**
   - Key or high-risk systems already rely on centralised accounts, while less critical or legacy apps remain separate.

1. **Reduced Complexity**
   - The approach cuts down on scattered logins for a majority of staff, although not everyone is unified.

1. **Tolerable Overlap**
   - You can manage a few leftover local identity systems, but the overhead is not crushing yet.

To improve further, you can unify or retire the leftover one-off user stores and adopt standards like SAML, OIDC, or SCIM. [NCSC identity management best practices](https://www.ncsc.gov.uk/) and [NIST SP 800-63 digital identity guidance](https://csrc.nist.gov/) typically encourage full integration for better security posture.

#### **How to do better**

Below are **rapidly actionable** steps to further unify your basic centralised identity:

1. **Mandate SSO for New Services**
   - All future cloud apps must integrate with your central ID system (SAML, OIDC, etc.).
   - [AWS SSO](https://aws.amazon.com/sso/), [Azure AD App Registrations](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app), [GCP Identity Federation](https://cloud.google.com/identity/docs/overview), or [OCI IDCS integrations](https://www.oracle.com/cloud/free/oci-training/).

1. **Target Legacy Systems**
   - Identify 1-3 high-value legacy applications and plan a short roadmap for migrating them to the central ID store:
     - e.g., rewriting authentication to use SAML or OIDC.

1. **Introduce Periodic Role or Access Reviews**
   - Ensure the centralised identity system is coupled with a simple process for managers to confirm staff roles:
     - referencing [AWS IAM Access Analyzer](https://aws.amazon.com/iam/features/), [Azure AD Access Reviews](https://learn.microsoft.com/en-us/azure/active-directory/governance/access-reviews-overview), [GCP IAM Recommender](https://cloud.google.com/iam/docs/access-reviews), or [OCI IAM policy checks](https://www.oracle.com/cloud/free/oci-training/).

1. **Extend MFA Requirements**
   - If only some users in the centralised system have MFA, gradually require it for all:
     - referencing [NCSC’s multi-factor authentication guidance](https://www.ncsc.gov.uk/).

1. **Aim for Full Integration by a Set Date**
   - e.g., a 12-18 month plan to unify all services, presenting to leadership how this will lower security risk and reduce support costs.

By demanding SSO for new apps, migrating top-priority legacy systems, enabling periodic role reviews, enforcing MFA across the board, and setting a timeline for full integration, you reinforce your centralised identity approach and shrink vulnerabilities from leftover local user stores.

### Most services use our central identity system, but a few don’t.

#### **How to determine if this good enough**

Your organisation leverages a robust central identity solution for the majority of apps, but certain or older niche services remain separate. It might be "good enough" if:

1. **Dominant Coverage**
   - The central ID system handles 80-90% of user accounts, giving broad consistency and security.

1. **Exceptions Are Low-Risk or Temporary**
   - The leftover independent systems are less critical or slated for retirement/replacement.

1. **Clear Process for Exceptions**
   - Any new service wanting to remain outside central ID must justify the need, preventing random fragmentation.

To move forward, you can retire or integrate these final exceptions and push for short-lived, ephemeral credentials or multi-cloud identity federation. [NIST SP 800-53 AC controls](https://csrc.nist.gov/) and [NCSC’s identity approach](https://www.ncsc.gov.uk/) both stress bridging all apps for consistent security posture.

#### **How to do better**

Below are **rapidly actionable** ways to incorporate the last few outliers:

1. **Establish an "Exception Approval"**
   - If a service claims it can’t integrate, mandate a formal sign-off by security or architecture boards:
     - Minimises indefinite exceptions.

1. **Plan Legacy Replacement or Integration**
   - For each separate system, define a short project to incorporate them with SAML, OIDC, or SCIM:
     - e.g., [Azure AD integration for older apps](https://learn.microsoft.com/en-us/azure/active-directory/saas-apps/tutorial-list), [AWS SSO bridging](https://aws.amazon.com/sso/), [GCP Identity front-end with IAP or custom IAM integration](https://cloud.google.com/identity/docs/overview), or [OCI IDCS bridging](https://www.oracle.com/cloud/free/oci-training/).

1. **Enhance Monitoring on Exceptions**
   - If integration isn’t possible yet, strictly log and track those system’s user access, referencing [NCSC logging recommendations](https://www.ncsc.gov.uk/) or [NIST logging controls (AU family)](https://csrc.nist.gov/).

1. **Regularly Reassess or Sunset Non-Compliant Services**
   - If an exception remains beyond a certain period (e.g., 6-12 months), escalate to leadership.
   - This keeps pressure on removing exceptions eventually.

1. **Include Exceptions in Identity Audits**
   - Ensure these standalone services aren’t forgotten in user account cleanup or security scanning efforts:
     - e.g., hooking them into an "all-of-org" identity or vulnerability scan at least quarterly.

By requiring official approval for non-integrated systems, scheduling integration projects, monitoring or sunsetting exceptions, and auditing them in the main identity reviews, you unify identity management and ensure consistent security across all cloud services.

### Nearly all services use our central system, and we keep them in sync.

#### **How to determine if this good enough**

You have a highly integrated identity solution covering nearly all apps, with consistent provisioning, SSO, and robust security controls like MFA or conditional access. This is likely "good enough" if:

1. **Minimal Manual Overhead**
   - Onboarding, offboarding, or role changes propagate automatically to most systems without admin intervention.

1. **High Security & Governance**
   - You can quickly see who has access to what, referencing [NCSC’s recommended best practices for identity governance](https://www.ncsc.gov.uk/).
   - MFA or advanced authentication is standard.

1. **Frequent Audits & Reviews**
   - Identity logs are consolidated, enabling quick detection of anomalies or orphan accounts.

While robust, you could refine ephemeral or short-lived credentials for non-human accounts, integrate cross-department identity, or adopt advanced risk-based authentication. [NIST SP 800-63 or 800-53 AC controls](https://csrc.nist.gov/) highlight the potential for continuous identity posture improvements.

#### **How to do better**

Below are **rapidly actionable** ways to enhance advanced integrated identity management:

1. **Explore Zero-Trust or Risk-Adaptive Auth**
   - If a user tries to access a high-risk service from an unknown location or device, require step-up authentication:
     - e.g., [Azure AD Conditional Access with risk-based sign-ins](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview), [AWS SSO with conditional logic](https://aws.amazon.com/sso/), [GCP Access Context Manager](https://cloud.google.com/access-context-manager/docs/overview), or [OCI adaptive authentication features](https://www.oracle.com/cloud/free/oci-training/).

1. **Adopt Policy-as-Code for Identity**
   - Use [Open Policy Agent](https://www.openpolicyagent.org/) or vendor-based solutions (e.g., [AWS Organizations SCP](https://aws.amazon.com/organizations/features/), [Azure Policy](https://learn.microsoft.com/en-us/azure/azure-policy/overview), [GCP Org Policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview), [OCI Security Zones](https://www.oracle.com/cloud/free/oci-training/)) to define identity and resource controls in code for versioning and traceability.

1. **Enable Fine-Grained Roles and Minimal Privileges**
   - Continuously refine roles so each user only has what they need, referencing [NCSC’s least privilege guidance](https://www.ncsc.gov.uk/) or [NIST SP 800-53 AC-6 on least privilege](https://csrc.nist.gov/).

1. **Implement Automated Access Certification**
   - Every few months, prompt managers to re-check their team’s privileges:
     - Tools like Azure AD Access Reviews, AWS IAM Access Analyzer, GCP IAM Recommender, or OCI IAM policy checks can highlight unneeded privileges.

1. **Sustain a Culture of Continuous Improvement**
   - Encourage security champions to look for new features (like passwordless sign-in or advanced biometrics):
     - e.g., [FIDO2-based solutions, hardware tokens, or passwordless approaches recommended by NCSC/NIST](https://www.ncsc.gov.uk/) for next-level security.

By implementing zero-trust or risk-based authentication, adopting identity policy-as-code, refining least privilege roles, automating access certifications, and fostering continuous improvements, you advance from a strong integrated identity environment to a cutting-edge, security-first approach aligned with UK public sector best practices.

### Every service uses one identity system, with one identity per person.

#### **How to determine if this good enough**

At this top maturity level, your organisation enforces one authoritative identity system for every service. All staff have exactly one account, disallowing duplicates or shared credentials. You might consider it "good enough" if:

1. **Complete Uniformity**
   - All cloud and on-prem solutions integrate with the same directory/IDP.
   - No leftover local accounts exist.

1. **Strong Accountability**
   - A single "human <-> identity" mapping yields perfect traceability for actions across environments.
   - Aligns with [NCSC best practices on user accountability](https://www.ncsc.gov.uk/).

1. **Robust Automation & Onboarding**
   - Upon hire or role change, the single identity is updated automatically, provisioning only the needed roles.
   - Offboarding is likewise immediate and consistent.

Even so, you can expand advanced or zero-trust patterns (e.g., ephemeral tokens, risk-based authentication) or multi-department identity federation for cross-government collaboration. [NIST SP 800-207 zero trust architecture](https://csrc.nist.gov/) or [NCSC’s advanced identity frameworks](https://www.ncsc.gov.uk/) might offer further insights.

#### **How to do better**

Below are **rapidly actionable** ways to refine a mandatory single source of identity:

1. **Implement Risk-Adaptive Authentication**
   - Combine the single identity with dynamic checks (like device compliance, location, or time) to apply additional verifications if risk is high:
     - e.g., [Azure AD Identity Protection](https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection), [AWS Cognito adaptive auth](https://aws.amazon.com/cognito/features/), [GCP Identity-Aware Proxy](https://cloud.google.com/identity-aware-proxy/docs/overview), or [OCI adaptive authentication](https://www.oracle.com/cloud/free/oci-training/).

1. **Extend Identity to Multi-Cloud**
   - If you operate across multiple providers, unify identity definitions so staff seamlessly access AWS, Azure, GCP, or OCI:
     - Possibly referencing external IDPs or cross-cloud SSO integrations.

1. **Incorporate Passwordless Tech**
   - FIDO2 or hardware token-based sign-ins for staff:
     - [NCSC encourages strong, phishing-resistant MFA where possible](https://www.ncsc.gov.uk/).

1. **Align with Cross-Government Identity Initiatives**
   - If relevant, collaborate with other departments on shared SSO or bridging solutions:
     - e.g., [GOV.UK One Login program or NHS/Local Government identity bridging](https://www.gov.uk/government/publications/one-login-for-government).

1. **Continuously Review and Audit**
   - Maintain monthly or quarterly audits ensuring no system bypasses the single identity policy.
   - Tools like [Azure AD application listing](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app), [AWS Organizations integration](https://aws.amazon.com/organizations/features/), [GCP Organization-level IAM policy](https://cloud.google.com/iam/docs/organization-policy), or [OCI compartments integration](https://www.oracle.com/cloud/free/oci-training/) can detect any outliers.

By adopting risk-based auth, ensuring multi-cloud identity unification, deploying passwordless approaches, collaborating with cross-government identity programs, and regularly auditing for compliance with the mandatory single source policy, you reinforce a top-tier security stance. This guarantees minimal identity sprawl and maximum accountability in the UK public sector environment.

**Keep doing what you’re doing,** and consider creating blog posts or making pull requests to this guidance about your advanced single-source identity management success. Sharing practical examples helps other UK public sector organisations move toward robust, consistent identity strategies.
