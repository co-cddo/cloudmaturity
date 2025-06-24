---
title: How do you manage your cloud environment?
tags: governance
eleventyNavigation:
  parent: governance
---

### Manually, when needed, with no set process.

#### **How to determine if this good enough**

Your organisation relies on the cloud provider’s GUIs or consoles to handle tasks, with individual admins making changes without formal processes or documentation. This might be "good enough" if:

1. **Small, Low-Risk Projects**
   - You handle a small number of resources or have minimal production environments, and so far, issues have been manageable.

1. **Exploratory Phase**
   - You’re testing new cloud services for proof-of-concept or pilot projects, with no immediate scaling needs.

1. **Limited Compliance Pressures**
   - No strong mandates from [NCSC supply chain or DevOps security guidelines](/TODO) or internal governance requiring rigorous configuration management.

However, purely manual approaches risk misconfigurations, leftover resources, security oversights, and inconsistent environments. [NIST SP 800-53 CM controls](https://csrc.nist.gov/) and [NCSC best practices](/TODO) encourage structured management to reduce such risks.

#### **How to do better**

##### **Runbooks and Playbooks**

1. **Create Minimal Runbooks/Playbooks**
   - Document step-by-step procedures for essential tasks (e.g., adding an instance, rotating keys).
   - Referencing:
     - [AWS Runbook/Playbook concepts](https://wa.aws.amazon.com/wat.concept.runbook.en.html)
     - [Azure Runbook in Azure Automation](https://docs.microsoft.com/azure/automation/runbook-gallery)
     - [GCP Runbook examples](https://cloud.google.com/docs/runbooks)
     - [OCI Runbooks in Fleet Application Management](https://docs.oracle.com/en-us/iaas/Content/fleet-management/runbooks.htm)

2. **Ensure Accessibility & Security**
   - Store runbooks in a version-controlled repository (e.g., GitHub, GitLab).
   - Avoid passwords or secrets in the documentation, referencing [NCSC guidelines on secure storage of credentials](/TODO).

3. **Enforce Update Discipline**
   - Each time an admin modifies the environment, they must update the runbook.
   - Prevents drift where docs become irrelevant or untrusted.

##### **Change Logs and Audit Logs**

1. **Enable Cloud Provider Audit Logging**
   - e.g., [AWS CloudTrail for AWS](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html), [Azure Activity Logs](https://docs.microsoft.com/azure/azure-monitor/essentials/activity-log), [GCP Audit Logs](https://cloud.google.com/logging/docs/audit), [OCI Audit Service](https://docs.oracle.com/en-us/iaas/Content/Audit/Concepts/auditoverview.htm), [IBM Cloud Logs](https://cloud.ibm.com/docs/cloud-logs?topic=cloud-logs-about-cl).
   - Familiarise yourself with how to query logs and set retention.

1. **Capture the "Why"**
   - Maintain a short change log to record the rationale behind config changes:
     - Possibly a central wiki or a simple Slack channel for "cloud change announcements."

1. **Plan Next Steps**
   - Use these logs to identify repetitive tasks or areas ripe for automation in the near future.

By documenting runbooks/playbooks, ensuring logs are enabled and accessible, capturing rationale behind changes, and frequently updating your documentation, you reduce the risks tied to manual "click-ops" while preparing the groundwork for partial or full automation.

### Documented manual processes. Test environments may not match live ones.

#### **How to determine if this good enough**

Your organisation documents step-by-step procedures for the cloud environment, with a test or staging environment that somewhat mirrors production. However, small differences frequently occur. It might be "good enough" if:

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
     - e.g., [AWS CLI or PowerShell scripts](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html), [Azure CLI](https://docs.microsoft.com/azure/azure-functions/functions-run-local), [GCP CLI](https://cloud.google.com/sdk/docs), [OCI CLI](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm).
   - Minimises errors between test and production.

1. **Track Environment Differences**
   - For each environment, note variations (like instance sizes, domain naming).
   - referencing [NCSC guidance on environment segregation or NIST environment management best practices](https://www.ncsc.gov.uk/).

1. **Add Post-Deployment Verification**
   - After each manual deployment, run a checklist or small script that verifies key resources are correct.

1. **Plan a Shift to Infrastructure-as-Code**
   - Over the next 3–6 months, adopt IaC for at least one main service:
     - e.g., [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html), [Azure Bicep or ARM templates](https://docs.microsoft.com/azure/azure-resource-manager/bicep/overview), [GCP Deployment Manager](https://cloud.google.com/deployment-manager/docs), [OCI Resource Manager](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Concepts/resourcemanager.htm), [HashiCorp Terraform/Ansible](https://www.terraform.io/docs/index.html).

1. **Initiate Basic Drift Detection**
   - Tools like [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html), [Azure Resource Graph](https://docs.microsoft.com/azure/governance/resource-graph/overview), [GCP Config Controller](https://cloud.google.com/config-connector/docs/overview), or [OCI Resource Discovery](https://docs.oracle.com/en-us/iaas/Content/Resource/Concepts/resource-discovery.htm) can highlight differences across environments or changes made outside your runbooks.

By partially automating recurring tasks, carefully recording environment discrepancies, verifying deployments, piloting Infrastructure-as-Code, and implementing drift checks, you mitigate errors and pave the way for more complete automation.

### Some things are scripted, but we still do a lot by hand.

#### **How to determine if this good enough**

Your organisation uses scripts (e.g., Bash, Python, PowerShell) or partial IaC for routine tasks, while specialised or complex changes remain manual. This might be "good enough" if:

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
   - referencing [AWS CLI scripts](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html), [Azure CLI or PowerShell](https://docs.microsoft.com/azure/azure-functions/functions-run-local), [GCP CLI](https://cloud.google.com/sdk/docs), [OCI CLI](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm).

1. **Adopt an IaC Framework**
   - Convert major scripts into [Terraform](https://www.terraform.io/docs/index.html), [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html), [Azure Bicep/ARM](https://docs.microsoft.com/azure/azure-resource-manager/bicep/overview), [GCP Deployment Manager](https://cloud.google.com/deployment-manager/docs), [OCI Resource Manager](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Concepts/resourcemanager.htm) templates for more uniform deployment.

1. **Introduce Basic CI/CD**
   - If you have a central Git repo for scripts, integrate them with [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html), [Azure DevOps](https://docs.microsoft.com/azure/devops/pipelines/get-started/what-is-azure-pipelines), [GCP Cloud Build](https://cloud.google.com/build/docs), [OCI DevOps pipeline](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/devopsoverview.htm) for consistent application across dev/test/prod.

1. **Set up a "Review & Approve" Process**
   - For complex tasks, code changes in scripts or IaC are peer-reviewed before deployment:
     - referencing [NCSC guidance on secure code reviews or NIST secure development frameworks](https://www.ncsc.gov.uk/).

1. **Leverage Cloud Vendor Tools**
   - e.g., [AWS Systems Manager Automation runbooks](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-working-with-runbooks.html), [Azure Automation runbooks](https://docs.microsoft.com/azure/automation/automation-runbook-types), [GCP Workflows](https://cloud.google.com/workflows/docs), [OCI Automation and Orchestration](https://docs.oracle.com/en-us/iaas/Content/Automation/Concepts/automationoverview.htm) to handle advanced tasks with minimal manual input.

By incrementally automating complex changes, standardising on an IaC framework, establishing a basic CI/CD workflow, ensuring code reviews, and utilising vendor orchestration tools, you reduce your reliance on manual interventions and strengthen cloud environment consistency.

### Most things are standardised and automated. We often review and make improvements.

#### **How to determine if this good enough**

Your organisation employs a robust Infrastructure-as-Code or automation-first approach, with minimal manual steps. This may be "good enough" if:

1. **Consistent Environments**
   - Dev, test, and production are nearly identical, drastically reducing drift.

1. **Frequent Delivery & Minimal Incidents**
   - You can deploy or update resources swiftly, with lower misconfiguration rates.
   - referencing [NCSC’s DevSecOps approach or NIST SP 800-160 Vol 2 for secure engineering](https://www.ncsc.gov.uk/).

1. **Adherence to Security & Compliance**
   - Automated pipelines incorporate security scanning or compliance checks, referencing [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html), [Azure Policy](https://docs.microsoft.com/azure/governance/policy/overview), [GCP Org Policy](https://cloud.google.com/resource-manager/docs/organisation-policy/overview), [OCI Security Zones](https://docs.oracle.com/en-us/iaas/Content/Security/Concepts/securityzones.htm).

To push further, you could adopt advanced drift detection, code-based policy enforcement, or real-time security scanning for each pipeline. [NIST SP 800-137 for continuous monitoring](https://csrc.nist.gov/) and [NCSC’s protective monitoring approaches](https://www.ncsc.gov.uk/) might guide deeper expansions.

#### **How to do better**

Below are **rapidly actionable** ways to refine a highly automated approach:

1. **Implement Automatic Drift Remediation**
   - If changes are made outside your IaC pipeline, the system automatically reverts them or alerts the team:
     - e.g., [AWS Config auto-remediation](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html), [Azure Policy with remediation tasks](https://docs.microsoft.com/azure/governance/policy/how-to/remediate-resources), [GCP Config Controller with policy-based management](https://cloud.google.com/config-connector/docs/overview), [OCI drift detection & auto-correction](https://docs.oracle.com/en-us/iaas/Content/Resource/Concepts/resource-discovery.htm).

1. **Incorporate Policy-as-Code**
   - Tools like [Open Policy Agent](https://www.openpolicyagent.org/), [AWS SCP](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html), [Azure Policy](https://docs.microsoft.com/azure/governance/policy/overview), [GCP Org Policy](https://cloud.google.com/resource-manager/docs/organisation-policy/overview), [OCI Security Zones](https://docs.oracle.com/en-us/iaas/Content/Security/Concepts/securityzones.htm) define governance rules in code, preventing non-compliant configs from deploying.

1. **Extend DevSecOps Tooling**
   - e.g., scanning IaC templates for security issues, verifying recommended best practices in each pipeline step:
     - referencing NCSC’s secure developer guidelines or NIST SP 800-53 R5 for secure configurations.

1. **Perform Regular Architecture Reviews**
   - With a high level of automation, a small monthly or quarterly session can keep IaC templates up to date with new cloud features or cost optimisation.

1. **Foster Cross-Department Knowledge Sharing**
   - If relevant, coordinate with other public sector orgs to share automation scripts or IaC modules:
     - referencing [GOV.UK cross-department knowledge sharing guidance](https://www.gov.uk/service-manual).

By enabling automatic drift remediation, implementing policy-as-code, enhancing DevSecOps pipeline checks, conducting periodic architecture reviews, and collaborating across agencies, you refine a strong foundation of standardised, highly automated processes for cloud management.

### Everything is automated using code and we get alerts if anything changes unexpectedly.

#### **How to determine if this good enough**

At this advanced stage, every resource is defined in code (e.g., Terraform, CloudFormation, Bicep, ARM templates, Deployment Manager, or other). The environment automatically reverts or alerts on changes outside of pipelines. Typically "good enough" if:

1. **Zero Manual Changes**
   - All modifications go through code merges and CI/CD, preventing confusion or insecure ad-hoc changes.

1. **Instant Visibility**
   - If drift occurs (someone clicked in the console or an unexpected event occurred), an alarm triggers, prompting immediate rollback or investigation.

1. **Rapid & Secure Deployments**
   - Security, cost, and performance optimisations can be tested and deployed quickly without risk of untracked manual variations.

You can further refine HPC/AI ephemeral resources, cross-department pipeline sharing, or advanced policy-as-code with AI-based compliance. [NCSC’s advanced DevSecOps or zero trust guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-53 CM controls for automated configuration management](https://csrc.nist.gov/) encourage continuous iteration.

#### **How to do better**

Below are **rapidly actionable** methods to maximise a fully declarative, drift-detecting environment:

1. **Integrate Real-Time Security & Cost Checks**
   - Each code merge triggers scanning for known misconfigurations or cost anomalies:
     - e.g., [Terraform Sentinel policies](https://www.terraform.io/docs/cloud/sentinel/index.html), [AWS CFN Guard](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-guard-what-is-cfn-guard.html), [Azure Bicep policy enforcement](https://docs.microsoft.com/azure/azure-resource-manager/bicep/policy-reference), [GCP Config Controller](https://cloud.google.com/config-connector/docs/overview), [OCI Security Zones with policy checks](https://docs.oracle.com/en-us/iaas/Content/Security/Concepts/securityzones.htm).

1. **Adopt Multi-Cloud or Hybrid Templates**
   - If you operate across multiple clouds or on-prem, unify definitions in a single code base:
     - referencing [HashiCorp Terraform](https://www.terraform.io/docs/index.html), [Pulumi](https://www.pulumi.com/docs/), [Crossplane](https://crossplane.io/docs/) with GCP, AWS, Azure, OCI providers, or a consistent multi-cloud approach.

1. **Enhance Observability**
   - Introduce robust logging and distributed tracing for infrastructure-level events:
     - e.g., correlating IaC changes with performance or cost trends in [AWS CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html), [Azure Monitor](https://docs.microsoft.com/azure/azure-monitor/overview), [GCP Operations Suite](https://cloud.google.com/operations-suite), [OCI Observability and Management](https://docs.oracle.com/en-us/iaas/Content/Observability/Concepts/observabilityoverview.htm).

1. **Foster a Culture of Peer Reviews**
   - For each IaC or pipeline update, encourage a thorough peer review:
     - referencing [NCSC secure code review or NIST SP 800-160 suggestions for code-based reviews](https://www.ncsc.gov.uk/).

1. **Pursue Cross-Government Collaboration**
   - If possible, share or open-source reusable modules or templates:
     - referencing [GOV.UK guidance on open source](https://www.gov.uk/service-manual), NCSC supply chain security for code reuse across departments.

By adding real-time security and cost checks in your pipeline, adopting multi-cloud/hybrid IaC, enhancing observability, promoting peer reviews, and collaborating with other UK public sector bodies, you reinforce an already advanced, fully declarative environment with robust drift detection—ensuring secure, consistent, and efficient cloud management.

**Keep doing what you’re doing,** and consider publishing blog posts or making pull requests to share your approach to fully automated, code-based cloud management with drift detection. This knowledge can help other UK public sector organisations replicate your success under NCSC, NIST, and GOV.UK best-practice guidelines.
