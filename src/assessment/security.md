---
layout: sub-navigation
title: Security
eleventyNavigation:
  parent: Assessment
---

TODO: insert GovAssure baseline? or excerpt from?

## What is your organization's approach to managing privileged access?[radios] =

() **Ad-Hoc Management by Administrators:** Privileged credentials are managed on an ad-hoc basis by individual system administrators, without standardized processes.
() **Centralized Controls with Basic Vaulting:** Technology controls are in place for centralized management, including initial password and key vaulting, integrated logs, and policy-based activities.
() **Structured Identity Administration with OTPs:** Identity administration controls and processes are established for managing privileged access, including the use of one-time passwords (OTPs).
() **Automated Risk-Based Access Control:** Privileged access is managed through automated, risk-based workflows and controls. This includes consistent monitoring across cloud platforms.
() **Context-Aware Just-in-Time Privileges:** Access is granted on a just-in-time basis, using contextual factors to determine necessity (e.g., time-based access for critical tasks). Real-time alerting is in place for all activity, with mandatory wash-ups that require Senior leadership present, prioritization given to automating and preventing further need.

## How does your organization monitor and manage security within its software supply chain?[radios] =

() **Unmanaged Dependencies:** Dependencies are not formally managed, installed ad-hoc as needed, and updated periodically without tracking versions or full dependency trees, such as using `apt` or `yum` to install packages without a manifest file that can operate as an [SBOM](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance).
() **Basic Dependency Management with Ad-Hoc Monitoring:** All dependencies are set at project initiation and updated during major releases or in response to significant advisories. Some teams use tools to monitor supply chain security in an ad-hoc manner, scanning dependency manifests with updates aligning with project releases.
() **Proactive Remediation Across Repositories:** All repositories are actively monitored, with automated remediation steps. Updates are systematically applied, aligning with project release schedules.
() **Centralized Monitoring with Context-Aware Triage:** A centralized Security Operations Center (SOC) maintains an overview of all repositories, coordinating high-severity issue remediation. The system also triages issues based on dependency usage context, focusing remediation efforts on critical issues.
() **Advanced, Integrated Security Management:** This approach combines centralized monitoring, risk management, and context-aware triage, with a focus on minimizing false positives and ensuring focused, effective remediation across the organization's software supply chain.

## How does your organization monitor and manage threats, vulnerabilities, and misconfigurations?[radios] =

() **No Vulnerability Management:** It is not clear to a member of the public how they can report vulnerabilities in your systems.
() **Open Policy or Participation in Responsible Disclosure Platforms:** Clear instructions for responsible vulnerability disclosure are published, with a commitment to prompt response upon receiving reports, you may also have active participation in well-known responsible disclosure platforms to facilitate external reporting of vulnerabilities.
() **Automated Scanning and Regular Assessments:** Implementation of automated tools for scanning vulnerabilities and misconfigurations, combined with regular security assessments.
() **Proactive Threat Hunting and Incident Response:** Proactive threat hunting practices are in place. Incident response teams rapidly address identified threats and vulnerabilities, with some degree of automation in responses.
() **Comprehensive Security Operations with Red/Purple Teams:** Utilization of red teams (offensive security) and purple teams (combined offensive and defensive) for a full-spectrum security assessment. An empowered Security Operations Center (SOC) conducts at least annual and major change-based IT Health Checks (ITHC). Analysts prioritize and coordinate remediation of high-severity issues, with many mitigation actions automated and event-triggered.

## How does your organization handle user provisioning for cloud systems, focusing on authentication for human users?[radios] =

() **Shared Accounts and Manual Account Management:** Accounts are shared or reused between multiple people with limited ability to discern who carried out an action from any logs collected. Where individual accounts exist for each user accounts they are manually created, deleted, updated, and assigned, involving significant manual effort and potential for inconsistency.
() **Identity Repository with Manual Processes:** An organizational identity repository (like Active Directory or LDAP) is used as the user source of truth, but processes for cloud system integration are manual or inconsistent.
() **Common Standards for Identity Management:** Standardized protocols and practices are in place for managing and mapping user identities between identity providers and cloud systems. Non-compliant services are less preferred.
() **Automated Federated Identity Management:** Federated identity management is fully automated, ensuring consistent user provisioning across all systems. Non-compliant services are isolated with appropriate mitigations.
() **Unified Cloud-Based Identity Provider:** A fully cloud-based user directory or identity provider acts as the single source of truth. Centralized management is aligned with user onboarding, movements, and terminations. Services not supporting federated identity have been phased out.

## How does your organization manage authentication for non-human service accounts in cloud systems?[radios] =

() **Human-like Accounts for Services:** Non-human service accounts are set up similarly to human accounts, with long-lived credentials that are often shared.
() **Locally Managed Long-Lived API Keys:** Long-lived API keys are used for service accounts, with management handled locally at the project or program level.
() **Centralized Secret Store for Service Accounts:** A centralized repository or secret store is in place for all non-human service accounts, and its use is mandatory across the organization.
() **Ephemeral Identities with Attestation:** Service accounts do not use long-lived secrets; instead, identity is established dynamically based on attestation mechanisms.
() **Code-Managed Identities with Federated Trust:** Identities for non-human services are managed as part of the infrastructure-as-code paradigm, allowing seamless federation across the organization without needing point-to-point trust relationships.

## How does your organization authenticate and manage user identities?[radios] =

() **Basic or No Identity Policies:** There are limited or no organization-wide identity policies, such as password policies, with minimal audit or enforcement mechanisms to ensure compliance.
() **Manual Identity Policy Enforcement:** While a common set of identity policies may exist, their enforcement and audit rely on manual efforts, such as retrospective analysis of logs or reports.
() **Partially Automated Identity Management:** Organization-wide identity policies, including 2FA/MFA for privileged accounts, are in place. Audit and enforcement processes are partially automated.
() **Advanced and Mostly Automated Identity Management:** Centralized identity policies and audit procedures, possibly including 2FA/MFA for all users and leveraging Single Sign-On (SSO). Most audit and enforcement activities are automated.
() **Fully Centralized and Automated Identity Management:** Comprehensive, fully centralized identity policies and audit procedures with complete automation in enforcement. Policies encompass enterprise-standard MFA and SSO. Automated certification processes for human users and system accounts are in place, especially for accessing sensitive data, along with on-demand reporting capabilities.

## How does your organization manage staff identities?[radios] =

() **Independent Identity Management:** Each service manages identities independently, without integration or synchronization across systems.

() **Basic Centralized Identity System:** There is a centralized system for identity management, but it's not fully integrated across all services.

() **Integrated Identity Management with Some Exceptions:** Identities are mostly managed through an integrated system, with a few services still operating independently.

() **Advanced Integrated Identity Management:** A comprehensive system manages identities, integrating most services and applications, with efforts to ensure synchronization and uniformity.

() **Mandatory Single Source of Identity:** A single source of identity is mandated for all services, with a strict one-to-one mapping of human to identity, ensuring consistency and security across the organization.

## How does your organization authenticate and manage non-human service accounts?[radios] =

() **Basic User/Pass Credentials:** Non-human service accounts are managed using basic ID/secret pair credentials, with a user/password approach.
() **API Key Usage:** Non-human service accounts are authenticated using API keys, which are less dynamic and might have longer lifespans.
() **Centralized Secret Store with Some Credential Rotation:** A central secret store is in place, possibly supporting automated rotation of credentials for some systems, enhancing security and management efficiency.
() **Mutual TLS for Authentication:** Mutual Transport Layer Security (mTLS) is used for non-human service accounts, providing a more secure, certificate-based authentication method.
() **Short-Lived, Federated Identities with Strong Verification:** Non-human service accounts use short-lived, federated identities that are strongly verifiable and validated with each request, ensuring a high level of security and minimizing the risk of credential misuse.

## What approach does your organization take towards network architecture for security?[radios] =

() **Traditional Network Perimeter Security:** Security relies primarily on network-level controls like IP-based allow-lists and firewall rules to create a secure perimeter around hosted data and applications.
() **Network Security with Basic Identity Verification:** The traditional network-based security perimeter is supplemented with mechanisms to verify user identity within the context of access requests.
() **Enhanced Identity Verification:** Security includes verification of both user and service identities in the context of requests, augmenting the network-based security perimeter.
() **Partial Shift to Identity-Centric Security:** In some areas, the network-based security perimeter is replaced by robust identity verification mechanisms for users and services, reducing the reliance on VPNs for secure access.
() **No Reliance on Network Perimeter or VPN:** The organization has moved away from a network-based security perimeter. Access control is centered around individual devices and users, requiring strong attestations for trust establishment.

## How does your organization ensure that users have appropriate permissions aligned with their roles?[radios] =

() **Ad-Hoc and Informal Review Process:** User entitlements and profiles are reviewed in an ad-hoc, informal manner with administrators manually managing these as they see fit.
() **Periodic Manual Reviews with Limited Action:** Periodic manual reviews of access rights are conducted for some systems, but access is rarely revoked or reduced due to concerns about unintended consequences.
() **Regular Manual Reviews, Primarily Additive:** Regular, manual reviews of access rights are conducted across most systems. However, changes to access are generally additive rather than reductive.
() **Regular Reviews with Defined Expiry Dates:** Access is regularly reviewed, certified, and remediated. Role allocations include defined expiry dates, necessitating review and re-certification.
() **Automated, Risk-Based Access Reviews:** Fully integrated, automated reviews ensure users have permissions appropriate to their roles. Access rights are dynamically adjusted based on role changes or review outcomes. Both access roles and their allocations have expiry dates for mandatory review and re-certification.

## What is your organization's approach to implementing 2FA/MFA for securing access?[radios] =

() **Encouraged but Not Enforced:** 2FA/MFA is broadly recommended in organizational guidelines, but it is not mandatory or consistently enforced across services and users.
() **Mandated but Inconsistently Enforced:** 2FA/MFA is a requirement for all services and users, but enforcement is inconsistent and may have gaps.
() **Uniform Enforcement with Some Exceptions:** 2FA/MFA is uniformly enforced across all services and users, with only a few exceptions based on specific use cases or risk assessments.
() **Prohibition of Vulnerable 2FA/MFA Methods:** Stronger 2FA/MFA methods are enforced, explicitly excluding forms vulnerable to attacks like SIM swapping (e.g., SMS/phone-based methods).
() **Stringent 2FA/MFA with Hardware Key Management:** Only services supporting robust 2FA/MFA are used. Hardware-based MFA keys are centrally managed and distributed, ensuring high-security standards for authentication.

## How does your organization manage risks?[radios] =

() **Basic and Informal Risk Management:** Risk management is carried out in a basic and informal manner, often relying on individual judgement without structured processes.
() **Ad-Hoc Spreadsheets for Risk Tracking:** Risks are tracked using ad-hoc spreadsheets at the project or program level, without a standardized or centralized system.
() **Formalized Risk Registers with Periodic Reviews:** Formal risk registers are maintained for projects or programs, with risks reviewed and updated on a periodic basis.
() **Integrated Risk Management with Central Oversight:** A centralized risk management system is used, integrating risks from various projects or programs, with regular updates and reviews.
() **Advanced Risk Management Tool with Proactive Escalation:** A shared, advanced risk management tool is in place, allowing for tracking and managing risks across multiple projects or programs. This system supports informed prioritization and proactively escalates unacceptable risks.

## How does your organization mitigate risks associated with privileged internal threat actors?[radios] =

() **Vetting of Privileged Users:** All users with privileged access undergo thorough internal vetting (Internal/UKSV) or are vetted according to supplier/contractual requirements.
() **Audit Logs as a Non-Functional Requirement:** Systems are required to maintain audit logs, although these logs lack technical controls for centralization or comprehensive monitoring.
() **Local Audit Log Checks During Assessments:** Local audit log presence is verified as part of Integrated Technical Health Checks (ITHC) or other pre-launch processes, but routine monitoring may be absent.
() **Centralized, Immutable Audit Logs with Automated Monitoring:** Immutable system audit logs are centrally stored. Their integrity is continuously assured, and the auditing process is automated. Log retention is defined and enforced automatically.
() **Regular Audits and Legal Compliance Checks:** Regular rehearsal exercises are conducted with the assistance of auditors and legal experts. These checks ensure the integrity, completeness, and legal admissibility of logs as key evidence in potential criminal prosecutions.

## What measures are in place in your organization to mitigate the risk of data breaches, including exfiltration, corruption, deletion, and non-availability?[radios] =

() **Manual Data Access Classification:** Data access is primarily managed through manual classification, with minimal automation or centralized control.
() **Centralized Policies and Controls:** A centralized set of policies and controls is in place to prevent unauthorized data access, forming the core of the data security strategy.
() **Policies with Limited Monitoring:** In addition to centralized policies and controls, limited monitoring for data exfiltration is conducted to identify potential breaches.
() **Comprehensive Controls with Automated Detection:** Preventative, detective, and corrective controls are implemented. Anomaly detection and correction are automated using a range of platforms and tools, providing a more robust defense.
() **Fully Automated Security and Proactive Monitoring:** Advanced, fully automated controls and anomaly detection systems are in place. This includes proactive monitoring, regular access reviews, and continuous auditing to ensure data security and compliance.

{% include 'nextAssessmentButton.njk' %}
