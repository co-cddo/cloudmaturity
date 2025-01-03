---
title: What approach does your organization take towards network architecture for security?
tags: security
eleventyNavigation:
  parent: security
---

### **Traditional Network Perimeter Security:** Security relies primarily on network-level controls like IP-based allow-lists and firewall rules to create a secure perimeter around hosted data and applications.

#### **How to determine if this good enough**

Your organization might rely heavily on firewall rules, IP allow-lists, or a perimeter-based model (e.g., on-premises network controls or perimeter appliances) to secure data and apps. This might be "good enough" if:

1. **Limited External Exposure**

   - Only a few services are exposed to the internet, while most remain behind a well-managed firewall.

1. **Legacy Infrastructure**

   - The environment or relevant compliance demands a dedicated network perimeter approach, with limited capacity to adopt more modern identity-based methods.

1. **Strict On-Prem or Single-Cloud Approach**
   - If everything is co-located behind on-prem or one cloud’s network layer, perimeter rules might reduce external threats.

Yet perimeter security alone can fail if an attacker bypasses your firewall or uses compromised credentials internally. [NCSC’s zero-trust principles](https://www.ncsc.gov.uk/) and [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/) both encourage focusing on identity-based checks rather than relying solely on network boundaries.

#### **How to do better**

Below are **rapidly actionable** steps to strengthen or evolve from perimeter-only security:

1. **Introduce MFA for Privileged Access**

   - Even if you maintain a perimeter, require multi-factor authentication for admin or root accounts:
     - e.g., [AWS IAM MFA, Azure AD MFA, GCP IAM 2FA, OCI IAM MFA](https://TODO).
   - Minimizes risk of compromised credentials bypassing the firewall.

1. **Implement Least-Privilege IAM**

   - Don’t rely solely on IP allow-lists. Use role-based or attribute-based access for each service:
     - referencing [NCSC’s guidance on access control](https://www.ncsc.gov.uk/).

1. **Segment Networks Internally**

   - If you must keep a perimeter, create subnet-level or micro-segmentation to contain potential lateral movement:
     - e.g., [AWS Security Groups + Network ACLs, Azure Network Security Groups, GCP VPC firewall rules, OCI Security Lists/NSGs](https://TODO).

1. **Enable TLS Everywhere**

   - Even inside the perimeter, adopt TLS for internal service traffic.
   - [NCSC’s guidance on TLS best practices](https://www.ncsc.gov.uk/) ensures data in transit is protected if perimeter is breached.

1. **Plan for Identity-Based Security**
   - Over the next 6-12 months, pilot a small zero-trust or identity-centric approach for a less critical app, paving the way to reduce dependence on perimeter rules.

By enforcing multi-factor authentication, introducing least-privilege IAM, segmenting networks internally, ensuring end-to-end TLS, and planning a shift toward identity-based models, you move beyond the risks of purely perimeter-centric security.

### **Network Security with Basic Identity Verification:** The traditional network-based security perimeter is supplemented with mechanisms to verify user identity within the context of access requests.

#### **How to determine if this good enough**

Your organization still maintains a perimeter firewall, but user identity checks (e.g., login with unique credentials) are enforced when accessing apps behind it. It might be "good enough" if:

1. **Mixed Legacy and Modern Systems**

   - Some older apps demand perimeter-level protection, but you do require user logins or limited authentication steps for critical apps.

1. **Basic Zero-Trust Awareness**

   - Recognizing that IP-based controls alone are insufficient, you at least require unique logins for each service.

1. **Minimal Threat or Complexity**
   - You’ve had no incidents from insider threats or compromised internal network segments.

Though an improvement over pure perimeter reliance, deeper identity-based checks can help. [NCSC’s zero-trust approach](https://www.ncsc.gov.uk/) and [NIST SP 800-207 guidelines](https://csrc.nist.gov/) promote validating each request’s user or device identity, not just pre-checking them at the perimeter.

#### **How to do better**

Below are **rapidly actionable** ways to extend identity verification:

1. **Enforce MFA for All Users**

   - Expand from privileged accounts to all staff, referencing [NCSC’s multi-factor authentication guidance](https://www.ncsc.gov.uk/) or vendor-based solutions:
     - [AWS IAM, Azure AD MFA, GCP Identity, OCI IAM MFA](https://TODO).

1. **Increase Granularity of Access Controls**

   - Instead of letting a user into the entire internal network after login, define specific role-based or service-based access:
     - e.g., [AWS IAM condition keys, Azure Conditional Access, GCP Access Context Manager, OCI compartments/policies](https://TODO).

1. **Adopt SSO**

   - If each app behind the perimeter uses separate user stores, unify them with SSO:
     - e.g., [AWS SSO, Azure AD SSO, GCP Identity Federation, OCI IDCS integration](https://TODO).

1. **Enable Auditing & Logging**

   - Once inside the network, log user actions for each app or system:
     - e.g., [AWS CloudTrail, Azure Monitor, GCP Cloud Logging, OCI Audit Logs](https://TODO) for post-identity verification behavior.

1. **Consider Device Trust or Conditional Access**
   - If feasible, require verified device posture (up-to-date OS, security agent running) before granting app access.

By mandating MFA for all, refining role-based or service-level access, introducing SSO, logging all user actions, and optionally checking device security posture, you significantly reduce reliance on a single perimeter gate.

### **Enhanced Identity Verification:** Security includes verification of both user and service identities in the context of requests, augmenting the network-based security perimeter.

#### **How to determine if this good enough**

You verify not just the user’s identity but also ensure the service or system making the request is authenticated. This indicates a move towards more modern, partial zero-trust concepts. It might be "good enough" if:

1. **Service Identities**

   - Non-human accounts also need secure tokens or certificates, so you know which microservice or job is calling your APIs.

1. **User + Service Auth**

   - Each request includes user identity (or claims) plus the service’s verified identity.

1. **Reduced Attack Surface**
   - Even if someone penetrates your perimeter, they need valid service credentials or ephemeral tokens to pivot or call internal APIs.

To progress further, you might adopt advanced mutual TLS, ephemeral identity tokens, or partial zero-trust microsegmentation. [NCSC’s zero-trust approach](https://www.ncsc.gov.uk/) and [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/) both advise deeper trust evaluations for each request.

#### **How to do better**

Below are **rapidly actionable** ways to strengthen user+service identity verification:

1. **Use mTLS or Short-Lived Tokens**

   - e.g., [AWS IAM roles for EC2 with STS, Azure Managed Identities, GCP Workload Identity Federation, OCI dynamic groups/tokens, plus mTLS for containers or microservices](https://TODO).

1. **Adopt Policy-as-Code**

   - Incorporate [Open Policy Agent or vendor-based solutions (AWS SCP, Azure Policy, GCP Org Policy, OCI Security Zones)](https://TODO) to define rules that check both user claims and service identity for each call.

1. **Enforce Request-Level Authorization**

   - For each critical API, evaluate the user identity, service identity, and method scope:
     - referencing [NCSC least privilege guidance](https://www.ncsc.gov.uk/) or [NIST SP 800-53 AC-6 for role-based checks](https://csrc.nist.gov/).

1. **Implement JIT Privileges**

   - For especially sensitive or admin tasks, require ephemeral or just-in-time escalation tokens (with a short lifetime).

1. **Log & Analyze Service-to-Service Interactions**
   - If microservices talk to each other, capture logs about which identity was used, referencing [NCSC protective monitoring best practices](https://www.ncsc.gov.uk/).

By implementing mTLS or ephemeral tokens for user+service identity, deploying policy-as-code, requiring request-level authorization, enabling JIT privileges for critical tasks, and thoroughly logging microservice communications, you move closer to a robust zero-trust framework within a partially perimeter-based model.

### **Partial Shift to Identity-Centric Security:** In some areas, the network-based security perimeter is replaced by robust identity verification mechanisms for users and services, reducing the reliance on VPNs for secure access.

#### **How to determine if this good enough**

Your organization has started phasing out VPN or perimeter-based approaches, preferring direct connections where each request is authenticated and authorized at the identity level. It’s likely "good enough" if:

1. **Mixed Environments**

   - Some apps still use older network-based rules, but new services rely on modern identity or SSO for access.

1. **Reduction in Attack Surface**

   - No blanket VPN that grants wide network access—users or microservices authenticate to each resource directly.

1. **Increasing Zero Trust**
   - You see initial success in adopting zero-trust patterns for some apps, but not fully universal yet.

To advance, you might unify all apps under identity-based controls, incorporate advanced device posture checks, or adopt full microsegmentation. [NCSC’s zero-trust guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/) frameworks can guide further expansions.

#### **How to do better**

Below are **rapidly actionable** ways to deepen identity-centric security:

1. **Retire or Restrict VPN**

   - If a VPN is still used to reach certain legacy apps, plan a phased approach to move them behind identity-based gateways:
     - e.g., [AWS AppStream or AWS WorkSpaces, Azure App Proxy, GCP BeyondCorp Enterprise, OCI Identity Aware solutions](https://TODO).

1. **Embed Device Trust**

   - Combine user identity with device compliance checks:
     - e.g., [Azure AD Conditional Access with device compliance, Google BeyondCorp device posture, AWS or OCI solutions integrated with MDM] for advanced zero-trust.

1. **Embrace Microsegmentation**

   - Each app or microservice is accessible only with the correct identity claim, not broad network-level trust.
   - referencing [NCSC’s microsegmentation advice or DevSecOps patterns](https://www.ncsc.gov.uk/).

1. **Establish Single Sign-On for All**

   - If some staff still need separate logins for older apps, unify them with [AWS SSO, Azure AD, GCP Identity, or OCI IDCS Federation](https://TODO).

1. **Continuously Train Staff**
   - Emphasize new patterns (no reliance on VPN, ephemeral credentials, and device checks).
   - referencing [GOV.UK or NCSC training resources on zero-trust and identity-based security](https://www.ncsc.gov.uk/).

By methodically retiring or limiting VPN usage, integrating device posture checks, employing microsegmentation, standardizing single sign-on for all apps, and training staff on the identity-centric model, you further reduce perimeter dependence and approach a more robust zero-trust posture.

### **No Reliance on Network Perimeter or VPN:** The organization has moved away from a network-based security perimeter. Access control is centered around individual devices and users, requiring strong attestations for trust establishment.

#### **How to determine if this good enough**

At this final maturity level, your organization’s security is fully identity- and device-centric—no blanket perimeter or VPN. You might consider it "good enough" if:

1. **Zero-Trust Realization**

   - Every request is authenticated and authorized per device and user identity, referencing [NCSC zero trust](https://www.ncsc.gov.uk/) or [NIST SP 800-207 approaches](https://csrc.nist.gov/).

1. **Full Cloud or Hybrid Environment**

   - You’ve adapted all systems to identity-based access, no backdoor VPN routes or firewall exceptions.

1. **Streamlined Access**
   - Staff easily connect from anywhere, but each request must prove who they are and what device they’re on before gaining resources.

Even so, consider advanced HPC/AI zero-trust expansions, cross-department identity federation, or deeper attribute-based access control. Continuous iteration remains beneficial to match evolving threats, as recommended by [NCSC and NIST guidance](https://csrc.nist.gov/).

#### **How to do better**

Below are **rapidly actionable** ways to sustain no-perimeter, identity-based security:

1. **Refine Device & User Risk Scoring**

   - If a device shows outdated OS or known vulnerabilities, reduce or block certain privileges automatically:
     - e.g., [Azure AD Conditional Access with risk-based policies, AWS Cognito device posture checks, GCP BeyondCorp device trust, OCI device posture solutions](https://TODO).

1. **Enforce Continuous Authentication**

   - Check user identity validity at frequent intervals, not just at session start:
     - Tools for short-lived tokens or renewed claims, referencing [NCSC’s recommended short-session best practices](https://www.ncsc.gov.uk/).

1. **Extend Zero-Trust to Microservices**

   - Each microservice or container also obtains ephemeral credentials or mTLS, ensuring service-to-service trust.
   - referencing [NCSC supply chain guidance](https://www.ncsc.gov.uk/) or [NIST SP 800-53 AC controls for machine identity](https://csrc.nist.gov/).

1. **Use Policy-as-Code**

   - Implement [Open Policy Agent (OPA), AWS SCP, Azure Policy, GCP Org Policy, OCI Security Zones](https://TODO) for dynamic, code-defined guardrails that adapt to real-time signals.

1. **Collaborate & Share**
   - As a leading zero-trust example, share your experiences or case studies with other public sector bodies, referencing cross-government events or guidance from [GDS / NCSC communities](https://www.ncsc.gov.uk/).

By deploying advanced device risk scoring, introducing continuous re-auth, expanding zero trust to microservices, employing policy-as-code for dynamic guardrails, and collaborating across the public sector, you refine your environment as a modern, identity-centric security pioneer, fully detached from traditional network perimeters and VPN reliance.

**Keep doing what you’re doing,** and consider writing up your experiences or opening pull requests to share your zero-trust or identity-centric security transformations. This knowledge benefits other UK public sector organizations striving to reduce reliance on network perimeters and adopt robust, identity-first security models.
