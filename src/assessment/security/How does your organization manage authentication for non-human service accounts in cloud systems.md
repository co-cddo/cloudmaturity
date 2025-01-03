---
title: How does your organization manage authentication for non-human service accounts in cloud systems?
tags: security
eleventyNavigation:
  parent: security
---

### **Human-like Accounts for Services:** Non-human service accounts are set up similarly to human accounts, with long-lived credentials that are often shared.

#### **How to determine if this good enough**

Your organization may treat service accounts as if they were human users, granting them standard usernames and passwords (or persistent credentials). This might be acceptable if:

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
     - [AWS IAM roles for EC2 or ECS tasks, Azure Managed Identities, GCP Service Accounts, OCI Dynamic Groups](https://TODO)
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

### **Locally Managed Long-Lived API Keys:** Long-lived API keys are used for service accounts, with management handled locally at the project or program level.

#### **How to determine if this good enough**

In this setup, non-human accounts are assigned API keys (often static), managed by the project team. You might see it as "good enough" if:

1. **Limited Cross-Project Needs**

   - Each project operates in isolation, with minimal external dependencies or shared services.

1. **Few Cloud Services**

   - The environment is small, so local management doesn’t cause major confusion or risk.

1. **Low Security/Compliance Requirements**
   - No strong obligations for rotating or logging key usage, or a short-term approach that hasn’t caught up with best practices yet.

Still, static API keys managed locally can easily be lost, shared, or remain in code, risking leaks. [NCSC supply chain or credential security guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-63 on digital identity credentials](https://csrc.nist.gov/) advise more dynamic, centralized strategies.

#### **How to do better**

Below are **rapidly actionable** steps to centralize and secure long-lived API keys:

1. **Move Keys to a Central Secret Store**

   - e.g., [AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, OCI Vault](https://TODO) for storing all API keys.
   - Minimizes local sprawl and fosters consistent security controls.

1. **Enforce Rotation Policies**

   - Implement at least quarterly or monthly rotation for API keys to reduce exposure window if compromised:
     - Possibly automate via [AWS Lambda, Azure Functions, GCP Cloud Functions, or OCI functions](https://TODO).

1. **Use Tooling for Local Key Discovery**

   - If keys might be in code repos, scan with open-source or vendor tools:
     - e.g., [Trufflehog, Gitleaks, AWS CodeGuru Security, or Azure DevOps Security scanning](https://TODO).
   - Alert if secrets are committed to version control.

1. **Document a Single Organizational Policy**

   - State that "All API keys must be stored in central secret management, with at least every X months rotation."
   - Reference [NIST secret management or NCSC credential rotation best practices](https://www.ncsc.gov.uk/).

1. **Transition to Role-Based or Short-Lived Tokens**
   - While central secret storage helps, plan a future move to ephemeral tokens or IAM roles:
     - Reduces reliance on static keys altogether.

By centralizing key storage, rotating keys automatically, scanning for accidental exposures, formalizing a policy, and starting to shift away from static keys, you significantly enhance the security of locally managed long-lived credentials.

### **Centralized Secret Store for Service Accounts:** A centralized repository or secret store is in place for all non-human service accounts, and its use is mandatory across the organization.

#### **How to determine if this good enough**

Your organization mandates storing service account credentials in a secure, central location (e.g., an enterprise secret store). This might be "good enough" if:

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

Below are **rapidly actionable** ways to strengthen your centralized secret store approach:

1. **Automate Secret Rotation**

   - For each stored secret (e.g., a database password, a service’s API key), implement rotation:
     - [AWS Secrets Manager rotation, Azure Key Vault rotation, GCP Secret Manager rotation, or OCI Vault rotation features](https://TODO).

1. **Incorporate Access Control & Monitoring**

   - Strictly limit who can retrieve or update each secret, using fine-grained IAM or RBAC:
     - e.g., [AWS IAM policies, Azure Key Vault RBAC, GCP Secret Manager IAM, OCI compartments/policies](https://TODO).
   - Monitor logs for unusual access patterns.

1. **Reference a "Secret Lifecycle" Document**

   - Outline creation, usage, rotation, and revocation steps for each type of secret.
   - Align with [NIST recommended credential lifecycles or NCSC guidance on secret hygiene](https://www.ncsc.gov.uk/).

1. **Integrate into CI/CD**

   - Ensure automation pipelines fetch credentials from the secret store at build or deploy time, never storing them in code.

1. **Begin Adopting Ephemeral Credentials**
   - For new services, consider short-lived tokens or dynamic role assumption, stepping away from even stored secrets:
     - e.g., [AWS STS, Azure Managed Identity tokens, GCP workload identity pools, OCI dynamic groups/tokens](https://TODO).

By automating secret rotation, refining access controls, documenting a secret lifecycle, hooking the store into CI/CD, and planning ephemeral credentials for new services, you build on your strong foundation of centralized secret usage to minimize risk further.

### **Ephemeral Identities with Attestation:** Service accounts do not use long-lived secrets; instead, identity is established dynamically based on attestation mechanisms.

#### **How to determine if this good enough**

Your organization has moved beyond static credentials, using ephemeral tokens or certificates derived from environment attestation (e.g., the instance or container proves it’s authorized). This can be considered "good enough" if:

1. **Near Zero Standing Privilege**

   - Non-human services only acquire valid credentials at runtime, with minimal risk of stolen or leaked credentials.

1. **Cloud-Native Security**

   - You heavily rely on [AWS instance profiles, Azure Managed Identities, GCP Service Account tokens, OCI dynamic groups + instance principals](https://TODO) to authenticate workloads.

1. **Robust Automation**
   - The pipeline or infrastructure automatically provisions ephemeral credentials, referencing [NCSC and NIST recommended ephemeral identity flows](https://www.ncsc.gov.uk/).

You might refine or strengthen with additional zero-trust checks, rotating ephemeral credentials frequently, or adopting code-managed identities for cross-department federations. [NCSC zero trust architecture guidance](https://www.ncsc.gov.uk/) might suggest further synergy with policy-based access.

#### **How to do better**

Below are **rapidly actionable** improvements to further secure ephemeral identity usage:

1. **Embed Short-Lived Tokens in CI/CD**

   - For instance, dev and build systems can assume roles or fetch tokens just-in-time:
     - e.g., [AWS STS for container builds, Azure DevOps with Managed Identities, GCP Cloud Build using short-lived service account tokens, OCI DevOps ephemeral tokens](https://TODO).

1. **Adopt Service Mesh or mTLS**

   - If you have container/microservice architectures, combine ephemeral identity with [Istio, AWS App Mesh, Azure Service Fabric, GCP Anthos Service Mesh, OCI OKE with a mesh add-on](https://TODO) for strong mutual TLS:
     - Further ensures identities are validated end-to-end.

1. **Leverage Policy-as-Code**

   - e.g., [Open Policy Agent (OPA) or vendor-based policy solutions (AWS Organizations SCP, Azure Policy, GCP Org Policy, OCI Security Zones)](https://TODO) for dynamic authorization checks:
     - Grant ephemeral credentials only if a container or instance meets certain attestation criteria.

1. **Regularly Audit Attestation Mechanisms**

   - Confirm your environment attestation approach is updated and trustworthy, referencing [NCSC hardware root of trust or secure boot guidance](https://www.ncsc.gov.uk/) or [NIST hardware security modules](https://csrc.nist.gov/).

1. **Integrate with Cross-Org Federation**
   - If multi-department or local councils share workloads, ensure ephemeral identity can federate across boundaries, referencing [GOV.UK guidance on cross-government tech collaboration](https://www.gov.uk/service-manual).

By embedding ephemeral tokens into your CI/CD, adding a service mesh or mTLS, employing policy-as-code, auditing attestation rigorously, and exploring cross-organization federation, you evolve ephemeral identity usage into a highly secure, flexible, and zero-trust-aligned solution.

### **Code-Managed Identities with Federated Trust:** Identities for non-human services are managed as part of the infrastructure-as-code paradigm, allowing seamless federation across the organization without needing point-to-point trust relationships.

#### **How to determine if this good enough**

At this final level, your organization defines service identities in code (e.g., Terraform, AWS CloudFormation, Azure Bicep, GCP Deployment Manager), and enforces trust relationships through a central identity federation. This is typically "good enough" if:

1. **Full Infrastructure as Code**

   - All resource definitions, including service accounts or roles, are under version control, automatically deployed.
   - Minimizes manual steps or inconsistencies.

1. **Seamless Federation**

   - Multi-department or multi-cloud environments rely on a single identity trust model—no specialized per-service or per-team trust links needed.

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
     - e.g., [HashiCorp Vault with dynamic secrets, AWS STS with short-lived tokens, Azure Managed Identities with per-service tokens, GCP Workload Identity Federation, OCI dynamic group tokens](https://TODO).

1. **Expand to Multi-Cloud/Hybrid**

   - If multiple providers or on-prem systems are used, unify identity definitions across them:
     - e.g., bridging AWS, Azure, GCP, OCI roles in the same Terraform codebase, referencing [NCSC’s multi-cloud security patterns](https://www.ncsc.gov.uk/).

1. **Regularly Validate & Audit**
   - Implement automated "drift detection" to confirm the code matches deployed reality, ensuring no manual overrides exist.
   - Tools like [Terraform Cloud, AWS Config, Azure Resource Graph, GCP Config Controller, OCI resource search + CI/CD checks](https://TODO) can help.

By employing policy-as-code, adopting DevSecOps scanning in your pipeline, embracing zero-trust microsegmentation, extending code-based identity to multi-cloud/hybrid, and continuously auditing for drift, you perfect a code-centric model that securely and efficiently manages service identities across your entire public sector environment.

**Keep doing what you’re doing,** and consider sharing your approach to code-managed identity and federated trust in blog posts or by making pull requests to this guidance. This knowledge helps other UK public sector organizations adopt similarly robust, zero-trust-aligned solutions for non-human service account authentication.
