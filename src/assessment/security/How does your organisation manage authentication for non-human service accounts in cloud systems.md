---
title: How do you manage non-human service accounts in the cloud?
tags: security
eleventyNavigation:
  parent: security
---

### Service accounts are like user accounts, with long-lived passwords.

#### **How to determine if this good enough**

Your organisation may treat service accounts as if they were human users, granting them standard usernames and passwords (or persistent credentials). This might be acceptable if:

1. **Low-Risk, Low-Criticality Services**

   - The services run minimal workloads without high security, compliance, or cost risks.

1. **No Complex Scaling**

   - You rarely spin up or down new services, so manual credential management seems manageable.

1. **Very Small Teams**
   - Only a handful of people need to coordinate these credentials, reducing the chance of confusion.

However, long-lived credentials that mimic human user accounts typically violate [NCSC’s cloud security principles](https://www.ncsc.gov.uk/collection/cloud-security) and [NIST SP 800-53 AC (Access Control)](https://csrc.nist.gov/) due to potential credential sharing, lack of accountability, and higher risk of compromise.

#### **How to do better**

Below are **rapidly actionable** steps to move beyond human-like accounts for services:

1. **Introduce Role-Based Service Accounts**

   - Use the cloud provider’s native service account or role concept:
     - [AWS IAM roles for EC2 or ECS tasks](https://aws.amazon.com/iam/features/), [Azure Managed Identities](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview), [GCP Service Accounts](https://cloud.google.com/iam/docs/service-accounts), [OCI Dynamic Groups](https://www.oracle.com/cloud/free/oci-training/)
   - Avoid user/password-based approaches.

1. **Limit Shared Credentials**

   - Immediately stop creating or reusing credentials across multiple services. Assign each service a unique identity:
     - Ensures logs and auditing can differentiate actions.

1. **Enforce MFA or Short-Lived Tokens**

   - If a service truly needs interactive login (rare), require MFA or ephemeral credentials where possible.
   - [NCSC guidance on multi-factor authentication for accounts](https://www.ncsc.gov.uk/).

1. **Document a Minimal Policy**

   - A short doc stating "No non-human accounts with user-like credentials," referencing both [NCSC principle of least privilege](https://www.ncsc.gov.uk/) and [NIST guidelines](https://csrc.nist.gov/).

1. **Begin Transition to Cloud-Native Identity**
   - Plan a short-term goal (2-4 months) to retire all shared/human-like service accounts, adopting native roles or short-lived credentials where feasible.

By introducing cloud-native roles for services, eliminating shared credentials, enabling MFA or short-lived tokens if needed, documenting a minimal policy, and planning a transition, you reduce security risks posed by long-lived, human-like service accounts.

### Service accounts use long-lived API keys, managed by each team.

#### **How to determine if this good enough**

In this setup, non-human accounts are assigned API keys (often static), managed by the project team. You might see it as "good enough" if:

1. **Limited Cross-Project Needs**

   - Each project operates in isolation, with minimal external dependencies or shared services.

1. **Few Cloud Services**

   - The environment is small, so local management doesn’t cause major confusion or risk.

1. **Low Security/Compliance Requirements**
   - No strong obligations for rotating or logging key usage, or a short-term approach that hasn’t caught up with best practices yet.

Still, static API keys managed locally can easily be lost, shared, or remain in code, risking leaks. [NCSC supply chain or credential security guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-63 on digital identity credentials](https://csrc.nist.gov/) advise more dynamic, centralised strategies.

#### **How to do better**

Below are **rapidly actionable** steps to centralise and secure long-lived API keys:

1. **Move Keys to a Central Secret Store**

   - e.g., [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/), [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), [GCP Secret Manager](https://cloud.google.com/secret-manager/docs/overview), [OCI Vault](https://www.oracle.com/cloud/free/oci-training/) for storing all API keys.
   - Minimises local sprawl and fosters consistent security controls.

1. **Enforce Rotation Policies**

   - Implement at least quarterly or monthly rotation for API keys to reduce exposure window if compromised:
     - Possibly automate via [AWS Lambda](https://aws.amazon.com/lambda/), [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview), [GCP Cloud Functions](https://cloud.google.com/functions/docs/concepts/overview), or [OCI functions](https://www.oracle.com/cloud/free/oci-training/).

1. **Use Tooling for Local Key Discovery**

   - If keys might be in code repos, scan with open-source or vendor tools:
     - e.g., [Trufflehog](https://github.com/trufflesecurity/trufflehog), [Gitleaks](https://github.com/gitleaks/gitleaks), [AWS CodeGuru Security](https://aws.amazon.com/codeguru/security/), or [Azure DevOps Security scanning](https://learn.microsoft.com/en-us/azure/devops/security/overview/security-scanning).
   - Alert if secrets are committed to version control.

1. **Document a Single Organisational Policy**

   - State that "All API keys must be stored in central secret management, with at least every X months rotation."
   - Reference [NIST secret management or NCSC credential rotation best practices](https://www.ncsc.gov.uk/).

1. **Transition to Role-Based or Short-Lived Tokens**
   - While central secret storage helps, plan a future move to ephemeral tokens or IAM roles:
     - Reduces reliance on static keys altogether.

By centralising key storage, rotating keys automatically, scanning for accidental exposures, formalising a policy, and starting to shift away from static keys, you significantly enhance the security of locally managed long-lived credentials.

### All service accounts use a central secret store, which everyone must use.

#### **How to determine if this good enough**

Your organisation mandates storing service account credentials in a secure, central location (e.g., an enterprise secret store). This might be "good enough" if:

1. **Reduced Credential Sprawl**

   - No more local storing of secrets in code or random text files.
   - Standard enforcement ensures consistent usage.

1. **Better Rotation & Auditing**

   - The secret store possibly automates or at least supports rotating credentials.
   - You can track who accessed which secret, referencing [NCSC’s credential management recommendations](https://www.ncsc.gov.uk/).

1. **Strong Baseline**
   - This approach typically covers a major part of recommended practices from [NIST SP 800-63 or 800-53 for credentials](https://csrc.nist.gov/).

However, using a secret store alone doesn’t guarantee ephemeral or short-lived credentials. You can further adopt ephemeral tokens and embed attestation-based identity to limit credentials even more. [NCSC’s zero trust advice](https://www.ncsc.gov.uk/) also encourages dynamic authentication steps.

#### **How to do better**

Below are **rapidly actionable** ways to strengthen your centralised secret store approach:

1. **Automate Secret Rotation**

   - For each stored secret (e.g., a database password, a service’s API key), implement rotation:
     - [AWS Secrets Manager rotation](https://aws.amazon.com/secrets-manager/), [Azure Key Vault rotation](https://learn.microsoft.com/en-us/azure/key-vault/general/rotate-keys), [GCP Secret Manager rotation](https://cloud.google.com/secret-manager/docs/rotation), or [OCI Vault rotation features](https://www.oracle.com/cloud/free/oci-training/).

1. **Incorporate Access Control & Monitoring**

   - Strictly limit who can retrieve or update each secret, using fine-grained IAM or RBAC:
     - e.g., [AWS IAM policies](https://aws.amazon.com/iam/features/), [Azure Key Vault RBAC](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide), [GCP Secret Manager IAM](https://cloud.google.com/secret-manager/docs/iam), or [OCI compartments/policies](https://www.oracle.com/cloud/free/oci-training/).
   - Monitor logs for unusual access patterns.

1. **Reference a "Secret Lifecycle" Document**

   - Outline creation, usage, rotation, and revocation steps for each type of secret.
   - Align with [NIST recommended credential lifecycles or NCSC guidance on secret hygiene](https://www.ncsc.gov.uk/).

1. **Integrate into CI/CD**

   - Ensure automation pipelines fetch credentials from the secret store at build or deploy time, never storing them in code.

1. **Begin Adopting Ephemeral Credentials**
   - For new services, consider short-lived tokens or dynamic role assumption, stepping away from even stored secrets:
     - e.g., [AWS STS](https://aws.amazon.com/sts/), [Azure Managed Identity tokens](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview), [GCP workload identity pools](https://cloud.google.com/iam/docs/workload-identity-federation), or [OCI dynamic groups/tokens](https://www.oracle.com/cloud/free/oci-training/).

By automating secret rotation, refining access controls, documenting a secret lifecycle, hooking the store into CI/CD, and planning ephemeral credentials for new services, you build on your strong foundation of centralised secret usage to minimise risk further.

### Service accounts use short-lived identities, checked each time.

#### **How to determine if this good enough**

Your organisation has moved beyond static credentials, using ephemeral tokens or certificates derived from environment attestation (e.g., the instance or container proves it’s authorised). This can be considered "good enough" if:

1. **Near Zero Standing Privilege**

   - Non-human services only acquire valid credentials at runtime, with minimal risk of stolen or leaked credentials.

1. **Cloud-Native Security**

   - You heavily rely on [AWS instance profiles](https://aws.amazon.com/iam/features/), [Azure Managed Identities](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview), [GCP Service Account tokens](https://cloud.google.com/iam/docs/service-accounts), or [OCI dynamic groups + instance principals](https://www.oracle.com/cloud/free/oci-training/) to authenticate workloads.

1. **Robust Automation**
   - The pipeline or infrastructure automatically provisions ephemeral credentials, referencing [NCSC and NIST recommended ephemeral identity flows](https://www.ncsc.gov.uk/).

You might refine or strengthen with additional zero-trust checks, rotating ephemeral credentials frequently, or adopting code-managed identities for cross-department federations. [NCSC zero trust architecture guidance](https://www.ncsc.gov.uk/) might suggest further synergy with policy-based access.

#### **How to do better**

Below are **rapidly actionable** improvements to further secure ephemeral identity usage:

1. **Embed Short-Lived Tokens in CI/CD**

   - For instance, dev and build systems can assume roles or fetch tokens just-in-time:
     - e.g., [AWS STS for container builds](https://aws.amazon.com/sts/), [Azure DevOps with Managed Identities](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview), [GCP Cloud Build using short-lived service account tokens](https://cloud.google.com/iam/docs/service-accounts), or [OCI DevOps ephemeral tokens](https://www.oracle.com/cloud/free/oci-training/).

1. **Adopt Service Mesh or mTLS**

   - If you have container/microservice architectures, combine ephemeral identity with [Istio](https://istio.io/), [AWS App Mesh](https://aws.amazon.com/app-mesh/), [Azure Service Fabric](https://learn.microsoft.com/en-us/azure/service-fabric/service-fabric-overview), [GCP Anthos Service Mesh](https://cloud.google.com/anthos/service-mesh), or [OCI OKE with a mesh add-on](https://www.oracle.com/cloud/free/oci-training/) for strong mutual TLS:
     - Further ensures identities are validated end-to-end.

1. **Leverage Policy-as-Code**

   - e.g., [Open Policy Agent (OPA)](https://www.openpolicyagent.org/) or vendor-based policy solutions ([AWS Organizations SCP](https://aws.amazon.com/organizations/features/), [Azure Policy](https://learn.microsoft.com/en-us/azure/azure-policy/overview), [GCP Org Policy](https://cloud.google.com/resource-manager/docs/organisation-policy/overview), [OCI Security Zones](https://www.oracle.com/cloud/free/oci-training/)) for dynamic authorisation checks:
     - Grant ephemeral credentials only if a container or instance meets certain attestation criteria.

1. **Regularly Audit Attestation Mechanisms**

   - Confirm your environment attestation approach is updated and trustworthy, referencing [NCSC hardware root of trust or secure boot guidance](https://www.ncsc.gov.uk/) or [NIST hardware security modules](https://csrc.nist.gov/).

1. **Integrate with Cross-Org Federation**
   - If multi-department or local councils share workloads, ensure ephemeral identity can federate across boundaries, referencing [GOV.UK guidance on cross-government tech collaboration](https://www.gov.uk/service-manual).

By embedding ephemeral tokens into your CI/CD, adding a service mesh or mTLS, employing policy-as-code, auditing attestation rigorously, and exploring cross-organisation federation, you evolve ephemeral identity usage into a highly secure, flexible, and zero-trust-aligned solution.

### Service accounts are managed as code, with trust set up across the whole organisation.

#### **How to determine if this good enough**

At this final level, your organisation defines service identities in code (e.g., Terraform, AWS CloudFormation, Azure Bicep, GCP Deployment Manager), and enforces trust relationships through a central identity federation. This is typically "good enough" if:

1. **Full Infrastructure as Code**

   - All resource definitions, including service accounts or roles, are under version control, automatically deployed.
   - Minimises manual steps or inconsistencies.

1. **Seamless Federation**

   - Multi-department or multi-cloud environments rely on a single identity trust model—no specialised per-service or per-team trust links needed.

1. **Robust Continuous Delivery**

   - Automated pipelines update identities, rotating credentials or ephemeral tokens as part of routine releases.

1. **Holistic Governance & Observability**
   - Management sees a single source of truth for identity definitions and resource provisioning, aligning with [NCSC supply chain and zero trust recommendations](https://www.ncsc.gov.uk/) and [NIST SP 800-53 policies](https://csrc.nist.gov/).

Though advanced, you may refine ephemeral solutions further, adopt advanced zero-trust posture, or integrate multi-department synergy. Continuous improvements remain essential for evolving threat landscapes.

#### **How to do better**

Below are **rapidly actionable** ways to enhance code-managed identities with federated trust:

1. **Incorporate Real-Time Security Policies**

   - Use policy-as-code (OPA, AWS SCP, Azure Policy, GCP Org Policy, OCI Security Zones) to automatically detect and block misconfigurations in your IaC definitions.

1. **Leverage DevSecOps Workflows**

   - Integrate identity code linting, security scanning, and ephemeral token provisioning into CI/CD:
     - e.g., scanning Terraform or CloudFormation for suspicious identity references before merge.

1. **Implement Zero-Trust Microsegmentation**

   - Each microservice identity obtains ephemeral credentials from a central authority:
     - e.g., [HashiCorp Vault with dynamic secrets](https://www.hashicorp.com/products/vault), [AWS STS with short-lived tokens](https://aws.amazon.com/sts/), [Azure Managed Identities with per-service tokens](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview), [GCP Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation), or [OCI dynamic group tokens](https://www.oracle.com/cloud/free/oci-training/).

1. **Expand to Multi-Cloud/Hybrid**

   - If multiple providers or on-prem systems are used, unify identity definitions across them:
     - e.g., bridging AWS, Azure, GCP, OCI roles in the same Terraform codebase, referencing [NCSC’s multi-cloud security patterns](https://www.ncsc.gov.uk/).

1. **Regularly Validate & Audit**
   - Implement automated "drift detection" to confirm the code matches deployed reality, ensuring no manual overrides exist.
   - Tools like [Terraform Cloud](https://www.terraform.io/cloud), [AWS Config](https://aws.amazon.com/config/), [Azure Resource Graph](https://learn.microsoft.com/en-us/azure/azure-resource-graph/overview), [GCP Config Controller](https://cloud.google.com/config-connector/docs/overview), or [OCI resource search + CI/CD checks](https://www.oracle.com/cloud/free/oci-training/) can help.

By employing policy-as-code, adopting DevSecOps scanning in your pipeline, embracing zero-trust microsegmentation, extending code-based identity to multi-cloud/hybrid, and continuously auditing for drift, you perfect a code-centric model that securely and efficiently manages service identities across your entire public sector environment.

**Keep doing what you’re doing,** and consider sharing your approach to code-managed identity and federated trust in blog posts or by making pull requests to this guidance. This knowledge helps other UK public sector organisations adopt similarly robust, zero-trust-aligned solutions for non-human service account authentication.
