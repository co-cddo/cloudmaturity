---
title: How do you manage deployment and QA?
tags: operations
eleventyNavigation:
  parent: operations
---

### By hand, on a schedule.

#### **How to determine if this good enough**

In this stage, your organisation relies on human-driven steps (e.g., emailing code changes to QA testers, manual approval boards, or ad hoc scripts) for both deployment and testing. You might consider it "good enough" if:

1. **Very Limited Release Frequency**

   - You update your applications once every few months, and thus can handle manual overhead without major inconvenience.

1. **Low Criticality**

   - The services do not require urgent patches or security updates on short notice, so the lack of continuous integration poses minimal immediate risk.

1. **Simplicity and Stability**
   - The application is relatively stable, and major functional changes are rare, making manual QA processes manageable.

However, manual scheduling severely limits agility and can introduce risk if errors go unnoticed due to a lack of automated testing. For many UK public sector services, NCSC guidelines encourage more frequent updates and better security practices, which usually involve continuous integration.

#### **How to do better**

Below are **rapidly actionable** steps to move beyond entirely manual QA and deployments:

1. **Introduce a Simple CI Pipeline**

   - Begin by automating at least the build and basic test steps:
     - [AWS CodeBuild with minimal scripts for unit tests](https://docs.aws.amazon.com/codebuild/latest/userguide/what-is-codebuild.html)
     - [Azure DevOps Pipelines or GitHub Actions for compiling code and running basic test suites](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines)
     - [GCP Cloud Build for building Docker images and performing quick checks](https://cloud.google.com/build/docs/overview)
     - [OCI DevOps build pipelines for fundamental build/test tasks](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/devopsoverview.htm)

1. **Document a Standard Release Checklist**

   - Ensure each deployment follows a consistent procedure, covering essential steps like code review, environment checks, and sign-off by the project lead.

1. **Schedule a Pilot for Automated QA**

   - If you typically rely on manual testers, pick a small piece of your test suite to automate:
     - e.g., smoke tests or a top-priority user journey.
   - This pilot can demonstrate the value of automation to stakeholders.

1. **Set Clear Goals for Reducing Manual Steps**

   - Aim to reduce "time to deploy" or "time spent on QA" by a certain percentage over the next quarter, aligning with agile or DevOps improvement cycles recommended by [GOV.UK Service Manual](https://www.gov.uk/service-manual) practices.

1. **Review Security Compliance**
   - Consult [NCSC’s DevSecOps recommendations](https://www.ncsc.gov.uk/) and [NIST SP 800-160 Vol 2](https://csrc.nist.gov/) for integrating secure coding checks or scanning into your newly introduced pipeline steps.

By establishing minimal CI automation, clarifying release steps, and piloting automated QA, you build confidence in incremental improvements, setting the foundation for more robust pipelines.

### Some automation, but most deployments are manual and rare.

#### **How to determine if this good enough**

If your organisation has introduced some automated tests or a partial CI pipeline (e.g., unit tests running on commits), yet still deploys rarely or with manual checks, you might find it "good enough" if:

1. **Low or Medium Release Velocity**

   - Even with some test automation, you prefer scheduled or larger releases rather than continuous iteration.

1. **Limited Immediate Risk**

   - The application can handle occasional updates without strong demands for real-time patches or new features.

1. **Stable Funding or Resource Constraints**
   - You have a moderate DevOps or QA budget, which doesn’t push for fully automated, frequent deployments yet.

While partial automation improves reliability, infrequent deployments may slow responses to user feedback or security issues. [NCSC guidance on secure system development](https://www.ncsc.gov.uk/) encourages a faster feedback loop to patch vulnerabilities promptly.

#### **How to do better**

Below are **rapidly actionable** methods to evolve from partial automation:

1. **Expand Automated Tests to Integration or End-to-End (E2E)**

   - Move beyond simple unit tests:
     - [AWS Device Farm or AWS CodePipeline integration steps for E2E tests on a staging environment](https://docs.aws.amazon.com/devicefarm/latest/developerguide/test-types.html)
     - [Azure DevOps test plans for browser-based or API-based integration tests](https://docs.microsoft.com/en-us/azure/devops/test/test-plans/create-a-test-plan)
     - [GCP Cloud Build triggers that run Selenium or Cypress E2E tests for your web app](https://cloud.google.com/build/docs/overview)
     - [OCI DevOps pipeline with advanced test stages for functional and integration checks](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/devopsoverview.htm)

1. **Adopt a More Frequent Release Cadence**

   - Commit to at least monthly or bi-weekly releases, allowing you to discover issues earlier and respond to user needs faster.

1. **Introduce Automated Rollback or Versioning**

   - Store artifacts in a repository for easier rollback:
     - [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html), [ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html), or [CodeArtifact](https://docs.aws.amazon.com/codeartifact/latest/userguide/welcome.html); [Azure Artifacts](https://docs.microsoft.com/en-us/azure/devops/artifacts/overview) or [Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/); [GCP Artifact Registry](https://cloud.google.com/artifact-registry/docs/overview); [OCI Container Registry](https://docs.oracle.com/en-us/iaas/Content/Registry/Concepts/registryoverview.htm)
   - Make rollback steps part of your pipeline script to minimise disruption if a new release fails QA in production.

1. **Refine Manual Approvals**

   - If manual gates remain, streamline them with a single sign-off or Slack-based approvals rather than long email chains:
     - This ensures partial automation doesn’t stall at a manual step for days.

1. **Consult NIST SP 800-53**
   - Evaluate recommended controls for software release (CM-3, SA-10) and integrate them into your pipeline for better compliance documentation.

By broadening test coverage, increasing release frequency, and automating rollbacks, you lay the groundwork for more frequent, confident deployments that align with modern DevOps practices.

### Integrated approach, with some automation and regular checks.

#### **How to determine if this good enough**

In this scenario, your pipelines are well-defined. Automated tests run for each build, and you have a consistent process connecting deployment to QA. You might judge it "good enough" if:

1. **Predictable Release Cycles**

   - You typically deploy weekly or bi-weekly, and your environment has minimal issues.

1. **Moderately Comprehensive Testing**

   - You have decent coverage across unit, integration, and some acceptance tests.

1. **Stable or Evolving DevOps Culture**
   - Teams trust the pipeline, and it handles the majority of QA checks automatically, though some manual acceptance or security tests might remain.

If your current approach reliably meets user demands and mitigates risk, it can suffice. Yet you can usually speed up feedback and further reduce manual overhead by adopting advanced CI/CD techniques.

#### **How to do better**

Below are **rapidly actionable** ways to enhance integrated deployment and QA:

1. **Add Security and Performance Testing**

   - Integrate security scanning tools into the pipeline:
     - [AWS CodeGuru Security, Amazon Inspector, or 3rd-party SAST/DAST checks triggered in CodePipeline](https://docs.aws.amazon.com/codeguru/latest/security-ug/what-is-codeguru-security.html)
     - [Azure DevOps with GitHub Advanced Security or Microsoft Defender for DevOps scanning your code base](https://docs.microsoft.com/en-us/azure/devops/security/defender-for-devops/overview)
     - [GCP Cloud Build plus container vulnerability scans or SAST steps using open-source tools](https://cloud.google.com/build/docs/overview)
     - [OCI DevOps pipeline integrated with vulnerability scanning on container images or code dependencies](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/devopsoverview.htm)
   - Also consider lightweight performance tests in staging to detect regressions early.

1. **Implement Parallel Testing or Test Suites**

   - If test execution time is long, parallelise them:
     - e.g., AWS CodeBuild parallel builds, Azure Pipelines multi-job phases, GCP Cloud Build multi-step concurrency, or OCI DevOps parallel test runs.

1. **Introduce Slack/Teams Notifications**

   - Notify dev and ops channels automatically about pipeline status, test results, and potential regressions:
     - Encourages quick fixes and fosters a more collaborative environment.

1. **Adopt Feature Flag Approaches**

   - Deploy new code continuously but hide features behind flags:
     - This ensures "not fully tested or accepted" features remain off for end users until QA sign-off.

1. **Reference GOV.UK and NCSC**
   - [GOV.UK agile delivery guidelines](https://www.gov.uk/service-manual/agile-delivery) can help refine iterative approaches.
   - [NCSC advice on DevSecOps pipelines](https://www.ncsc.gov.uk/) encourages secure integration from start to finish.

By strengthening security/performance checks, parallelising tests, using real-time notifications, and employing feature flags, you further streamline your integrated QA pipeline while maintaining robust checks and balances.

### We use CI/CD pipelines with automated testing and frequent deployments.

#### **How to determine if this good enough**

Here, your organisation relies on a sophisticated, automated pipeline that runs on every code commit or merges. You might consider it "good enough" if:

1. **High Release Frequency**

   - Deployments can happen multiple times a week or day with minimal risk.

1. **Robust Automated Testing**

   - Your pipeline covers unit, integration, functional, and security tests, with little reliance on manual QA steps.

1. **Low MTTR (Mean Time to Recovery)**

   - Issues discovered post-deployment can be quickly rolled back or patched, reflecting a mature DevOps culture.

1. **Compliance and Audit-Friendly**
   - Pipeline logs, versioned artifacts, and automated checks document the entire release cycle for compliance with [NCSC guidelines](https://www.ncsc.gov.uk/) or [NIST requirements](https://csrc.nist.gov/).

Even so, you may refine or extend your pipeline (e.g., ephemeral testing environments, advanced canary releases, or ML-based anomaly detection in logs) to further boost agility and reliability.

#### **How to do better**

Below are **rapidly actionable** ways to refine your existing CI/CD with automated testing:

1. **Shift Left Security**

   - Embed security tests (SAST, DAST, license compliance) earlier in the pipeline:
     - e.g., scanning pull requests or pre-merge checks for known vulnerabilities.

1. **Adopt Canary/Blue-Green Deployments**

   - Pair your stable CI/CD pipeline with progressive exposure of new versions to real traffic:
     - [AWS CodeDeploy or App Mesh for canary deployments](https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html)
     - [Azure Deployment Slots or Traffic Manager for partial rollouts in Azure Web Apps/AKS](https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
     - [GCP’s rolling updates or traffic splitting in GKE/App Engine Cloud Deploy for advanced release strategies](https://cloud.google.com/deploy/docs/deploying-applications-with-cloud-deploy)
     - [OCI load balancing and policy-based traffic splitting, supporting canary-based incremental rollouts](https://docs.oracle.com/en-us/iaas/Content/DevOps/Concepts/devopsoverview.htm)

1. **Implement Automated Rollback**

   - If user impact or error rates spike post-deployment, revert automatically to the previous version without manual steps.

1. **Use Feature Flags for Safer Experiments**

   - Deploy code continuously but toggle features on gradually.
   - This approach de-risks large releases and speeds up delivery.

1. **Encourage Cross-Government Collaboration**
   - Share pipeline patterns with other public sector bodies, referencing [GOV.UK community guidance on agile/DevOps communities](https://www.gov.uk/service-manual/agile-delivery).

By deepening security integration, adopting advanced deployment tactics, and refining rollbacks or feature flags, you enhance an already stable CI/CD pipeline. This leads to even faster, safer releases aligned with top-tier DevSecOps practices recommended by NCSC and NIST.

### We create short-lived test environments as needed, with a high degree of automation.

#### **How to determine if this good enough**

At this top maturity level, your pipelines can spin up full-stack test environments for each feature branch or bug fix, and once tests pass, they’re torn down automatically. You might consider it "good enough" if:

1. **High Flexibility, Minimal Resource Waste**

   - QA can test multiple features in parallel without overhead of long-lived staging environments.

1. **Extremely Fast Feedback Loops**

   - Developers receive near-instant validation that their changes work end-to-end.

1. **Advanced Automation and Observability**

   - The pipeline not only provisions environments but also auto-injects test data, runs comprehensive tests, and collects logs/metrics for quick analysis.

1. **Seamless Integrations**
   - Data security, user auth, or external services are seamlessly mocked or linked without complex manual steps.

While ephemeral environments typically reflect leading-edge DevOps, there’s always scope for refining cost efficiency, improving advanced security automation, or further integrating real-time analytics.

#### **How to do better**

Even at this apex, there are **rapidly actionable** improvements:

1. **Adopt Policy-as-Code for Environment Provisioning**

   - Ensure ephemeral environments adhere to data governance, resource tagging, and security baselines automatically:
     - [AWS Service Catalog or AWS CloudFormation with pre-approved templates, integrated with OPA or AWS Config](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html)
     - [Azure Bicep or Terraform with Azure Policy scanning ephemeral infra for compliance](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview)
     - [GCP Deployment Manager or Terraform with organization policy checks, gating ephemeral environments pre-creation](https://cloud.google.com/deployment-manager/docs/overview)
     - [OCI Resource Manager or Terraform integrated with policy engines to ensure ephemeral env compliance](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Concepts/stacksoverview.htm)

1. **Automated Data Masking or Synthetic Data**

   - If ephemeral environments need real data, ensure compliance with UK data protection regs:
     - Use synthetic test data or anonymise production copies to maintain NCSC data security best practices.

1. **Inject Chaos or Performance Tests**

   - Incorporate chaos engineering (e.g., random container/network failures) and load tests in ephemeral environments:
     - This ensures high resilience under real-world stress.

1. **Optimise Environment Lifecycle**

   - Monitor resource usage to avoid ephemeral environments lingering longer than needed:
     - e.g., automatically tear down environments if no activity is detected after 48 hours.

1. **Collaborate with UK Gov or Local Councils**
   - Offer case studies on ephemeral environment success, referencing [GOV.UK best practices in agile dev and continuous improvement](https://www.gov.uk/service-manual).

By embedding policy-as-code, securing data in ephemeral environments, introducing chaos/performance tests, and aggressively managing environment lifecycles, you ensure your pipeline remains at the cutting edge—fully aligned with advanced DevOps capabilities recommended by NCSC, NIST, and other relevant bodies.

**Keep doing what you’re doing,** and consider writing up your experiences or creating blog posts about your ephemeral environment successes. You can also submit pull requests to this guidance or other public sector best-practice repositories, helping others in the UK public sector evolve their QA pipelines and deployment processes.
