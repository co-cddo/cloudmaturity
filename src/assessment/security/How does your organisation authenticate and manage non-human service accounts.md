---
title: How do you manage accounts used by software, not people?
tags: security
eleventyNavigation:
  parent: security
---

### We use basic usernames and passwords.

#### **How to determine if this good enough**

In this scenario, your organisation creates standard user accounts (with a username/password) for services or scripts to authenticate within the cloud environment. It might be "good enough" if:

1. **Minimal Cloud Usage**

   - Only a few workloads exist, and they don’t require advanced identity/access management or rigorous security controls.

1. **Low-Risk Services**

   - The data or resources accessed by these service accounts do not involve sensitive citizen data or mission-critical infrastructure.

1. **No Internal Skill for Advanced Approaches**
   - The team lacks time or resources to implement more secure methods of service account authentication.

However, user/password-based credentials can be easily leaked or shared, risking unauthorised access. [NCSC’s Cloud Security Guidance](https://www.ncsc.gov.uk/collection/cloud-security) and [NIST SP 800-63 on digital identity guidelines](https://csrc.nist.gov/) often advise stronger or more automated credential management to avoid credential sprawl or reuse.

#### **How to do better**

Below are **rapidly actionable** steps to enhance service account security beyond basic user/pass credentials:

1. **Use Cloud-Native IAM for Service Accounts**

   - Instead of creating user credentials, define service accounts with least privilege:
     - [AWS IAM roles or AWS STS tokens for services](https://aws.amazon.com/iam/features/sts/)
     - [Azure Managed Identities for Azure resources](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview)
     - [GCP Service Accounts with keyless usage or short-lived credentials](https://cloud.google.com/iam/docs/service-accounts)
     - [OCI Dynamic Groups and instance principals for service-level authentication](https://www.oracle.com/cloud/free/oci-training/)

1. **Adopt a Central Secret Manager**

   - Store credentials securely in:
     - [AWS Secrets Manager or AWS SSM Parameter Store](https://aws.amazon.com/secrets-manager/)
     - [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)
     - [GCP Secret Manager](https://cloud.google.com/secret-manager)
     - [OCI Vault](https://www.oracle.com/cloud/free/oci-training/)
   - Reduces plaintext password usage, enabling future rotation.

1. **Automate Rotation**

   - If you must keep user/pass-based secrets temporarily, implement at least monthly or quarterly rotations:
     - Minimises window of exposure if leaked.

1. **Reference NCSC & NIST**

   - Follow [NCSC’s Identity and Access Management principles](https://www.ncsc.gov.uk/) or [NIST SP 800-53 Access Controls (AC-3, AC-6, etc.)](https://csrc.nist.gov/).
   - Ensures alignment with recommended identity hygiene.

1. **Plan for Future Migration**
   - Target short-lived tokens or IAM role-based approaches as soon as feasible, phasing out permanent user credentials for non-human accounts.

By employing a secure secret manager, rotating basic credentials, and gradually moving to role-based or short-lived tokens, you significantly reduce the risk associated with static user/password pairs for service accounts.

### We use API keys that don’t change often.

#### **How to determine if this good enough**

If your service accounts rely on API keys for authentication—commonly found in scripts or CI/CD jobs—this might be acceptable if:

1. **Limited Attack Surface**

   - The system is small-scale, and your keys do not provide broad or highly privileged access.

1. **Reasonable Operational Constraints**

   - You only occasionally manage these keys, storing them in private repos or basic secret storage.

1. **No Strict Security/Compliance Mandates**
   - You’re not handling data that triggers heightened security or compliance requirements beyond basic standards.

However, API keys can be compromised if not rotated or stored carefully. [NCSC’s guidance on credential hygiene](https://www.ncsc.gov.uk/) recommends more dynamic or short-lived solutions. Similarly, [NIST SP 800-63] suggests limited-lifespan credentials for improved security.

#### **How to do better**

Below are **rapidly actionable** ways to move beyond static API keys:

1. **Store Keys in a Central Secret Manager**

   - e.g., [AWS Secrets Manager or AWS SSM Parameter Store with encryption](https://aws.amazon.com/secrets-manager/), [Azure Key Vault with RBAC controls](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide), [GCP Secret Manager with IAM-based access](https://cloud.google.com/secret-manager), [OCI Vault with KMS encryption](https://www.oracle.com/cloud/free/oci-training/).
   - Avoid embedding keys in code or config files.

1. **Automate API Key Rotation**

   - Implement a rotation schedule (e.g., monthly or quarterly) or on every deployment:
     - Reduces the window if a key is leaked.

1. **Consider IAM Role or Token-Based Alternatives**

   - Where possible, use short-lived tokens or ephemeral credentials to reduce static API key usage:
     - e.g., [AWS IAM roles with STS](https://aws.amazon.com/iam/features/sts/), [Azure Managed Identities](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview), [GCP Service Accounts short-lived tokens](https://cloud.google.com/iam/docs/service-accounts), [OCI dynamic groups/tokens](https://www.oracle.com/cloud/free/oci-training/).

1. **Limit Scopes**

   - If you must rely on an API key, ensure it has the narrowest possible permissions, referencing [NCSC’s least-privilege principle](https://www.ncsc.gov.uk/).

1. **Log & Alert on Key Usage**
   - Enable logs that track API calls with each key, setting alerts for unusual activity:
     - e.g., [AWS CloudTrail](https://aws.amazon.com/cloudtrail/), [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/overview), [GCP Cloud Logging](https://cloud.google.com/logging), [OCI Audit Logs integrated with anomaly detection](https://www.oracle.com/cloud/free/oci-training/).

By centrally managing keys, rotating them automatically, transitioning to role-based or token-based credentials, enforcing least privilege, and auditing usage, you substantially reduce the security risk associated with static API keys.

### We use a central place to store secrets and sometimes rotate them.

#### **How to determine if this good enough**

Your organisation employs a central solution (like AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, or OCI Vault) to hold service account credentials. Some credentials rotate automatically, while others might still be static. This might be "good enough" if:

1. **Enhanced Security Posture**

   - You have significantly reduced the chance of plain-text credentials being lost or shared in code repos.

1. **Operational Efficiency**

   - Teams no longer manage credentials ad hoc. The secret store offers a single source for retrieving keys, tokens, or passwords.

1. **Some Automated Rotation**
   - Certain credentials—like RDS, database, or particular account keys—rotate on a schedule, improving security.

To further strengthen security, you could expand rotation across all credentials, adopt advanced ephemeral tokens, or integrate mutual TLS. [NCSC’s guidance on secrets management and zero-trust approaches](https://www.ncsc.gov.uk/) supports such expansions.

#### **How to do better**

Below are **rapidly actionable** ways to refine a centralised secret store with partial rotation:

1. **Extend Rotation to All or Most Credentials**

   - If some are still static, define a plan for each credential’s rotation frequency:
     - e.g., monthly or upon every production deployment.

1. **Build Automated Pipelines**

   - Integrate secret retrieval or rotation scripts into your CI/CD:
     - e.g., [AWS CodePipeline retrieving from Secrets Manager](https://aws.amazon.com/codepipeline/), [Azure DevOps tasks pulling from Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/key-vault-overview), [GCP Cloud Build with Secret Manager](https://cloud.google.com/build/docs/container-scanning), [OCI DevOps pipeline with Vault integration](https://www.oracle.com/cloud/free/oci-training/).

1. **Enforce Access Policies**

   - Use [AWS IAM policies](https://aws.amazon.com/iam/features/), [Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview), [GCP IAM](https://cloud.google.com/iam/docs/overview), [OCI compartments](https://www.oracle.com/cloud/free/oci-training/) to strictly control who can read, update, or rotate secrets.
   - Reference [NCSC’s least-privilege principle for secret operations](https://www.ncsc.gov.uk/).

1. **Combine with Role-Based Authentication**

   - Shift away from credential-based if possible, using ephemeral roles or instance-based authentication for certain services:
     - e.g., [AWS STS assume-role approach](https://aws.amazon.com/iam/features/sts/), [Azure Managed Identities](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview), [GCP service account short-lived tokens](https://cloud.google.com/iam/docs/service-accounts), [OCI dynamic groups/tokens](https://www.oracle.com/cloud/free/oci-training/).

1. **Monitor for Stale or Unused Secrets**
   - Regularly check your secret store for credentials not accessed in a while or older than a certain rotation threshold:
     - helps avoid accumulating outdated secrets.

By expanding automated rotation, integrating secret retrieval into pipelines, enforcing tight access controls, adopting role-based methods for new services, and cleaning stale secrets, you further strengthen your centralised secret store approach for secure, efficient credential management.

### We use certificates (mutual TLS) for secure connections.

#### **How to determine if this good enough**

Your organisation deploys mutual TLS (mTLS)—each service has a certificate, and the server also presents a certificate to the client, ensuring bidirectional trust. This may be "good enough" if:

1. **Secure End-to-End**

   - Services handle particularly sensitive data (e.g., health records, citizen data) requiring robust authentication.

1. **Compliance with Zero-Trust or Strict Policies**

   - mTLS aligns with [NCSC zero-trust architecture principles](https://www.ncsc.gov.uk/) and [NIST SP 800-207 zero trust frameworks](https://csrc.nist.gov/).

1. **Operational Maturity**
   - You maintain a solid PKI or certificate authority infrastructure, rotating and revoking certificates as needed.

However, implementing mTLS can be complex, requiring thorough certificate lifecycle management and robust observability. You might refine usage by embedding short-lived, dynamic certificates or adopting service mesh solutions that automate mTLS.

#### **How to do better**

Below are **rapidly actionable** ways to improve your mTLS-based authentication approach:

1. **Short-Lived Certificates**

   - Automate certificate issuance and renewal:
     - e.g., [AWS Private CA with automated renewal](https://aws.amazon.com/privateca/), [Azure Key Vault certificates](https://learn.microsoft.com/en-us/azure/key-vault/certificates/about-certificates), [GCP Certificate Authority Service](https://cloud.google.com/certificate-authority-service), [OCI Certificates service](https://www.oracle.com/cloud/free/oci-training/).
   - Minimises risk if a certificate is compromised.

1. **Adopt a Service Mesh**

   - If using microservices in Kubernetes, incorporate [Istio, Linkerd, or AWS App Mesh, Azure Service Mesh, GCP Anthos Service Mesh, OCI OKE integrated mesh] to handle mTLS automatically:
     - Enforces consistent policies across services.

1. **Implement Strict Certificate Policies**

   - E.g., no wildcard certs for internal services, clear naming or SAN usage, referencing [NCSC certificate issuance best practices](https://www.ncsc.gov.uk/).

1. **Monitor for Expiry and Potential Compromises**

   - Track certificate expiry dates, set alerts well in advance.
   - Log all handshake errors in [AWS CloudWatch](https://aws.amazon.com/cloudwatch/), [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/overview), [GCP Logging](https://cloud.google.com/logging), [OCI Logging](https://www.oracle.com/cloud/free/oci-training/) to detect potential mismatches or malicious attempts.

1. **Combine with IAM for Additional Controls**
   - For advanced zero-trust, complement mTLS with role-based or token-based checks:
     - e.g., verifying principal claims in addition to cryptographic identities.

By employing short-lived certs, possibly using a service mesh, establishing strict certificate policies, continuously monitoring usage, and optionally layering further IAM or token checks, you maximise the security benefits of mTLS for your service accounts.

### We use short-lived, strongly checked identities that change for each use.

#### **How to determine if this good enough**

Your approach for non-human accounts employs ephemeral tokens or federated identity solutions—limiting each credential’s lifespan and ensuring each request is securely verified. You might see it "good enough" if:

1. **Zero Standing Privileges**

   - No permanent credentials exist. Each service obtains a short-lived token or identity just before usage.

1. **Granular, Real-Time Validation**

   - Policies and claims are checked with each or frequent requests, reflecting advanced zero-trust models recommended by [NCSC or NIST zero-trust frameworks](https://csrc.nist.gov/).

1. **High Assurance of Security**
   - The risk of stolen or misused credentials is drastically reduced, as tokens expire rapidly.

Though highly advanced, you might further optimise performance, adopt specialised identity standards (e.g., OAuth2, JWT-based systems), or integrate with multi-cloud identity solutions. [NCSC’s and NIST’s advanced DevSecOps suggestions](https://www.ncsc.gov.uk/) encourage ongoing improvement in ephemeral, short-lived identity usage.

#### **How to do better**

Even at this top level, below are **rapidly actionable** refinements:

1. **Leverage Vendor Identity Federation Tools**

   - e.g., [AWS IAM roles with Web Identity Federation or AWS Secure Token Service, Azure AD token issuance, GCP IAM federation, OCI Identity Federation with IDCS], ensuring minimal friction for ephemeral tokens.

1. **Integrate Policy-as-Code**

   - Tools like [Open Policy Agent or vendor policy engines (AWS SCP, Azure Policy, GCP Organisation Policy, OCI Security Zones)] can dynamically evaluate each identity request in real time.

1. **Adopt Service Mesh with Dynamic Identity**

   - In container or microservice architectures, pair ephemeral identity with a service mesh that injects secure tokens automatically.

1. **Continuously Audit and Analyze Logs**

   - Check usage patterns: any suspicious repeated token fetch or abnormal expansions of privileges.
   - Tools like [AWS CloudWatch Logs](https://aws.amazon.com/cloudwatch/), [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/overview), [GCP Logging](https://cloud.google.com/logging), [OCI Monitoring + ML-based anomaly detection](https://www.oracle.com/cloud/free/oci-training/) can highlight anomalies.

1. **Cross-Government Federated Services**
   - If multiple agencies need to collaborate, explore cross-government single sign-on or identity federation solutions that comply with [GOV.UK’s identity and digital standards](https://www.gov.uk/service-manual).

By fully harnessing vendor identity federation, embedding policy-as-code, integrating ephemeral identity usage in service meshes, analyzing usage logs for anomalies, and considering cross-government identity solutions, you refine an already highly secure and agile environment for non-human service accounts aligned with best-in-class public sector practices.

**Keep doing what you’re doing,** and consider publishing blogs or opening pull requests to this guidance about your success in elevating non-human identity security in cloud environments. Sharing your experiences helps other UK public sector organisations adopt robust credential management aligned with the highest security standards.
