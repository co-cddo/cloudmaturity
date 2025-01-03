---
title: How does your organization approach the use of compute services in the cloud?
tags: cost
eleventyNavigation:
  parent: cost
---

### **Long-Running Homogeneous VMs:** Workloads are consistently deployed on long-running, homogeneously sized Virtual Machines (VMs), without variation or optimization.

#### **How to determine if this good enough**

An organization that relies on "Long-Running Homogeneous VMs" typically has static infrastructure: they stand up certain VM sizes—often chosen arbitrarily or based on outdated assumptions—and let them run continuously. For a UK public sector body, this may appear straightforward if:

1. **Predictable, Low-Complexity Workloads**

   - Your compute usage doesn’t fluctuate much (e.g., a small number of internal line-of-business apps with stable user counts).
   - You don’t foresee major surges or dips in demand.
   - The overhead of changing compute sizes or rearchitecting to dynamic services might seem unnecessary.

1. **Minimal Cost Pressures**

   - If your monthly spend is low enough to be tolerated within your departmental budget or you lack strong impetus from finance to optimize further.
   - You might feel that it’s "not broken, so no need to fix it."

1. **Legacy Constraints**

   - Some local authority or government departments could be running older applications that are hard to containerize or re-platform. If you require certain OS versions or on-prem-like architectures, homogeneous VMs can seem "safe."

1. **Limited Technical Skills or Resources**
   - You may not have in-house expertise to manage containers, function-based services, or advanced orchestrators.
   - If your main objective is stability and you have no immediate impetus to experiment, you might remain with static VM setups.

If you fall into these categories—low complexity, legacy constraints, stable usage, minimal cost concerns—then "Long-Running Homogeneous VMs" might indeed be "good enough." However, many UK public sector cloud strategies now emphasize cost efficiency, scalability, and elasticity, especially under increased scrutiny of budgets and service reliability. Sticking to homogeneous, always-on VMs without optimization can lead to wasteful spending, hamper agility, and prevent future readiness.

#### **How to do better**

Here are **rapidly actionable** improvements to help you move beyond purely static VMs:

1. **Enable Basic Monitoring and Cost Insights**

   - Even if you keep long-running VMs, gather usage metrics and financial data:
     - [AWS CloudWatch Metrics and AWS Cost Explorer](https://TODO)
     - [Azure Monitor and Cost Management](https://TODO)
     - [GCP Monitoring and Billing Reports](https://TODO)
     - [OCI Monitoring and Cost Analysis](https://TODO)
   - Check CPU, memory, and storage utilization. If these metrics show consistent underuse (like 10% CPU usage around the clock), it’s a sign you can downsize or re-architect.

1. **Leverage Built-in Right-Sizing Tools**

   - Major cloud providers offer "right-sizing" recommendations:
     - [AWS Compute Optimizer](https://TODO) to get suggestions for smaller/larger instance sizes.
     - [Azure Advisor for VM right-sizing](https://TODO).
     - [GCP Recommender for machine types](https://TODO).
     - [OCI "Workload and Resource Optimization" or Advisor suggestions](https://TODO).
   - Make a plan to apply at least one or two right-sizing recommendations each quarter. This is a quick, low-risk path to cost savings and better resource use.

1. **Introduce Simple Scheduling**

   - If some VMs are only needed during business hours, schedule automatic shutdown at night or on weekends:
     - [AWS Instance Scheduler (Solution Implementation)](https://TODO).
     - [Azure Automation for start/stop of VMs](https://TODO).
     - [GCP Cloud Scheduler plus scripts for VM control](https://TODO).
     - [OCI Scheduled Autoscaling or Cron-based scripts](https://TODO).
   - A single action to stop dev/test or lightly used environments after hours can yield noticeable cost (and energy) savings.

1. **Conduct a Feasibility Check for a Small Container Pilot**

   - Even if you retain most workloads on VMs, pick one small application or batch job and try containerizing it:
     - [AWS ECS Fargate or EKS for containers](https://TODO).
     - [Azure Container Instances or AKS (Azure Kubernetes Service)](https://TODO).
     - [GCP Cloud Run or GKE (Google Kubernetes Engine)](https://TODO).
     - [OCI Container Instances or OKE (Oracle Container Engine for Kubernetes)](https://TODO).
   - By piloting a single container-based workload, you assess potential elasticity and find out whether container orchestrations truly solve your needs. This can be done quickly with minimal risk.

1. **Raise Awareness with Internal Stakeholders**
   - Share simple usage and cost graphs with your finance or leadership teams. Show them the difference between "always-on" vs. "scaled" or "scheduled" usage.
   - This could drive more formal mandates or budget incentives to encourage partial re-architecture or adoption of short-lived compute in the future.

By monitoring usage, applying right-sizing, scheduling idle time, and introducing a small container pilot, you can meaningfully reduce waste. Over time, you’ll build momentum toward more flexible compute strategies while still respecting the constraints of your existing environment.

### **Primarily Long-Running VMs with Limited Experimentation:** Most workloads are on long-running VMs, with some limited experimentation in containers or function-based services for non-critical tasks.

#### **How to determine if this good enough**

Organizations in this stage have recognized the benefits of more dynamic compute models—like containers or serverless—but apply them only in a small subset of cases. You might be "good enough" if:

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
   - The IT department sees potential, but organizational inertia, compliance considerations, or skill gaps limit widespread adoption.

If the majority of your mission-critical applications remain on VMs and you see stable performance within budget, this may be "enough" for now. However, if the cloud usage is expanding, or if your department is under pressure to modernize, you might quickly find you miss out on elasticity, cost efficiency, or resilience advantages that come from broader container or serverless adoption.

#### **How to do better**

Here are **actionable** next steps to accelerate your modernization journey without overwhelming resources:

1. **Expand Container/Serverless Pilots in a Structured Way**

   - Identify a short list of low-risk workloads that could benefit from ephemeral compute, such as batch processing or data transformation.
   - Use native solutions to reduce complexity:
     - [AWS Fargate with ECS/EKS for container-based tasks without server management](https://TODO).
     - [Azure Container Apps or Azure Functions for event-driven workloads](https://TODO).
     - [GCP Cloud Run for container-based microservices or GCP Functions](https://TODO).
     - [OCI Functions or Container Instances for short-lived tasks](https://TODO).
   - Document real cost/performance outcomes to present a stronger case for further expansion.

1. **Implement Granular VM Auto-Scaling**

   - Even with VMs, you can configure auto-scaling groups or scale sets to handle changing loads:
     - [AWS Auto Scaling Groups + Target Tracking Policies](https://TODO).
     - [Azure Virtual Machine Scale Sets with rules for CPU/memory usage](https://TODO).
     - [GCP Managed Instance Groups with auto-scaling policies](https://TODO).
     - [OCI Instance Pool with autoscaling based on CPU or memory usage](https://TODO).
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
     - [AWS Training and Certification on serverless/container topics](https://TODO).
     - [Microsoft Learn modules for Azure Kubernetes Service, Azure Functions](https://TODO).
     - [Google Cloud Skills Boost for Cloud Run or GKE fundamentals](https://TODO).
     - [OCI Learning Paths for container and function deployments](https://TODO).

   Building confidence and skills helps teams adopt more advanced compute models.

Through these steps—structured expansions of containerized or serverless pilots, improved auto-scaling of VMs, and staff training—your organization can gradually shift from "limited experimentation" to a more balanced compute ecosystem. The result is improved agility, potential cost savings, and readiness for more modern architectures.

### **Mixed Use with Some Advanced Compute Options:** Some production workloads are run in containers or function-based compute services. Ad-hoc use of short-lived VMs is practiced, with efforts to right-size based on workload needs.

#### **How to determine if this good enough**

This stage indicates a notable transformation: your organization uses multiple compute paradigms. You have container-based or serverless workloads in production, you sometimes spin up short-lived VMs for ephemeral tasks, and you’re actively right-sizing. It may be "good enough" if:

1. **Functional, Multi-Modal Compute Strategy**

   - You’ve proven that containers or serverless can handle real production demands (e.g., public-facing services, departmental applications).
   - VMs remain important for some workloads, but you adapt or re-size them more frequently.

1. **Solid Operational Knowledge**

   - Your teams are comfortable deploying to a container platform (e.g., Kubernetes, ECS, Azure WebApps for containers, etc.) or using function-based services in daily workflows.
   - Monitoring and alerting are configured for both ephemeral and long-running compute.

1. **Balanced Cost and Complexity**

   - You have a handle on typical monthly spend, and finance sees a correlation between usage spikes and cost.
   - You might not be fully optimizing everything, but you rarely see large, unexplained bills.

1. **Clear Upsides from Modern Compute**
   - You’ve recognized that certain microservices perform better or cost less on serverless or containers.
   - Cultural buy-in is growing: multiple teams express interest in flexible compute models.

If these points match your environment, your "Mixed Use" approach might currently satisfy your user needs and budget constraints. However, you might still see opportunities to refine deployment methods, unify your management or monitoring, and push for greater elasticity. If you suspect further cost savings or performance gains are possible—or you want a more standardized approach across the organization—further advancement is likely beneficial.

#### **How to do better**

Below are **rapidly actionable** ways to enhance your mixed compute model:

1. **Adopt Unified Deployment Pipelines**

   - Strive for standard tooling that can deploy both VMs and container/serverless environments. For instance:
     - [AWS CodePipeline or AWS CodeBuild integrated with ECS, Lambda, EC2, etc.](https://TODO).
     - [Azure DevOps Pipelines or GitHub Actions for VMs, AKS, Azure Functions](https://TODO).
     - [GCP Cloud Build for GCE, GKE, Cloud Run deployments](https://TODO).
     - [OCI DevOps service for flexible deployments to OKE, Functions, or VMs](https://TODO).
   - This reduces fragmentation and fosters consistent best practices (code review, automated testing, environment provisioning).

1. **Enhance Observability**

   - Implement a single monitoring stack that captures logs, metrics, traces across VMs, containers, and functions:
     - [AWS CloudWatch + AWS X-Ray for distributed tracing in containers or Lambda](https://TODO).
     - [Azure Monitor + Application Insights with containers and serverless telemetry](https://TODO).
     - [GCP Cloud Logging + Cloud Trace or OpenTelemetry for multi-service environments](https://TODO).
     - [OCI Logging + Observability and Management Platform for cross-service insights](https://TODO).
   - Unified observability ensures you quickly spot inefficiencies or scaling issues.

1. **Introduce a Tagging/Governance Policy**

   - Standardize tags or labels for cost center, environment, application name. This helps track spend, performance, and potential carbon footprint across different compute services.
   - Tools like:
     - [AWS Resource Tagging and Cost Allocation Tags](https://TODO)
     - [Azure Policy with Tag Inheritance](https://TODO)
     - [GCP Labels for resources & GCP Organization Policy to enforce tagging](https://TODO)
     - [OCI Tag Namespaces and Enforcement Policies](https://TODO)
   - This fosters accountability and helps identify usage patterns needing optimization.

1. **Implement Automated or Dynamic Scaling**

   - For container-based workloads, set CPU/memory usage thresholds for auto-scaling pods or tasks:
     - [AWS Fargate/ECS auto-scaling based on CloudWatch metrics](https://TODO)
     - [Azure Kubernetes Service HPA (Horizontal Pod Autoscaler)](https://TODO)
     - [GCP GKE HPA or Cloud Run request-based autoscaling](https://TODO)
     - [OCI OKE cluster autoscaler or container usage triggers](https://TODO)
   - For serverless, set concurrency or usage limits to avoid unexpected cost spikes.

1. **Leverage Reserved or Discounted Pricing for Steady Components**
   - If certain VMs or container clusters must run continuously, investigate vendor discount models:
     - [AWS Savings Plans or Reserved Instances](https://TODO)
     - [Azure Reservations for VMs or container node pools](https://TODO)
     - [GCP Committed Use Discounts](https://TODO)
     - [OCI Annual Flex or Reserved Capacity terms](https://TODO)
   - Blend on-demand for elastic workloads with reservations for predictable baselines.

By unifying your deployment practices, consolidating observability, enforcing tagging, and refining autoscaling or discount usage, you move from an ad-hoc mix of compute styles to a more cohesive, cost-effective cloud ecosystem. This sets the stage for robust, consistent governance and significant agility gains.

### **Regular Use of Short-Lived VMs and Containers:** There is regular use of short-lived VMs and containers, along with some function-based compute services. This indicates a move towards more flexible and scalable compute options.

#### **How to determine if this good enough**

When your organization regularly uses ephemeral or short-lived compute models, containers, and functions, you’ve likely embraced cloud-native thinking. This suggests:

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

If you have reached this point, your environment is more agile, cost-optimized, and aligned with modern DevOps. However, you may still have gaps in advanced scheduling, deeper security or compliance integration, or a formal approach to evaluating each new solution (e.g., deciding between containers, serverless, or a managed SaaS).

#### **How to do better**

Below are **actionable** expansions to push your ephemeral usage approach further:

1. **Adopt a "Compute Decision Framework"**

   - Formalize how new workloads choose among FaaS (functions), CaaS (containers), or short-lived VMs:
     - If event-driven with spiky traffic, prefer serverless.
     - If the service requires consistent runtime dependencies but can scale, prefer containers.
     - If specialized hardware or older OS is needed briefly, use short-lived VMs.
   - This standardization helps teams quickly pick the best fit.

1. **Enable Event-Driven Automation**

   - Use events to trigger ephemeral jobs:
     - [AWS EventBridge or CloudWatch Events to invoke Lambda or spin up ECS tasks](https://TODO).
     - [Azure Event Grid or Logic Apps triggering Functions or container jobs](https://TODO).
     - [GCP Pub/Sub or EventArc calls Cloud Run services or GCE ephemeral jobs](https://TODO).
     - [OCI Events Service integrated with Functions or autoscaling rules](https://TODO).
   - This ensures resources only run when triggered, further minimizing idle time.

1. **Implement Container Security Best Practices**

   - As ephemeral container usage grows, so do potential security concerns:
     - Use [AWS ECR scanning, or Amazon Inspector for container images](https://TODO).
     - Use [Azure Container Registry (ACR) image scanning, Microsoft Defender for Cloud](https://TODO).
     - Use [GCP Container Registry / Artifact Registry with scanning, Google Cloud Security Command Center](https://TODO).
     - Use [OCI Container Registry scanning, Security Zones for container compliance](https://TODO).
   - Integrate scans into your CI/CD pipeline for immediate alerts and automation.

1. **Refine Infrastructure as Code (IaC) and Pipeline Patterns**

   - Standardize ephemeral environment creation using:
     - [AWS CloudFormation or AWS CDK, plus AWS CodePipeline](https://TODO).
     - [Azure Resource Manager templates or Bicep, plus Azure DevOps or GitHub Actions](https://TODO).
     - [GCP Deployment Manager or Terraform with Cloud Build triggers](https://TODO).
     - [OCI Resource Manager for stack deployments, integrated with OCI DevOps pipeline](https://TODO).
   - Encourage a shared library of environment definitions to accelerate new project spin-up.

1. **Extend Tagging and Cost Allocation**
   - Since ephemeral resources come and go quickly, ensure they are labeled or tagged on creation.
   - Setup budgets or cost alerts to identify if ephemeral usage unexpectedly spikes:
     - [AWS Budgets and Alerts integrated with Slack or email](https://TODO).
     - [Azure Cost Management budgets with notifications](https://TODO).
     - [GCP Budgets and Billing Alerts linked to Pub/Sub or email](https://TODO).
     - [OCI Budgets with usage triggers and cost anomaly detection](https://TODO).

By formalizing your decision framework, expanding event-driven architectures, ensuring container security, and strengthening IaC patterns, you solidify your short-lived compute model. This approach reduces overheads, fosters agility, and helps UK public sector teams remain compliant with cost and operational excellence targets.

### **'Fit for Purpose' Approach with Rigorous Right-Sizing:** Cloud services selection is driven by a strict 'fit for purpose' approach. This includes a rigorous continual right-sizing process and a solution evaluation hierarchy favoring SaaS > FaaS > Containers as a Service > Platform/Orchestrator as a Service > Infrastructure as a Service.

#### **How to determine if this good enough**

At this highest maturity level, you explicitly choose the most appropriate computing model—often starting from SaaS (Software as a Service) if it meets requirements, then serverless if custom code is needed, then containers, and so on down to raw VMs only when necessary. Indicators that this might be "good enough" include:

1. **Every New Project Undergoes a Thorough Fit Assessment**

   - Your solution architecture process systematically asks: "Could an existing SaaS platform solve this? If not, can serverless do the job? If not, do we need container orchestration?" and so forth.
   - This approach prevents defaulting to IaaS or large container clusters without strong justification.

1. **Rigorous Continual Right-Sizing**

   - Teams actively measure usage and adjust resource allocations monthly or even weekly.
   - Underutilized resources are quickly scaled down or replaced by ephemeral compute. Over-stressed services are scaled up or moved to more robust solutions.

1. **Sophisticated Observability, Security, and Compliance**

   - With multiple service layers, you maintain consistent monitoring, security scanning, and compliance checks across SaaS, FaaS, containers, and IaaS.
   - You have well-documented runbooks and automated pipelines to handle each technology layer.

1. **Cost Efficiency and Agility**
   - Budgets often reflect usage-based spending, and spikes are quickly noticed.
   - Development cycles are faster because you adopt higher-level services first, focusing on business logic rather than infrastructure management.

If your organization can demonstrate that each new or existing application sits in the best-suited compute model—balancing cost, compliance, and performance—this is typically considered the pinnacle of cloud compute maturity. However, continuous improvements in vendor offerings, emerging technologies, and changing departmental requirements mean there is always more to refine.

#### **How to do better**

Even at this advanced state, you can still hone practices. Below are suggestions:

1. **Automate Decision Workflows**

   - Build an internal "Service Catalog" or "Decision Tree." For instance:
     - A web-based form that asks about the workload’s functional, regulatory, performance, and cost constraints, then suggests suitable solutions (SaaS, FaaS, containers, etc.).
   - This can be integrated with pipeline automation so new projects must pass through the framework before provisioning resources.

1. **Deepen SaaS Exploration for Niche Needs**

   - Explore specialized SaaS options for areas like data analytics, content management, or identity services.
   - Ensure your staff or solution architects regularly revisit the [G-Cloud listings](https://TODO) or other Crown Commercial Service frameworks to see if an updated SaaS solution can replace custom-coded or container-based systems.

1. **Further Standardize DevOps Across All Layers**

   - If you run FaaS on multiple clouds or keep some workloads on private cloud, unify your deployment approach.
   - Encourage a single pipeline style:
     - [AWS CodePipeline or GitHub Actions for everything from Lambda to ECS, plus Terraform or CloudFormation for infra as code](https://TODO).
     - [Azure DevOps for .NET-based function apps, container solutions, or VM templates under one roof](https://TODO).
     - [GCP Cloud Build triggers that handle Cloud Run, GCE, or third-party SaaS integrations](https://TODO).
     - [OCI DevOps pipeline for a mixed environment using OKE, Functions, or third-party webhooks](https://TODO).

1. **Maintain a Living Right-Sizing Strategy**

   - Expand beyond memory/CPU metrics to measure cost per request, concurrency, or throughput.
   - Tools like:
     - [AWS Compute Optimizer advanced metrics for EBS I/O, Lambda concurrency, etc.](https://TODO).
     - [Azure Monitor Workbooks with custom performance/cost insights](https://TODO).
     - [GCP Recommenders for scaling beyond just CPU/memory (like disk usage suggestions)](https://TODO).
     - [OCI Observability with granular resource usage metrics for compute and storage optimization](https://TODO).

1. **Focus on Energy Efficiency and Sustainability**

   - Refine your approach with a strong environmental lens:
     - Pick regions or times that yield lower carbon intensity, if permitted by data residency rules.
     - Enforce ephemeral usage policies so you do not run resources unnecessarily.
   - Each vendor offers some sustainability or carbon data you can feed into your "fit for purpose" decisions:
     - [AWS Sustainability Pillar in Well-Architected](https://TODO).
     - [Azure Emissions Impact Dashboard / Sustainability Calculator](https://TODO).
     - [GCP Carbon Footprint tool integrated with cloud usage](https://TODO).
     - [OCI Sustainability resources and region-level emission details](https://TODO).

1. **Champion Cross-Public-Sector Collaboration**
   - Share lessons or templates with other departments or agencies. This fosters consistent best practices across local councils, NHS trusts, or central government bodies.

By automating your decision workflows, continuously exploring SaaS, standardizing DevOps pipelines, and incorporating advanced metrics (including sustainability), you maintain an iterative improvement path at the peak of compute maturity. This ensures you remain agile in responding to new user requirements and evolving government initiatives, all while controlling costs and optimizing resource efficiency.

**Keep doing what you’re doing,** and consider writing up success stories, internal case studies, or blog posts. Submit pull requests to this guidance or relevant public sector best-practice repositories so others can learn from your achievements. By sharing real-world experiences, you help the entire UK public sector enhance its cloud compute maturity.
