---
title: How does your organization handle the creation and storage of build artifacts?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Ad-Hoc or Non-Existent Artifact Management:** Build artifacts are not systematically managed; code and configurations are often edited live on servers.

#### **How to determine if this good enough**

In this stage, your organization lacks formal processes to create or store build artifacts. You might find this approach "good enough" if:

1. **Limited or Non-Critical Services**

   - You run only small-scale or temporary services where changes can be handled manually, and downtime or rollback is not a major concern.

1. **Purely Experimental or Low-Sensitivity**

   - The data or systems you manage are not subject to stringent public sector regulations or sensitivity classifications (e.g., prototyping labs, dev/test sandboxes).

1. **Single-Person or Very Small Team**
   - A single staff member manages everything, so there’s minimal confusion about versions or changes.
   - The risk of accidental overwrites or lost code is recognized but considered low priority.

However, even small teams can face confusion if code is edited live on servers, making it hard to replicate environments or roll back changes. For most UK public sector needs—especially with compliance or audit pressures—lack of artifact management eventually becomes problematic.

#### **How to do better**

Below are **rapidly actionable** steps to move away from ad-hoc methods:

1. **Introduce a Basic CI/CD Pipeline**

   - Even a minimal pipeline can automatically build code from a version control system:
     - [AWS CodePipeline + CodeBuild for building artifacts from your Git repo](https://TODO)
     - [Azure DevOps Pipelines or GitHub Actions for .NET/Java/Python builds, storing results in Azure Artifacts](https://TODO)
     - [GCP Cloud Build triggered on Git commits, storing images or binaries in Artifact Registry](https://TODO)
     - [OCI DevOps service to build from your source repo, storing artifacts in OCI Container or Artifact Registry](https://TODO)

1. **Ensure Everything Is in Version Control**

   - Do not edit code or configurations directly on servers. Instead:
     - [AWS CodeCommit or GitHub for storing your repositories if not already used](https://TODO)
     - [Azure Repos for central control of code and config files](https://TODO)
     - [GCP Cloud Source Repositories for a secure, integrated Git environment](https://TODO)
     - [OCI DevOps Code Repository for versioning your code within Oracle Cloud](https://TODO)

1. **Create a Shared Storage for Build Outputs**

   - Set up a simple "build artifacts" bucket or file share for your compiled binaries or container images:
     - [AWS S3 or ECR (Amazon Elastic Container Registry) for storing Docker images](https://TODO)
     - [Azure Blob Storage or Azure Container Registry for storing artifacts](https://TODO)
     - [GCP Cloud Storage or Artifact Registry for container images or Maven/NuGet packages](https://TODO)
     - [OCI Object Storage or OCI Container Registry for storing build outputs](https://TODO)

1. **Document Basic Rollback Steps**

   - At a minimum, define how to revert a server or application if a live edit breaks something:
     - Write a short rollback procedure referencing the last known working code in version control.
   - This ensures you’re not stuck with manual edits you can’t undo.

1. **Educate the Team**
   - Explain the risks of live server edits in short training sessions:
     - Potential compliance violations if changes are not auditable.
     - Difficulty diagnosing or rolling back production issues.

By adopting minimal CI/CD, storing artifacts in a shared location, and referencing everything in version control, you reduce chaos and set a foundation for more robust artifact management.

### **Environment-Specific Rebuilds:** Artifacts are rebuilt in each environment, leading to potential inconsistencies and inefficiencies.

#### **How to determine if this good enough**

In this scenario, your organization has some automation but rebuilds the software in dev, test, and production separately. You might see this as "good enough" if:

1. **Low Risk of Version Drift**

   - The codebase and dependencies rarely change, or you have a small dev team that carefully ensures each environment has identical build instructions.

1. **Limited Formality**

   - If you’re still in early stages or running small services, you might tolerate the occasional mismatch between environments.

1. **Few Dependencies**
   - If your project has very few external libraries or minimal complexity, environment-specific rebuilds don’t cause many issues.

However, environment-specific rebuilds can cause subtle differences, making debugging or compliance audits more complex—especially in the UK public sector, where consistent deployments are often required to ensure stable and secure services.

#### **How to do better**

Below are **rapidly actionable** strategies:

1. **Centralize Your Build Once**

   - Shift to a pipeline that builds the artifact once, then deploys the same artifact to dev, test, and production. For instance:
     - [AWS CodeBuild creating a single artifact stored in S3 or ECR, then CodeDeploy or ECS/EKS uses that artifact for each environment](https://TODO)
     - [Azure DevOps Pipelines creating a single artifact (e.g., .zip or container image), then multiple release stages pull that artifact from Azure Artifacts or Container Registry](https://TODO)
     - [GCP Cloud Build building a Docker image once and pushing it to Artifact Registry, then Cloud Run or GKE references the same image in different environments](https://TODO)
     - [OCI DevOps building a container or application binary once, storing it in Container Registry or Object Storage, then deploying to multiple OCI environments](https://TODO)

1. **Define a Consistent Build Container**

   - If you want complete reproducibility:
     - Use a Docker image as your build environment (e.g., pinned versions of compilers, frameworks).
     - Keep that Docker image in your artifact registry so each new build uses the same environment.

1. **Implement Version or Commit Hash Tagging**

   - Tag the artifact with a version or Git commit hash. Each environment references the same exact build (like "my-service:build-1234").
   - This eliminates guesswork about which code made it to production vs. test.

1. **Apply Simple Promotion Strategies**

   - Instead of rebuilding, you "promote" the tested artifact from dev to test to production:
     - Mark the artifact as "passed QA tests" or "passed security scan," so you have a clear chain of trust.
   - This approach improves reliability and shortens lead times.

1. **Create Basic Documentation**
   - Summarize the difference between "build once, deploy many" and "build in each environment."
   - Show management how consistent builds reduce risk and effort.

By consolidating the build process, storing a single artifact per version, and promoting that same artifact across environments, you achieve consistency and reduce the risk of environment drift.

### **Basic Artifact Storage with Version Control:** Build artifacts are stored, possibly with version control, but without strong emphasis on immutability or security measures.

#### **How to determine if this good enough**

Here, your organization has progressed to storing build artifacts in a central place, often with versioning. This can be considered "good enough" if:

1. **You Can Reproduce Past Builds**

   - You label or tag artifacts, so retrieving an older release is relatively straightforward.
   - This covers basic audit or rollback needs.

1. **Moderate Risk Tolerance**

   - You handle data or applications that don’t require the highest security or immutability (e.g., citizen-facing website with low data sensitivity).
   - Rarely face formal audits demanding cryptographic integrity checks.

1. **No Enforcement of Immutability**
   - Your system might allow artifact overwrites or deletions, but your teams rarely abuse this.
   - The risk of malicious or accidental tampering is minimal under current conditions.

While this is a decent midpoint, the lack of immutability or strong security measures can pose challenges if you must prove the authenticity or integrity of a specific artifact, especially in regulated public sector contexts.

#### **How to do better**

Here are **rapidly actionable** enhancements:

1. **Adopt Write-Once-Read-Many (WORM) or Immutable Storage**

   - Many cloud vendors offer immutable or tamper-resistant storage:
     - [AWS S3 Object Lock for write-once-read-many compliance, or AWS CodeArtifact with strong immutability settings](https://TODO)
     - [Azure Blob Storage immutable policies, or Azure Container Registry with "content trust"/immutable tags](https://TODO)
     - [GCP Bucket Lock or using Artifact Registry with policy preventing image overwrites](https://TODO)
     - [OCI Object Storage retention lock or enabling "write-once" compartments for immutable artifact storage](https://TODO)

1. **Set Up Access Controls and Auditing**

   - Restrict who can modify or delete artifacts. Log all changes:
     - [AWS IAM + AWS CloudTrail logs for artifact actions in S3/ECR/CodeArtifact](https://TODO)
     - [Azure RBAC for container registries, Storage accounts, plus Activity Log for changes](https://TODO)
     - [GCP IAM roles restricting write/deletion in Artifact Registry or Cloud Storage, with Audit Logs capturing actions](https://TODO)
     - [OCI IAM policy for container registry and object storage, plus Audit service for retention of event logs](https://TODO)

1. **Enforce In-House or Managed Build Numbering Standards**

   - Decide how you version artifacts (e.g., semver, build number, git commit) to ensure consistent tracking across repos.
   - This practice reduces confusion when dev/test teams talk about a specific build.

1. **Extend to Container Images or Package Repositories**

   - If you produce Docker images or library packages (NuGet, npm, etc.), store them in:
     - [AWS ECR for Docker images, or AWS CodeArtifact for package dependencies](https://TODO)
     - [Azure Container Registry or Azure Artifacts for npm/Maven/NuGet feeds](https://TODO)
     - [GCP Artifact Registry for container images and language packages](https://TODO)
     - [OCI Container Registry or Artifacts for Docker images, Helms charts, language packages](https://TODO)

1. **Introduce Minimal Integrity Checks**
   - Even if you don’t have full cryptographic signatures, consider generating checksums (e.g., SHA256) for each artifact to detect accidental corruption.

By using immutable storage, controlling access, and standardizing versioning, you strengthen artifact reliability and traceability without overwhelming your current processes.

### **Pinned Dependencies with Cryptographic Verification:** All dependencies in build artifacts are tightly pinned to specific versions, with cryptographic signing or hashes to ensure integrity.

#### **How to determine if this good enough**

Here, your build pipelines ensure that not only your application code but also every library or dependency is pinned to a specific version, and you verify these via cryptographic means. You might consider this approach "good enough" if:

1. **High Confidence in Artifact Integrity**

   - You can guarantee the code and libraries used in staging match those in production.
   - Security incidents involving compromised packages are less likely to slip through.

1. **Robust Supply Chain Security**

   - Attackers or misconfigured servers have a harder time injecting malicious code or outdated dependencies.
   - This is crucial for UK public sector services handling personal or sensitive data.

1. **Comprehensive Logging**

   - You track which pinned versions (e.g., `libraryA@v2.3.1`) were used for each build.
   - This improves forensic investigations if a vulnerability is discovered later.

1. **Controlled Complexity**
   - Pinning and verifying dependencies might slow down upgrades or require more DevOps effort, but your teams accept it as a valuable security measure.

If you rely on pinned dependencies and cryptographic verification, you’re covering a big portion of software supply chain risks. However, you might still enhance final artifact immutability or align with advanced threat detection in your build process.

#### **How to do better**

Below are **rapidly actionable** improvements:

1. **Leverage Vendor Tools for Dependency Scanning**

   - Integrate automatic scanning to confirm pinned versions match known secure states:
     - [AWS CodeGuru Security or Amazon Inspector scanning Docker images/dependencies in your builds](https://TODO)
     - [Azure DevOps Dependency Checks or GitHub Dependabot integrated with Azure repos/pipelines](https://TODO)
     - [GCP Artifact Analysis for container images, plus OS package vulnerability scanning](https://TODO)
     - [OCI Vulnerability Scanning Service for images in OCI Container Registry or OS packages in compute instances](https://TODO)

1. **Sign Your Artifacts**

   - Use code signing or digital signatures:
     - [AWS Signer for code signing your Lambda code or Container images, verifying in the pipeline](https://TODO)
     - [Azure Key Vault-based sign and verify processes for container images or package artifacts](https://TODO)
     - [GCP Binary Authorization for container images, ensuring only signed/trusted images are deployed to GKE or Cloud Run](https://TODO)
     - [OCI KMS for managing keys used to sign your build artifacts or images, with a policy to only deploy signed objects](https://TODO)

1. **Adopt a "Bill of Materials" (SBOM)**

   - Generate a Software Bill of Materials for each build, listing all dependencies and their checksums:
     - This clarifies exactly which libraries or frameworks were used, crucial for quick vulnerability response.

1. **Enforce Minimal Versions or Patch Levels**

   - If a library has a known CVE, your pipeline rejects builds that rely on that version.
   - This ensures you don’t accidentally revert to vulnerable dependencies.

1. **Combine with Immutable Storage**
   - If you haven’t already, store these pinned, verified artifacts in a write-once or strongly controlled location.
   - This ensures no tampering after you sign or hash them.

By scanning for vulnerabilities, signing artifacts, using SBOMs, and enforcing patch-level policies, you secure your supply chain and provide strong assurance of artifact integrity.

### **Immutable, Signed Artifacts with Audit-Ready Storage:** Immutable build artifacts are created and cryptographically signed, especially for production. All artifacts are stored in immutable storage for a defined period for audit purposes, with a clear process to recreate environments for thorough audits or criminal investigations.

#### **How to determine if this good enough**

At this final stage, your organization has robust, end-to-end artifact management. You consider it "good enough" if:

1. **Full Immutability and Cryptographic Assurance**

   - Every production artifact is sealed (signed), ensuring no one can alter it post-build.
   - You store these artifacts in a tamper-proof or strongly controlled environment (e.g., WORM storage).

1. **Long-Term Retention for Audits**

   - You can quickly produce the exact code, libraries, and container images used in production months or years ago, aligning with public sector mandates (e.g., 2+ years or more if relevant).

1. **Ability to Recreate Environments**

   - If an audit or legal inquiry arises, you can spin up the environment from these artifacts to demonstrate what was running at any point in time.

1. **Compliance with Regulatory/Criminal Investigation Standards**
   - If part of your remit includes potential criminal investigations (e.g., digital forensics for certain public sector services), the chain of custody for your artifacts is guaranteed.

If you meet these conditions, you are at a high maturity level, ensuring minimal risk of supply chain attacks, compliance failures, or untraceable changes. Periodic revalidations keep your process evolving alongside new threats or technologies.

#### **How to do better**

Even at this pinnacle, there are **actionable** ways to refine:

1. **Automate Artifact Verification on Deployment**

   - E.g., [AWS CloudFormation custom resource or Lambda to verify the artifact signature before launching resources in production](https://TODO)
   - [Azure Pipelines gating checks that confirm signature validity against Azure Key Vault or a signing certificate store](https://TODO)
   - [GCP Binary Authorization requiring attestation for container images in GKE or Cloud Run, blocking unauthorized images](https://TODO)
   - [OCI custom deployment pipeline step verifying signature or checksum before applying Terraform or container updates](https://TODO)

1. **Embed Forensic Analysis Hooks**

   - Provide metadata in logs (e.g., commit hashes, SBOM references) so if an incident occurs, security teams can quickly retrieve the relevant artifact.
   - This reduces incident response time.

1. **Regularly Test Restoration Scenarios**

   - Conduct a "forensic reenactment" once or twice a year:
     - Attempt to reconstruct an environment from your stored artifacts.
     - Check if you can seamlessly spin up an older version with pinned dependencies and configurations.
   - This ensures the system works under real conditions, not just theory.

1. **Apply Multi-Factor Access Control**

   - Protect your signing keys or artifact storage with strong MFA and hardware security modules (HSMs) if needed:
     - [AWS CloudHSM or KMS with dedicated key policies for artifact signing](https://TODO)
     - [Azure Key Vault HSM or Managed HSM for storing signing keys with strict RBAC controls](https://TODO)
     - [GCP Cloud KMS HSM-protected keys with IAM fine-grained access for signing operations](https://TODO)
     - [OCI Vault with dedicated HSM-based key management for signing and encryption tasks](https://TODO)

1. **Participate in Industry or Government Communities**
   - As you lead in artifact management maturity, share best practices with other public sector bodies or cross-governmental security groups.
   - Encourage consistent auditing and artifact immutability standards across local councils, departmental agencies, or NHS trusts.

By verifying artifacts on each deployment, maintaining robust forensic readiness, testing restoration scenarios, and securing signing keys with HSMs or advanced controls, you perpetually refine your processes. This ensures unwavering trust and compliance in your build pipeline, even under rigorous UK public sector scrutiny.

**Keep doing what you’re doing,** and consider sharing case studies or best-practice guides. Submit pull requests to this guidance or other UK public sector repositories to help others learn from your advanced artifact management journey.
