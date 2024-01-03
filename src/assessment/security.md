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
() **Structured Identity Administration with OTPs:** Identity administration controls and processes are established for managing privileged access, including the use of one-time passwords [OTPs].
() **Automated Risk-Based Access Control:** Privileged access is managed through automated, risk-based workflows and controls. This includes consistent monitoring across cloud platforms.
() **Context-Aware Just-in-Time Privileges:** Access is granted on a just-in-time basis, using contextual factors to determine necessity [e.g., time-based access for critical tasks]. Real-time alerting is in place for policy exceptions.

## How does your organization monitor and manage security within its software supply chain?[radios] =

() **Basic Dependency Management:** Dependencies and their versions are set when added to a project and are updated only during major releases or in response to high-profile advisories.
() **Ad-Hoc Monitoring with Tools:** Some teams use tools to monitor supply chain security in an ad-hoc manner, scanning dependency manifests and applying updates periodically in line with project releases.
() **Proactive Remediation Across Repositories:** All repositories are monitored, with proactive remediation steps automatically created. Updates are applied periodically, aligning with project release schedules.
() **Centralized Monitoring and Risk Management:** A centralized Security Operations Center (SOC) maintains an aggregate view of all repositories, informing the organization's overarching risk posture and coordinating high-severity issue remediation.
() **Context-Aware Triage and Focused Remediation:** In addition to centralized monitoring, the system automatically triages issues based on the context of dependency usage, focusing on the most critical issues and minimizing false positives.

## How does your organization monitor and manage threats, vulnerabilities, and misconfigurations?[radios] =

() **Open Vulnerability Disclosure Policy:** Clear instructions for responsible vulnerability disclosure are published, with a commitment to prompt response upon receiving reports.
() **Participation in Responsible Disclosure Platforms:** Active participation in well-known responsible disclosure platforms to facilitate external reporting of vulnerabilities.
() **Automated Scanning and Regular Assessments:** Implementation of automated tools for scanning vulnerabilities and misconfigurations, combined with regular security assessments.
() **Proactive Threat Hunting and Incident Response:** Proactive threat hunting practices are in place. Incident response teams rapidly address identified threats and vulnerabilities, with some degree of automation in responses.
() **Comprehensive Security Operations with Red/Purple Teams:** Utilization of red teams (offensive security) and purple teams (combined offensive and defensive) for a full-spectrum security assessment. An empowered Security Operations Center (SOC) conducts annual and major change-based Integrated Technical Health Checks (ITHC). Analysts prioritize and coordinate remediation of high-severity issues, with many mitigation actions automated and event-triggered.

## -How do you monitor, evaluate, manage, and improve the effectiveness of your security and privacy programs?[radios] =

() .
() .
() .
() .
() .

## How does your organization handle user provisioning for cloud systems, focusing on authentication for human users?[radios] =

() **Manual Account Management:** User accounts are manually created, deleted, updated, and assigned, involving significant manual effort and potential for inconsistency.
() **Identity Repository with Manual Processes:** An organizational identity repository [like Active Directory or LDAP] is used as the user source of truth, but processes for cloud system integration are manual or inconsistent.
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


## TODO: add a question about single source of identity or multiple?

## How does your organization authenticate and manage non-human service accounts?[radios] =

() **Basic User/Pass Credentials:** Non-human service accounts are managed using basic ID/secret pair credentials, with a user/password approach.
() **API Key Usage:** Non-human service accounts are authenticated using API keys, which are less dynamic and might have longer lifespans.
() **Centralized Secret Store with Some Credential Rotation:** A central secret store is in place, possibly supporting automated rotation of credentials for some systems, enhancing security and management efficiency.
() **Mutual TLS for Authentication:** Mutual Transport Layer Security (mTLS) is used for non-human service accounts, providing a more secure, certificate-based authentication method.
() **Short-Lived, Federated Identities with Strong Verification:** Non-human service accounts use short-lived, federated identities that are strongly verifiable and validated with each request, ensuring a high level of security and minimizing the risk of credential misuse.

## -How do you think about network architecture for security?[radios] =

() Reliance is primarily on the network [e.g. IP-based allow-lists and firewall rules] to establish a secure logical perimeter around all hosted data and apps.
() The network-based security perimeter is enhanced by a mechanism to verify user identity in the context of a request.
() The network-based security perimeter is enhanced by a mechanism to verify user or service identity in the context of a request.
() The network-based security perimeter is replaced in some parts by a mechanism to verify user and service identity in the context of a request, resulting in less reliance on VPN for secure access.
() No reliance on a network-based security perimeter and/or VPN. Access controls are created around individual devices and users with strong attestations required to establish trust.


## -How do you make sure that the users have the right permissions for their role? (NB excluding privileged escalated access management as covered above)[radios] =

() Entitlements and profiles are reviewed informally and in an ad hoc manner. Informal processes with administrators manually managing these entitlements and profiles as they see fit.
() Periodic manual access reviews take place for some systems, access is very seldom revoked or reduced through fear of unintended consequences.
() Regular access reviews take place across the majority of systems, though these are still manual, access still generally additive rather then reductive.
() Access is reviewed and certified on a regular basis and remediated. On-demand reports are used to identify violators. All role allocations are reviewed have a defined expiry date after which the role needs to be reviewed/re-certified. 
() Fully integrated, automated, risk-based reviews make sure that users have appropriate permissions for their roles, and access rights are removed in near-real-time based on role changes or review feedback. Access roles [groups of permissions] themselves in addition to the allocations have an expiry date after which the role itself needs to be reviewed/re-certified.

## -2FA/MFA:[radios] =
() TODO: 2FA/MFA is broadly encouraged in guidance but not enforced or required in practice.
() 2FA/MFA is mandated for all services and users though not consistently enforced.
() .
() Weaker forms of 2FA/MFA that are susceptible to sim swapping attacks such as SMS/phone are not permitted.
() Any non SSO services that do not support 2FA/MFA are eliminated. Hardware based MFA keys are centrally managed and distributed.

## -How do you handle risk management?[radios] =
() TODO:
() Ad-hoc spreadsheets to track risks on a project/program level
() .
() .
() A shared risk management tool is in place that allows risks to be tracked across multiple projects/programs, supporting informed prioritization and proactively escalates un acceptable risk

## -How do you mitigate against privileged internal threat actors?[radios] =
() All users with privileged access are subject to Internal/UKSV or supplier/contractual vetting.
() Audit log requirements are made of systems as an non-functional requirement, but no technical control or centralization is made.
() Local audit log presences are checked as part of an ITHC or other go live process, but may not be routinely monitored.
() Immutable system audit logs are kept centrally, their integrity is continually assured and the audit process is automated. Retention is defined and automated.
() Regular spot check exercises are carried out with the help of auditors and lawyers to assure the integrity, completeness and accuracy of logs and that they would be admissible as key evidence in a criminal prosecution.

{% include 'nextAssessmentButton.njk' %}
