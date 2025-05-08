---
title: What is the structure of your organisation in terms of managing cloud operations?
tags: operations
eleventyNavigation:
  parent: operations
---

### **Developer-Managed Cloud Operations:** There is no dedicated cloud team; application developers are responsible for managing all aspects of cloud operations.

#### **How to determine if this good enough**

If developers handle cloud deployments, architecture, security, and day-to-day management without a specialised cloud team, you might consider it "good enough" if:

1. **Small, Simple Environments**

   - The cloud footprint is minimal, with one or two services that developers can handle without overhead.

1. **Low Operational Complexity**

   - The services don’t require advanced resilience, multi-region failover, or intricate compliance demands.
   - Developer skill sets are adequate to manage basic cloud tasks.

1. **Limited Budget or Staffing**
   - Your department lacks the resources to form a dedicated cloud or DevOps team, and you can handle ongoing operations with the existing developer group.

However, if your environment grows or demands 24/7 uptime, developer-led ops can hinder productivity and conflict with advanced security or compliance best practices recommended by [NCSC](https://www.ncsc.gov.uk/) or [NIST SP 800-53](https://csrc.nist.gov/).

#### **How to do better**

Below are **rapidly actionable** steps to move beyond developer-exclusive cloud management:

1. **Form a DevOps Guild or Community of Practice**

   - Even without a formal team, bring developers interested in operations together monthly to share tips.
   - This fosters consistent practices, referencing [NCSC secure cloud recommendations](https://www.ncsc.gov.uk/collection/cloud-security) or [GOV.UK’s agile/delivery guidelines](https://www.gov.uk/service-manual/agile-delivery).

1. **Introduce Minimal Automated Monitoring & Alerts**

   - Ensure developers aren’t manually checking logs. Use built-in tools:
     - [AWS CloudWatch or AWS Health Dashboard to spot issues proactively](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)
     - [Azure Monitor alerts for performance anomalies or security signals](https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview)
     - [GCP Cloud Logging & Monitoring with real-time alerting for errors/spikes](https://cloud.google.com/logging/docs/monitoring)
     - [OCI Monitoring & Notifications for resource or cost anomalies](https://docs.oracle.com/en-us/iaas/Content/Monitoring/Concepts/monitoringoverview.htm)

1. **Implement Basic Infrastructure as Code**

   - If developers manage cloud resources manually via console, introduce:
     - [AWS CloudFormation, AWS CDK, or Terraform for consistent deployments](https://docs.aws.amazon.com/cloudformation/index.html)
     - [Azure Resource Manager (Bicep), or Terraform modules for standard infrastructure patterns](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview)
     - [GCP Deployment Manager or Terraform to keep code-based environment definitions](https://cloud.google.com/deployment-manager/docs/overview)
     - [OCI Resource Manager or Terraform for replicable resource creation](https://docs.oracle.com/en-us/iaas/Content/ResourceManager/Concepts/stacksoverview.htm)
     - [IBM Cloud Schematics](https://cloud.ibm.com/docs/schematics?topic=schematics-getting-started) for scripted automation of your cloud environment

1. **Add a Cloud Security Checklist**

   - Ensure developers follow at least a minimal set of policies for encryption, IAM, and logging, aligned with [NCSC Cloud Security guidance](https://www.ncsc.gov.uk/collection/cloud-security).

1. **Request Budget or Headcount**
   - If workloads grow, advocate for dedicated cloud engineering staff. Present cost/risk benefits to leadership, referencing [GOV.UK cloud-first policy](https://www.gov.uk/guidance/government-cloud-first-policy) and potential agility gains.

By fostering a DevOps guild, adding automated monitoring, adopting IaC, and pushing for minimal security guidelines, you gradually evolve from purely developer-led ops to a more stable, repeatable cloud operation that can scale.

### **Fully Outsourced Cloud Operations and Strategy:** All cloud operations, including the definition of strategic direction, are outsourced to a third-party supplier.

#### **How to determine if this good enough**

When all aspects of cloud—deployment, maintenance, security, strategy—are handled by an external vendor, you might consider it "good enough" if:

1. **Limited Internal Capacity**

   - You do not have the in-house resources or time to recruit a dedicated cloud team.
   - Outsourcing meets immediate needs without major overhead.

1. **Tight Budget**

   - The contract with an external supplier may appear cost-effective at present, covering both ops and strategic planning.

1. **Stable Workloads**
   - Your environment rarely changes, so a third-party can manage updates or occasional expansions without heavy internal oversight.

However, outsourcing strategic direction can leave the organisation dependent on external decisions, potentially misaligned with your departmental goals or public sector guidelines. [NCSC’s recommendations](https://www.ncsc.gov.uk/) often emphasize maintaining a degree of internal oversight for security and compliance reasons.

#### **How to do better**

Below are **rapidly actionable** ways to balance outsourced support with internal ownership:

1. **Retain Strategic Oversight**

   - Even if operations remain outsourced, designate an internal "Cloud Lead" or small working group responsible for governance and security:
     - They should sign off on major architectural changes, referencing [NIST Cloud Computing frameworks](https://csrc.nist.gov/projects/cloud-computing).

1. **Set Clear SLA and KPI Requirements**

   - Make sure the vendor’s contract outlines response times, compliance with [GOV.UK Cloud Security Principles](https://www.gov.uk/government/publications/cloud-security-guidance) or NCSC best practices, and regular cost-optimisation reviews.

1. **Insist on Transparent Reporting**

   - Request routine dashboards or monthly metrics on performance, cost, security events.
   - Ask the vendor to integrate with your chosen monitoring tools if possible.

1. **Plan a Knowledge Transfer Path**

   - Negotiate with the vendor to provide training sessions or shadowing opportunities, building internal cloud literacy:
     - e.g., monthly knowledge-sharing on cost optimisation or security patterns.

1. **Retain Final Decision Power on Strategic Moves**
   - The vendor can propose solutions, but major platform changes or expansions should get internal review for alignment with departmental objectives.
   - This ensures the outsourced arrangement doesn’t override your broader digital strategy.

By keeping strategic authority, setting stringent SLAs, fostering vendor-provided knowledge transfer, and maintaining transparent reporting, you reduce vendor lock-in and ensure your cloud approach aligns with public sector priorities and compliance expectations.

### **Outsourced Operations with Internal Strategic Ownership:** Cloud operations are outsourced, but the strategic direction for cloud usage is developed and owned internally by the department.

#### **How to determine if this good enough**

Here, your organisation retains the cloud vision and strategy, while day-to-day ops remain outsourced. It might be "good enough" if:

1. **High-Level Control**

   - You define the roadmap (e.g., which services to adopt, target costs, security posture), while the vendor handles operational execution.

1. **Alignment with Department Goals**

   - Because strategy is owned internally, solutions remain consistent with your policy, user needs, and compliance.

1. **Balanced Resource Usage**
   - Outsourcing ops can reduce staff overhead, allowing your in-house team to focus on strategic or domain-specific tasks.

If this arrangement effectively supports agile improvements, meets cost targets, and respects data security guidelines (from [NCSC](https://www.ncsc.gov.uk/collection/cloud-security) or [NIST SP 800-53](https://csrc.nist.gov/))—while you retain final say on direction—then it can suffice. But you can enhance synergy and reduce possible knowledge gaps further.

#### **How to do better**

Below are **rapidly actionable** enhancements:

1. **Co-Create Operational Standards**

   - Collaborate with your outsourced vendor on a joint "Operations Handbook" that includes standard procedures for deployments, monitoring, or incident response:
     - Reference [NCSC incident management guidance](https://www.ncsc.gov.uk/collection/incident-management) or relevant [GOV.UK service operation guidelines](https://www.gov.uk/service-manual).

1. **Embed Vendor Staff into Internal Teams**

   - If feasible, have vendor ops staff attend your sprint reviews or planning sessions, improving communication and reducing friction.

1. **Establish Regular Strategic Review**

   - Conduct quarterly or monthly reviews to align on:
     - Future cloud services adoption
     - Cost optimisation opportunities
     - Evolving security or compliance needs

1. **Request Real-Time Metrics**

   - Ensure the vendor’s operational data (e.g., cost usage, performance dashboards) is accessible to your internal strategic leads:
     - e.g., a shared AWS Cost Explorer or Azure Cost Management view for weekly usage checks.

1. **Plan for Potential In-House Expansion**
   - If usage grows or departmental leadership wants more direct control, negotiate partial insourcing of key roles or knowledge transfer from the vendor.

By jointly defining an operations handbook, integrating vendor ops staff in your planning, reviewing strategy regularly, and retaining real-time metrics, you strengthen internal leadership while enjoying the convenience of outsourced operational tasks.

### **Hybrid Approach with Outsourced Augmentation:** A mix of in-house and outsourced resources is used. Third-party suppliers provide additional capabilities (e.g., on-call support), while strategic cloud direction is led by departmental leaders.

#### **How to determine if this good enough**

When you blend internal expertise with external support—for instance, your staff handle architecture and day-to-day governance, while a vendor offers specialised services—this arrangement can be "good enough" if:

1. **Flexible Resource Allocation**

   - You can easily scale up external help for advanced tasks (e.g., HPC workloads, complex migrations) or 24/7 on-call coverage without overstaffing internally.

1. **Strong Collaboration**

   - Regular communication ensures your internal team remains involved, learning from the vendor’s advanced capabilities.

1. **Cost-Effective**
   - Outsourcing only targeted areas (e.g., overnight ops or specialised DevOps) while your team handles strategic decisions can keep budgets manageable and transparent.

However, inconsistent processes between internal staff and vendor resources can cause friction or confusion about accountability. [NCSC’s guidance on supplier assurance](https://www.ncsc.gov.uk/section/products-services/supplier-assurance) often emphasizes the importance of well-defined contracts and security alignment.

#### **How to do better**

Below are **rapidly actionable** ways to optimise the hybrid approach:

1. **Standardise Tools and Processes**

   - Require both in-house and vendor teams to adopt a single set of CI/CD pipelines or logging solutions:
     - e.g., [AWS CodePipeline or Azure DevOps for build/test/deploy, with shared logging in CloudWatch/Azure Monitor/GCP Logging/OCI Logging](https://docs.aws.amazon.com/codepipeline/latest/userguide/what-is-codepipeline.html)
   - This ensures seamless handoffs and consistent security posture.

1. **Define Clear Responsibilities**

   - For each area (e.g., incident management, security patching, cost reviews), specify whether the vendor or in-house staff leads.
   - Consult [NCSC’s supply chain security guidance](https://www.ncsc.gov.uk/collection/supply-chain-security) to ensure robust accountability.

1. **Integrate On-Call Rotations**

   - If the vendor provides 24/7 coverage, have an internal secondary on-call or bridging approach:
     - This fosters knowledge exchange and ensures no single point of failure if the vendor struggles.

1. **Align on a Joint Roadmap**

   - Create a 6-12 month cloud roadmap, listing major initiatives like infrastructure refreshes, security enhancements (e.g., compliance with [NIST SP 800-53 controls](https://csrc.nist.gov/)), or cost optimisation steps.

1. **Encourage Cross-Training**
   - Rotate vendor staff into internal workshops or hackathons, and have your staff occasionally shadow vendor experts to deepen in-house capabilities.

By unifying tools, clarifying roles, rotating on-call duties, aligning on a roadmap, and cross-training, you make the hybrid model more cohesive—maximising agility and ensuring consistent cloud operation standards across internal and outsourced teams.

### **Dedicated In-House Cloud Team:** A robust, dedicated cloud team exists within the organisation, comprising at least 5 civil/public servant employees per cloud platform. This team has a shared roadmap for cloud capabilities, adoption, and migration.

#### **How to determine if this good enough**

If your organisation has an in-house cloud team for each major platform (e.g., AWS, Azure, GCP, Oracle Cloud), or at least one broad team covering multiple platforms, you might consider it "good enough" if:

1. **Comprehensive Expertise**

   - Your staff includes architects, DevOps engineers, security specialists, and cost analysts, ensuring all critical angles are covered.

1. **Clear Organisational Roadmap**

   - A well-defined strategy for cloud migration, new service adoption, cost optimisation, or security posture, shared by leadership.

1. **Strong Alignment with Public Sector Objectives**

   - The team ensures compliance with [GOV.UK cloud policy](https://www.gov.uk/guidance/government-cloud-first-policy), [NCSC best practices](https://www.ncsc.gov.uk/collection/cloud-security), and possibly advanced NIST frameworks.

1. **High Independence**
   - The team can rapidly spin up new projects, respond to incidents, and deliver advanced capabilities without external vendor lock-in.

Though at a high maturity level, ongoing improvements in team structure, cross-functional collaboration with developer squads, or advanced innovation remain possible.

#### **How to do better**

Below are **rapidly actionable** ways to refine an already dedicated in-house cloud team:

1. **Adopt a DevSecOps Center of Excellence (COE)**

   - Evolve your cloud team into a central repository for best practices, security frameworks, and ongoing training:
     - Provide guidelines on ephemeral environments, compliance-as-code, or advanced ML operations.

1. **Set Up Autonomous Product Teams**

   - Embed cloud team members directly into product squads, letting them self-manage infrastructure and pipelines with minimal central gatekeeping:
     - This fosters agility while the central team maintains overarching governance.

1. **Implement Policy-as-Code and FinOps**

   - Automate compliance (e.g., [OPA](https://www.openpolicyagent.org/) or vendor-based policy enforcements like [AWS SCPs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentityandaccessmanagement.html), [Azure Policy](https://docs.microsoft.com/en-us/azure/azure-policy/overview), [GCP Organization Policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview), [OCI Security Zones](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/securityzones.htm)) across accounts or projects.
   - Integrate cost visibility into daily dev processes, referencing [NCSC supply chain or financial governance](https://www.ncsc.gov.uk/collection/supply-chain-security), or [NIST SP guidelines on cost management](https://csrc.nist.gov/publications/detail/sp/800-160/final).

1. **Champion Innovations**

   - Keep experimenting with advanced features (e.g., AWS Graviton, Azure confidential computing, GCP Anthos multi-cloud, or OCI HPC offerings) to continuously optimise performance and cost.

1. **Regularly Review and Update the Roadmap**
   - Adapt to new government mandates, NCSC advisories, or emerging technologies.
   - Share lessons learned via [GOV.UK blog posts on digital transformation](https://gds.blog.gov.uk/).

By embedding security and cost best practices, enabling cross-functional product teams, instituting policy-as-code, and continually updating your roadmap, your dedicated in-house cloud team evolves into a dynamic, cutting-edge force that consistently meets UK public sector operational and compliance demands.

**Keep doing what you’re doing,** and consider writing up your experiences or publishing blog posts on your cloud team’s journey. Also, contribute pull requests to this guidance or similar public sector best-practice repositories, helping others evolve their organisational structures for effective cloud operations.
