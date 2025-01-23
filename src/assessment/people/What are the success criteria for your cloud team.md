---
title: What are the success criteria for your cloud team?
tags: people
eleventyNavigation:
  parent: people
---

### **No Defined Success Criteria:** The cloud team operates without specific, defined criteria for measuring success.

#### **How to determine if this good enough**

Your cloud team lacks explicit metrics, goals, or success factors to gauge progress. This can feel acceptable if:

1. **Minimal Cloud Footprint**

   - The team is in an exploratory or very early stage, with limited resources.
   - There’s no immediate pressure to produce measurable outcomes.

1. **Short-Term or Experimental Cloud Efforts**

   - The team is focusing on small PoCs without a formal success framework.

1. **Uncertain Organisational Direction**
   - Senior management hasn’t outlined a precise cloud strategy, so the team lacks guidance on what "success" means.

However, without defined criteria, it’s difficult to justify budgets, measure progress, or ensure your efforts meet public sector demands. [NCSC’s cloud security best practices](https://www.ncsc.gov.uk/collection/cloud-security) and [GOV.UK’s technology code of practice](https://www.gov.uk/government/publications/technology-code-of-practice) emphasize measurable outcomes for transparency and accountability.

#### **How to do better**

Below are **rapidly actionable** steps to establish at least minimal success criteria:

1. **Identify Key Cloud Objectives**

   - E.g., reduce hosting costs by 10%, or migrate a pilot workload to AWS/Azure/GCP/OCI.
   - Reference departmental priorities or [NIST cloud computing frameworks](https://csrc.nist.gov/) for initial guidance.

1. **Define Simple Metrics**

   - Examples: "Number of staff trained on fundamental cloud skills," "Mean time to deploy a new environment," "Basic cost usage reduction from month to month."

1. **Align with Leadership**

   - Present a short list of proposed success metrics to senior management for sign-off, ensuring these metrics reflect organisational or [GOV.UK Cloud First](https://www.gov.uk/guidance/government-cloud-first-policy) policies.

1. **Track Progress Visibly**

   - Use a shared dashboard or simple spreadsheet to record outcomes:
     - e.g., new workloads migrated, number of test passes, or cost changes.

1. **Create a Baseline**
   - If you have no prior data, quickly measure current on-prem costs or the time it takes to provision infrastructure:
     - This baseline will contextualise progress in adopting cloud solutions.

By identifying basic cloud objectives, selecting simple metrics, confirming leadership support, tracking progress, and establishing a baseline, you move from undefined success to a workable system that can be refined as your team matures.

### **Initial Achievements with Proofs of Concept:** Success is measured by completing initial proofs of concept or developing a 'minimum viable cloud/platform'.

#### **How to determine if this good enough**

Your cloud team measures success by delivering small PoCs—like a pilot application running in the cloud or a "minimum viable" platform—for demonstration. This may be "good enough" if:

1. **Early Adoption Phase**

   - You’re focusing on demonstrating feasibility and building internal confidence in cloud approaches.

1. **Positive Reception**

   - Stakeholders are satisfied with these pilot results, seeing the potential for cost savings or faster deployments.

1. **Limited Scale**
   - Organisationally, large-scale cloud migrations or complex workloads aren’t yet on the horison.

Though better than having no success criteria, limiting measurements to "PoCs delivered" can hamper progression to full production readiness. [NCSC operational resilience](https://www.ncsc.gov.uk/collection/operational-resilience) and [NIST risk management frameworks](https://csrc.nist.gov/) often encourage planning for broader usage once pilot success is proven.

#### **How to do better**

Below are **rapidly actionable** steps to advance beyond PoC-based success:

1. **Set PoC Transition Targets**

   - Define a timeline or conditions under which successful PoCs move into pilot production or scale to more workloads:
     - e.g., "If the PoC meets X performance criteria at Y cost, proceed to production by date Z."

1. **Establish Operational Metrics**

   - Expand criteria from "PoC completed" to performance, security, or user satisfaction metrics:
     - e.g., incorporate [AWS Well-Architected Framework checks](https://aws.amazon.com/well-architected/), [Azure Advisor recommendations](https://learn.microsoft.com/en-us/azure/advisor/advisor-overview), or equivalent GCP/OCI best practices.

1. **Involve Real End Users**

   - If feasible, let a pilot serve actual staff or a subset of public users:
     - Gains more meaningful feedback on feasibility or user experience.

1. **Document & Share Learnings**

   - Produce a short "PoC to Production" playbook referencing [GOV.UK service manual agile approach](https://www.gov.uk/service-manual/agile-delivery) or [NCSC cloud security principles](https://www.ncsc.gov.uk/collection/cloud-security).

1. **Link PoCs to Organisational Goals**
   - Ensure each PoC addresses a genuine departmental need (like cost, user experience, or operational agility), so it’s not a siloed experiment.

By defining clear triggers for scaling PoCs, measuring advanced metrics, engaging real users, sharing lessons learned, and tying PoCs to broader goals, you accelerate from pilot outcomes to genuine organisational transformation.

### **Launching Workloads in Production:** Success includes transitioning one or more workloads into a live production environment on the cloud.

#### **How to determine if this good enough**

In this scenario, your cloud team’s success criteria revolve around deploying real-world services or applications for actual users in cloud infrastructure. It may be "good enough" if:

1. **Demonstrable Production Usage**

   - You can point to at least one or two services fully operating in the cloud, serving user or departmental needs.

1. **Basic Reliability & Cost Gains**

   - Deployments show improved uptime, easier scaling, or partial cost savings over on-prem approaches.

1. **Foundation for Expansion**
   - Success in these production workloads fosters confidence and sets a blueprint for migrating additional services.

Still, measuring success only by "production usage" can neglect other vital areas (like cost optimisation, security posture, or user satisfaction). [NCSC’s cloud security guidance](https://www.ncsc.gov.uk/collection/cloud-security) and [NIST SP 800-53 controls](https://csrc.nist.gov/) underscore the importance of compliance, security checks, and continuous monitoring beyond just "it’s running in production."

#### **How to do better**

Below are **rapidly actionable** ways to refine production-based success criteria:

1. **Track Key Operational Metrics**

   - e.g., Mean Time to Recovery (MTTR), cost per transaction, or user satisfaction scores:
     - Gather real-time data via [AWS CloudWatch](https://aws.amazon.com/cloudwatch/), [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/), [GCP Cloud Logging/Monitoring](https://cloud.google.com/logging), [OCI Observability](https://www.oracle.com/cloud/free/oci-training/).

1. **Integrate Security & Cost Efficiency**

   - Expand success definitions to include passing regular security scans (like [AWS Inspector](https://aws.amazon.com/inspector/), [Azure Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/), [GCP Security Scanner](https://cloud.google.com/security-scanner), [OCI Security Advisor](https://www.oracle.com/cloud/free/oci-training/)) or achieving cost baseline targets:
     - e.g., "90% of resources use auto-scaling and adhere to tagging policies referencing [NCSC supply chain or security guidelines](https://www.ncsc.gov.uk/)."

1. **Define a Full Lifecycle Approach**

   - Ensure pipelines for new features, rollbacks, or replacements are tested and documented:
     - Reduces risk of "stagnation" where workloads remain unoptimised once launched.

1. **Share Achievements & Best Practices**

   - Show leadership how launching a new cloud app saved costs, improved uptime, or aligned with [GOV.UK’s Cloud First policy](https://www.gov.uk/guidance/government-cloud-first-policy).

1. **Plan for Next Steps**
   - If a single workload is successful in production, identify the next logical workload or cost-saving measure to adopt:
     - e.g., serverless expansions, HPC jobs, advanced AI/ML adoption.

By incorporating operational metrics, weaving in security and cost success factors, ensuring a continuous pipeline approach, celebrating achievements, and planning further expansions, you create a robust definition of success that fosters ongoing improvements.

### **Scaling Prototypes to Core Services:** Success involves scaling initial prototypes to operate core technical services in the cloud, supporting business-critical applications.

#### **How to determine if this good enough**

The cloud team’s success is measured by graduating from smaller apps to significant, mission-critical systems. You might consider it "good enough" if:

1. **Mission-Critical Cloud Adoption**

   - Key departmental or citizen-facing services run in the cloud, showcasing tangible operational or cost benefits.

1. **Validated Resilience & Performance**

   - The services handle real production loads, meeting [NCSC operational resilience best practices](https://www.ncsc.gov.uk/collection/operational-resilience) and departmental SLAs.

1. **Cross-Functional Buy-In**
   - Architecture, finance, and security teams support your approach, indicating trust in cloud solutions for vital workloads.

However, you can refine success criteria to include advanced features like global failover, zero-downtime deployments, or integrated DevSecOps. [NIST SP 800-160 systems security engineering](https://csrc.nist.gov/) often suggests deeper security integration once critical services are cloud-based.

#### **How to do better**

Below are **rapidly actionable** strategies to further scale prototypes into core services:

1. **Adopt Advanced HA/DR Strategies**

   - Implement multi-region or multi-availability zone approaches:
     - [AWS multi-AZ databases and cross-region replication](https://aws.amazon.com/about/global-infrastructure/regions_az/), [Azure paired regions](https://learn.microsoft.com/en-us/azure/best-practices-availability-paired-regions), [GCP multi-regional storage](https://cloud.google.com/storage/docs/cross-region-replication), [OCI cross-region replication](https://www.oracle.com/cloud/free/oci-training/).
   - Ensures resilience for business-critical workloads.

1. **Integrate Automated Security Testing**

   - If not already, embed scanning in CI/CD pipelines:
     - e.g., [AWS CodeGuru Security or Amazon Inspector](https://aws.amazon.com/codeguru/), [Azure DevOps with GitHub Advanced Security](https://learn.microsoft.com/en-us/azure/devops/organisations/security/github-advanced-security), [GCP Cloud Build with container scanning](https://cloud.google.com/build/docs/container-scanning), [OCI DevOps scanning integrations](https://www.oracle.com/cloud/free/oci-training/).

1. **Quantify Impact**

   - Track cost savings, performance gains, or user satisfaction improvements from scaling cloud usage.
   - Present these metrics to leadership or cross-government peers.

1. **Develop or Refine Architectural Standards**

   - Document best practices for microservices, HPC, AI/ML, or data analytics workloads.
   - Reference [AWS Well-Architected](https://aws.amazon.com/well-architected/), [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/), [GCP Architecture Framework](https://cloud.google.com/architecture/framework), [OCI Reference Architectures](https://www.oracle.com/cloud/free/oci-training/).

1. **Collaborate with Other Public Sector Entities**
   - If you’re delivering critical services, consider knowledge sharing or secondments with local councils, NHS, or central departments:
     - Aligned with [GDS cross-government collaboration initiatives](https://www.gov.uk/service-manual).

By adopting advanced resiliency and security, measuring impact thoroughly, standardising architectural approaches, and collaborating with other public sector bodies, you mature from simply scaling prototypes to robust, enterprise-level cloud service delivery.

### **Innovation and Value Creation Alignment:** The organisation has established success criteria that not only focus on cloud-based innovation and experimentation but also on creating tangible value through transformation initiatives, all aligned with the organisation’s broader goals and strategy.

#### **How to determine if this good enough**

At this top maturity level, success measures for the cloud team emphasize innovation, experimentation, and direct ties to strategic value creation (e.g., cost savings, user satisfaction, or cross-government collaboration). You might see it "good enough" if:

1. **Clear Strategic Link**

   - Each new cloud feature or pilot directly supports organisational goals (e.g., citizen service improvement, efficiency targets).

1. **Ongoing Experimentation**

   - The team fosters a culture of trying new services (e.g., AI/ML, serverless, HPC), measuring success with prototypes, while being able to fail fast and learn.

1. **Demonstrable Value**

   - Whether it’s improved user experience, shortened delivery cycles, or significant cost reduction, the cloud initiatives produce measurable benefits recognised by leadership.

1. **Comprehensive Security & Compliance**
   - As per [NCSC cloud security principles](https://www.ncsc.gov.uk/collection/cloud-security) or [NIST controls](https://csrc.nist.gov/), the environment remains robustly secure—balancing innovation with risk management.

Even at this level, you can refine success criteria by further integrating synergy with multi-cloud or cross-department projects, shaping a broader public sector digital transformation. [GOV.UK’s digital transformation agenda](https://www.gov.uk/service-manual) encourages maximising user value with minimal friction.

#### **How to do better**

Below are **rapidly actionable** ways to continue improving innovation- and value-centric success criteria:

1. **Adopt a Value Stream Approach**

   - Link each cloud initiative to a user-facing or operational outcome:
     - e.g., reducing form-processing time from days to minutes, or improving public web performance by X%.
   - This ensures the entire pipeline, from idea to deployment, focuses on delivering measurable benefits.

1. **Incorporate Cross-Organisational Goals**

   - For large departmental or multi-department programs, align success metrics to shared objectives:
     - e.g., joint cost savings, integrated citizen ID solutions, or unified data analytics capabilities.

1. **Advance Sustainability Metrics**

   - Include environment-friendly cloud usage as part of success:
     - Checking region-level carbon footprints, or referencing [NCSC’s sustainability in cloud usage tips](https://www.ncsc.gov.uk/).
   - Encourages a green approach to innovation.

1. **Enable Continuous Learning and Sharing**

   - Promote open blog posts or internal wiki pages detailing each new experiment’s results—whether success or failure.
   - Encourages a virtuous cycle of rapid improvement.

1. **Periodically Recalibrate Metrics**
   - As technology evolves, update or retire older success metrics (e.g., "time to spin up a VM" might be replaced by "time to deploy a new serverless function"), ensuring they stay relevant to strategic ambitions.

By implementing a value stream approach, embedding cross-organisational goals, focusing on sustainability, encouraging transparency in experiments, and periodically recalibrating metrics, your cloud team solidifies its role as a driver of innovation and public value creation. This ensures alignment with evolving public sector needs, best practices, and digital transformation objectives.

**Keep doing what you’re doing,** and consider writing blog posts about your success criteria or opening pull requests to this guidance so other public sector organisations can adopt or refine similar approaches to measuring and achieving cloud team success.
