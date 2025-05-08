---
title: How does your organisation handle the creation and storage of build artifacts?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Ad-Hoc or Non-Existent Artifact Management:** Build artifacts are not systematically managed; code and configurations are often edited live on servers.

#### **How to determine if this good enough**

In this stage, your organisation lacks formal processes to create or store build artifacts. You might find this approach "good enough" if:

1. **Limited or Non-Critical Services**

   - You run only small-scale or temporary services where changes can be handled manually, and downtime or rollback is not a major concern.

1. **Purely Experimental or Low-Sensitivity**

   - The data or systems you manage are not subject to stringent public sector regulations or sensitivity classifications (e.g., prototyping labs, dev/test sandboxes).

1. **Single-Person or Very Small Team**
   - A single staff member manages everything, so there’s minimal confusion about versions or changes.
   - The risk of accidental overwrites or lost code is recognised but considered low priority.

However, even small teams can face confusion if code is edited live on servers, making it hard to replicate environments or roll back changes. For most UK public sector needs—especially with compliance or audit pressures—lack of artifact management eventually becomes problematic.

#### **How to do better**

Below are **rapidly actionable** steps to move away from ad-hoc methods:

1. **Introduce a Basic CI/CD Pipeline**

   - Even a minimal pipeline can automatically build code from a version control system:
     - [AWS CodePipeline + CodeBuild for building artifacts from your Git repo](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github.html)
     - [Azure DevOps Pipelines or GitHub Actions for .NET/Java/Python builds, storing results in Azure Artifacts](https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-pipelines&tabs=yaml)
     - [GCP Cloud Build triggered on Git commits, storing images or binaries in Artifact Registry](https://cloud.google.com/build/docs)
     - [OCI DevOps service to build from your source repo, storing artifacts in OCI Container or Artifact Registry](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/overview.htm)
     - [IBM Cloud Continuous Delivery](https://cloud.ibm.com/docs/ContinuousDelivery)

1. **Ensure Everything Is in Version Control**

   - Do not edit code or configurations directly on servers. Instead:
     - [AWS CodeCommit or GitHub for storing your repositories if not already used](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html)
     - [Azure Repos for central control of code and config files](https://learn.microsoft.com/en-us/azure/devops/repos/?view=azure-devops)
     - [GCP Cloud Source Repositories for a secure, integrated Git environment](https://cloud.google.com/source-repositories)
     - [OCI DevOps Code Repository for versioning your code within Oracle Cloud](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/coderepository.htm)
     - [IBM Cloud Source Code Repository](https://cloud.ibm.com/docs/codeengine?topic=codeengine-fun-create-repo)

1. **Create a Shared Storage for Build Outputs**

   - Set up a simple "build artifacts" bucket or file share for your compiled binaries or container images:
     - [AWS S3 or ECR (Amazon Elastic Container Registry) for storing Docker images](https://docs.aws.amazon.com/ecr/latest/userguide/what-is-ecr.html)
     - [Azure Blob Storage or Azure Container Registry for storing artifacts](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-intro)
     - [GCP Cloud Storage or Artifact Registry for container images or Maven/NuGet packages](https://cloud.google.com/artifact-registry/docs)
     - [OCI Object Storage or OCI Container Registry for storing build outputs](https://docs.oracle.com/en-us/iaas/Content/Registry/Concepts/overview.htm)
     - [IBM Cloud - Cloud Object Storage](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage)

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

In this scenario, your organisation has some automation but rebuilds the software in dev, test, and production separately. You might see this as "good enough" if:

1. **Low Risk of Version Drift**

   - The codebase and dependencies rarely change, or you have a small dev team that carefully ensures each environment has identical build instructions.

1. **Limited Formality**

   - If you’re still in early stages or running small services, you might tolerate the occasional mismatch between environments.

1. **Few Dependencies**
   - If your project has very few external libraries or minimal complexity, environment-specific rebuilds don’t cause many issues.

However, environment-specific rebuilds can cause subtle differences, making debugging or compliance audits more complex—especially in the UK public sector, where consistent deployments are often required to ensure stable and secure services.

#### **How to do better**

Below are **rapidly actionable** strategies:

1. **Centralise Your Build Once**

   - Shift to a pipeline that builds the artifact once, then deploys the same artifact to dev, test, and production. For instance:
     - [AWS CodeBuild creating a single artifact stored in S3 or ECR, then CodeDeploy or ECS/EKS uses that artifact for each environment](https://aws.amazon.com/blogs/devops/ci-cd-on-amazon-eks-using-aws-codecommit-aws-codepipeline-aws-codebuild-and-fluxcd/)
     - [Azure DevOps Pipelines creating a single artifact (e.g., .zip or container image), then multiple release stages pull that artifact from Azure Artifacts or Container Registry](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/environments?view=azure-devops)
     - [GCP Cloud Build building a Docker image once and pushing it to Artifact Registry, then Cloud Run or GKE references the same image in different environments](https://cloud.google.com/build/docs/deploying-builds/deploy-gke)
     - [OCI DevOps building a container or application binary once, storing it in Container Registry or Object Storage, then deploying to multiple OCI environments](https://docs.oracle.com/en/solutions/cicd-pipeline-oci-devops-instances/index.html)

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
   - Summarise the difference between "build once, deploy many" and "build in each environment."
   - Show management how consistent builds reduce risk and effort.

By consolidating the build process, storing a single artifact per version, and promoting that same artifact across environments, you achieve consistency and reduce the risk of environment drift.

### **Basic Artifact Storage with Version Control:** Build artifacts are stored, possibly with version control, but without strong emphasis on immutability or security measures.

#### **How to determine if this good enough**

Here, your organisation has progressed to storing build artifacts in a central place, often with versioning. This can be considered "good enough" if:

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
     - [AWS S3 Object Lock for write-once-read-many compliance, or AWS CodeArtifact with strong immutability settings](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)
     - [Azure Blob Storage immutable policies, or Azure Container Registry with "content trust"/immutable tags](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview)
     - [GCP Bucket Lock or using Artifact Registry with policy preventing image overwrites](https://cloud.google.com/storage/docs/object-versioning)
     - [OCI Object Storage retention lock or enabling "write-once" compartments for immutable artifact storage](https://docs.oracle.com/en-us/iaas/Content/Storage/Concepts/objectstorageoverview.htm)

1. **Set Up Access Controls and Auditing**

   - Restrict who can modify or delete artifacts. Log all changes:
     - [AWS IAM + AWS CloudTrail logs for artifact actions in S3/ECR/CodeArtifact](https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html)
     - [Azure RBAC for container registries, Storage accounts, plus Activity Log for changes](https://learn.microsoft.com/en-us/azure/role-based-access-control/change-history-report)
     - [GCP IAM roles restricting write/deletion in Artifact Registry or Cloud Storage, with Audit Logs capturing actions](https://cloud.google.com/logging/docs/audit)
     - [OCI IAM policy for container registry and object storage, plus Audit service for retention of event logs](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policygetstarted.htm)

1. **Enforce In-House or Managed Build Numbering Standards**

   - Decide how you version artifacts (e.g., semver, build number, git commit) to ensure consistent tracking across repos.
   - This practice reduces confusion when dev/test teams talk about a specific build.

1. **Extend to Container Images or Package Repositories**

   - If you produce Docker images or library packages (NuGet, npm, etc.), store them in:
     - [AWS ECR for Docker images, or AWS CodeArtifact for package dependencies](https://aws.amazon.com/blogs/containers/oci-artifact-support-in-amazon-ecr/)
     - [Azure Container Registry or Azure Artifacts for npm/Maven/NuGet feeds](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-concepts)
     - [GCP Artifact Registry for container images and language packages](https://cloud.google.com/artifact-registry)
     - [OCI Container Registry or Artifacts for Docker images, Helm charts, language packages](https://docs.oracle.com/en-us/iaas/Content/Registry/Concepts/overview.htm)

1. **Introduce Minimal Integrity Checks**
   - Even if you don’t have full cryptographic signatures, consider generating checksums (e.g., SHA256) for each artifact to detect accidental corruption.

By using immutable storage, controlling access, and standardising versioning, you strengthen artifact reliability and traceability without overwhelming your current processes.

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
     - [AWS CodeGuru Security or Amazon Inspector scanning Docker images/dependencies in your builds](https://docs.aws.amazon.com/codeguru/latest/security-ug/start-scanning.html)
     - [Azure DevOps Dependency Checks or GitHub Dependabot integrated with Azure repos/pipelines](https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning?view=azure-devops)
     - [GCP Artifact Analysis for container images, plus OS package vulnerability scanning](https://cloud.google.com/container-analysis)
     - [OCI Vulnerability Scanning Service for images in OCI Container Registry or OS packages in compute instances](https://docs.oracle.com/en-us/iaas/Content/Registry/Tasks/usingvulnerabilityscanning.htm)

1. **Sign Your Artifacts**

   - Use code signing or digital signatures:
     - [AWS Signer for code signing your Lambda code or container images, verifying in the pipeline](https://aws.amazon.com/blogs/containers/signing-and-validating-oci-artifacts-with-aws-signer/)
     - [Azure Key Vault-based sign and verify processes for container images or package artifacts](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-sign-build-push)
     - [GCP Binary Authorization for container images, ensuring only signed/trusted images are deployed to GKE or Cloud Run](https://cloud.google.com/binary-authorization)
     - [OCI KMS for managing keys used to sign your build artifacts or images, with a policy to only deploy signed objects](https://docs.oracle.com/en-us/iaas/Content/KeyManagement/Concepts/keymanagementoverview.htm)

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

At this final stage, your organisation has robust, end-to-end artifact management. You consider it "good enough" if:

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

   - For example:
     - [AWS CloudFormation custom resource or Lambda to verify the artifact signature before launching resources in production](https://github.com/aws-samples/lambda-based-signature-verification)
     - [Azure Pipelines gating checks that confirm signature validity against Azure Key Vault or a signing certificate store](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates?view=azure-devops)
     - [GCP Binary Authorization requiring attestation for container images in GKE or Cloud Run, blocking unauthorized images](https://cloud.google.com/binary-authorization)
     - [OCI custom deployment pipeline step verifying signature or checksum before applying Terraform or container updates](https://docs.oracle.com/en-us/iaas/Content/Registry/Tasks/usingvulnerabilityscanning.htm)

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
     - [AWS CloudHSM or KMS with dedicated key policies for artifact signing](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html)
     - [Azure Key Vault HSM or Managed HSM for storing signing keys with strict RBAC controls](https://learn.microsoft.com/en-us/azure/key-vault/managed-hsm/access-control)
     - [GCP Cloud KMS HSM-protected keys with IAM fine-grained access for signing operations](https://cloud.google.com/kms/docs/creating-keys#hsm)
     - [OCI Vault with dedicated HSM-based key management for signing and encryption tasks](https://docs.oracle.com/en-us/iaas/Content/KeyManagement/Concepts/keymanagementoverview.htm)

1. **Participate in Industry or Government Communities**
   - As you lead in artifact management maturity, share best practices with other public sector bodies or cross-governmental security groups.
   - Encourage consistent auditing and artifact immutability standards across local councils, departmental agencies, or NHS trusts.

By verifying artifacts on each deployment, maintaining robust forensic readiness, testing restoration scenarios, and securing signing keys with HSMs or advanced controls, you perpetually refine your processes. This ensures unwavering trust and compliance in your build pipeline, even under rigorous UK public sector scrutiny.

**Keep doing what you’re doing,** and consider sharing case studies or best-practice guides. Submit pull requests to this guidance or other UK public sector repositories to help others learn from your advanced artifact management journey.
