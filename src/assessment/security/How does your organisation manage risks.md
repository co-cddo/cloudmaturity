---
title: How do you manage risks?
tags: security
eleventyNavigation:
  parent: security
---

### Informally, by individuals.

#### **How to determine if this good enough**

Your organisation’s risk management approach is largely ad hoc—no formal tools or consistent methodology. It might be "good enough" if:

1. **Limited Scale or Maturity**

   - You run small, low-criticality projects where major incidents are rare, so an informal approach hasn’t caused big issues yet.

1. **Tight Budget or Short Timescale**

   - Adopting more structured processes may currently seem out of reach.

1. **No External Compliance Pressures**
   - You aren’t subject to rigorous audits requiring standardised risk registers or processes.

Nevertheless, purely informal risk management can lead to overlooked threats—particularly in cloud deployments, which often demand compliance with [NCSC security guidance](https://www.ncsc.gov.uk/) and [NIST risk management frameworks](https://csrc.nist.gov/).

#### **How to do better**

Below are **rapidly actionable** steps to improve from an informal approach:

1. **Create a Simple Risk Checklist**

   - Document cloud-specific concerns: data breaches, credential leaks, cost overruns, vendor lock-in.
   - Align with [NCSC’s Cloud Security Principles](https://www.ncsc.gov.uk/collection/cloud-security) or a [NIST SP 800-37 based checklist](https://csrc.nist.gov/).

1. **Record & Communicate Regularly**

   - Even a single spreadsheet or Word doc with identified risks, likelihood, and impact fosters consistency.
   - Share it monthly or quarterly with the relevant stakeholders.

1. **Assign Risk Owners**

   - For each risk, name someone responsible for tracking and mitigating.
   - Prevents duplication or "everyone and no one" owning an issue.

1. **Introduce Basic Likelihood & Impact Scoring**

   - e.g., 1-5 scale for likelihood, 1-5 for impact, multiply for a total risk rating.
   - This helps prioritise and start discussion around risk tolerance.

1. **Plan for Next Steps**
   - Over the next 3-6 months, aim to adopt a minimal formal risk register or define a short process, referencing official guidelines from [NCSC or GOV.UK project risk management](https://www.gov.uk/government/publications/project-delivery-functional-standard).

By establishing a simple risk checklist, scheduling short reviews, assigning ownership, adopting basic scoring, and outlining a plan for incremental improvements, you quickly move from purely informal approaches to a more recognisable and consistent risk management foundation.

### Tracked in spreadsheets by each team.

#### **How to determine if this good enough**

Your organisation does track risks in spreadsheets, but each project manages them independently, with no overarching or centralised view. This might be "good enough" if:

1. **Limited Inter-Project Dependencies**

   - Each project’s risks are fairly separate, so missing cross-program synergy or consolidated reporting doesn’t cause issues.

1. **Basic Consistency**

   - Each spreadsheet might follow a similar format (like risk ID, likelihood, impact, mitigations), but there’s no single consolidated tool.

1. **Low Complexity**
   - The organisation’s scale is small enough to handle manual processes, and no major audits require advanced solutions.

Spreadsheets can lead to inconsistent categories, scattered ownership, and difficulty identifying enterprise-wide risks—especially for cloud security or data privacy. [NCSC guidance](https://www.ncsc.gov.uk/) and [NIST risk frameworks](https://csrc.nist.gov/) often advocate a centralised or standardised method for managing overlapping concerns.

#### **How to do better**

Below are **rapidly actionable** improvements:

1. **Adopt a Standardised Template**

   - Provide a uniform risk register template across all projects.
   - Outline columns (e.g., risk description, category, likelihood, impact, owner, mitigations, target resolution date).

1. **Encourage Regular Cross-Project Reviews**

   - Monthly or quarterly, each project lead presents top risks.
   - Creates awareness of shared or similar risks (like cloud credential leaks, compliance deadlines).

1. **Consolidate Key Risks**

   - Extract major issues from each spreadsheet into a single "organisational risk summary" for senior leadership or departmental boards.

1. **Implement Basic Tool or Shared Repository**

   - e.g., host a central SharePoint list, JIRA board, or Google Sheet consolidating all project-level risk inputs:
     - Minimises confusion while maintaining a single source of truth.

1. **Leverage Some Automation**
   - For cloud-specific issues, consider vendor solutions:
     - [AWS Security Hub or AWS Config for scanning misconfigurations](https://aws.amazon.com/security-hub/), [Azure Advisor or Azure Security Center](https://learn.microsoft.com/en-us/azure/advisor/advisor-overview), [GCP Security Command Center](https://cloud.google.com/security-command-center/docs/overview), or [OCI Security Advisor](https://www.oracle.com/cloud/free/oci-training/) can highlight recognised cloud security or cost risks to feed into your register.

By adopting a consistent template, hosting cross-project reviews, summarising top risks in an organisational-level register, using a shared tool or repository, and partly automating detection of cloud security concerns, you advance from ad-hoc spreadsheets to a more coordinated approach.

### Teams keep risk registers, which they review and update.

#### **How to determine if this good enough**

Your organisation uses structured risk registers—most likely Excel-based or a simple internal tool—and schedules regular reviews (e.g., monthly or quarterly). This is likely "good enough" if:

1. **Consistent Methodology**

   - Teams follow a standardised approach: e.g., risk descriptions, scoring, mitigations, owners, due dates.

1. **Regular Governance**

   - Directors, program managers, or a governance board reviews and signs off on updated risks.

1. **Integration with Cloud Projects**
   - Cloud-based services or migrations are documented in the risk register, capturing security, cost, or vendor concerns.

While fairly robust, you may further unify these registers across multiple programs, introduce real-time automation or advanced analytics, and incorporate risk-based prioritisation. [NCSC’s operational resilience guidance](https://www.ncsc.gov.uk/collection/operational-resilience) and [NIST SP 800-37 risk management framework](https://csrc.nist.gov/) advise continual refinement.

#### **How to do better**

Below are **rapidly actionable** ways to expand your formal risk register process:

1. **Introduce Real-Time Updates or Alerts**

   - If new vulnerabilities or breaches occur, staff must promptly add or update a risk in the register:
     - Possibly integrate with [AWS Security Hub](https://aws.amazon.com/security-hub/), [Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/), [GCP Security scans](https://cloud.google.com/security-command-center/docs/overview), or [OCI Security Advisor](https://www.oracle.com/cloud/free/oci-training/) for quick notifications.

1. **Measure Risk Reduction Over Time**

   - Track how mitigations lower risk levels. Summaries can feed departmental or board-level dashboards:
     - e.g., "Risk #12: Cloud credential leaks reduced from High to Medium after implementing MFA and secret rotation."

1. **Encourage GRC Tools**

   - Government Risk and Compliance tools can unify multiple registers:
     - e.g., ServiceNow GRC, RSA Archer, or open-source solutions.
   - Minimises duplication across large organisations or multiple projects.

1. **Link Mitigations to Budgets and Timelines**

   - Where possible, highlight the cost or resource needed for each major mitigation:
     - Helps leadership see rationale for investing in e.g., staff training, new security tools.

1. **Adopt a Cloud-Specific Risk Taxonomy**
   - Incorporate categories like "Data Residency," "Vendor Lock-in," "Cost Overrun," or "Insecure IAM," referencing [NCSC or NIST guidelines](https://csrc.nist.gov/).
   - Ensures team members identify typical cloud vulnerabilities systematically.

By setting up real-time triggers for new risks, visualising risk reduction, considering GRC tooling, linking mitigation to budgets, and classifying cloud-specific risk areas, you reinforce a structured risk registry that handles dynamic and evolving threats efficiently.

### We have a central risk system, which we review and update.

#### **How to determine if this good enough**

Your organisation has a singular system (e.g., a GRC platform) for capturing, prioritising, and reviewing risks from multiple streams, including cloud transformation efforts. It’s likely "good enough" if:

1. **Enterprise-Wide Visibility**

   - Senior leadership and departmental leads see aggregated risk dashboards, no longer limited to siloed project registers.

1. **Consistent Method & Language**

   - Risk scoring, categories, and statuses are uniform, reducing confusion or mismatches.

1. **Active Governance**
   - A central board or committee regularly reviews top risks, ensures accountability, and drives mitigations.

To further strengthen, you may embed advanced threat intelligence or real-time monitoring data, adopt risk-based budgeting, or unify cross-department risk sharing. [NCSC’s supply chain security approach](https://www.ncsc.gov.uk/collection/supply-chain-security) and [NIST ERM guidelines](https://csrc.nist.gov/) both mention cross-organisational alignment as vital for robust risk oversight.

#### **How to do better**

Below are **rapidly actionable** ways to optimise integrated, centrally overseen risk management:

1. **Incorporate Cloud-Specific Telemetry**

   - Feed alerts from [AWS Security Hub](https://aws.amazon.com/security-hub/), [Azure Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/), [GCP SCC](https://cloud.google.com/security-command-center/docs/overview), or [OCI Security Advisor](https://www.oracle.com/cloud/free/oci-training/) directly into your central risk management system:
     - Automates new risk entries or risk re-scoring when a new vulnerability emerges.

1. **Advance Real-Time Dashboards**

   - Provide live risk dashboards for each department or service, updating as soon as a risk or its mitigations change:
     - e.g., hooking up GRC tools to Slack/Teams for immediate notifications.

1. **Use Weighted Scoring for Cloud Projects**

   - Factor in vendor lock-in, cost unpredictability, and data security in your risk scoring.
   - Align with [NCSC’s cloud security frameworks](https://www.ncsc.gov.uk/) or [NIST SP 800-53 AC/B as relevant](https://csrc.nist.gov/).

1. **Formalise Risk Response Plans**

   - For high or urgent risks, define an immediate action plan or "playbook," referencing [NCSC’s incident response methods](https://www.ncsc.gov.uk/collection/incident-management).

1. **Encourage Cross-department Collaboration**
   - Public sector bodies often share similar cloud challenges—facilitate risk-sharing sessions with local councils, NHS, or other departments:
     - Possibly aligning with [GOV.UK best practices for cross-government knowledge exchange](https://www.gov.uk/service-manual).

By integrating real-time cloud telemetry into your central risk system, offering advanced dashboards, applying specialised scoring for cloud contexts, setting formal risk responses, and cross-collaborating among agencies, you achieve deeper, more proactive risk management.

### We use an advanced risk tool for all teams, which helps us spot and escalate risks.

#### **How to determine if this good enough**

At this final level, your organisation uses a sophisticated enterprise risk platform that automatically escalates or notifies stakeholders when certain thresholds are met. This approach is typically "good enough" if:

1. **Near Real-Time Insights**

   - The tool collects data from multiple sources (e.g., CI/CD pipelines, security scans, cost anomalies) and auto-updates risk profiles.

1. **Proactive Alerts**

   - If a new vulnerability emerges or usage surpasses a cost threshold, the system escalates to management or security leads.

1. **High Maturity Culture**
   - Teams understand and act on risk metrics, fostering a supportive environment for quick mitigation.

Although quite mature, you might refine further by adopting advanced AI-based analytics, cross-organisation risk sharing (e.g., multi-department or local councils), or continuously updating zero-trust or HPC/AI risk frameworks. [NCSC’s advanced risk guidance](https://www.ncsc.gov.uk/) and [NIST’s enterprise risk management frameworks](https://csrc.nist.gov/) suggest iterative refinement.

#### **How to do better**

Below are **rapidly actionable** ways to enhance an already advanced, proactive risk management system:

1. **Adopt AI/ML for Predictive Risk**

   - Tools or scripts that detect emerging patterns before they become major issues:
     - e.g., anomalous cost spikes or security logs flagged by [AWS DevOps Guru](https://aws.amazon.com/devops-guru/), [Azure Sentinel ML](https://learn.microsoft.com/en-us/azure/sentinel/ml-analytics), [GCP Security Command Center with ML](https://cloud.google.com/security-command-center/docs/overview), or [OCI advanced analytics](https://www.oracle.com/cloud/free/oci-training/).

1. **Integrate Risk with DevSecOps**

   - Show real-time risk scores in CI/CD pipelines, halting deployments if a new "High" or "Critical" risk is detected:
     - e.g., referencing [AWS CodePipeline gates](https://aws.amazon.com/codepipeline/features/), [Azure DevOps approvals](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals), [GCP Cloud Build triggers](https://cloud.google.com/cloud-build/docs/triggers), or [OCI DevOps pipeline policy checks](https://www.oracle.com/cloud/free/oci-training/).

1. **Multi-Cloud or Hybrid Risk Consolidation**

   - If operating across AWS, Azure, GCP, OCI, or on-prem, unify them in one advanced GRC or SIEM tool:
     - Minimises siloed risk reporting.

1. **Extend Collaborative Risk Governance**

   - If you share HPC or cross-department AI/ML projects, hold multi-department risk board sessions:
     - Aligning with [GOV.UK collaborative approach or relevant NCSC multi-stakeholder security frameworks](https://www.ncsc.gov.uk/).

1. **Regularly Refresh Risk Tolerance & Metrics**
   - Reassess risk thresholds to ensure they remain relevant.
   - If your environment scales or new HPC/AI workloads are introduced, adapt risk definitions accordingly.

By leveraging AI for predictive risk detection, embedding risk scoring in DevSecOps pipelines, consolidating multi-cloud/hybrid risk data, collaborating on risk boards across agencies, and regularly updating risk tolerance metrics, you optimise an already advanced, proactive risk management system—ensuring continuous alignment with evolving public sector challenges and security imperatives.

**Keep doing what you’re doing,** and consider documenting your advanced risk management approaches through blog posts or by opening pull requests to this guidance. Sharing such experiences helps other UK public sector organisations adopt progressive risk management strategies in alignment with NCSC, NIST, and GOV.UK best practices.
