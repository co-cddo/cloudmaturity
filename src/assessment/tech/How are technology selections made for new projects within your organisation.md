---
title: How are technology selections made for new projects within your organisation?
tags: tech
eleventyNavigation:
  parent: tech
---

### **Ad-Hoc and Independent Selections:** Each project independently selects technologies, leading to a diverse and often incompatible technology estate.

#### **How to determine if this good enough**

Your organisation may let project teams pick any tech stack or tool they prefer, resulting in minimal standardisation. This can be considered "good enough" if:

1. **Small or Isolated Projects**

   - Few cross-dependencies exist; each project runs mostly independently without needing to integrate or share solutions.

1. **Low Risk & Early Stage**

   - You’re in an experimental or startup-like phase, testing different tools before formalising a standard.

1. **No Centralised Governance Requirements**
   - There isn’t (yet) a policy from senior leadership or compliance bodies demanding consistent technology choices.

However, purely ad-hoc selections often lead to higher maintenance costs, learning curves, and integration challenges. [NCSC’s cloud and digital guidance](https://www.ncsc.gov.uk/) and [NIST enterprise architecture best practices](https://csrc.nist.gov/) encourage balancing project freedom with broader organisational consistency and security.

#### **How to do better**

Below are **rapidly actionable** ways to move away from fully independent, unaligned technology decisions:

1. **Start a Basic Tech Catalog**

   - Document each major technology used across projects, referencing at least version, licensing, security posture:
     - Helps discover overlaps or common solutions already in use.

1. **Create a Minimal Governance Policy**

   - For instance, a short doc that outlines which technologies require sign-off (e.g., for security or cost reasons):
     - referencing [GOV.UK’s technology code of practice](https://www.gov.uk/government/publications/technology-code-of-practice/technology-code-of-practice) or [NCSC supply chain considerations](https://www.ncsc.gov.uk/collection/supply-chain-security).

1. **Encourage Knowledge Sharing**

   - Run short "tech share" sessions, where teams present why they picked certain tools:
     - fosters cross-project alignment.

1. **Identify Quick-Win Common Tools**

   - E.g., centralised logging or container orchestration solutions (AWS ECS/EKS, Azure AKS, GCP GKE, OCI OKE) standardising at least some operational aspects.

1. **Plan for a Tech Radar or Steering Group**
   - Over the next 3–6 months, propose forming a small cross-departmental group or technology radar process to guide future selections.

By documenting existing tools, drafting minimal governance, facilitating knowledge exchange, pinpointing shared solutions, and preparing a technology steering approach, you mitigate fragmentation while still preserving some project autonomy.

### **Uniform Technology Mandate:** Technology choices are highly regulated, with a uniform, organisation-wide technology stack that all projects must adhere to.

#### **How to determine if this good enough**

Your organisation has a strict policy (e.g., "All apps must use Java + Oracle DB" or a locked stack). It can be considered "good enough" if:

1. **Stable & Predictable**

   - The environment is stable, and forced uniformity hasn’t hindered project innovation or changed business needs drastically.

1. **Meets Regulatory Compliance**

   - Uniform tooling might simplify audits, referencing [NCSC frameworks](https://www.ncsc.gov.uk/) or [NIST guidelines](https://csrc.nist.gov/) for consistent security controls.

1. **Sufficient for Current Workloads**
   - No major impetus from staff or leadership to adopt new frameworks or advanced cloud services.

Nevertheless, overly rigid mandates can stifle innovation, leading to shadow IT or suboptimal solutions. [GOV.UK’s service manual on agile and iterative approaches](https://www.gov.uk/service-manual) often advises balancing standardisation with flexibility for user needs.

#### **How to do better**

Below are **rapidly actionable** ways to refine a uniform tech mandate:

1. **Allow Exceptions via a Lightweight Process**

   - Define how teams can request use of a new framework if they demonstrate clear benefits (e.g., for HPC, AI, or serverless solutions).
   - referencing [NCSC’s guidance on evaluating new cloud services securely](https://www.ncsc.gov.uk/).

1. **Maintain a Living "Approved List"**

   - Encourage periodic updates to the mandated stack, adding modern solutions (like container orchestration or microservice frameworks) that align with cost and security best practices:
     - e.g., [AWS ECS/EKS](https://aws.amazon.com/ecs/), [Azure AKS](https://learn.microsoft.com/en-us/azure/aks/), [GCP GKE](https://cloud.google.com/kubernetes-engine), or [OCI OKE](https://www.oracle.com/cloud/free/oci-training/) for container orchestration.

1. **Pilot Innovations**

   - If staff identify potential new technology, sponsor a small pilot or proof-of-concept under controlled conditions, referencing [NIST SP 800-160 SecDevOps guidelines](https://csrc.nist.gov/).

1. **Implement Regular Tech Reviews**

   - e.g., every 6–12 months, a board or steering group reviews the mandated stack in light of feedback or new GDS or NCSC recommendations.

1. **Combine with Security & Cost Insights**
   - Show how uniform solutions reduce risk and expense, reassuring teams that standardisation benefits them while still enabling progress in areas like containerisation or DevSecOps.

By allowing exceptions via a straightforward process, regularly updating the approved tech list, sponsoring pilot projects, scheduling periodic reviews, and highlighting cost/security gains, you preserve the benefits of uniform technology while avoiding stagnation or shadow IT.

### **Guided by Outdated Resources:** A technology radar and some documented patterns exist, but they are outdated and not widely regarded as useful or relevant.

#### **How to determine if this good enough**

Your organisation made an effort to produce a technology radar or pattern library, but it’s now stale or incomplete. Teams may ignore it, preferring to research on their own. It might be "good enough" if:

1. **Past Good Intentions**

   - The existing radar or patterns once offered value, but no one has updated them in 1-2 years.

1. **Low Current Impact**

   - Projects have found alternative references, so the outdated resources do minimal harm.

1. **No High-Level Mandates**
   - Leadership or GDS/NCSC have not mandated an up-to-date approach yet.

Still, stale patterns or radars can lead to confusion about which tools are recommended or disapproved. [NCSC’s guidance on choosing secure technology solutions](https://www.ncsc.gov.uk/) and [NIST’s enterprise architecture best practices](https://csrc.nist.gov/) emphasize regularly refreshed references for modern security features.

#### **How to do better**

Below are **rapidly actionable** ways to revitalise or replace outdated resources:

1. **Initiate a Quick Radar Refresh**

   - A small cross-team group can produce an updated doc or web-based radar in 2-4 weeks, referencing recent frameworks, security improvements, and cost considerations:
     - e.g., adopting [AWS Graviton](https://aws.amazon.com/graviton/), [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/), [GCP AI/ML solutions](https://cloud.google.com/ai), or [OCI HPC offerings](https://www.oracle.com/cloud/free/oci-training/).

1. **Introduce a Living "Tech Patterns" Wiki**

   - Encourage teams to add their experiences or recommended patterns, so the resource remains collaborative and dynamic:
     - e.g., referencing [Confluence, GitHub Wiki, or internal SharePoint with version control].

1. **Schedule Semi-Annual Reviews**

   - Put it on the organisational calendar to revisit or update the radar every 6 months, factoring in [NCSC’s new advisories, GDS technology code of practice updates, or NIST’s emerging guidelines](https://www.ncsc.gov.uk/).

1. **Gather Feedback**

   - Ask project teams what patterns they rely on or find missing. Include new technologies that have proven valuable:
     - fosters a sense of collective ownership.

1. **Use Real Examples**
   - Populate the updated patterns with success stories from internal projects that solved real user needs.

By quickly refreshing the tech radar, establishing a living wiki, scheduling periodic updates, gathering project feedback, and focusing on real success stories, you transform outdated references into a relevant, frequently consulted guide that shapes better technology decisions.

### **Current and Maintained Guidance:** A regularly updated technology radar, along with current documentation and patterns, covers a wide range of use cases and is actively used for guidance.

#### **How to determine if this good enough**

Your organisation invests in a living, frequently updated set of technology choices or recommended patterns, which teams genuinely consult before starting projects. This can be "good enough" if:

1. **Broad Adoption**

   - Most dev/ops teams refer to the radar or patterns and find them beneficial.

1. **Timely Updates**

   - Items are regularly revised in response to new cloud services, [NCSC security alerts](https://www.ncsc.gov.uk/), or new GDS guidelines.

1. **Consistent Security & Cost**
   - The recommended solutions reduce redundant spend and ensure up-to-date security features.

To push further, you might incorporate a community-driven pipeline for continuous improvement or collaborate with cross-public sector bodies on shared patterns. [NIST enterprise architecture best practices](https://csrc.nist.gov/) or [NCSC supply chain guidelines](https://www.ncsc.gov.uk/) can help integrate security aspects more deeply.

#### **How to do better**

Below are **rapidly actionable** ways to enhance current, well-used guidance:

1. **Introduce a "Feedback Loop"**

   - Provide an easy mechanism (e.g., Slack channel, GitHub Issues) for teams to propose new additions or share experiences.
   - referencing [NCSC’s agile and iterative approach to technology improvement](https://www.ncsc.gov.uk/).

1. **Add Security & Cost Criteria**

   - For each technology in the radar, briefly discuss security posture and typical cost drivers (like egress fees or licensing):
     - referencing [AWS TCO calculators](https://calculator.awscloud.com/), [Azure Pricing](https://azure.microsoft.com/en-us/pricing/), [GCP Pricing](https://cloud.google.com/products/calculator), or [OCI cost analysis tools](https://www.oracle.com/cloud/free/oci-training/).

1. **Practice "Sunsetting"**

   - If a technology on the radar is outdated or replaced, mark it for deprecation with a recommended timeline:
     - Minimises legacy tech usage.

1. **Conduct Regular Showcases**

   - Let teams demo how they used a recommended pattern or overcame a challenge.
   - Encourages synergy and real adoption.

1. **Cross-Gov Collaboration**
   - Consider aligning with other government department radars for consistency, referencing [GOV.UK cross-department best practices or local council tech networks](https://www.gov.uk/service-manual).

By enhancing feedback channels, adding security/cost insights to each item, marking deprecated technologies, hosting showcases, and collaborating across agencies, you keep the guidance fresh, relevant, and beneficial for new project tech decisions.

### **Collaborative and Evolving Ecosystem:** Regular show-and-tell sessions and collaboration with existing teams are encouraged. There's a strong emphasis on reusing and extending existing solutions, alongside rewarding innovation and experimentation.

#### **How to determine if this good enough**

At this top maturity level, your organisation not only maintains up-to-date patterns or a tech radar, but also fosters a culture of continuous improvement and knowledge sharing. This is typically "good enough" if:

1. **Inherent Collaboration**

   - Teams frequently discuss or exchange solutions, referencing real success or lessons to guide new projects.

1. **Focus on Reuse**

   - If an app or microservice solves a common problem, others can adopt or adapt it, reducing duplication.

1. **Encouragement of New Ideas**
   - Innovation is rewarded, with agile, user-centered approaches, aligned with [GDS and NCSC agile security approaches](https://www.gov.uk/service-manual).

Nevertheless, you can refine advanced cross-government collaboration, embed HPC or AI solutions, or adopt multi-cloud synergy. [NIST SP 800-160 for software engineering considerations](https://csrc.nist.gov/) and [NCSC’s supply chain and DevSecOps guidance](https://www.ncsc.gov.uk/) might help expand.

#### **How to do better**

Below are **rapidly actionable** ways to strengthen a collaborative, evolving tech ecosystem:

1. **Establish a Formal Inner-Source Model**

   - Encourage code sharing or libraries across departments, referencing open-source practices but within the public sector context:
     - e.g., [GitHub Enterprise](https://github.com/enterprise) or [GitLab](https://about.gitlab.com/).

1. **Encourage Pairing or Multi-Dept Projects**

   - Sponsor short stints where devs from different teams cross-pollinate or solve shared challenges:
     - referencing [NCSC’s recommended cross-department collaboration practices](https://www.ncsc.gov.uk/).

1. **Recognise Innovators**

   - Publicly highlight staff who introduce successful new frameworks or cost-saving architecture patterns:
     - fosters a healthy "improvement" culture.

1. **Adopt Cross-department Show-and-Tell**

   - If relevant, share or co-present successful solutions with local councils or NHS, referencing [GOV.UK cross-government knowledge sharing events](https://www.gov.uk/service-manual).

1. **Integrate Feedback into Tech Radar**
   - Each time a new solution is proven, update the radar or patterns promptly:
     - ensuring the living doc truly represents real usage and best practice.

By establishing an inner-source approach, supporting short cross-team collaborations, celebrating innovators, connecting with other public sector bodies for knowledge sharing, and consistently updating patterns or the tech radar, you continuously evolve an energetic ecosystem that fosters reuse, innovation, and high-quality technology decisions.

**Keep doing what you’re doing,** and consider writing some blog posts or opening pull requests to share how your collaborative, evolving tech environment benefits your UK public sector organisation. This helps others adopt or improve similar patterns and fosters a culture of open innovation across government.
