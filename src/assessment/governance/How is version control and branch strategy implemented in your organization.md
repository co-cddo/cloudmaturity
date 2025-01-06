---
title: How is version control and branch strategy implemented in your organization?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Limited Version Control Usage:** Version control is used minimally, indicating a lack of robust processes for managing code changes and history.

#### **How to determine if this good enough**

Your organization may store code in a basic repository (sometimes not even using Git) with minimal branching or tagging. This might be "good enough" if:

1. **Small/Short-Term Projects**

   - Projects with a single developer or short lifespans, where overhead from advanced version control might not be justified.

1. **Low Collaboration**

   - Code changes are infrequent, or there’s no simultaneous development that requires merges or conflict resolution.

1. **Non-Critical Systems**
   - Failure or regression from insufficient version control poses a manageable risk with minimal user impact.

Still, even small projects benefit from modern version control practices (e.g., Git-based workflows). [NCSC’s advice on code security](https://www.ncsc.gov.uk/collection/developers-collection) and [NIST SP 800-53 CM controls](https://csrc.nist.gov/) recommend robust version control to ensure traceability, reduce errors, and support better compliance and security.

#### **How do I do better?**

Below are **rapidly actionable** next steps:

1. **Pick a Git-based Platform**

   - e.g., [GitHub](https://github.com/), [GitLab](https://gitlab.com/), [Bitbucket](https://bitbucket.org/), or a cloud vendor’s service ([AWS CodeCommit](https://aws.amazon.com/codecommit/), [Azure Repos](https://azure.microsoft.com/en-gb/services/devops/repos/), [GCP Source Repos](https://cloud.google.com/source-repositories), [OCI DevOps Repos](https://www.oracle.com/devops/)).
   - Start by simply pushing your code there.

1. **Require Commits for Every Change**

   - Prohibit direct edits on production servers or local code without commits.
   - referencing [NCSC best practices for code repository usage](https://www.ncsc.gov.uk/).

1. **Document Basic Workflow**

   - A short doc stating each developer must commit changes daily or at key milestones, helps trace history.
   - referencing [GOV.UK guide: "How GDS uses Git and GitHub"](https://technology.blog.gov.uk/).

1. **Tag Notable Versions**

   - If something is "ready for release," apply a Git tag or version (e.g., `v1.0`).
   - Minimizes guesswork about which commit correlates to a live environment.

1. **Plan for Future Branching Strategy**
   - Over 3–6 months, adopt a recognized model (e.g., GitHub Flow or trunk-based) to handle multiple contributors or features.

By using a modern Git-based platform, ensuring all changes result in commits, documenting a minimal workflow, tagging key releases, and scheduling a shift to a recognized branching strategy, you quickly move from minimal version control to a more robust approach that supports collaboration and security needs.

### **Custom, Unconventional Branch Strategy:** An invented branch strategy is in use, not aligning with standard methodologies and potentially leading to confusion or inefficiencies.

#### **How to determine if this good enough**

Your team might have created a unique branching model. This can be "good enough" if:

1. **Small Team Agreement**

   - Everyone understands the custom approach, and the risk of confusion is low.

1. **Limited Cross-Team Collaboration**

   - You rarely face external contributors or multi-department merges, so you haven’t encountered significant friction.

1. **Works for Now**
   - The custom approach meets current needs and hasn’t caused major merge issues or frequent conflicts yet.

That said, widely recognized branch strategies (GitFlow, GitHub Flow, trunk-based development) typically reduce confusion and are better documented. [NCSC’s developer best practices](https://www.ncsc.gov.uk/collection/developers-collection) and [NIST SP 800-160 secure engineering frameworks](https://csrc.nist.gov/) encourage standard solutions for consistent security and DevOps.

#### **How do I do better?**

Below are **rapidly actionable** methods to move from a custom approach to a standard one:

1. **Map Existing Branching to a Known Strategy**

   - Compare your custom steps to recognized flows like [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow), [trunk-based](https://trunkbaseddevelopment.com/), or [Azure DevOps typical branching](https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance).
   - Identify similarities or differences.

1. **Document a Cross-Reference**

   - If you choose GitFlow, rename your custom "hotfix" or "dev" branches to align with standard naming, making it easier for new joiners.

1. **Simplify Where Possible**

   - Some custom strategies overcomplicate merges. Consolidate or reduce the number of long-lived branches to avoid confusion.

1. **Provide a Quick "Cheatsheet"**

   - e.g., a short wiki page or PDF explaining how to handle new feature branches, bug fixes, or emergency patches:
     - referencing [GOV.UK or departmental dev guidelines on version control naming conventions](https://www.gov.uk/service-manual).

1. **Pilot a Standard Flow on a New Project**
   - In parallel, adopt a recognized model (e.g., GitHub Flow) on a small project to gain team familiarity before rolling it out more widely.

By comparing your custom model to standard flows, documenting a cross-reference, simplifying branch use, providing a quick reference, and trialing a standard approach on a new project, you reduce complexity and align with recognized best practices.

### **Adapted Recognized Branch Strategy:** The organization adapts a recognized branch strategy (like GitFlow or GitHubFlow), tailoring it to specific needs while maintaining some standard practices.

#### **How to determine if this good enough**

You follow a known model (GitFlow, trunk-based, or GitHub Flow) but adapt it for local constraints. This is often "good enough" if:

1. **Shared Terminology**

   - Most developers grasp main concepts (e.g., "feature branches," "release branches"), reducing confusion.

1. **Appropriate for Complexity**

   - If your application requires multiple parallel releases or QA stages, GitFlow might be suitable, or if you have frequent small merges, trunk-based might excel.

1. **Relatively Low Merge Conflicts**
   - The adapted approach helps you handle concurrent changes with minimal chaos.

If you still encounter friction (e.g., complex release branches rarely used, too many merges), you could refine or consider a simpler approach. [NCSC’s DevSecOps guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-53 CM controls](https://csrc.nist.gov/) underscore the importance of an approach that’s not overly burdensome yet robust enough for security and compliance.

#### **How do I do better?**

Below are **rapidly actionable** improvements:

1. **Document the Adaptations**

   - Clarify how your version of GitFlow or trunk-based differs from the original.
   - Minimizes onboarding confusion.

1. **Regularly Revisit Branch Usage**

   - If certain branches (like "hotfix") see little use, consider simplifying them out of the process:
     - referencing [NCSC guidance on agile software iteration and trunk-based dev for speed and clarity](https://www.ncsc.gov.uk/).

1. **Incorporate CI/CD Automation**

   - Whenever a new branch is pushed, run automated tests or security scans:
     - e.g., [AWS CodePipeline](https://aws.amazon.com/codepipeline/), [CodeBuild triggers](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html), [Azure DevOps pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines), [GCP Cloud Build triggers](https://cloud.google.com/build/docs/automating-builds/build-triggers), [OCI DevOps pipelines](https://www.oracle.com/devops/pipelines/).

1. **Train New Team Members**

   - Provide short "branch strategy 101" sessions, referencing well-known Git tutorials.
   - referencing [GOV.UK "How GDS uses Git" or NCSC’s developer resource library](https://www.ncsc.gov.uk/).

1. **Simplify for Next Project**
   - If you find the strategy too complex for frequent releases, consider trunk-based or GitHub Flow on your next new service or microservice.

By documenting your adaptations clearly, removing unused branches, adding CI/CD hooks for every branch commit, onboarding new developers, and evaluating simpler flows for future projects, you ensure your branch strategy remains practical and efficient.

### **Textbook Implementation of a recognized branch strategy:** The organization adheres strictly to a model such as GitFlow, a recognized branch strategy suitable for managing complex development processes.

#### **How to determine if this good enough**

You employ a formal version of GitFlow (or a similarly structured approach) with separate "develop," "release," "hotfix," and "feature" branches. It can be "good enough" if:

1. **Complex or Multiple Releases**

   - You manage multiple versions or release cycles in parallel, which GitFlow accommodates well.

1. **Stable Processes**

   - Teams understand and follow GitFlow precisely, with few merges or rebase conflicts.

1. **Clear Roles**
   - Release managers or QA teams appreciate the distinct "release branch" or "hotfix branch" logic, referencing [NCSC’s secure release patterns or NIST SP 800-160 DevSecOps suggestions](https://www.ncsc.gov.uk/).

If you see minor friction in fast iteration or dev complaining about overhead, you might consider a simpler trunk-based approach. [GOV.UK Service Manual on continuous delivery](https://www.gov.uk/service-manual) suggests simpler flows often suffice for agile teams.

#### **How do I do better?**

Below are **rapidly actionable** ways to optimize a textbook GitFlow-like approach:

1. **Apply Automated Merges/Sync**

   - Tools that automatically keep "develop" and "main" in sync after merges reduce manual merges or missed fixes:
     - referencing [GitHub Actions](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration), [Azure DevOps auto-merge solutions](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines), [AWS CodeBuild-based auto merges](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html), [GCP Cloud Build triggers](https://cloud.google.com/build/docs/automating-builds/build-triggers).

1. **Monitor Branch Sprawl**

   - Limit the number of concurrent "release" branches.
   - If dev sees multiple releases with cross-pollination, consider if a simpler model might be more agile.

1. **Include Security Checks per Branch**

   - For each "hotfix" or "feature" branch, run security scans (SAST/DAST):
     - referencing [NCSC DevSecOps scanning tools or NIST SP 800-53 for secure code checks](https://www.ncsc.gov.uk/).

1. **Document Rarely Used Branches**

   - If your GitFlow includes "hotfix" or "maintenance" branches rarely used, confirm usage patterns or retire them for simplicity.

1. **Evaluate Branch Strategy Periodically**
   - Every 6–12 months, revisit whether GitFlow remains necessary or trunk-based dev might serve better for speed.

By automating merges, controlling branch sprawl, embedding security checks into every branch, documenting rarely used branches, and regularly re-evaluating your overall branching structure, you keep your textbook GitFlow or similar approach practical and effective.

### **Textbook Implementation of a streamlined branch strategy:** The organization follows a streamlined branch strategy ideal for continuous delivery and simplified collaboration such as GitHubFlow precisely.

#### **How to determine if this good enough**

You adopt a minimal branching approach—like trunk-based development or GitHub Flow—emphasizing rapid merges and continuous integration. It’s likely "good enough" if:

1. **Frequent Release Cadence**

   - You can deploy changes daily or multiple times per day without merge conflicts piling up.

1. **Highly Agile Culture**

   - The team is comfortable merging into `main` or `trunk` quickly, with automated tests ensuring no regressions.

1. **Confidence in Automated Tests**
   - A robust CI pipeline instills trust that quick merges rarely break production.

Still, for some large or multi-release scenarios (like long-term LTS versions), a more complex branching model might help. [NCSC agile DevSecOps guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-160 for secure engineering at scale](https://csrc.nist.gov/) provide additional references on maintaining code quality with frequent releases.

#### **How do I do better?**

Below are **rapidly actionable** ways to refine a minimal branch strategy:

1. **Expand Test Coverage**

   - Ensure automated tests (unit, integration, security scans) run on every PR or push to `main`:
     - referencing [AWS CodeBuild with check runs](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html), [Azure DevOps build pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines), [GCP Cloud Build triggers](https://cloud.google.com/build/docs/automating-builds/build-triggers), [OCI DevOps test stages](https://www.oracle.com/devops/pipelines/).

1. **Establish Feature Flags**

   - If new code is not fully ready for users, hide it behind toggles:
     - referencing [LaunchDarkly](https://launchdarkly.com/), [Azure App Configuration with feature flags](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-flags), [AWS AppConfig](https://aws.amazon.com/appconfig/), [GCP config toggles](https://cloud.google.com/config-toggles), [OCI config solutions](https://www.oracle.com/devops/pipelines/).

1. **Enforce Peer Review**

   - Before merging to `main`, at least one peer or senior dev reviews the PR, referencing [GOV.UK dev guidelines for code review best practices](https://www.gov.uk/service-manual).

1. **Set Real-Time Release Observability**

   - After merges, watch metrics and logs for anomalies. Roll back quickly if issues arise:
     - referencing [AWS CloudWatch + CodeDeploy auto-rollback](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-view-events.html), [Azure DevOps pipeline with canary checks](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines), [GCP Rolling updates with GKE](https://cloud.google.com/kubernetes-engine/docs/concepts/rollouts), [OCI deployment checks and auto-rollback](https://www.oracle.com/devops/pipelines/).

1. **Encourage Short-Lived Branches**
   - Keep branches open for days or less, not weeks, ensuring minimal drift from `main` and fewer merge conflicts.

By strengthening test coverage, leveraging feature flags, requiring peer reviews, observing real-time release metrics, and promoting short-lived branches, you optimize a streamlined approach that fosters continuous delivery and rapid iteration aligned with modern DevSecOps standards.

**Keep doing what you’re doing,** and consider sharing your version control and branching strategy successes through blog posts or contributing them as best practices. This helps other UK public sector organizations adopt effective workflows aligned with NCSC, NIST, and GOV.UK guidance for secure, efficient software development.
