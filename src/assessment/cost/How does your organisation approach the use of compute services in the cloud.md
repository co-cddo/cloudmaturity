---
title: How does your organisation approach the use of compute services in the cloud?
tags: cost
eleventyNavigation:
  parent: cost
---

### **Long-Running Homogeneous VMs:** Workloads are consistently deployed on long-running, homogeneously sized Virtual Machines (VMs), without variation or optimisation.

#### **How to determine if this good enough**

An organisation that relies on "Long-Running Homogeneous VMs" typically has static infrastructure: they stand up certain VM sizes—often chosen arbitrarily or based on outdated assumptions—and let them run continuously. For a UK public sector body, this may appear straightforward if:

1. **Predictable, Low-Complexity Workloads**

   - Your compute usage doesn’t fluctuate much (e.g., a small number of internal line-of-business apps with stable user counts).
   - You don’t foresee major surges or dips in demand.
   - The overhead of changing compute sizes or rearchitecting to dynamic services might seem unnecessary.

1. **Minimal Cost Pressures**

   - If your monthly spend is low enough to be tolerated within your departmental budget or you lack strong impetus from finance to optimise further.
   - You might feel that it’s "not broken, so no need to fix it."

1. **Legacy Constraints**

   - Some local authority or government departments could be running older applications that are hard to containerise or re-platform. If you require certain OS versions or on-prem-like architectures, homogeneous VMs can seem "safe."

1. **Limited Technical Skills or Resources**
   - You may not have in-house expertise to manage containers, function-based services, or advanced orchestrators.
   - If your main objective is stability and you have no immediate impetus to experiment, you might remain with static VM setups.

If you fall into these categories—low complexity, legacy constraints, stable usage, minimal cost concerns—then "Long-Running Homogeneous VMs" might indeed be "good enough." However, many UK public sector cloud strategies now emphasize cost efficiency, scalability, and elasticity, especially under increased scrutiny of budgets and service reliability. Sticking to homogeneous, always-on VMs without optimisation can lead to wasteful spending, hamper agility, and prevent future readiness.

#### **How to do better**

Here are **rapidly actionable** improvements to help you move beyond purely static VMs:

1. **Enable Basic Monitoring and Cost Insights**

   - Even if you keep long-running VMs, gather usage metrics and financial data:
     - [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) and [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/).
     - [Azure Monitor](https://azure.microsoft.com/en-us/services/monitor/) and [Azure Cost Management](https://azure.microsoft.com/en-us/services/cost-management/).
     - [GCP Monitoring](https://cloud.google.com/monitoring) and [Billing Reports](https://cloud.google.com/billing/docs/reports).
     - [OCI Monitoring](https://www.oracle.com/cloud/monitoring/) and [Cost Analysis](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm).
     - [IBM Cloud Billing](https://cloud.ibm.com/docs/account?topic=account-charges) and [IBM Cost Estimator](https://www.ibm.com/cloud/cloud-calculator).
   - Check CPU, memory, and storage utilisation. If these metrics show consistent underuse (like 10% CPU usage around the clock), it’s a sign you can downsize or re-architect.

1. **Leverage Built-in Right-sizing Tools**

   - Major cloud providers offer "right-sizing" recommendations:
     - [AWS Compute Optimiser](https://aws.amazon.com/compute-optimizer/) to get suggestions for smaller or larger instance sizes.
     - [Azure Advisor for VM right-sizing](https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations) to identify underutilised virtual machines.
     - [GCP Recommender for machine types](https://cloud.google.com/recommender/docs/understanding-vm-machine-type-recommendations) to optimise resource utilisation.
     - [OCI Workload and Resource Optimisation](https://www.oracle.com/cloud/compute/) for tailored resource recommendations.
     - [IBM Cloud Resource Controller](https://cloud.ibm.com/apidocs/resource-controller/resource-controller) is the next-generation IBM Cloud platform provisioning layer that manages the lifecycle of IBM Cloud resources in a customer account.
   - Make a plan to apply at least one or two right-sizing recommendations each quarter. This is a quick, low-risk path to cost savings and better resource use.

1. **Introduce Simple Scheduling**

   - If some VMs are only needed during business hours, schedule automatic shutdown at night or on weekends:
     - [AWS Instance Scheduler (Solution Implementation)](https://aws.amazon.com/solutions/implementations/instance-scheduler/).
     - [Azure Automation for start/stop of VMs](https://learn.microsoft.com/en-us/azure/automation/automation-solution-vm-management).
     - [GCP Cloud Scheduler plus scripts for VM control](https://cloud.google.com/compute/docs/instances/schedule-instance-start-stop).
     - [OCI Scheduled Autoscaling or Cron-based scripts](https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/schedulinginstanceactions.htm).
   - A single action to stop dev/test or lightly used environments after hours can yield noticeable cost (and energy) savings.

1. **Conduct a Feasibility Check for a Small Container Pilot**

   - Even if you retain most workloads on VMs, pick one small application or batch job and try containerising it:
     - [AWS Fargate](https://aws.amazon.com/fargate/) or [Amazon EKS](https://aws.amazon.com/eks/) for containers.
     - [Azure Container Instances](https://azure.microsoft.com/en-us/services/container-instances/) or [Azure Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/services/kubernetes-service/).
     - [Google Cloud Run](https://cloud.google.com/run) or [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine).
     - [Oracle Cloud Infrastructure (OCI) Container Instances](https://www.oracle.com/cloud-native/container-engine-kubernetes/) or [Oracle Kubernetes Engine (OKE)](https://www.oracle.com/cloud-native/container-engine-kubernetes/).
     - There are two options on IBM Cloud for a container platform, [Redhat Openshift on IBM Cloud](https://cloud.ibm.com/docs/openshift?topic=openshift-getting-started) or [IBM Cloud Kubernetes Service](https://cloud.ibm.com/docs/containers?topic=containers-getting-started)
   - By piloting a single container-based workload, you can assess potential elasticity and determine whether container orchestration solutions meet your needs. This approach allows for quick experimentation with minimal risk.

1. **Raise Awareness with Internal Stakeholders**
   - Share simple usage and cost graphs with your finance or leadership teams. Show them the difference between "always-on" vs. "scaled" or "scheduled" usage.
   - This could drive more formal mandates or budget incentives to encourage partial re-architecture or adoption of short-lived compute in the future.

By monitoring usage, applying right-sizing, scheduling idle time, and introducing a small container pilot, you can meaningfully reduce waste. Over time, you’ll build momentum toward more flexible compute strategies while still respecting the constraints of your existing environment.

### **Primarily Long-Running VMs with Limited Experimentation:** Most workloads are on long-running VMs, with some limited experimentation in containers or function-based services for non-critical tasks.

#### **How to determine if this good enough**

Organisations in this stage have recognised the benefits of more dynamic compute models—like containers or serverless—but apply them only in a small subset of cases. You might be "good enough" if:

1. **Core Workloads Still Suited to Static VMs**

   - Perhaps your main applications are large, monolithic solutions that can’t easily shift to containers or functions.
   - The complexity of re-platforming may outweigh the immediate gains.

1. **Selective Use of Modern Compute**

   - You have tested container-based or function-based solutions for simpler tasks (e.g., cron jobs, internal scheduled data processing, or small web endpoints).
   - The results are encouraging, but you haven’t had the internal capacity or business priority to expand further.

1. **Comfortable Cost Baseline**

   - You’ve introduced auto-shutdown or partial right-sizing for your VMs, so your costs are not spiraling.
   - Leadership sees no urgent impetus to push deeper into containers or serverless, perhaps because budgets remain stable or there’s no urgent performance/elasticity requirement.

1. **Growing Awareness of Container or Serverless Advantages**
   - Some staff or teams are championing more frequent usage of advanced compute.
   - The IT department sees potential, but organisational inertia, compliance considerations, or skill gaps limit widespread adoption.

If the majority of your mission-critical applications remain on VMs and you see stable performance within budget, this may be "enough" for now. However, if the cloud usage is expanding, or if your department is under pressure to modernise, you might quickly find you miss out on elasticity, cost efficiency, or resilience advantages that come from broader container or serverless adoption.

#### **How to do better**

Here are **actionable** next steps to accelerate your modernisation journey without overwhelming resources:

1. **Expand Container/Serverless Pilots in a Structured Way**

   - Identify a short list of low-risk workloads that could benefit from ephemeral compute, such as batch processing or data transformation.
   - Use native solutions to reduce complexity:
     - [AWS Fargate with ECS/EKS for container-based tasks without server management](https://aws.amazon.com/fargate/).
     - [Azure Container Apps](https://azure.microsoft.com/en-us/products/container-apps/) or [Azure Functions](https://azure.microsoft.com/en-us/products/functions/) for event-driven workloads.
     - [Google Cloud Run](https://cloud.google.com/run) for container-based microservices or [Google Cloud Functions](https://cloud.google.com/functions).
     - [Oracle Cloud Infrastructure (OCI) Container Instances](https://www.oracle.com/cloud/cloud-native/container-instances/) or [OCI Functions](https://www.oracle.com/cloud-native/functions/) for short-lived tasks.
   - Document real cost/performance outcomes to present a stronger case for further expansion.

1. **Implement Granular VM Auto-Scaling**

   - Even with VMs, you can configure auto-scaling groups or scale sets to handle changing loads:
     - [AWS Auto Scaling Groups with Target Tracking Policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html).
     - [Azure Virtual Machine Scale Sets with rules for CPU/memory usage](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview).
     - [GCP Managed Instance Groups with auto-scaling policies](https://cloud.google.com/compute/docs/autoscaler/).
     - [OCI Instance Pools with autoscaling based on CPU or memory usage](https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/autoscalinginstancepools.htm).
   - This ensures you pay only for the capacity you need during peak vs. off-peak times.

1. **Use Container Services for Non-Critical Production**

   - If you have a stable container proof-of-concept, consider migrating a small but genuine production workload. Examples:
     - Internal APIs, internal data analytics pipelines, or front-end servers that can scale up/down.
     - Focus on microservices that do not require extensive refactoring.
   - This fosters real operational experience, bridging from "non-critical tasks" to "production readiness."

1. **Leverage Cloud Marketplace or Government Frameworks**

   - Explore container-based solutions or DevOps tooling that might be available under G-Cloud or Crown Commercial Service frameworks.
   - Some providers offer managed container solutions pre-configured for compliance or security—this can reduce friction around governance.

1. **Train or Upskill Teams**

   - Provide short courses or lunch-and-learns on container orchestration (Kubernetes, ECS, AKS, etc.) or serverless fundamentals.
   - Many vendors have free or low-cost training:
     - [AWS Training and Certification on serverless/container topics](https://aws.amazon.com/training/).
     - [Microsoft Learn modules for Azure Kubernetes Service, Azure Functions](https://learn.microsoft.com/en-us/training/).
     - [Google Cloud Skills Boost for Cloud Run or GKE fundamentals](https://cloud.google.com/training/).
     - [OCI Learning Paths for container and function deployments](https://learn.oracle.com/ols/learning-paths).

   Building confidence and skills helps teams adopt more advanced compute models.

Through these steps—structured expansions of containerised or serverless pilots, improved auto-scaling of VMs, and staff training—your organisation can gradually shift from "limited experimentation" to a more balanced compute ecosystem. The result is improved agility, potential cost savings, and readiness for more modern architectures.

### **Mixed Use with Some Advanced Compute Options:** Some production workloads are run in containers or function-based compute services. Ad-hoc use of short-lived VMs is practiced, with efforts to right-size based on workload needs.

#### **How to determine if this good enough**

This stage indicates a notable transformation: your organisation uses multiple compute paradigms. You have container-based or serverless workloads in production, you sometimes spin up short-lived VMs for ephemeral tasks, and you’re actively right-sizing. It may be "good enough" if:

1. **Functional, Multi-Modal Compute Strategy**

   - You’ve proven that containers or serverless can handle real production demands (e.g., public-facing services, departmental applications).
   - VMs remain important for some workloads, but you adapt or re-size them more frequently.

1. **Solid Operational Knowledge**

   - Your teams are comfortable deploying to a container platform (e.g., Kubernetes, ECS, Azure WebApps for containers, etc.) or using function-based services in daily workflows.
   - Monitoring and alerting are configured for both ephemeral and long-running compute.

1. **Balanced Cost and Complexity**

   - You have a handle on typical monthly spend, and finance sees a correlation between usage spikes and cost.
   - You might not be fully optimising everything, but you rarely see large, unexplained bills.

1. **Clear Upsides from Modern Compute**
   - You’ve recognised that certain microservices perform better or cost less on serverless or containers.
   - Cultural buy-in is growing: multiple teams express interest in flexible compute models.

If these points match your environment, your "Mixed Use" approach might currently satisfy your user needs and budget constraints. However, you might still see opportunities to refine deployment methods, unify your management or monitoring, and push for greater elasticity. If you suspect further cost savings or performance gains are possible—or you want a more standardised approach across the organisation—further advancement is likely beneficial.

#### **How to do better**

Below are **rapidly actionable** ways to enhance your mixed compute model:

1. **Adopt Unified Deployment Pipelines**

   - Strive for standard tooling that can deploy both VMs and container/serverless environments. For instance:
     - [AWS CodePipeline](https://aws.amazon.com/codepipeline/) or [AWS CodeBuild](https://aws.amazon.com/codebuild/) integrated with ECS, Lambda, EC2, etc.
     - [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) or [GitHub Actions](https://github.com/features/actions) for VMs, AKS, Azure Functions.
     - [Google Cloud Build](https://cloud.google.com/build) for GCE, GKE, Cloud Run deployments.
     - [OCI DevOps service](https://www.oracle.com/devops/) for flexible deployments to OKE, Functions, or VMs.
   - This reduces fragmentation and fosters consistent best practices (code review, automated testing, environment provisioning).

1. **Enhance Observability**

   - Implement a single monitoring stack that captures logs, metrics, and traces across VMs, containers, and functions:
     - [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) combined with [AWS X-Ray](https://aws.amazon.com/xray/) for distributed tracing in containers or Lambda.
     - [Azure Monitor](https://azure.microsoft.com/en-us/services/monitor/) along with [Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-trace-data) for containers and serverless telemetry.
     - [Google Cloud's Operations Suite](https://cloud.google.com/products/operations) utilising [Cloud Logging](https://cloud.google.com/logging) and [Cloud Trace](https://cloud.google.com/trace) for multi-service environments.
     - [Oracle Cloud Infrastructure (OCI) Logging](https://www.oracle.com/observability/) integrated with the [Observability and Management Platform](https://www.oracle.com/manageability/) for cross-service insights.
   - Unified observability ensures you can quickly identify inefficiencies or scaling issues.

1. **Introduce a Tagging/Governance Policy**

   - Standardise tags or labels for cost center, environment, and application name. This practice aids in tracking spending, performance, and potential carbon footprint across various compute services.
   - Utilise tools such as:
     - [AWS Resource Tagging and Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html).
     - [Azure Policy with Tag Inheritance](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies).
     - [GCP Labels for Resources & GCP Organisation Policy to Enforce Tagging](https://cloud.google.com/resource-manager/docs/organisation-policy/tags-organisation-policy).
     - [OCI Tag Namespaces and Enforcement Policies](https://docs.oracle.com/en-us/iaas/Content/Tagging/Concepts/taggingoverview.htm).
   - Implementing a unified tagging strategy fosters accountability and helps identify usage patterns that may require optimisation.

1. **Implement Automated or Dynamic Scaling**

   - For container-based workloads, set CPU and memory usage thresholds to enable auto-scaling of pods or tasks:
     - [AWS Fargate/ECS auto-scaling based on CloudWatch metrics](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html).
     - [Azure Kubernetes Service Horisontal Pod Autoscaler (HPA)](https://learn.microsoft.com/en-us/azure/aks/concepts-scale#horisontal-pod-autoscaler).
     - [GCP GKE Horisontal Pod Autoscaler](https://cloud.google.com/kubernetes-engine/docs/concepts/horisontalpodautoscaler) or [Cloud Run request-based autoscaling](https://cloud.google.com/run/docs/about-auto-scaling).
     - [OCI OKE cluster autoscaler](https://docs.oracle.com/en-us/iaas/Content/ContEng/Tasks/contengautoscaling.htm) or container usage triggers.
   - For serverless architectures, establish concurrency or usage limits to prevent unexpected cost spikes.

   Implementing these scaling strategies ensures that your applications can efficiently handle varying workloads while controlling costs.

1. **Leverage Reserved or Discounted Pricing for Steady Components**

   - If certain VMs or container clusters must run continuously, investigate vendor discount models:
     - [AWS Savings Plans](https://aws.amazon.com/savingsplans/) or [Reserved Instances](https://aws.amazon.com/ec2/pricing/reserved-instances/).
     - [Azure Reservations for VMs or container node pools](https://azure.microsoft.com/en-us/pricing/reserved-vm-instances/).
     - [GCP Committed Use Discounts](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts).
     - [OCI Reserved Capacity](https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/reserve-capacity.htm).
   - Blend on-demand resources for elastic workloads with reservations for predictable baselines to optimise costs.

   Implementing these strategies can lead to significant cost savings for workloads with consistent usage patterns.

By unifying your deployment practices, consolidating observability, enforcing tagging, and refining autoscaling or discount usage, you move from an ad-hoc mix of compute styles to a more cohesive, cost-effective cloud ecosystem. This sets the stage for robust, consistent governance and significant agility gains.

### **Regular Use of Short-Lived VMs and Containers:** There is regular use of short-lived VMs and containers, along with some function-based compute services. This indicates a move towards more flexible and scalable compute options.

#### **How to determine if this good enough**

When your organisation regularly uses ephemeral or short-lived compute models, containers, and functions, you’ve likely embraced cloud-native thinking. This suggests:

1. **Frequent Scaling and Automated Lifecycle**

   - You seldom keep large VMs running 24/7 unless absolutely necessary.
   - Container-based architectures or ephemeral VMs scale up to meet demand, then terminate when idle.

1. **High Automation in CI/CD**

   - Deployments to containers or serverless happen automatically via pipelines.
   - Infrastructure provisioning is likely codified in IaC (Infrastructure as Code) tooling (Terraform, CloudFormation, Bicep, etc.).

1. **Performance and Cost Efficiency**

   - You typically pay only for what you use, cutting down on waste.
   - Application performance can match demand surges without manual intervention.

1. **Multi-Service Observability**
   - Monitoring covers ephemeral workloads, with logs and metrics aggregated effectively.

If you have reached this point, your environment is more agile, cost-optimised, and aligned with modern DevOps. However, you may still have gaps in advanced scheduling, deeper security or compliance integration, or a formal approach to evaluating each new solution (e.g., deciding between containers, serverless, or a managed SaaS).

#### **How to do better**

Below are **actionable** expansions to push your ephemeral usage approach further:

1. **Adopt a "Compute Decision Framework"**

   - Formalise how new workloads choose among FaaS (functions), CaaS (containers), or short-lived VMs:
     - If event-driven with spiky traffic, prefer serverless.
     - If the service requires consistent runtime dependencies but can scale, prefer containers.
     - If specialised hardware or older OS is needed briefly, use short-lived VMs.
   - This standardisation helps teams quickly pick the best fit.

1. **Enable Event-Driven Automation**

   - Use events to trigger ephemeral jobs:
     - [AWS EventBridge](https://aws.amazon.com/eventbridge/) or [CloudWatch Events](https://aws.amazon.com/cloudwatch/) to invoke [Lambda](https://aws.amazon.com/lambda/) or spin up [ECS](https://aws.amazon.com/ecs/) tasks.
     - [Azure Event Grid](https://azure.microsoft.com/en-us/services/event-grid/) or [Logic Apps](https://azure.microsoft.com/en-us/services/logic-apps/) triggering [Functions](https://azure.microsoft.com/en-us/services/functions/) or container jobs.
     - [GCP Pub/Sub](https://cloud.google.com/pubsub) or [EventArc](https://cloud.google.com/eventarc) calls [Cloud Run](https://cloud.google.com/run) services or GCE ephemeral jobs.
     - [OCI Events Service](https://www.oracle.com/cloud/cloud-native/events/) integrated with [Functions](https://www.oracle.com/functions/) or [autoscaling rules](https://www.oracle.com/cloud/compute/autoscaling/).
   - This ensures resources only run when triggered, further minimising idle time.

1. **Implement Container Security Best Practices**

   - As ephemeral container usage grows, so do potential security concerns:
     - Use [AWS ECR scanning](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html) or [Amazon Inspector for container images](https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html).
     - Use [Azure Container Registry (ACR) image scanning](https://learn.microsoft.com/en-us/azure/container-registry/scan-images-defender) with [Microsoft Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-container-registries-introduction).
     - Use [GCP Container Registry](https://cloud.google.com/container-registry/docs/container-analysis) or [Artifact Registry with scanning](https://cloud.google.com/artifact-registry/docs/enable-vulnerability-scanning) and [Google Cloud Security Command Center](https://cloud.google.com/security-command-center/docs).
     - Use [OCI Container Registry scanning](https://docs.oracle.com/en-us/iaas/Content/Registry/Tasks/registryscanningimages.htm) and [Security Zones for container compliance](https://docs.oracle.com/en-us/iaas/Content/Security/Concepts/security_zones.htm).
   - Integrate scans into your CI/CD pipeline for immediate alerts and automation.

1. **Refine Infrastructure as Code (IaC) and Pipeline Patterns**

   - Standardise ephemeral environment creation using:
     - [AWS CloudFormation](https://aws.amazon.com/cloudformation/) or [AWS CDK](https://aws.amazon.com/cdk/), plus [AWS CodePipeline](https://aws.amazon.com/codepipeline/).
     - [Azure Resource Manager templates](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview) or [Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview), plus [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/) or [GitHub Actions](https://github.com/features/actions).
     - [GCP Deployment Manager](https://cloud.google.com/deployment-manager) or [Terraform](https://cloud.google.com/docs/terraform), with [Cloud Build triggers](https://cloud.google.com/build/docs/automating-builds/create-manage-triggers).
     - [OCI Resource Manager](https://www.oracle.com/cloud/systems-management/resource-manager.html) for stack deployments, integrated with [OCI DevOps pipeline](https://www.oracle.com/devops/).
   - Encourage a shared library of environment definitions to accelerate new project spin-up.

1. **Extend Tagging and Cost Allocation**

   - Since ephemeral resources come and go quickly, ensure they are labeled or tagged upon creation.

   - Set up budgets or cost alerts to identify if ephemeral usage unexpectedly spikes:

     - [AWS Budgets and Alerts integrated with Slack or email](https://docs.aws.amazon.com/cost-management/latest/userguide/sns-alert-chime.html).

     - [Azure Cost Management budgets with notifications](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending).

     - [GCP Budgets and Billing Alerts linked to Pub/Sub or email](https://cloud.google.com/billing/docs/how-to/budgets).

     - [OCI Budgets with usage triggers and cost anomaly detection](https://docs.oracle.com/en-us/iaas/Content/Billing/Tasks/usingbudgets.htm).

By formalising your decision framework, expanding event-driven architectures, ensuring container security, and strengthening IaC patterns, you solidify your short-lived compute model. This approach reduces overheads, fosters agility, and helps UK public sector teams remain compliant with cost and operational excellence targets.

### **'Fit for Purpose' Approach with Rigorous Right-sizing:** Cloud services selection is driven by a strict 'fit for purpose' approach. This includes a rigorous continual right-sizing process and a solution evaluation hierarchy favoring SaaS > FaaS > Containers as a Service > Platform/Orchestrator as a Service > Infrastructure as a Service.

#### **How to determine if this good enough**

At this highest maturity level, you explicitly choose the most appropriate computing model—often starting from SaaS (Software as a Service) if it meets requirements, then serverless if custom code is needed, then containers, and so on down to raw VMs only when necessary. Indicators that this might be "good enough" include:

1. **Every New Project Undergoes a Thorough Fit Assessment**

   - Your solution architecture process systematically asks: "Could an existing SaaS platform solve this? If not, can serverless do the job? If not, do we need container orchestration?" and so forth.
   - This approach prevents defaulting to IaaS or large container clusters without strong justification.

1. **Rigorous Continual Right-sizing**

   - Teams actively measure usage and adjust resource allocations monthly or even weekly.
   - Underutilised resources are quickly scaled down or replaced by ephemeral compute. Over-stressed services are scaled up or moved to more robust solutions.

1. **Sophisticated Observability, Security, and Compliance**

   - With multiple service layers, you maintain consistent monitoring, security scanning, and compliance checks across SaaS, FaaS, containers, and IaaS.
   - You have well-documented runbooks and automated pipelines to handle each technology layer.

1. **Cost Efficiency and Agility**
   - Budgets often reflect usage-based spending, and spikes are quickly noticed.
   - Development cycles are faster because you adopt higher-level services first, focusing on business logic rather than infrastructure management.

If your organisation can demonstrate that each new or existing application sits in the best-suited compute model—balancing cost, compliance, and performance—this is typically considered the pinnacle of cloud compute maturity. However, continuous improvements in vendor offerings, emerging technologies, and changing departmental requirements mean there is always more to refine.

#### **How to do better**

Even at this advanced state, you can still hone practices. Below are suggestions:

1. **Automate Decision Workflows**

   - Build an internal "Service Catalog" or "Decision Tree." For instance:
     - A web-based form that asks about the workload’s functional, regulatory, performance, and cost constraints, then suggests suitable solutions (SaaS, FaaS, containers, etc.).
   - This can be integrated with pipeline automation so new projects must pass through the framework before provisioning resources.

1. **Deepen SaaS Exploration for Niche Needs**

   - Explore specialised SaaS options for areas like data analytics, content management, or identity services.
   - Ensure your staff or solution architects regularly revisit the [G-Cloud listings](https://www.contractawardservice.crowncommercial.gov.uk/projects/create-or-choose) or other Crown Commercial Service frameworks to see if an updated SaaS solution can replace custom-coded or container-based systems.

1. **Further Standardise DevOps Across All Layers**

   - If you run FaaS on multiple clouds or keep some workloads on private cloud, unify your deployment approach.
   - Encourage a single pipeline style:
     - [AWS CodePipeline](https://aws.amazon.com/codepipeline/) or [GitHub Actions](https://github.com/features/actions) for everything from [AWS Lambda](https://aws.amazon.com/lambda/) to [Amazon ECS](https://aws.amazon.com/ecs/), plus [AWS CloudFormation](https://aws.amazon.com/cloudformation/) for infrastructure as code.
     - [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/) for .NET-based function apps, container solutions like [Azure Container Instances](https://azure.microsoft.com/en-us/services/container-instances/), or [Azure Virtual Machines](https://azure.microsoft.com/en-us/services/virtual-machines/) under one roof.
     - [Google Cloud Build](https://cloud.google.com/build) triggers that handle [Cloud Run](https://cloud.google.com/run), [Google Compute Engine](https://cloud.google.com/compute), or third-party SaaS integrations.
     - [Oracle Cloud Infrastructure (OCI) DevOps](https://www.oracle.com/devops/) pipeline for a mixed environment using [Oracle Kubernetes Engine (OKE)](https://www.oracle.com/cloud-native/container-engine-kubernetes/), [Oracle Functions](https://www.oracle.com/cloud-native/functions/), or third-party webhooks.

1. **Maintain a Living Right-sizing Strategy**

   - Expand beyond memory/CPU metrics to measure cost per request, concurrency, or throughput.
   - Tools like:
     - [AWS Compute Optimiser advanced metrics for EBS I/O, Lambda concurrency, etc.](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html)
     - [Azure Monitor Workbooks with custom performance/cost insights](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview)
     - [GCP Recommenders for scaling beyond just CPU/memory (like disk usage suggestions)](https://cloud.google.com/recommender/docs)
     - [OCI Observability with granular resource usage metrics for compute and storage optimisation](https://www.oracle.com/observability/)

1. **Focus on Energy Efficiency and Sustainability**

   - Refine your approach with a strong environmental lens:
     - Pick regions or times that yield lower carbon intensity, if permitted by data residency rules.
     - Enforce ephemeral usage policies to avoid running resources unnecessarily.
   - Each vendor offers sustainability or carbon data to inform your "fit for purpose" decisions:
     - [AWS Sustainability Pillar in Well-Architected](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html).
     - [Azure Emissions Impact Dashboard](https://www.microsoft.com/en-gb/sustainability/emissions-impact-dashboard).
     - [GCP Carbon Footprint tool integrated with cloud usage](https://cloud.google.com/carbon-footprint).
     - [OCI Sustainability resources and region-level emission details](https://oci-global.com/sustainability/climate-change-action/).

1. **Champion Cross-Public-Sector Collaboration**
   - Share lessons or templates with other departments or agencies. This fosters consistent best practices across local councils, NHS trusts, or central government bodies.

By automating your decision workflows, continuously exploring SaaS, standardising DevOps pipelines, and incorporating advanced metrics (including sustainability), you maintain an iterative improvement path at the peak of compute maturity. This ensures you remain agile in responding to new user requirements and evolving government initiatives, all while controlling costs and optimising resource efficiency.

**Keep doing what you’re doing,** and consider writing up success stories, internal case studies, or blog posts. Submit pull requests to this guidance or relevant public sector best-practice repositories so others can learn from your achievements. By sharing real-world experiences, you help the entire UK public sector enhance its cloud compute maturity.
