---
title: Do you use continuous integration and continuous deployment (CI/CD) tools?
tags: operations
eleventyNavigation:
  parent: operations
---

### We don't, we build test, and deploy by hand.

#### **How to determine if this good enough**

Your organisation may still rely on manual or semi-manual processes for building, testing, and deploying software. You might consider this "good enough" if:

1. **Small or Non-Critical Projects**

   - You run a limited set of applications with low release frequency, so manual processes remain manageable.

1. **Low Risk Tolerance**

   - The team is not yet comfortable adopting new automation tools or processes, and there is no immediate driver to modernise.

1. **Minimal Compliance Pressures**
   - Formal requirements (e.g., from internal governance, GDS Service Standards, or security audits) haven’t mandated an automated pipeline or detailed audit trail for deployments.

However, as your projects grow, manual building and deploying typically becomes time-consuming and prone to human error. This can lead to inconsistency, difficulty replicating production environments, and a slower pace of iteration.

#### **How to do better**

Below are **rapidly actionable** steps to adopt a basic CI/CD foundation:

1. **Begin with Simple Scripting**

   - Automate part of your build or test process via scripts:
     - [AWS CLI or AWS CodeBuild basic usage to build and package your application](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
     - [Azure CLI or Azure DevOps basic Pipeline to compile code and run tests](https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core?view=azure-devops)
     - [GCP Cloud Build minimal setup for building container images or running test commands](https://cloud.google.com/cloud-build/docs/quickstart)
     - [OCI DevOps CI features to define a basic build process in your Oracle Cloud environment](https://docs.oracle.com/en-us/iaas/Content/devops/using/create_buildpipeline.htm)

1. **Implement Basic Automated Testing**

   - Start by automating unit tests:
     - Each commit triggers a script that runs tests in a shared environment, providing at least a "pass/fail" outcome.

1. **Use a Shared Version Control Repository**

   - If you’re not already using one, adopt Git (e.g., GitHub, GitLab, or an internal service) to store your source code so that you can begin integrating basic CI steps.

1. **Document the Process**

   - Create a short runbook or wiki entry explaining how code is built, tested, and deployed.
   - This helps new team members adopt the new process.

1. **Set a Goal to Remove Manual Steps Gradually**
   - Identify the most error-prone or time-consuming manual tasks. Automate them first to gain quick wins.

By introducing simple build/test scripting, hosting code in version control, and documenting your process, you establish the baseline for a more formal CI/CD pipeline in the future.

### We use some CI/CD, but there’s no standard.

#### **How to determine if this good enough**

When some teams have adopted CI/CD pipelines for build and deploy tasks, but others remain manual or partially automated, you might find this "good enough" if:

1. **Partial Automation Success**

   - Projects that do have CI/CD show faster releases and fewer errors, indicating the benefits of automation.

1. **Mixed Team Maturity**

   - Some teams have the skills or leadership support to implement pipelines, while others do not, and there’s no pressing need to unify.

1. **No Major Interdependence**
   - Projects that use CI/CD operate somewhat independently, not forcing standardisation across the entire organisation.

While this can work for a period, inconsistent CI/CD adoption often leads to uneven release quality, slower integration across departments, and missed opportunities for best-practice sharing.

#### **How to do better**

Below are **rapidly actionable** ways to broaden CI/CD usage:

1. **Establish a Centralised CI/CD Reference**

   - Create an internal wiki or repository showcasing how leading teams set up their pipelines:
     - For example, an example pipeline for .NET in [Azure DevOps Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core?view=azure-devops) or [GitHub Actions](https://github.com/microsoft/azure-devops-dotnet-samples/blob/main/azure-pipelines.yml).
     - A Java pipeline in [AWS CodePipeline](https://github.com/aws-samples/building-java-apps-using-code-pipeline).
   - Encourage other teams to replicate successful patterns.

1. **Provide or Recommend CI/CD Tools**

   - Suggest a small set of commonly supported tools:
     - [AWS CodePipeline, AWS CodeBuild, AWS CodeDeploy for automated build/test/deploy in AWS](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html)
     - [Azure DevOps Pipelines or GitHub Actions for building apps, running tests, and pushing to Azure resources](https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)
     - [GCP Cloud Build, with Deploy capabilities or GitHub integration for container-based apps](https://cloud.google.com/cloud-build)
     - [OCI DevOps for build, test, and deploy tasks within Oracle Cloud environments](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/overview.htm)
   - This consistency can reduce fragmentation.

1. **Host Skill-Sharing Sessions**

   - Have teams currently using CI/CD present their approaches in short lunch-and-learn sessions.
   - Record these sessions so new staff or less mature teams can learn at their own pace.

1. **Create Minimal Pipeline Templates**

   - Provide a starter template for each major language or platform (e.g., Node.js, Java, .NET).
   - Ensure these templates include basic build, test, and package steps out of the box.

1. **Reward Cross-Team Collaboration**
   - If a more advanced project helps a struggling team set up their pipeline, recognise both parties’ efforts.
   - This fosters a culture of internal assistance rather than siloed approaches.

By sharing knowledge, offering recommended tools, and providing example templates, you organically expand CI/CD adoption and empower teams to adopt consistent approaches.

### Most teams use CI/CD, but each chooses its own tools.

#### **How to determine if this good enough**

This stage sees widespread CI/CD usage across the organisation, but with each team choosing different pipelines, scripts, or orchestrators. You might consider it "good enough" if:

1. **Strong Automation Culture**

   - Almost every project has some form of automated build/test/deploy.
   - Productivity and reliability are generally high.

1. **High Team Autonomy**

   - Teams appreciate the freedom to select the best tools for their stack.
   - Little friction arises from differences in pipeline tech, as cross-team collaboration is limited or well-managed.

1. **No Major Standardisation Requirement**
   - Your department or top-level governance body hasn’t mandated a single CI/CD framework.
   - Audits or compliance checks are typically satisfied by each team’s pipeline logs and versioning practices.

Though beneficial for agility, this approach can hinder knowledge sharing and pose onboarding challenges if staff move between teams. Maintaining multiple toolchains might also increase overhead.

#### **How to do better**

Below are **rapidly actionable** ways to refine or unify CI/CD tool usage:

1. **Define Core Principles or Best Practices**

   - Even if each team chooses different tools, align on key principles:
     - Every pipeline must run unit tests, produce build artifacts, and store logs.
     - Every pipeline must integrate with code reviews and version control.
   - This ensures consistency of outcomes, if not standard tooling.

1. **Document Cross-Tool Patterns**

   - Create a short doc or wiki explaining how to handle:
     - Secrets management, environment variables, artifact storage, and standard branch strategies.
   - This helps teams use the same approach to security and governance, even if they use different CI/CD apps.

1. **Encourage Modular Pipeline Code**

   - Teams can share modular scripts or config chunks for tasks like static analysis, security checks, or environment provisioning:
     - e.g., Docker build modules, Terraform integration steps, or test coverage logic.

1. **Highlight or Mentor**

   - If certain pipelines are especially successful, highlight them as "recommended" or offer mentorship so other teams can replicate their approach.
   - Over time, the organisation may naturally converge on a handful of widely accepted tools.

1. **Consider a Central CI/CD Service for Key Use Cases**
   - Some organisations set up a central instance of Jenkins or a self-hosted GitLab/GitHub runner for teams to use, at least for shared services or highly regulated workloads.
   - Others rely on cloud-native solutions like [AWS CodePipeline/CodeBuild](<[https://](https://aws.amazon.com/codepipeline/)>), [Azure DevOps Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops&viewFallbackFrom=vsts), [GCP Cloud Build](https://cloud.google.com/build), or [OCI DevOps](https://www.oracle.com/pk/devops/devops-service/) for standardised approaches.

By defining core CI/CD principles, documenting shared patterns, and selectively offering a central service or recommended tool, you maintain team autonomy while reaping benefits of consistent practices.

### Nearly all teams use CI/CD, but tools and processes vary.

#### **How to determine if this good enough**

In this stage, nearly all projects have automated pipelines, but there may still be variety in the tooling. Traditional or manual deploys exist only in niche situations. You might consider this "good enough" if:

1. **Robust Automation Coverage**

   - A large percentage of code changes are tested and deployed automatically, minimising manual overhead.
   - Releases are quicker and more reliable.

1. **Limited Governance or Standardisation Issues**

   - Management is not demanding a single solution, and teams are content with the performance and reliability of their pipelines.

1. **Minor Complexity**
   - While multiple CI/CD solutions exist, knowledge sharing is still manageable, and staff do not struggle excessively when rotating between teams.

If your approach still creates confusion for new or cross-functional staff, you might gain from more standardisation. Also, advanced compliance or security scenarios may benefit from a more centralised approach.

#### **How to do better**

Below are **rapidly actionable** ways to refine widespread team-driven CI/CD:

1. **Introduce a DevOps Guild or CoE (Center of Excellence)**

   - Regularly meet with representatives from each team, discussing pipeline improvements, new features, or security issues.
   - Gather best practices in a single location.

1. **Further Integrate Security (DevSecOps)**

   - Encourage each pipeline to include vulnerability scanning, license checks, and compliance validations:
     - [AWS: Amazon Inspector or CodeGuru for security checks integrated into CodePipeline](https://docs.aws.amazon.com/codeguru/latest/security-ug/get-started-codepipeline.html)
     - [Azure DevOps: GitHub Advanced Security or Microsoft Defender for DevOps scanning in pipelines](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-devops-introduction)
     - [GCP Cloud Build: Automated security scanning via built-in or third-party tools (e.g., Snyk, Twistlock)](https://snyk.io/partners/google/)
     - [OCI DevOps: Integrate vulnerability scanning for container images or code using third-party scanning solutions triggered in the pipeline](https://docs.oracle.com/en-us/iaas/Content/devops/using/scan-code.htm)

1. **Standardise Basic Access & Observability**

   - Regardless of the pipeline tool, ensure:
     - A consistent approach to storing build logs and artifacts, tagging builds with version numbers, and applying RBAC for pipeline access.
   - This unifies the data your compliance officers or governance teams rely on.

1. **Automate Approvals for Critical Environments**

   - If production deployments require sign-off, implement a pipeline-based approval process:
     - e.g., Slack or Teams-based approval checks, or an integrated manual approval step in the pipeline (Azure DevOps, GitHub Actions, GCP Cloud Build triggers, or AWS CodePipeline).

1. **Measure Pipeline Performance and Reliability**
   - Gather metrics like average build time, deployment success rate, or lead time for changes.
   - Use these insights to target pipeline improvements or unify slow or error-prone steps.

By fostering a DevOps guild, infusing security checks, and unifying logging/artifact storage, you balance team autonomy with enough cross-cutting standards to maximise reliability and compliance.

### Everyone uses the same CI/CD process.

#### **How to determine if this good enough**

At this stage, your organisation has converged on a common CI/CD approach. You might consider it "good enough" if:

1. **Uniform Tools and Processes**

   - All teams share a similar pipeline framework, leading to consistent build, test, security, and deployment steps.
   - Onboarding is smoother—new staff learn one method rather than many.

1. **High Governance and Compliance Alignment**

   - Auditing deployments is straightforward, as logs, artifacts, and approvals follow the same structure.
   - Security or cost-optimisation checks are consistently applied across all services.

1. **Continuous Improvement**
   - Each pipeline improvement (e.g., adding new test coverage or scanning) benefits the entire organisation.
   - Teams collaborate on pipeline updates rather than reinventing the wheel.

While standardisation solves many issues, organisations must remain vigilant about tool stagnation. If the environment evolves (e.g., new microservices, containers, or serverless solutions), you should continuously update your pipeline approach.

#### **How to do better**

Below are **rapidly actionable** ways to refine your standardised CI/CD practices:

1. **Adopt Pipeline-as-Code for All**

   - Store pipeline definitions in Git, ensuring changes undergo the same review as application code:
     - [AWS CodePipeline definitions in YAML or using AWS CDK, version-controlled in GitHub/GitLab](https://docs.aws.amazon.com/codepipeline/latest/userguide/working-with-pipelines.html)
     - [Azure YAML Pipelines or GitHub Actions workflows, all stored in code repositories](https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-pipelines&tabs=yaml)
     - [GCP Cloud Build triggers defined in `cloudbuild.yaml`, fully version-controlled for each service](https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration)
     - [OCI DevOps pipeline definitions maintained in Git, ensuring consistent versioned pipeline code](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/overview.htm)

1. **Implement Advanced Deployment Strategies**

   - For example, canary or blue/green deployments:
     - This reduces downtime and risk during releases, making your pipelines more robust.

1. **Integrate Policy-as-Code**

   - Ensure pipeline runs automatically verify compliance with organisational policies:
     - e.g., scanning IaC templates or container images for security or cost violations, referencing official standards.

1. **Expand Observability**

   - Offer real-time dashboards for build success rates, deployment times, and test coverage.
   - Publish these metrics in a central location so leadership and cross-functional teams see progress.

1. **Encourage "Chaos Days" or Hackathons**
   - Let teams experiment with pipeline improvements, new integration patterns, or novel reliability tests.
   - This fosters ongoing innovation and ensures your standardised approach does not become static.

By version-controlling pipeline definitions, embracing advanced deployment patterns, integrating policy checks, and driving continuous improvement initiatives, you keep your standardised CI/CD framework at the cutting edge—well-aligned with UK public sector priorities of robust compliance, reliability, and efficiency.

**Keep doing what you’re doing,** and consider writing up your CI/CD journey in internal blog posts or knowledge bases. Submit pull requests to this guidance or related public sector best-practice repositories so others can learn from your experiences as well.
