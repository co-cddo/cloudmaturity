---
title: What best describes your current technology stack?
tags: tech
eleventyNavigation:
  parent: tech
---

### Most systems are large, single applications using lots of different technologies.

#### **How to determine if this good enough**

Your organisation may bundle most functionalities (e.g., front-end, back-end, database access) into a single codebase. This can be considered "good enough" if:

1. **Limited Project Scale**
   - You have only a few apps or these monoliths aren’t facing rapid feature changes that necessitate frequent deployments.

1. **Stability Over Innovation**
   - The environment is stable, with minimal demands for agile or continuous deployment.

1. **No Pressing Modernisation Requirements**
   - No immediate need from leadership or compliance frameworks for microservices, containerisation, or advanced DevSecOps.

However, monoliths often slow new feature rollout and hamper scaling. [NCSC’s DevSecOps guidance](https://www.ncsc.gov.uk/) and [NIST SP 800-160 systems engineering best practices](https://csrc.nist.gov/) typically advise considering modular approaches to handle evolving user needs and security updates more flexibly.

#### **How to do better**

Below are **rapidly actionable** steps to transition from a monolithic approach:

1. **Identify Natural Component Boundaries**
   - E.g., separate a large monolith into core modules (user authentication, reporting, payment processing).
   - Provide early scoping for partial decomposition.

1. **Adopt Container or VM Packaging**
   - Even if the app remains monolithic, packaging in Docker /[ECS](https://aws.amazon.com/ecs/), [Azure Container Instances](https://learn.microsoft.com/en-us/azure/container-instances/), [GCP Cloud Run](https://cloud.google.com/run), or [OCI Container Engine](https://www.oracle.com/cloud/free/oci-training/), or [IBM Cloud Code Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-getting-started) can simplify deployment and initial partial scaling.

1. **Refactor Shared Libraries**
   - If multiple large monoliths share logic, isolate common code to reduce duplication:
     - referencing [NCSC’s recommendations on code reuse and supply chain considerations](https://www.ncsc.gov.uk/).

1. **Automate Basic CI/CD**
   - Even if a monolith, introduce versioned builds, automated tests, and environment-based deployments:
     - e.g., [AWS CodePipeline](https://aws.amazon.com/codepipeline/), [Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/), [GCP Cloud Build](https://cloud.google.com/build), or [OCI DevOps](https://www.oracle.com/cloud/free/oci-training/), or [IBM Cloud Continuous Delivery](https://cloud.ibm.com/docs/ContinuousDelivery)

1. **Plan a Phased Decomposition**
   - Over 6–12 months, pilot a single microservice or separate module as a stepping stone.
   - referencing [GOV.UK’s service manual for iterative technology improvements](https://www.gov.uk/service-manual).

By identifying component boundaries, packaging the monolith for simpler deployments, refactoring shared libraries, automating CI/CD, and scheduling partial decomposition, you reduce friction and set a path toward more modular solutions.

### Systems are split into parts, but these parts can’t run on their own.

#### **How to determine if this good enough**

Your application is conceptually modular—teams write separate modules or libraries—but the final deployment still merges everything into a single artifact or container. It can be considered "good enough" if:

1. **Moderate Complexity**
   - The system’s complexity is contained enough that simultaneous deployment of modules is tolerable.

1. **Basic Reuse**
   - Code modules are reused across the solution, even if they deploy together.

1. **No Continuous Deployment Pressure**
   - You can handle monolithic-ish releases with scheduled downtime or limited user impact.

Though better than a single massive codebase, you might miss the benefits of shipping each module independently. [NCSC DevOps best practices](https://www.ncsc.gov.uk/) and [NIST SP 800-204 microservices architecture guidance](https://csrc.nist.gov/) suggest modular architectures with independent deployment can accelerate security fixes and scaling.

#### **How to do better**

Below are **rapidly actionable** ways to shift modules from concept to independent deployment:

1. **Introduce Containerisation at Module-Level**
   - If each module can run separately, containerise them individually:
     - referencing [AWS ECS/EKS](https://aws.amazon.com/ecs/), [Azure AKS](https://learn.microsoft.com/en-us/azure/aks/), [GCP GKE](https://cloud.google.com/kubernetes-engine), or [OCI OKE](https://www.oracle.com/cloud/free/oci-training/) for container orchestration.

1. **Provide Separate Build Pipelines**
   - For each module, create a distinct CI pipeline that compiles, tests, and packages it:
     - e.g., [AWS CodeBuild + CodePipeline](https://aws.amazon.com/codepipeline/), [Azure DevOps pipelines](https://learn.microsoft.com/en-us/azure/devops/), [GCP Cloud Build triggers](https://cloud.google.com/build), or [OCI DevOps pipelines](https://www.oracle.com/cloud/free/oci-training/).

1. **Adopt an API or Messaging Boundary**
   - Clarify how modules communicate via REST or message queues:
     - fosters loose coupling, referencing [NCSC microservice security patterns](https://www.ncsc.gov.uk/) or [NIST microservices guidelines](https://csrc.nist.gov/).

1. **Test and Deploy Modules Independently**
   - Even if they remain part of a bigger system, trial partial independent deploys:
     - e.g., can you update a single library or microservice without redeploying everything?

1. **Demonstrate Gains**
   - Show leadership how incremental module updates reduce downtime or accelerate security patching:
     - Encourages buy-in for further decoupling.

By containerising modules, setting up separate build pipelines, enforcing clear module boundaries, individually deploying or updating modules, and showcasing tangible benefits, you progress toward a fully independent deployment pipeline that capitalises on modularity.

### Systems are made of parts that can run on their own, but they depend on each other a lot.

#### **How to determine if this good enough**

You have multiple microservices or modules each packaged and deployable on its own. However, there may be strong coupling (e.g., version sync or data schema dependencies). It can be "good enough" if:

1. **Significant Gains Over Monolith**
   - You can release some parts separately, reducing the scope of each deployment risk.

1. **Partial Testing Complexity**
   - Integrations require orchestrated end-to-end tests or mocking, but you still benefit from incremental updates.

1. **Mature DevOps Practices**
   - Each component has a pipeline, though simultaneous releases across many components might pose a challenge.

Nevertheless, heavy interdependencies hamper the full advantage of modular architectures. [NCSC zero trust or microsegmentation approaches](https://www.ncsc.gov.uk/) and [NIST microservices best practices](https://csrc.nist.gov/) advocate further decoupling or contract-based testing to reduce friction.

#### **How to do better**

Below are **rapidly actionable** ways to handle interdependencies in individually deployable components:

1. **Introduce Contract Testing**
   - For each module’s API or message interface, define stable contracts tested automatically:
     - referencing [Pact.io](https://pact.io/), or custom contract test frameworks in [AWS CodeBuild](https://aws.amazon.com/codepipeline/), [Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/), [GCP Cloud Build](https://cloud.google.com/build), or [OCI DevOps pipelines](https://www.oracle.com/cloud/free/oci-training/).

1. **Automate Consumer-Driven Testing**
   - Consumers of a service define expected inputs/outputs; the service must pass these for each release.
   - Minimises "integration hell."

1. **Adopt Semantic Versioning**
   - Modules declare major/minor/patch versions, ensuring backward compatibility for minor or patch releases:
     - referencing [NCSC software maturity advice or standard versioning best practices](https://www.ncsc.gov.uk/).

1. **Publish a Dependency Matrix**
   - A short table or repo listing which module versions are known to be compatible, referencing [GOV.UK or departmental guidance on multi-service environments](https://www.gov.uk/service-manual).

1. **Enforce Feature Flags**
   - If new functionality in one component requires changes in another, hide it behind a feature flag until both are deployed.
   - referencing [LaunchDarkly](https://launchdarkly.com/), [Azure App Configuration flags](https://learn.microsoft.com/en-us/azure/azure-app-configuration/), [AWS AppConfig](https://aws.amazon.com/appconfig/), [GCP Cloud Run with feature toggles](https://cloud.google.com/run), or [OCI config solutions](https://www.oracle.com/cloud/free/oci-training/).

By introducing contract or consumer-driven testing, adopting semantic versioning, publishing a compatibility matrix, and employing feature flags to manage cross-component rollouts, you reduce interdependency friction and safely leverage your modular architecture.

### Most parts can run and be tested on their own, but a few main systems are still monolithic.

#### **How to determine if this good enough**

Your organisation has successfully modularised most services, yet some legacy or core systems remain monolithic due to complexity or historical constraints. It may be "good enough" if:

1. **Limited Legacy Scope**
   - Only a small portion of the overall estate is monolithic, so the negative impacts are contained.

1. **Proven Stability**
   - The remaining monolith(s) might be stable, with minimal changes needed, reducing the urgency of refactoring.

1. **Mature DevOps for Modern Parts**
   - You enjoy the benefits of microservices for most new features or cloud expansions.

To fully benefit from independent deployments, you might eventually replace or further decompose those monoliths. [NCSC’s approach to legacy modernisation](https://www.ncsc.gov.uk/) or [NIST SP 800-160 engineering guidelines](https://csrc.nist.gov/) can help plan that transition.

#### **How to do better**

Below are **rapidly actionable** ways to address the leftover monolithic elements:

1. **Identify High-Impact Subsystem to Extract**
   - If a monolith is large, pick the subsystem or domain logic that changes most frequently. Migrate that to a microservice first.
   - referencing [AWS microservices patterns](https://aws.amazon.com/microservices/), [Azure microservices guides](https://learn.microsoft.com/en-us/azure/microservices/), [GCP microservices best practices](https://cloud.google.com/microservices), or [OCI microservices solutions](https://www.oracle.com/cloud/free/oci-training/).

1. **Establish Clear Migration Plan**
   - e.g., define a 12–24 month roadmap with incremental steps or re-platforming on containers:
     - Minimises big-bang rewrites.

1. **Enhance DevOps for Monolith**
   - Even if it remains monolithic for a while, ensure robust CI/CD, container packaging, automated tests, referencing [NCSC DevSecOps guidance](https://www.ncsc.gov.uk/).

1. **Limit New Features in Legacy**
   - Encourage new capabilities or major enhancements in microservices around the edges, gradually reducing the monolith’s importance.

1. **Highlight ROI & Risk**
   - Present management with cost of leaving the monolith vs. benefits of further decomposition (faster releases, easier security fixes).

By selecting high-impact subsystems for extraction, creating a phased migration plan, applying DevOps best practices to the existing monolith, steering new features away from legacy, and continuously communicating the ROI of decomposition, you inch closer to a fully modular environment.

### All systems are made of small parts that can run and be tested on their own, with no monolithic systems.

#### **How to determine if this good enough**

At this pinnacle, your organisation’s technology stack is entirely modular or microservices-based, each component testable and deployable on its own. It might be "good enough" if:

1. **Highly Agile & Scalable**
   - Teams release features or bug fixes individually, mitigating risk and accelerating time-to-value.

1. **Strong DevOps Maturity**
   - You have extensive CI/CD pipelines, container orchestration, thorough test automation, referencing [NCSC or NIST SP 800-53 agile security approaches](https://www.ncsc.gov.uk/).

1. **Minimal Coupling**
   - Interdependencies are managed via robust APIs or messaging, enabling each component to evolve with minimal friction.

Even so, you can refine HPC/AI or domain-specific modules, adopt advanced zero-trust gating, or unify cross-organisational microservices. [NCSC’s guidance on microservices security](https://www.ncsc.gov.uk/) and [NIST SP 800-204 microservices frameworks](https://csrc.nist.gov/) encourage continuous improvements.

#### **How to do better**

Below are **rapidly actionable** ways to optimise a fully component-based approach:

1. **Enhance Observability & Tracing**
   - Adopt distributed tracing and advanced logging across microservices:
     - e.g., [AWS X-Ray](https://aws.amazon.com/xray/), [Azure Monitor Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview), [GCP Cloud Trace](https://cloud.google.com/trace), or [OCI Logging Analytics with tracing integrations](https://www.oracle.com/cloud/free/oci-training/).

1. **Apply Zero-Trust for Service Communication**
   - Each microservice authenticates via mTLS or ephemeral tokens, referencing [NCSC zero-trust or NIST SP 800-207 guidelines](https://www.ncsc.gov.uk/).

1. **Adopt or Refine Service Mesh**
   - Tools like [Istio](https://istio.io/), [Linkerd](https://linkerd.io/), [Consul](https://www.consul.io/), [AWS App Mesh](https://aws.amazon.com/app-mesh/), [Azure Service Fabric Mesh](https://learn.microsoft.com/en-us/azure/service-fabric-mesh/), [GCP Anthos Service Mesh](https://cloud.google.com/anthos/service-mesh), or [OCI OKE with mesh add-ons](https://www.oracle.com/cloud/free/oci-training/) can handle cross-cutting concerns (observability, security, routing).

1. **Continuous Architecture Review**
   - With so many components, schedule architecture retros or periodic design reviews ensuring no sprawl or duplication arises.

1. **Collaborate Across Departments or Agencies**
   - If your microservices could benefit other public sector bodies (e.g., local councils or NHS units), share them via open repositories or knowledge sessions:
     - referencing [GOV.UK or NCSC guidance on cross-public sector knowledge exchange](https://www.gov.uk/service-manual).

By enhancing distributed tracing, adopting zero-trust service communications, exploring or refining a service mesh, scheduling architecture reviews, and collaborating with other government entities, you maintain a top-tier, fully component-based environment that remains agile, secure, and efficient in meeting public sector demands.

**Keep doing what you’re doing,** and consider sharing or blogging about your experience with modular architectures. Contributing pull requests to this guidance or other best-practice repositories helps UK public sector organisations adopt similarly progressive strategies for building and maintaining cloud and on-premises systems.
