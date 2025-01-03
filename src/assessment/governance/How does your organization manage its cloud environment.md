---
title: How does your organization manage its cloud environment?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Manual Click-Ops as Required:** Cloud management is performed manually as and when needed, without any systematic approach or automation.

#### **How to determine if this good enough**

Your organization relies on the cloud provider’s GUIs or consoles to handle tasks, with individual admins making changes without formal processes or documentation. This might be "good enough" if:

1. **Small, Low-Risk Projects**

   - You handle a small number of resources or have minimal production environments, and so far, issues have been manageable.

1. **Exploratory Phase**

   - You’re testing new cloud services for proof-of-concept or pilot projects, with no immediate scaling needs.

1. **Limited Compliance Pressures**
   - No strong mandates from [NCSC supply chain or DevOps security guidelines](https://www.ncsc.gov.uk/) or internal governance requiring rigorous configuration management.

However, purely manual approaches risk misconfigurations, leftover resources, security oversights, and inconsistent environments. [NIST SP 800-53 CM controls](https://csrc.nist.gov/) and [NCSC best practices](https://www.ncsc.gov.uk/) encourage structured management to reduce such risks.

#### **How to do better**

##### **Runbooks and Playbooks**

1. **Create Minimal Runbooks/Playbooks**

   - Document step-by-step procedures for essential tasks (e.g., adding an instance, rotating keys).
   - Referencing:
     - [AWS Runbook/Playbook concepts](https://wa.aws.amazon.com/wat.concept.runbook.en.html)
     - [Azure Runbook in Azure Automation](https://docs.microsoft.com/azure/automation/runbook-gallery)
     - [GCP equivalent (Cloud Functions with step-by-step scripts)](https://TODO)
     - [OCI Runbooks (Resource Manager/Operations)](https://TODO)

1. **Ensure Accessibility & Security**

   - Store runbooks in a version-controlled repository (e.g., GitHub, GitLab).
   - Avoid passwords or secrets in the documentation, referencing [NCSC guidelines on secure storage of credentials](https://www.ncsc.gov.uk/).

1. **Enforce Update Discipline**
   - Each time an admin modifies the environment, they must update the runbook.
   - Prevents drift where docs become irrelevant or untrusted.

##### **Change Logs and Audit Logs**

1. **Enable Cloud Provider Audit Logging**

   - e.g., [AWS CloudTrail for AWS, Azure Activity Logs, GCP Audit Logs, OCI Audit Service](https://TODO).
   - Familiarize yourself with how to query logs and set retention.

1. **Capture the "Why"**

   - Maintain a short change log to record the rationale behind config changes:
     - Possibly a central wiki or a simple Slack channel for "cloud change announcements."

1. **Plan Next Steps**
   - Use these logs to identify repetitive tasks or areas ripe for automation in the near future.

By documenting runbooks/playbooks, ensuring logs are enabled and accessible, capturing rationale behind changes, and frequently updating your documentation, you reduce the risks tied to manual "click-ops" while preparing the groundwork for partial or full automation.

### **Documented Manual Click-Ops:** Manual click-ops are used, but steps are documented. Operations may be tested in a similarly maintained non-production environment, though discrepancies likely exist between environments.

#### **How to determine if this good enough**

Your organization documents step-by-step procedures for the cloud environment, with a test or staging environment that somewhat mirrors production. However, small differences frequently occur. It might be "good enough" if:

1. **Moderate Complexity**

   - While you maintain a test environment, changes must still be repeated manually in production.

1. **Consistent, Though Manual**

   - Admins do follow a standard doc for each operation, reducing accidental misconfigurations.

1. **Some Variation Tolerated**
   - You can accommodate minor environment discrepancies that don’t cause severe issues.

However, manually repeating steps can lead to drift over time, especially if some updates never make it from test to production (or vice versa). [NCSC operational resilience approaches](https://www.ncsc.gov.uk/collection/operational-resilience) and [NIST SP 800-53 CM controls](https://csrc.nist.gov/) typically advocate more consistent, automated management to ensure parity across environments.

#### **How to do better**

Below are **rapidly actionable** improvements:

1. **Use Scripting for Repetitive Tasks**

   - Even if you remain "click-ops" at large, certain steps can be scripted:
     - e.g., [AWS CLI or PowerShell scripts, Azure CLI, GCP CLI, OCI CLI](https://TODO).
   - Minimizes errors between test and production.

1. **Track Environment Differences**

   - For each environment, note variations (like instance sizes, domain naming).
   - referencing [NCSC guidance on environment segregation or NIST environment management best practices](https://www.ncsc.gov.uk/).

1. **Add Post-Deployment Verification**

   - After each manual deployment, run a checklist or small script that verifies key resources are correct.

1. **Plan a Shift to Infrastructure-as-Code**

   - Over the next 3–6 months, adopt IaC for at least one main service:
     - e.g., [AWS CloudFormation, Azure Bicep or ARM templates, GCP Deployment Manager, OCI Resource Manager, or HashiCorp Terraform/Ansible](https://TODO).

1. **Initiate Basic Drift Detection**
   - Tools like [AWS Config, Azure Resource Graph, GCP Config Controller, or OCI Resource Discovery](https://TODO) can highlight differences across environments or changes made outside your runbooks.

By partially automating recurring tasks, carefully recording environment discrepancies, verifying deployments, piloting Infrastructure-as-Code, and implementing drift checks, you mitigate errors and pave the way for more complete automation.

### **Semi-Automated with Some Scripting:** Some aspects of cloud management are automated, possibly through scripting, but manual interventions are still common for complex tasks or configurations.

#### **How to determine if this good enough**

Your organization uses scripts (e.g., Bash, Python, PowerShell) or partial IaC for routine tasks, while specialized or complex changes remain manual. This might be "good enough" if:

1. **Significant Time Savings Already**

   - You see reduced misconfigurations for routine tasks (like creating instances or networks), but still handle complex or one-off scenarios manually.

1. **Mixed Skill Levels**

   - Some staff confidently script or write IaC, others prefer manual steps, leading to a hybrid approach.

1. **Minor Environment Discrepancies**
   - Since not all is automated, drift can occur but is less frequent.

You can further unify your scripts into a consistent pipeline or adopt a more complete Infrastructure-as-Code strategy. [NCSC’s DevSecOps best practices](https://www.ncsc.gov.uk/) and [NIST SP 800-53 CM controls](https://csrc.nist.gov/) support extended automation for better security and consistency.

#### **How to do better**

Below are **rapidly actionable** ways to evolve from partial scripting:

1. **Expand Scripting to Complex Tasks**

   - Tackle the next biggest source of manual changes—e.g., managing load balancer rules, rotating credentials, or updating complex network rules.
   - referencing [AWS CLI scripts, Azure CLI or PowerShell, GCP CLI, OCI CLI integrations](https://TODO).

1. **Adopt an IaC Framework**

   - Convert major scripts into [Terraform, AWS CloudFormation, Azure Bicep/ARM, GCP Deployment Manager, OCI Resource Manager](https://TODO) templates for more uniform deployment.

1. **Introduce Basic CI/CD**

   - If you have a central Git repo for scripts, integrate them with [AWS CodePipeline, Azure DevOps, GCP Cloud Build, OCI DevOps pipeline](https://TODO) for consistent application across dev/test/prod.

1. **Set up a "Review & Approve" Process**

   - For complex tasks, code changes in scripts or IaC are peer-reviewed before deployment:
     - referencing [NCSC guidance on secure code reviews or NIST secure development frameworks](https://www.ncsc.gov.uk/).

1. **Leverage Cloud Vendor Tools**
   - e.g., [AWS Systems Manager Automation runbooks, Azure Automation runbooks, GCP Workflows, OCI Automation and Orchestration](https://TODO) to handle advanced tasks with minimal manual input.

By incrementally automating complex changes, standardizing on an IaC framework, establishing a basic CI/CD workflow, ensuring code reviews, and utilizing vendor orchestration tools, you reduce your reliance on manual interventions and strengthen cloud environment consistency.

### **Highly Automated with Standardized Processes:** Cloud management is largely automated with standardized processes across environments. Regular reviews and updates are made to ensure alignment with best practices.

#### **How to determine if this good enough**

Your organization employs a robust Infrastructure-as-Code or automation-first approach, with minimal manual steps. This may be "good enough" if:

1. **Consistent Environments**

   - Dev, test, and production are nearly identical, drastically reducing drift.

1. **Frequent Delivery & Minimal Incidents**

   - You can deploy or update resources swiftly, with lower misconfiguration rates.
   - referencing [NCSC’s DevSecOps approach or NIST SP 800-160 Vol 2 for secure engineering](https://www.ncsc.gov.uk/).

1. **Adherence to Security & Compliance**
   - Automated pipelines incorporate security scanning or compliance checks, referencing [AWS Config, Azure Policy, GCP Org Policy, OCI Security Zones](https://TODO).

To push further, you could adopt advanced drift detection, code-based policy enforcement, or real-time security scanning for each pipeline. [NIST SP 800-137 for continuous monitoring](https://csrc.nist.gov/) and [NCSC’s protective monitoring approaches](https://www.ncsc.gov.uk/) might guide deeper expansions.

#### **How to do better**

Below are **rapidly actionable** ways to refine a highly automated approach:

1. **Implement Automatic Drift Remediation**

   - If changes are made outside your IaC pipeline, the system automatically reverts them or alerts the team:
     - e.g., [AWS Config auto-remediation, Azure Policy with remediation tasks, GCP Config Controller with policy-based management, OCI drift detection & auto-correction](https://TODO).

1. **Incorporate Policy-as-Code**

   - Tools like [Open Policy Agent, AWS SCP, Azure Policy, GCP Org Policy, OCI Security Zones policy definitions](https://TODO) define governance rules in code, preventing non-compliant configs from deploying.

1. **Extend DevSecOps Tooling**

   - e.g., scanning IaC templates for security issues, verifying recommended best practices in each pipeline step:
     - referencing [NCSC’s secure developer guidelines or NIST SP 800-53 R5 for secure configurations](https://www.ncsc.gov.uk/).

1. **Perform Regular Architecture Reviews**

   - With a high level of automation, a small monthly or quarterly session can keep IaC templates up to date with new cloud features or cost optimization.

1. **Foster Cross-Department Knowledge Sharing**
   - If relevant, coordinate with other public sector orgs to share automation scripts or IaC modules:
     - referencing [GOV.UK cross-department knowledge sharing guidance](https://www.gov.uk/service-manual).

By enabling automatic drift remediation, implementing policy-as-code, enhancing DevSecOps pipeline checks, conducting periodic architecture reviews, and collaborating across agencies, you refine a strong foundation of standardized, highly automated processes for cloud management.

### **Fully Managed by Declarative Code with Drift Detection:** Cloud management is fully automated and managed by declarative code. Continual automated drift detection is in place, with alerts for any deviations treated as significant incidents.

#### **How to determine if this good enough**

At this advanced stage, every resource is defined in code (e.g., Terraform, CloudFormation, Bicep, ARM templates, Deployment Manager, or other). The environment automatically reverts or alerts on changes outside of pipelines. Typically "good enough" if:

1. **Zero Manual Changes**

   - All modifications go through code merges and CI/CD, preventing confusion or insecure ad-hoc changes.

1. **Instant Visibility**

   - If drift occurs (someone clicked in the console or an unexpected event occurred), an alarm triggers, prompting immediate rollback or investigation.

1. **Rapid & Secure Deployments**
   - Security, cost, and performance optimizations can be tested and deployed quickly without risk of untracked manual variations.

You can further refine HPC/AI ephemeral resources, cross-department pipeline sharing, or advanced policy-as-code with AI-based compliance. [NCSC’s advanced DevSecOps or zero trust guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-53 CM controls for automated configuration management](https://csrc.nist.gov/) encourage continuous iteration.

#### **How to do better**

Below are **rapidly actionable** methods to maximize a fully declarative, drift-detecting environment:

1. **Integrate Real-Time Security & Cost Checks**

   - Each code merge triggers scanning for known misconfigurations or cost anomalies:
     - e.g., [Terraform Sentinel policies, AWS CFN Guard, Azure Bicep policy enforcement, GCP Config Controller, OCI Security Zones with policy checks](https://TODO).

1. **Adopt Multi-Cloud or Hybrid Templates**

   - If you operate across multiple clouds or on-prem, unify definitions in a single code base:
     - referencing [HashiCorp Terraform, Pulumi, Crossplane with GCP, AWS, Azure, OCI providers, or a consistent multi-cloud approach](https://TODO).

1. **Enhance Observability**

   - Introduce robust logging and distributed tracing for infrastructure-level events:
     - e.g., correlating IaC changes with performance or cost trends in [AWS CloudWatch, Azure Monitor, GCP Operations Suite, OCI Observability and Management](https://TODO).

1. **Foster a Culture of Peer Reviews**

   - For each IaC or pipeline update, encourage a thorough peer review:
     - referencing [NCSC secure code review or NIST SP 800-160 suggestions for code-based reviews](https://www.ncsc.gov.uk/).

1. **Pursue Cross-Government Collaboration**
   - If possible, share or open-source reusable modules or templates:
     - referencing [GOV.UK guidance on open source, NCSC supply chain security for code reuse across agencies](https://www.gov.uk/service-manual).

By adding real-time security and cost checks in your pipeline, adopting multi-cloud/hybrid IaC, enhancing observability, promoting peer reviews, and collaborating with other UK public sector bodies, you reinforce an already advanced, fully declarative environment with robust drift detection—ensuring secure, consistent, and efficient cloud management.

**Keep doing what you’re doing,** and consider publishing blog posts or making pull requests to share your approach to fully automated, code-based cloud management with drift detection. This knowledge can help other UK public sector organizations replicate your success under NCSC, NIST, and GOV.UK best-practice guidelines.
