---
title: What is your primary method for provisioning cloud services?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Manual or Imperative Provisioning:** Cloud services are primarily provisioned manually through consoles, portals, CLI, or other tools, without significant automation.

#### **How to determine if this good enough**

If your organisation primarily provisions cloud services using manual methods—such as web consoles, command-line interfaces, or custom ad hoc scripts—this might be considered "good enough" if:

1. **Very Small or Low-Risk Environments**

   - You run minimal workloads, handle no highly sensitive data, and rarely update or modify your cloud infrastructure.

1. **Limited Scalability Needs**

   - You do not expect frequent environment changes or expansions, so the overhead of learning automation might seem unnecessary.

1. **No Immediate Compliance Pressures**
   - You might not be heavily audited or required to meet advanced DevOps or infrastructure-as-code (IaC) practices just yet.

However, as soon as your environment grows, new compliance demands appear, or you onboard more users, manual provisioning can lead to inconsistencies and difficulty tracking changes—particularly in the UK public sector, where robust governance is often required.

#### **How to do better**

Below are **rapidly actionable** steps to move beyond purely manual provisioning:

1. **Start Capturing Configurations in Scripts**

   - Even if you rely on the portal/console, record steps in a lightweight script. For example:
     - [AWS CLI scripts stored in a GitHub repo for spinning up EC2 instances or S3 buckets](https://github.com/theadarshsaxena/AWS-CLI-Scripting)
     - [Azure CLI or PowerShell scripts for creating resource groups, VMs, or storage accounts](https://github.com/azureautomation/create-azure-resource-group-using-powershell)
     - [GCP CLI (gcloud) scripts for provisioning VMs, Cloud Storage, or networking](https://github.com/teradici/cloud_deployment_scripts/blob/master/docs/gcp/README.md)
     - [OCI CLI scripts for creating compute instances, networking, or storage resources](https://github.com/Oracle/oci-cli)
     - [IBM Cloud Schematics for scripting your cloud environment](https://cloud.ibm.com/docs/schematics?topic=schematics-getting-started)

1. **Implement Basic Naming and Tagging Conventions**

   - Create a short doc listing agreed naming prefixes/suffixes and mandatory tags:
     - e.g., `DepartmentName`, `Environment` (Dev/Test/Prod), `Owner` tags.
   - This fosters consistency and prepares for more advanced automation.

1. **Add a Simple Approval Step**

   - If you’re used to provisioning without oversight, set up a minimal "approval check."
   - For instance, use a shared Slack or Teams channel where you post new resource requests, and a manager or security person acknowledges before provisioning.

1. **Consider a Pilot with Infrastructure as Code (IaC)**

   - Select a small, low-risk environment to try:
     - [AWS CloudFormation or Terraform templates for a simple set of EC2 instances or S3 buckets](/TODO)
     - [Azure Bicep or Terraform for a minimal web app environment in Azure App Service](https://github.com/Azure-Samples/highly-available-zone-redundant-webapp)
     - [GCP Deployment Manager or Terraform for GCE, GKE, or Cloud Storage resources](https://github.com/GoogleCloudPlatform/terraform-google-cloud-foundation)
     - [OCI Resource Manager or Terraform for provisioning compute, networking, or object storage](https://github.com/oracle/oci-cloud-native)
     - [IBM Cloud Schematics for scripted automation of your cloud environment](https://cloud.ibm.com/docs/schematics?topic=schematics-getting-started)

1. **Document Provisioning Steps**
   - Keep a simple runbook or wiki page. Summarise each manual provisioning step so you can easily shift these instructions into scripts or templates later.

By scripting basic tasks, implementing a simple naming/tagging policy, adding minimal approvals, and piloting an IaC solution, you start transitioning from ad hoc provisioning to more consistent automation practices.

### **Limited Scripting with No Standards:** Provisioning involves some scripting, but there are no formal standards or consistency across project teams.

#### **How to determine if this good enough**

In this scenario, your organisation uses partial automation or scripting, but each team might have its own approach, with no centralised or standardised method. You might consider it "good enough" if:

1. **Small to Medium Environment**

   - Teams are somewhat comfortable with their own scripting techniques.
   - No pressing requirement to unify them under a single approach.

1. **Mixed Expertise**

   - Some staff are proficient with scripting (Python, Bash, PowerShell), but others prefer manual console methods.
   - You haven’t faced major issues from inconsistent naming or versioning.

1. **Infrequent Collaboration**
   - Your departments rarely need to share cloud resources or code, so differences in scripting style haven’t caused big problems.

However, as soon as cross-team projects arise or you face compliance demands for consistent infrastructure definitions, this fragmentation can lead to duplication of effort, confusion, and errors.

#### **How to do better**

Below are **rapidly actionable** ways to standardise your provisioning scripts:

1. **Adopt a Common Repository for Scripts**

   - Create an internal Git repo (e.g., on GitHub, GitLab, or a cloud-hosted repo) for all provisioning scripts:
     - [AWS CodeCommit](https://aws.amazon.com/codecommit/), [Azure DevOps Repos](https://azure.microsoft.com/en-gb/services/devops/repos/), or [GCP Source Repositories](https://cloud.google.com/source-repositories) can also be used for version control
   - Encourage teams to share and reuse scripts, aligning naming conventions and code structure.

1. **Define Minimal Scripting Standards**

   - E.g., standard file naming, function naming, environment variable usage, or logging style.
   - Keep it simple but ensure each team references the same baseline.

1. **Use Infrastructure as Code Tools**

   - Instead of random scripts, consider a consistent IaC approach:

     - [AWS CloudFormation or Terraform for AWS-based provisioning](https://docs.aws.amazon.com/cloudformation/index.html)
     - [Azure Bicep or Terraform for Azure infrastructure templates](https://learn.microsoft.com/en-us/azure/developer/terraform/comparing-terraform-and-bicep)
     - [GCP Deployment Manager or Terraform for GCP resources](https://cloud.google.com/deployment-manager/docs)
     - [OCI Resource Manager or Terraform for Oracle Cloud resources](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Concepts/stacksoverview.htm)

   - Start with a small template, then expand as teams gain confidence.

1. **Create a Shared Module or Template Library**

   - If multiple teams need similar infrastructure (e.g., a standard VPC, a typical storage bucket), store that logic in a common template or module:
     - e.g., Terraform modules in a shared Git repo or a private registry.
   - This ensures consistent best practices are used across all projects.

1. **Encourage Collaboration and Peer Reviews**
   - Have team members review each other’s scripts or templates in a code review process, catching mistakes and unifying approaches along the way.

By consolidating scripts in a shared repository, defining lightweight standards, introducing IaC tools, and fostering peer reviews, you gradually unify your provisioning process and reduce fragmentation.

### **Partial Declarative Automation:** Declarative automation is used for provisioning some cloud services across their lifecycle, but this practice is not uniform across all teams.

#### **How to determine if this good enough**

Declarative automation (often in the form of Infrastructure as Code) is partially adopted, but not every team or environment follows it consistently. This might be "good enough" if:

1. **Sisable Gains in Some Areas**

   - Some major projects are stable, reproducible, and versioned via IaC, reducing manual errors.
   - Other smaller or legacy teams might still rely on older methods.

1. **Limited Conflict Among Teams**

   - While some teams use IaC and others don’t, there isn’t a high need to integrate or share resources.
   - Each team can operate fairly independently without causing confusion.

1. **Compliance and Control**
   - Where the stakes are high (e.g., production or sensitive data), you likely already enforce declarative approaches.
   - Lower-priority or test environments remain behind, but that may be acceptable for now.

If partial declarative automation meets your current needs, you may decide it’s sufficient. However, you might miss out on consistent governance, easier cross-team collaboration, and uniform operational efficiency.

#### **How to do better**

Below are **rapidly actionable** ways to expand your declarative automation:

1. **Set Organisation-Wide IaC Defaults**

   - Decide on a primary IaC tool (Terraform, CloudFormation, Bicep, Deployment Manager, or others) and specify guidelines:
     - e.g., "All new infrastructure that goes to production must use Terraform for provisioning, with code in X repo."

1. **Create a Reference Architecture or Template**

   - Provide an example repository for a standard environment:

     - [AWS: Example CloudFormation or Terraform scripts for a typical 3-tier application with a load balancer, auto-scaling group, and RDS](https://github.com/aws-samples/three-tier-web-application-flask)
     - [Azure: Bicep or Terraform example for a web app + database + VNet + IAM roles setup](https://github.com/Azure-Samples/virtual-network-integration-recipes)
     - [GCP: Terraform or Deployment Manager example for GCE or GKE with secure defaults, including networking and logging](https://github.com/GoogleCloudPlatform/terraform-google-project-factory)
     - [OCI: Resource Manager stack example that sets up an OCI compute instance, load balancer, and VCN with best practices](https://github.com/oracle/oci-cloud-native)

   - Encourage teams to clone and adapt these templates.

1. **Extend IaC Usage to Lower Environments**

   - Even for dev/test, use declarative templates so staff get comfortable and maintain consistency:
     - This ensures the same patterns scale up to production effortlessly.

1. **Implement Automated Checks**

   - Use CI/CD pipelines to validate IaC templates before deployment:
     - [AWS CodePipeline or GitHub Actions running `terraform validate`/`cfn-lint`/`bicep build` checks](https://aws.amazon.com/codepipeline/)
     - [Azure DevOps Pipelines for Bicep or Terraform validation steps](https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-vm-extension)
     - [GCP Cloud Build triggers that run `terraform plan` or lint checks on your YAML templates](https://cloud.google.com/build)
     - [OCI DevOps pipeline that validates Terraform scripts with `terraform plan` before applying changes in Oracle Cloud](https://www.oracle.com/cloud/free/oci-training/)

1. **Offer Incentives for Adoption**
   - e.g., Team metrics or internal recognition if all new deployments use IaC.
   - Showcase success stories: "Team A reduced production incidents by 30% after adopting IaC."

By standardising your IaC approach, providing shared templates, enforcing usage even in lower environments, and automating checks, you accelerate your journey toward uniform, declarative provisioning across teams.

### **Widespread Use of Declarative Automation:** Most project teams employ declarative automation for cloud service provisioning, indicating a higher level of maturity in automation practices.

#### **How to determine if this good enough**

In this phase, a large majority of your teams rely on IaC or declarative templates to provision and manage cloud services, yielding consistency and reliability. You might consider it "good enough" if:

1. **High Reusability and Efficiency**

   - Teams share modules, templates, or code with minimal duplication.
   - Common services (e.g., VPC, subnets, security groups) are easily spun up.

1. **Improved Compliance and Auditing**

   - Audits show that configurations match version-controlled definitions—reducing manual drift.
   - Staff can quickly roll back or replicate environments for test or disaster recovery.

1. **Reduced Operational Overhead**
   - Fewer manual changes mean fewer untracked variations.
   - Teams typically see improved speed for launching new environments.

If your use of declarative automation is broad but not yet mandated for every environment, you might still face occasional manual exceptions or unapproved changes. This can lead to minor inconsistencies.

#### **How to do better**

Below are **rapidly actionable** ways to continue refining:

1. **Integrate with CI/CD Pipelines**

   - If not already done, ensure every major deployment goes through a pipeline that runs:
     - Linting, security scans (e.g., checking for known misconfigurations), and policy compliance checks:
       - [AWS: CodeBuild or GitHub Actions with CFN-lint, cfn_nag, or Terraform scanning for best practices](https://github.com/aws-cloudformation/cfn-lint)
       - [Azure: DevOps Pipeline tasks for Bicep linter or Terraform security scanning (e.g., tfsec)](https://github.com/aquasecurity/tfsec-azure-pipelines-task)
       - [GCP: Cloud Build triggers for Terraform linting or scanning with built-in security checks or OPA policies](https://cloud.google.com/docs/terraform/policy-validation)
       - [OCI: DevOps pipeline that runs `terraform plan` with custom scripts checking code quality, tagging compliance, etc.](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Concepts/stacksoverview.htm)

1. **Establish a Platform Engineering or DevOps Guild**

   - A cross-team group can maintain shared IaC libraries, track upgrades, and collaborate on improvements.
   - This fosters ongoing enhancements and helps new teams onboard quickly.

1. **Strengthen Security and Compliance Automation**

   - Embed more advanced checks into your IaC pipeline:
     - e.g., verifying that certain resources cannot be exposed to the public internet, forcing encryption at rest, etc.

1. **Expand to Multi-Cloud or Hybrid**

   - If relevant, unify your IaC approach for resources across multiple clouds or on-prem environments:
     - Tools like Terraform can handle multi-cloud provisioning under one codebase.

1. **Continue Upskilling Staff**
   - Offer advanced IaC training, sessions on best practices, or pair programming to help teams adopt more sophisticated patterns (modules, dynamic references, etc.).

By using formal CI/CD for all deployments, fostering a DevOps guild, strengthening compliance checks, and supporting multi-cloud approaches, you refine widespread IaC usage into a highly orchestrated, reliable practice across the organisation.

### **Mandatory Declarative Automation via CI/CD:** Declarative automation is mandated for provisioning all production services, and it is exclusively executed through Continuous Integration/Continuous Deployment (CI/CD) pipelines.

#### **How to determine if this good enough**

This final stage means your organisation has fully embraced IaC—any production environment changes occur only through a pipeline and must be defined declaratively. It’s likely "good enough" if:

1. **Extremely Consistent Environments**

   - No drift, as manual changes in production are disallowed or quickly overwritten by pipeline definitions.

1. **Robust Governance**

   - Audits and compliance are straightforward—everything is in version control and accompanied by pipeline logs.

1. **Seamless Reproducibility**

   - Dev, staging, and production can match precisely, barring data differences.
   - Rapid rollback is possible by reverting to a previous commit.

1. **High Organisational Discipline**
   - All stakeholders adhere to the policy that "no code, no deploy"—any infrastructure change must be made in IaC first.

You already operate at a high maturity level. Still, continuous improvement might revolve around advanced testing, policy-as-code integration, and cross-organisational collaboration.

#### **How to do better**

Below are **rapidly actionable** ways to push the boundaries, even at the highest maturity:

1. **Implement Policy-as-Code**

   - Ensure each pipeline run checks compliance automatically:
     - [AWS: Use AWS Config or AWS Service Control Policies with Git-based definitions plus OPA or CFN-lint in your pipeline](https://aws.amazon.com/blogs/mt/using-opa-to-create-aws-config-rules/)
     - [Azure: Combine Azure Policy with custom pipeline tasks that validate Bicep/Terraform templates pre-deployment](https://learn.microsoft.com/en-us/azure/governance/policy/tutorials/policy-devops-pipelines)
     - [GCP: Leverage OPA or Terraform Validator in Cloud Build to confirm resource definitions match your policies](https://cloud.google.com/docs/terraform/policy-validation)
     - [OCI: Integrate advanced policy checks using OPA or custom scripts in your DevOps pipeline for Terraform stacks](https://github.com/oracle/oci-cloud-native)

1. **Adopt Advanced Testing and Security Checks**

   - Extend your pipeline to run static code analysis (SAST), dynamic checks (DAST), and security scanning for container images or VM base images.
   - Provide a thorough "shift-left" approach, catching issues pre-production.

1. **Introduce Automated Change Approvals**

   - If you want a "human in the loop" for major changes, use pipeline gating:
     - e.g., a Slack or Teams approval step before applying infrastructure changes in production.
   - This merges automation with the final manual sign-off for critical changes.

1. **Evolve Toward Self-Service Platforms**

   - Provide an internal "portal" or "service catalog" for non-expert teams to request resources that are auto-provisioned via Infrastructure as Code (IaC) and Continuous Integration/Continuous Deployment (CI/CD):
     - [AWS Service Catalog for standardised products, integrating with your pipeline](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is-service-catalog.html)
     - [Azure Managed Applications or custom Azure DevOps-based service catalogs for shared solutions](https://azure.microsoft.com/en-us/products/managed-applications/)
     - [GCP Deployment Manager templates plus a small UI or orchestration for internal requests](https://cloud.google.com/deployment-manager)
     - [OCI Service Catalog for common architectures, all referencing your Terraform modules or Resource Manager stacks](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Concepts/stacksoverview.htm)

1. **Expand to True "GitOps" for Ongoing Management**
   - Continuously synchronise changes from Git to your runtime environment:
     - e.g., using FluxCD or ArgoCD for containerised workloads, or hooking a Terraform operator into a Git repo.

By integrating policy-as-code, advanced security checks, optional gating approvals, self-service catalogs, and GitOps strategies, you refine your mandatory declarative automation approach into a truly world-class, highly efficient model of modern cloud provisioning for the UK public sector.

**Keep doing what you’re doing,** and consider sharing internal or external blog posts about your provisioning automation journey. Submit pull requests to this guidance or similar public sector best-practice repositories to help others learn from your experiences and successes.
