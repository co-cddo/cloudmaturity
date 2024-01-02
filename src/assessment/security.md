---
layout: sub-navigation
title: Security
eleventyNavigation:
  parent: Assessment
---

TODO: insert GovAssure baseline? or excerpt from?

## What is your approach to privileged access management?[radios] =

() Privileged credentials are managed ad hoc by system administrators.
() Technology controls are in place to support centralized processes with initial password and key vaulting, integrated logs, and policy-based activities.
() Identity administration controls and processes for privileged access and use of one-time passwords exist.
() Automated, risk-based workflows and controls to grant privileged access into cloud environments, with a consistent platform-wide monitoring strategy.
() Just-in-time privileges – using context to determine system access (i.e., time-based emergency break-glass access to perform critical maintenance). Real-time alerting of policy exceptions.

## How do you monitor and remediate supply chain security?[radios] =

() Dependencies and versions are defined at when added to the project and only updated inline with overarching project releases when there are bug fixes provided or high profile advisories issued.
() Some teams use tools to monitor and remediate supply chain security ad hoc, by scanning the repositories dependency manifests, updates are periodically applied in line with overarching project releases.
() All repositories are monitored with proactive remediations automatically created. Updates are periodically applied in line with overarching project releases.
() All repositories are monitored and an aggregate view visible to a empowered centralized SOC that is informing the overarching risk position of the organization, and capable of prioritizing and then coordinating remediation for high severity issues.
() In addition to above, the aggregate view is automatically triaged based on the context of where and how the dependency is used in order to focus attention on the most relevant critical issues and avoid the risk of false positives.

## How do you monitor and remediate threats, vulnerabilities and misconfigurations?[radios] =

() Instructions on how to responsibly disclose a vulnerability are openly published and responded to promptly.
() Published participation in a well known responsible disclosure platform.
() .
() .
() Appropriate and ethical use of red teams and purple teams that looks at all exploitable areas of tech, people and process, ITHC conducted annually and on major changes. Empowered SOC analyst teams, risk based prioritization and coordination. SOC analysts are empowered to prioritize, coordinate and execute remediation for high severity issues. With many mitigation actions such as disabling service being automated and event triggered.

## How do you monitor, evaluate, manage, and improve the effectiveness of your security and privacy programs?[radios] =

() .
() .
() .
() .
() .

## How do you handle user provisioning for cloud systems? (NB this is limited to AuthN for humans)[radios] =

() Manual creation, deletion, update and allocation of users and/or system accounts.
() Organizational identity repository [Active Directory, LDAP, or similar] is leveraged as the source of truth for users, but there are manual and/or inconsistent processes.
() Common standards and protocols exist to manage and map user identities between identity providers across systems. Services that do not support the federated identity are not preferred during selection process.
() Federated identity management and synchronization is fully automated and consistent across all systems. Services that do not support the federated identity are isolated and/or mitigations are in place.
() A fully cloud-based user directory or identity provider is the unified single source of truth, with centralized management of users based on on-boarding/move/termination of users and/or system accounts. Services that do not support the federated identity have been eliminated.

## How do you handle non-human service account provisioning for cloud systems? (NB this is limited to AuthN for non-humans)[radios] =

() Create normal human accounts for non-human service accounts with long lived credentials shared.
() Long lived API Keys locally managed at a project/program level
() A centralized secret store exists for all non-human service accounts and its use is mandated.
() No secrets are long lived, identity is established on attestation identity 
() Identities are all locally managed in code with the rest of the infrastructure as code and can seamlessly be used via federated trust across the organization as required without point to point trust relationships being established.


## How do you authenticate and manage user identities?[radios] =

() Limited/no organization-wide identity policies [e.g., password policies] and audit/enforcement to validate compliance.
() A common set of identity policies, audit, and enforcement procedures may exist, but these policies rely on manual efforts [e.g. retrospectively manually analyzing logs or reports] to validate user/system account compliance.
() Org-wide identity policies, audit, and enforcement procedures exist. Identity policies include a 2FA/MFA requirement for privileged accounts. Audit and enforcement may be partially automated.
() Identity policies and audit procedures are centralized and may include 2FA/MFA requirements for all users, and SSO may be leveraged. Audit and enforcement is mostly automated.
() Fully centralized identity policies and audit procedures with fully automated enforcement. Policies include enterprise-standard MFA and SSO. If required, automated certification process in place for human users and/or system accounts used for accessing sensitive data along with on-demand reporting.

## How do you authenticate and manage non-human service accounts?[radios] =
() TODO:user/pass id/secret pair credentials used
() api keys
() central secret store that may support automated rotation of credentials to some systems
() Mutual TLS
() short lived, federated and strongly verifiable system identities, validated on each request

## How do you think about network architecture for security?[radios] =

() Reliance is primarily on the network [e.g. IP-based allow-lists and firewall rules] to establish a secure logical perimeter around all hosted data and apps.
() The network-based security perimeter is enhanced by a mechanism to verify user identity in the context of a request.
() The network-based security perimeter is enhanced by a mechanism to verify user or service identity in the context of a request.
() The network-based security perimeter is replaced in some parts by a mechanism to verify user and service identity in the context of a request, resulting in less reliance on VPN for secure access.
() No reliance on a network-based security perimeter and/or VPN. Access controls are created around individual devices and users with strong attestations required to establish trust.


## How do you make sure that the users have the right permissions for their role? (NB excluding privileged escalated access management as covered above)[radios] =

() Entitlements and profiles are reviewed informally and in an ad hoc manner. Informal processes with administrators manually managing these entitlements and profiles as they see fit.
() Periodic manual access reviews take place for some systems, access is very seldom revoked or reduced through fear of unintended consequences.
() Regular access reviews take place across the majority of systems, though these are still manual, access still generally additive rather then reductive.
() Access is reviewed and certified on a regular basis and remediated. On-demand reports are used to identify violators. All role allocations are reviewed have a defined expiry date after which the role needs to be reviewed/re-certified. 
() Fully integrated, automated, risk-based reviews make sure that users have appropriate permissions for their roles, and access rights are removed in near-real-time based on role changes or review feedback. Access roles [groups of permissions] themselves in addition to the allocations have an expiry date after which the role itself needs to be reviewed/re-certified.

## 2FA/MFA:[radios] =
() TODO: 2FA/MFA is broadly encouraged in guidance but not enforced or required in practice.
() 2FA/MFA is mandated for all services and users though not consistently enforced.
() .
() Weaker forms of 2FA/MFA that are susceptible to sim swapping attacks such as SMS/phone are not permitted.
() Any non SSO services that do not support 2FA/MFA are eliminated. Hardware based MFA keys are centrally managed and distributed.

## How do you handle risk management?[radios] =
() TODO:
() Ad-hoc spreadsheets to track risks on a project/program level
() .
() .
() A shared risk management tool is in place that allows risks to be tracked across multiple projects/programs, supporting informed prioritization and proactively escalates un acceptable risk

{% include 'nextAssessmentButton.njk' %}
