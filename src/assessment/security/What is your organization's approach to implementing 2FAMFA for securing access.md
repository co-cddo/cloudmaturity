---
title: What is your organization's approach to implementing 2FA/MFA for securing access?
tags: security
eleventyNavigation:
  parent: security
---

### **Encouraged but Not Enforced:** 2FA/MFA is broadly recommended in organizational guidelines, but it is not mandatory or consistently enforced across services and users.

#### **How to determine if this good enough**

Your organization may advise staff to enable 2FA (two-factor) or MFA (multi-factor) on their accounts, but it’s left to personal choice or departmental preference. This might be "good enough" if:

1. **Minimal Risk Appetite**

   - You have low-value, non-sensitive services, so the impact of compromised accounts is relatively small.

1. **Testing or Early Rollout**

   - You’re in a pilot phase before formalizing a universal requirement.

1. **No High-Stakes Obligations**
   - You don’t face stringent regulatory demands or public sector security mandates.

However, purely optional MFA typically leads to inconsistent adoption. [NCSC’s multi-factor authentication guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-63B Identity Assurance Level recommendations](https://csrc.nist.gov/) advise requiring MFA for all or at least privileged accounts to significantly reduce credential-based breaches.

#### **How to do better**

Below are **rapidly actionable** steps to move from an "encouraged" MFA model to a consistent approach:

1. **Identify Privileged Accounts First**

   - Immediately enforce MFA for admin or root-level users, referencing [AWS IAM MFA on privileged roles](https://aws.amazon.com/iam/features/mfa), [Azure AD MFA on global admins](https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks), [GCP IAM MFA](https://cloud.google.com/iam/docs/using-mfa), or [OCI IAM MFA](https://www.oracle.com/cloud/free/oci-training/).

1. **Educate Staff on Risks**

   - Provide short e-learning or internal comms about real incidents caused by single-factor breaches:
     - e.g., referencing [NCSC’s blog or case studies on stolen credentials](https://www.ncsc.gov.uk/).

1. **Incentivize Voluntary Adoption**

   - Recognize teams or individuals who enable MFA (e.g., shout-outs or small accolades).
   - Encourages cultural acceptance before a final mandate.

1. **Publish a Simple Internal FAQ**

   - Outline how to set up [Google Authenticator](https://support.google.com/accounts/answer/1066447), [Microsoft Authenticator](https://support.microsoft.com/en-us/microsoft-365/article/microsoft-authenticator-app-faq-80d941b9-333d-4817-936d-bdf4b7b0fdc9), [hardware tokens](https://www.ncsc.gov.uk/collection/mfa-for-your-corporate-online-services/recommended-types-of-mfa), or other [TOTP apps](https://www.ncsc.gov.uk/collection/mfa-for-your-corporate-online-services/recommended-types-of-mfa#app).
   - Minimizes friction for new adopters.

1. **Plan a Timeline for Mandatory MFA**
   - Over 3–6 months, aim to require MFA for at least all staff accessing sensitive services.

By prioritizing MFA for privileged users, educating staff on credential compromise scenarios, incentivizing early adoption, providing user-friendly setup instructions, and scheduling a near-future MFA mandate, you evolve from optional guidance to real protective measures.

### **Mandated but Inconsistently Enforced:** 2FA/MFA is a requirement for all services and users, but enforcement is inconsistent and may have gaps.

#### **How to determine if this good enough**

Your organization has a policy stating all staff "must" enable MFA. However, actual compliance might vary—some services allow bypass, or certain users remain on single-factor. This can be "good enough" if:

1. **Broad Organizational Recognition**

   - Everyone knows MFA is required, reducing the risk from total single-factor usage.

1. **Partial Gains**

   - Many staff and services do indeed use MFA, reducing the chance of mass credential compromise.

1. **Resource Constraints**
   - Full enforcement or zero exceptions aren’t yet achieved due to time, legacy systems, or user objections.

Though better than optional MFA, exceptions or non-enforcement create holes. [NCSC’s MFA best practices](https://www.ncsc.gov.uk/collection/passwords) and [NIST SP 800-63B (AAL2+)](https://csrc.nist.gov/) advise systematically enforcing multi-factor to effectively protect user credentials.

#### **How to do better**

Below are **rapidly actionable** methods to close the enforcement gap:

1. **Enable Enforcement in Cloud IAM**

   - E.g., [AWS IAM or AWS SSO policy to force MFA](https://aws.amazon.com/iam/features/mfa), [Azure AD conditional access "MFA always required"](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview), [GCP Organization Policy for MFA](https://cloud.google.com/resource-manager/docs/organization-policy/overview), or [OCI IAM policy for mandatory MFA](https://www.oracle.com/cloud/free/oci-training/).

1. **Monitor for Noncompliance**

   - Generate monthly or weekly reports on which users still lack MFA:
     - e.g., [AWS Security Hub or custom queries](https://aws.amazon.com/security-hub/), [Azure AD "Users without MFA" query](https://learn.microsoft.com/en-us/azure/active-directory/reports-monitoring/howto-find-mfa-enabled-users-azure-portal), [GCP Cloud Identity "MFA usage" checks](https://cloud.google.com/identity/docs/mfa-usage), or [OCI IAM logging for no-MFA users](https://www.oracle.com/cloud/free/oci-training/).

1. **Apply a Hard Deadline**

   - Communicate a date beyond which single-factor logins will be revoked, referencing official departmental or local policy.

1. **Offer Support & Tools**

   - Provide hardware tokens for staff without suitable smartphones, referencing [FIDO2 or YubiKey-based methods recommended by NCSC or NIST](https://www.ncsc.gov.uk/).

1. **Handle Legacy Systems**
   - For older apps, implement an SSO or MFA proxy if direct integration isn’t possible, e.g., [Azure App Proxy or GCP IAP](https://learn.microsoft.com/en-us/azure/active-directory/app-proxy/), [AWS SSO bridging](https://aws.amazon.com/sso/), or [OCI integration with IDCS](https://www.oracle.com/cloud/free/oci-training/).

By enabling built-in forced MFA, monitoring compliance, communicating a strict cutoff date, supplying alternative authenticators, and bridging older systems with SSO or proxy solutions, you systematically remove any gaps that allow single-factor access.

### **Uniform Enforcement with Some Exceptions:** 2FA/MFA is uniformly enforced across all services and users, with only a few exceptions based on specific use cases or risk assessments.

#### **How to determine if this good enough**

Your organization has successfully mandated MFA for nearly every scenario, though a small number of systems or roles may not align due to technical constraints or a specific risk-based exemption. This is likely "good enough" if:

1. **High MFA Coverage**

   - Over 90% of your users and services require multi-factor login, drastically minimizing account compromise risk.

1. **Well-Documented Exceptions**

   - Each exception is risk-assessed and typically short-term. The organization knows precisely which systems lack enforced MFA.

1. **Strong Culture & Processes**
   - Staff generally accept MFA as standard, and you rarely experience pushback or confusion.

At this stage, you can refine advanced or stronger factors (e.g., hardware tokens, FIDO2) for privileged accounts, or adopt risk-based step-up authentication. [NCSC multi-factor recommendations](https://www.ncsc.gov.uk/) and [NIST SP 800-63B "Auth Assurance Levels"](https://csrc.nist.gov/) advise continuing improvements.

#### **How to do better**

Below are **rapidly actionable** ways to remove or mitigate the last few exceptions:

1. **Document a Sunset Plan for Exceptions**

   - If a system can’t integrate MFA now, define a target date or solution path (like an MFA-proxy or upgrade).
   - Minimizes indefinite exceptions.

1. **Risk-Base or Step-Up**

   - If certain actions are higher risk (e.g., large data exports), require a second factor again or hardware key.
   - referencing [Azure Conditional Access](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview), [AWS contextual MFA](https://aws.amazon.com/iam/features/mfa), [GCP BeyondCorp enterprise settings](https://cloud.google.com/beyondcorp), or [OCI advanced IAM polices](https://www.oracle.com/cloud/free/oci-training/).

1. **Consider Device-Focused Security**

   - For known lower-risk cases, confirm devices meet compliance (updated OS, MDM) as a mitigating factor.
   - referencing [NCSC device posture or zero-trust approaches](https://www.ncsc.gov.uk/).

1. **Combine with Identity-Centric Security**

   - Move from perimeter to identity-based approach if not already, ensuring MFA is central in each request’s trust decision.
   - referencing [NIST SP 800-207 zero-trust architecture](https://csrc.nist.gov/), [NCSC guidelines](https://www.ncsc.gov.uk/).

1. **Review & Renew**
   - Periodically re-check each exception’s rationale—some may no longer be valid as technology or policies evolve.

By planning for the eventual elimination of exceptions, deploying step-up authentication for sensitive tasks, ensuring device posture checks for minimal-risk scenarios, integrating identity-based zero-trust, and reviewing exceptions regularly, you further strengthen your universal MFA adoption.

### **Prohibition of Vulnerable 2FA/MFA Methods:** Stronger 2FA/MFA methods are enforced, explicitly excluding forms vulnerable to attacks like SIM swapping (e.g., SMS/phone-based methods).

#### **How to determine if this good enough**

Your organization refuses to allow SMS-based or similarly weak MFA. Instead, you use TOTP apps, hardware tokens, or other resilient factors. This might be "good enough" if:

1. **High-Security Requirements**

   - Handling sensitive citizen data or critical infrastructure, so you need robust protection from phishing and SIM-swap attacks.

1. **Firm Policy**

   - You publish a stance that phone-based authentication is disallowed, ensuring staff adopt recommended alternatives.

1. **Consistent Implementation**
   - Everyone’s using TOTP, FIDO2 tokens, or other strong factors. Rarely do exceptions exist.

However, you might still refine device posture checks, adopt hardware-based tokens for privileged roles, or integrate continuous authentication for maximum security. [NCSC’s guidance on phishing-resistant MFA](https://www.ncsc.gov.uk/) and [NIST SP 800-63B AAL3 recommendations](https://csrc.nist.gov/) highlight advanced factors beyond TOTP.

#### **How to do better**

Below are **rapidly actionable** enhancements:

1. **Adopt FIDO2 or Hardware Security Keys**

   - For highly privileged accounts, consider [YubiKey](https://www.yubico.com/products/yubikey-5-series/), [Feitian](https://www.feitian.com/), or other [FIDO2-based solutions offering strong phishing resistance](https://www.ncsc.gov.uk/collection/mfa-for-your-corporate-online-services/recommended-types-of-mfa#app).

1. **Set Up Backup Mechanisms**

   - Provide staff a fallback if TOTP or hardware tokens are lost/stolen:
     - e.g., secure self-service recovery using [AWS SSO with backup codes](https://aws.amazon.com/sso/), [Azure AD with alternative verification](https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks), [GCP Identity fallback factors](https://cloud.google.com/identity/docs/mfa-usage), or [OCI IAM backup tokens](https://www.oracle.com/cloud/free/oci-training/).

1. **Integrate Risk-Based Policies**

   - If an account attempts to log in from an unusual location, require a higher assurance factor:
     - referencing [Azure Conditional Access location-based rules](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition), [AWS context keys](https://aws.amazon.com/iam/features/mfa), [GCP Access Context Manager](https://cloud.google.com/access-context-manager), or [OCI policy conditions](https://www.oracle.com/cloud/free/oci-training/).

1. **Consider Device Certificates**

   - For some use cases, device-based certificates or mTLS can supplement user factors, further preventing compromised endpoints from impersonation.

1. **Regularly Revisit Factor Security**
   - Check if new vulnerabilities arise in your TOTP or hardware token methods, referencing [NCSC’s hardware token security briefs, FIDO Alliance updates, or NIST advisories](https://www.ncsc.gov.uk/).

By introducing hardware-based MFA, ensuring robust fallback processes, applying risk-based authentication for suspicious attempts, deploying device certs, and staying alert to newly discovered factor vulnerabilities, you push your "no weak MFA" stance to a sophisticated, security-first environment.

### **Stringent 2FA/MFA with Hardware Key Management:** Only services supporting robust 2FA/MFA are used. Hardware-based MFA keys are centrally managed and distributed, ensuring high-security standards for authentication.

#### **How to determine if this good enough**

At this pinnacle, your organization requires hardware-based tokens (e.g., FIDO2, YubiKeys, or similar) for all staff, forbidding weaker factors like SMS or even TOTP. This is typically "good enough" if:

1. **Full Hardware Token Adoption**

   - Everyone uses hardware keys for login, including privileged or admin accounts.

1. **Central Key Lifecycle Management**

   - The organization issues, tracks, and revokes hardware tokens systematically, referencing [NCSC hardware token management best practices](https://www.ncsc.gov.uk/).

1. **High Assurance**
   - This approach meets or exceeds [NIST SP 800-63B AAL3 standards](https://csrc.nist.gov/) and offers strong resilience against phishing or SIM-swap exploits.

You could still refine ephemeral or risk-adaptive auth, integrate zero-trust posture checks, and implement cross-department hardware token bridging. Continuous iteration ensures alignment with future security advances. [NCSC’s advanced multi-factor recommendations](https://www.ncsc.gov.uk/) or vendor-based hardware token solutions might help expand coverage.

#### **How to do better**

Below are **rapidly actionable** ways to optimize hardware-based MFA:

1. **Embrace Risk-Based Authentication**

   - If unusual attempts occur, force an additional step or token re-validation:
     - referencing [Azure AD Conditional Access with hardware tokens](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview), [AWS context-based policies](https://aws.amazon.com/iam/features/mfa), [GCP identity risk signals](https://cloud.google.com/identity/docs/mfa-usage), or [OCI advanced IAM policies](https://www.oracle.com/cloud/free/oci-training/).

1. **Implement Zero-Trust & Microsegmentation**

   - Pair hardware tokens with per-request or per-service authentication. Each microservice may require ephemeral token requests.
   - referencing [NIST SP 800-207 zero-trust architecture guidelines](https://csrc.nist.gov/).

1. **Maintain Inventory & Lifecycle**

   - Automate key distribution, revocation, or replacement. If a staff member loses a token, the system quickly blocks it.
   - e.g., a central asset management or HR-driven approach ensuring no leftover active tokens for departed staff.

1. **Test Against Realistic Threats**

   - Conduct red team exercises specifically targeting hardware token scenarios:
     - referencing [NCSC or local ITHC red/purple teaming best practices](https://www.ncsc.gov.uk/).

1. **Plan for Cross-department Interoperability**
   - If staff need to collaborate with other departments, consider bridging identity solutions or allowing hardware tokens recognized across multiple organizations:
     - referencing [GOV.UK single sign-on or cross-department identity frameworks](https://www.gov.uk/service-manual).

By coupling hardware tokens with adaptive risk checks, adopting zero-trust microsegmentation for each request, carefully managing the entire token lifecycle, running targeted red team tests, and exploring cross-department usage, you elevate an already stringent hardware-based MFA approach to a seamlessly integrated, high-security ecosystem suitable for sensitive UK public sector operations.

**Keep doing what you’re doing,** and consider sharing your experiences or opening pull requests to this guidance. Others in the UK public sector can learn from how you enforce robust MFA standards, whether using FIDO2 hardware keys, advanced risk-based checks, or zero-trust patterns.
