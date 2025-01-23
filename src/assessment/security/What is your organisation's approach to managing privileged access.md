---
title: What is your organisation's approach to managing privileged access?
tags: security
eleventyNavigation:
  parent: security
---

### **Ad-Hoc Management by Administrators:** Privileged credentials are managed on an ad-hoc basis by individual system administrators, without standardised processes.

#### **How to determine if this good enough**

Your organisation may let each system admin handle privileged credentials independently, storing them in personal files or spreadsheets. This might be acceptable if:

1. **Small-Scale or Legacy Systems**

   - You have few privileged accounts and limited complexity, and potential downsides of ad-hoc management haven’t yet materialised.

1. **Short-Term or Pilot**

   - You’re in a transitional stage, planning to adopt better solutions soon but not there yet.

1. **No Pressing Compliance Requirements**
   - Strict audits or public sector mandates for privileged account management haven’t been triggered.

However, ad-hoc methods often risk unauthorised usage, inconsistent rotation, and difficulty tracking who accessed what. [NCSC’s privileged account security guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-53 AC-6 (least privilege)](https://csrc.nist.gov/) emphasise stricter control over privileged credentials.

#### **How to do better**

Below are **rapidly actionable** steps to move beyond ad-hoc privileged credential management:

1. **Create a Basic Privileged Access Policy**

   - Even a short doc stating how privileged accounts are created, stored, rotated, and revoked is better than none.
   - Referencing [NCSC’s privileged access management best practices](https://www.ncsc.gov.uk/).

1. **Mandate Individual Admin Accounts**

   - Eliminate shared "admin" user logins. Each privileged user gets a unique account so you can track actions.

1. **Introduce MFA for Admins**

   - Even if no vaulting solution is in place, require multi-factor authentication on any privileged ID:
     - [AWS IAM with MFA](https://aws.amazon.com/iam/features/mfa), [Azure AD PIM MFA](https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-how-to-activate-role), [GCP IAM accounts with MFA](https://cloud.google.com/identity/docs/mfa-usage), or [OCI IAM MFA](https://www.oracle.com/cloud/free/oci-training/).

1. **Document & Track Privileged Roles**

   - Keep a minimal register or spreadsheet listing all privileged accounts, systems they access, and assigned owners:
     - Helps see if too many administrators exist.

1. **Schedule Transition to Vaulting**
   - Plan to adopt a basic password vault or secrets manager, e.g., [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/), [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), [GCP Secret Manager](https://cloud.google.com/secret-manager), or [OCI Vault](https://www.oracle.com/cloud/free/oci-training/) for privileged credentials in the next 3-6 months.

By creating a short privileged access policy, enforcing unique admin accounts with MFA, documenting roles, and preparing for a vault-based solution, you significantly reduce the risk of ad-hoc mismanagement and insider threats.

### **Centralised Controls with Basic Vaulting:** Technology controls are in place for centralised management, including initial password and key vaulting, integrated logs, and policy-based activities.

#### **How to determine if this good enough**

Your organisation implements a vaulting solution (e.g., a password manager or secrets manager) that securely stores privileged credentials, with usage logs or basic policy checks. This might be "good enough" if:

1. **Reduced Credential Sprawl**

   - No more random spreadsheets or personal note files; vault usage is mandatory for storing admin credentials.

1. **Initial Logging & Policy**

   - Access to vault entries is logged, and policy controls (like who can retrieve which credential) exist.

1. **Improved Accountability**
   - Audit logs show which admin took which credential, though real-time or advanced analytics may be limited.

To enhance further, you can adopt ephemeral credentials, just-in-time privilege grants, or integrate automatic rotation. [NCSC’s privileged access management guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-63B AAL2+ usage for admin accounts](https://csrc.nist.gov/) suggest deeper automation and advanced threat detection.

#### **How to do better**

Below are **rapidly actionable** steps to refine centralised vaulting:

1. **Enable Automatic Credential Rotation**

   - Many vault solutions allow scheduled rotation:
     - e.g., [AWS Secrets Manager rotation](https://aws.amazon.com/secrets-manager/), [Azure Key Vault versioning](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), [GCP Secret Manager rotation](https://cloud.google.com/secret-manager), or [OCI Vault key rotation](https://www.oracle.com/cloud/free/oci-training/).

1. **Integrate with CI/CD**

   - If dev pipelines need privileged credentials (e.g., for deployment), fetch them from the vault at runtime, never storing them in code or config:
     - referencing [NCSC’s guidance on secrets management](https://www.ncsc.gov.uk/).

1. **Automate Access Reviews**

   - Regularly review who has vault access, removing staff or contractors who no longer need it, referencing [NIST SP 800-53 AC-2 for continuous account management](https://csrc.nist.gov/).

1. **Adopt Fine-Grained Access Policies**

   - Distinguish read-only vs. rotate vs. admin permissions in the vault.
   - e.g., [AWS IAM roles for Secrets Manager](https://aws.amazon.com/secrets-manager/), [Azure RBAC for Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide), [GCP IAM for Secret Manager](https://cloud.google.com/secret-manager), or [OCI IAM compartment policies](https://www.oracle.com/cloud/free/oci-training/).

1. **Add Multi-Factor for Vault Access**
   - Ensure staff need an extra factor to retrieve privileged credentials from the vault, referencing [NCSC’s MFA best practice](https://www.ncsc.gov.uk/).

By rotating credentials automatically, integrating vault secrets into CI/CD, conducting periodic access reviews, refining vault access policies, and enforcing MFA for vault retrieval, you build a stronger, more secure foundation for privileged credentials management.

### **Structured Identity Administration with OTPs:** Identity administration controls and processes are established for managing privileged access, including the use of one-time passwords (OTPs).

#### **How to determine if this good enough**

In this scenario, your organisation has formal processes: new privileged accounts require an approval workflow, privileges are tracked, and one-time passwords or tokens might be used to access certain sensitive credentials or sessions. It may be "good enough" if:

1. **Managed Lifecycle**

   - You have explicit procedures for provisioning, rotating, and revoking privileged accounts.

1. **OTP for Sensitive Operations**

   - For high-risk tasks (e.g., root or "god-mode" usage), a user must supply a fresh OTP from the vault or via a token generator.

1. **Reduced Risk**
   - Mandatory approvals and short-lived passcodes curb the chance of stale or misused privileged credentials.

Still, you might consider advanced measures like ephemeral role assumption, context-based or zero-trust policies, or real-time threat detection. [NCSC’s privileged user management best practices](https://www.ncsc.gov.uk/) and [NIST SP 800-53 AC-6 advanced usage](https://csrc.nist.gov/) outline continuing improvements.

#### **How to do better**

Below are **rapidly actionable** ways to strengthen identity administration and OTP usage:

1. **Integrate OTP into Break-Glass Procedures**

   - When a user escalates to super-admin, require a one-time password from the vault, valid only for a few minutes:
     - e.g., [AWS STS with short-lived tokens](https://aws.amazon.com/sts/), [Azure PIM with just-in-time](https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-how-to-activate-role), [GCP short-lived role tokens](https://cloud.google.com/iam/docs/short-lived-credentials), or [OCI dynamic tokens](https://www.oracle.com/cloud/free/oci-training/).

1. **Use Security Keys for Admin Access**

   - Consider hardware tokens (FIDO2, YubiKey) for privileged roles.
   - referencing [NCSC’s hardware token guidance](https://www.ncsc.gov.uk/).

1. **Automate Logging & Alerts**

   - Generate real-time alerts if an OTP is used or if multiple OTP requests appear in quick succession:
     - e.g., [AWS CloudWatch Events](https://aws.amazon.com/cloudwatch/), [Azure Monitor Alerts](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview), [GCP Logging Alerts](https://cloud.google.com/logging/docs/monitoring-logs/alerts), or [OCI Notifications](https://www.oracle.com/cloud/free/oci-training/).

1. **Schedule Regular Privileged Access Reviews**

   - Confirm that each privileged user still needs their role.
   - referencing [NIST SP 800-53 AC-3 for minimal role-based privileges](https://csrc.nist.gov/).

1. **Expand OTP to Non-Human Accounts**
   - Where feasible, short-lived tokens for services or automation tasks too, fostering ephemeral credentials.

By embedding OTP steps in break-glass procedures, adopting hardware tokens for admins, enabling automated logs/alerts, reviewing privileged roles frequently, and using ephemeral tokens for services as well, you build a more rigorous privileged access model with robust checks.

### **Automated Risk-Based Access Control:** Privileged access is managed through automated, risk-based workflows and controls. This includes consistent monitoring across cloud platforms.

#### **How to determine if this good enough**

Your organisation has advanced systems that dynamically adjust privileged user access based on real-time signals (e.g., user context, device posture, time of day), with logging across multiple clouds. It’s likely "good enough" if:

1. **Flexible, Policy-Driven Access**

   - Certain tasks require elevated privileges only when risk or context is validated (e.g., location-based or device checks).

1. **Unified Multi-Cloud Oversight**

   - You can see all privileged accounts for AWS, Azure, GCP, OCI in a single pane, highlighting anomalies.

1. **Prompt Mitigation & Revocation**
   - If an account shows unusual behavior, the system can auto-limit privileges or alert security leads in near real-time.

You could refine it by adopting zero-trust microsegmentation for each privileged action, or real-time AI threat detection. [NCSC’s zero trust approach](https://www.ncsc.gov.uk/) and [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/) often encourage continuous verification for highest-value accounts.

#### **How to do better**

Below are **rapidly actionable** ways to elevate automated, risk-based privileged access:

1. **Incorporate Threat Intelligence**

   - If certain privileged users or roles are targeted in known campaigns, your system should adapt policies:
     - e.g., [Azure Sentinel threat intel](https://learn.microsoft.com/en-us/azure/sentinel/), [AWS Security Hub with curated feeds](https://aws.amazon.com/security-hub/), [GCP Chronicle threat analysis](https://cloud.google.com/chronicle), or [OCI threat intelligence integrations](https://www.oracle.com/cloud/free/oci-training/).

1. **Tie Access to Device Posture**

   - Checking if the user’s device meets security standards (latest patches, MDM compliance) before granting elevated privileges:
     - referencing [NCSC’s device posture or MDM recommendations](https://www.ncsc.gov.uk/).

1. **Implement Granular Observability**

   - For privileged sessions, record or track commands in near real-time, ensuring immediate response to suspicious operations:
     - e.g., [AWS CloudTrail with CloudWatch Alarms](https://aws.amazon.com/cloudwatch/), [Azure Monitor logs for advanced admin actions](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/), [GCP Admin Activity logs](https://cloud.google.com/logging/docs/audit), or [OCI Audit logs + notifications](https://www.oracle.com/cloud/free/oci-training/).

1. **Automate Just-in-Time (JIT) Access**

   - Use short-lived role escalations that revert automatically:
     - e.g., [Azure Privileged Identity Management](https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-how-to-activate-role), [GCP ephemeral role grants](https://cloud.google.com/iam/docs/short-lived-credentials), [AWS STS custom sessions](https://aws.amazon.com/sts/), or [OCI dynamic group tokens with time-based constraints](https://www.oracle.com/cloud/free/oci-training/).

1. **Regular Security Drills**
   - Conduct scenario testing or red team exercises focusing on privileged accounts.
   - referencing [NCSC red teaming best practices](https://www.ncsc.gov.uk/).

By combining threat intelligence, verifying device posture, enabling granular session-level logging, adopting just-in-time privileges, and running regular security exercises, you further refine risk-based controls for privileged access across all cloud platforms.

### **Context-Aware Just-in-Time Privileges:** Access is granted on a just-in-time basis, using contextual factors to determine necessity (e.g., time-based access for critical tasks). Real-time alerting is in place for all activity, with mandatory wash-ups that require Senior leadership present, prioritisation given to automating and preventing further need.

#### **How to determine if this good enough**

At this highest maturity level, your organisation dynamically grants privileged access based on real-time context (time window, location, device posture, or manager approval) and logs all actions. Senior leadership is involved in after-action reviews for critical escalations. This is typically "good enough" if:

1. **Comprehensive Zero-Trust**

   - Privileged roles exist only if requested and verified in real-time, with ephemeral credentials.

1. **Senior Leadership Accountability**

   - The mandatory wash-up sessions ensure no suspicious or repeated escalations go unexamined, reinforcing a security-focused culture.

1. **Automation Minimises Need**
   - Many tasks that previously required manual privileged access are automated or delegated to safer, limited-scope roles, aligning with [NCSC zero trust / least privilege guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-207 approaches](https://csrc.nist.gov/).

Though advanced, you may refine HPC/AI roles under ephemeral policies, integrate multi-department identity bridging, or further embed AI-based anomaly detection. Continual iteration aligns with future public sector security demands.

#### **How to do better**

Below are **rapidly actionable** ways to optimise context-aware just-in-time privileges:

1. **Deeper Risk-Based Logic**

   - For example, if a user requests privileged access on a weekend, the system demands additional manager approval or a second hardware token.
   - referencing [Azure PIM advanced policies](https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-how-to-activate-role), [AWS Access Analyzer with context conditions](https://aws.amazon.com/access-analyzer/), [GCP short-lived roles + custom conditions](https://cloud.google.com/iam/docs/short-lived-credentials), or [OCI advanced IAM condition checks](https://www.oracle.com/cloud/free/oci-training/).

1. **Enforce Micro-Segmentation**

   - Combine ephemeral privileges with strict micro-segmentation: each resource requires a separate ephemeral token:
     - Minimises lateral movement if any one credential is compromised.

1. **Incorporate Real-Time Forensic Tools**

   - If privileged activity looks unusual, log a forensic snapshot or automatically isolate that user session:
     - referencing [NCSC forensic readiness or advanced threat detection approaches](https://www.ncsc.gov.uk/).

1. **Enable AI/ML Anomaly Detection**

   - Tools or scripts that examine normal patterns for each user, alerting on out-of-norm privileged requests:
     - e.g., [Azure Sentinel ML rules](https://learn.microsoft.com/en-us/azure/sentinel/), [AWS DevOps Guru or Security Hub custom checks](https://aws.amazon.com/security-hub/), [GCP Chronicle AI](https://cloud.google.com/chronicle), or [OCI Security Advisor advanced analytics](https://www.oracle.com/cloud/free/oci-training/).

1. **Regular Multi-Stakeholder Drills**
   - Include managers, security leads, and senior leadership in simulated privileged escalation misuse scenarios:
     - refining the after-action wash-up process, referencing [NIST SP 800-61 incident handling guide or red/purple teaming](https://csrc.nist.gov/).

By enhancing risk-based logic in JIT access, pairing ephemeral privileges with micro-segmentation, adopting real-time forensic checks, integrating AI-based anomaly detection, and practicing multi-stakeholder drills, you perfect a context-aware just-in-time privileged access model that secures the most sensitive operations in the UK public sector context.

**Keep doing what you’re doing,** and consider blogging or creating pull requests to share your experiences in implementing advanced privileged access systems with just-in-time context-based controls. Such knowledge benefits other UK public sector bodies aiming to secure administrative actions under a zero-trust, ephemeral access paradigm.
