---
title: How do you keep your software supply chain secure?
tags: security
eleventyNavigation:
  parent: security
---

### We don’t track software dependencies. Updates are done as needed.

#### **How to determine if this good enough**

Your organisation or team may install open-source or third-party packages in an unstructured, manual manner, without consistent dependency manifests or version locks. This might be "good enough" if:

1. **Limited or Non-Critical Software**
   - You only run small, low-risk applications where you’re comfortable with less stringent controls.

1. **Short-Lived, Experimental Projects**
   - Minimal or proof-of-concept code that’s not used in production, so supply chain compromise would have little impact.

1. **No Strong Compliance Requirements**
   - There’s no immediate demand to generate or maintain an SBOM, or to comply with stricter public sector security mandates.

However, ignoring structured dependency management often leads to vulnerabilities, unknown or out-of-date libraries, and risk. [NCSC’s supply chain security guidance](https://www.ncsc.gov.uk/collection/supply-chain-security) and [NIST SP 800-161 on supply chain risk management](https://csrc.nist.gov/) recommend tracking dependencies to mitigate malicious or outdated code infiltration.

#### **How to do better**

Below are **rapidly actionable** steps to handle unmanaged dependencies more safely:

1. **Adopt Basic Package Manifests**
   - Even if you install packages with `apt`, create a minimal list of versions used. For language-based repos (Node, Python, etc.), commit `package.json` / `Pipfile` or equivalent:
     - Minimises drift and ensures consistent builds.

1. **Begin Generating Simple SBOM**
   - Tools like [Syft](https://github.com/anchore/syft), [CycloneDX CLI](https://github.com/CycloneDX/cyclonedx-cli), or [OWASP Dependency-Check](https://github.com/jeremylong/DependencyCheck) can produce a rudimentary SBOM from your current dependencies.
   - This helps you see what libraries you’re actually using.

1. **Enable Automatic or Regular Patch Checks**
   - For OS packages, configure [AWS Systems Manager Patch Manager](https://aws.amazon.com/systems-manager/features/), [Azure Automation Update Management](https://learn.microsoft.com/en-us/azure/automation/update-management/overview), [GCP OS Patch Management](https://cloud.google.com/os-patch-management/docs/overview), or [OCI OS Management Service](https://www.oracle.com/cloud/free/oci-training/) if you’re running cloud-based VMs, [IBM Cloud](https://cloud.ibm.com/docs/bare-metal?topic=bare-metal-bm-system-updates-patches)

1. **Document a Basic Update Policy**
   - e.g., "All packages are updated monthly," referencing [NCSC patch management best practices](https://www.ncsc.gov.uk/collection/10-steps-to-cyber-security).

1. **Plan an Overhaul to Managed Dependencies**
   - In the next 3-6 months, decide on a standard approach for dependencies:
     - e.g., using Node’s `package-lock.json`, Python’s `requirements.txt`, or Docker images pinned to specific versions.

By adopting minimal package manifests, generating basic SBOM data, automating patch checks, documenting an update policy, and planning a transition toward managed dependencies, you lay the groundwork for a more secure, transparent software supply chain.

### We set dependencies at the start and update for big changes. Some teams use tools to check security.

#### **How to determine if this good enough**

Your organisation employs some form of version locking or pinned dependencies, typically updating them at major releases or if a high-profile vulnerability arises. This might be "good enough" if:

1. **Moderate Project Complexity**
   - Projects can survive months without routine dependency updates, posing little risk.

1. **Partial Security Consciousness**
   - Team leads scan dependencies manually or with open-source scanners but only in reaction to CVE announcements.

1. **Limited DevSecOps**
   - Minimal continuous integration or automated scanning, relying on manual processes at release cycles.

Though better than unmanaged approaches, you might further automate scanning, adopt continuous patching, or integrate advanced DevSecOps. [NCSC’s supply chain best practices](https://www.ncsc.gov.uk/) and [NIST SP 800-161](https://csrc.nist.gov/) underscore proactive and more frequent checks.

#### **How to do better**

Below are **rapidly actionable** ways to strengthen basic dependency management:

1. **Automate Regular Dependency Scans**
   - Integrate scanners into CI pipelines:
     - e.g., [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot), [GitLab Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/), [Azure DevOps Security scanners](https://learn.microsoft.com/en-us/azure/devops/security/overview), [AWS CodeGuru Security](https://aws.amazon.com/codeguru/security/), or 3rd-party solutions like [Snyk](https://snyk.io/) or [Sonatype Nexus](https://www.sonatype.com/nexus-repository-oss).

2. **Define a Scheduled Update Policy**
   - e.g., monthly or bi-weekly updates for critical libraries, referencing [NCSC’s patch management recommendations](https://www.ncsc.gov.uk/).

3. **Maintain SBOM or Lock Files**
   - Ensure each repo has a "lock file" or a manifest. Also, consider generating SBOM data (CycloneDX, SPDX) for compliance:
     - Aligns with [NIST supply chain security guidance on EO 14028](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity).

4. **Enable Alerting for Known Vulnerabilities**
   - e.g., [AWS Security Hub or Lambda scanning solutions](https://aws.amazon.com/security-hub/), [Azure Security Center with container scanning](https://learn.microsoft.com/en-us/azure/security-center/security-center-introduction), [GCP Container Analysis](https://cloud.google.com/container-analysis/docs/overview), or [OCI Vulnerability Scanning](https://www.oracle.com/cloud/free/oci-training/) if container-based.

5. **Document Emergency Patching**
   - Formalise an approach for urgent CVE patching outside major releases.
   - Minimises ad-hoc panic when a high severity bug appears.

By automating scans, scheduling regular update windows, maintaining SBOM or lock files, setting up vulnerability alerts, and establishing a well-defined emergency patch process, you move from ad-hoc monitoring to a more structured, frequent approach that better secures the software supply chain.

### All code is checked and updated regularly, with fixes applied as needed.

#### **How to determine if this good enough**

Your organisation has begun actively scanning code repositories, triggering automated dependency updates or PRs when new vulnerabilities appear. This might be considered "good enough" if:

1. **Frequent Dependency Updates**
   - Teams integrate fresh library versions on a weekly or sprint basis, not just big releases.

1. **Automated Patches or Merge Requests**
   - Tools generate PRs automatically for security fixes, and developers review or test them quickly.

1. **Wider Organisational Awareness**
   - Alerts or dashboards highlight vulnerabilities in each project, ensuring consistent coverage across the enterprise.

You could further improve by employing advanced triage (prioritising fixes by severity or usage context), adopting container image scanning, or establishing a centralised SOC for supply chain threats. [NCSC’s protective monitoring](https://www.ncsc.gov.uk/) or [NIST SP 800-161 supply chain risk management approach](https://csrc.nist.gov/) outlines more advanced strategies.

#### **How to do better**

Below are **rapidly actionable** ways to strengthen proactive repository remediation:

1. **Introduce Risk Scoring or Context**
   - Distinguish vulnerabilities that truly impact your code path from those that are unreferenced dependencies:
     - e.g., using advanced scanning tools like Snyk, Sonatype, or vendor-based solutions.

1. **Adopt Container and OS Package Scanning**
   - If using Docker images or base OS packages, incorporate scanning in your CI/CD:
     - [AWS ECR image scanning](https://aws.amazon.com/ecr/features/), [Azure Container Registry scanning](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-scanning), [GCP Container Analysis](https://cloud.google.com/container-analysis/docs/overview), or [OCI Vulnerability Scanning Service](https://www.oracle.com/cloud/free/oci-training/).

1. **Refine Automated Testing**
   - Ensure new dependency updates pass comprehensive tests (unit, integration, security checks) before merging:
     - referencing [NCSC DevSecOps recommendations](https://www.ncsc.gov.uk/) and relevant [NIST DevSecOps frameworks](https://csrc.nist.gov/).

1. **Define an SLA for Fixes**
   - e.g., "Critical vulnerabilities fixed within 48 hours, high severity within 7 days," aligning with [NCSC’s vulnerability management best practices](https://www.ncsc.gov.uk/).

1. **Document & Track Exceptions**
   - If a patch is delayed (e.g., due to breakage risk), keep a formal record of why and a timeline for resolution:
     - Minimises the chance of indefinite deferral of serious issues.

By introducing vulnerability risk scoring, scanning container/OS packages, enhancing test automation for new patches, setting fix SLAs, and controlling deferrals, you significantly improve the proactive repository-level remediation approach across your entire software estate.

### A central team watches all code, fixes big problems first, and checks how each dependency is used.

#### **How to determine if this good enough**

Your organisation’s SOC or security team has a single pane of glass for code repositories, assessing discovered vulnerabilities in context (e.g., usage path, data sensitivity). You might see it "good enough" if:

1. **Robust Overviews**
   - The SOC sees each project’s open vulnerabilities, ensuring none slip through cracks.

1. **Contextual Prioritisation**
   - Vulnerabilities are triaged by severity and usage context (are dependencies actually loaded at runtime?).

1. **Coordinated Response**
   - The SOC, dev leads, and ops teams collaborate on remediation tasks; no major backlog or confusion over ownership.

You can further refine by adopting advanced threat intel feeds, deeper container or HPC scanning, or linking to enterprise risk management. [NCSC’s advice on a protective monitoring approach](https://www.ncsc.gov.uk/) and [NIST SP 800-171 for protecting CUI in non-federal systems](https://csrc.nist.gov/) might inform future expansions.

#### **How to do better**

Below are **rapidly actionable** ways to refine centralised, context-aware triage:

1. **Add Real-Time Threat Intelligence**
   - Integrate intel feeds that highlight newly discovered exploits targeting specific libraries:
     - e.g., [AWS Security Hub or Amazon Inspector with threat intel](https://aws.amazon.com/security-hub/), [Azure Defender’s threat DB](https://learn.microsoft.com/en-us/azure/defender-for-cloud/threat-intelligence), [GCP threat intelligence](https://cloud.google.com/threat-intelligence), or [OCI security advisories](https://www.oracle.com/cloud/free/oci-training/).

1. **Automate Contextual Analysis**
   - Tools that parse call graphs or code references to see if a vulnerable function is actually invoked:
     - Minimises false positives and patch churn.

1. **Collaborate with Dev Teams**
   - If a patch might break production, the SOC can coordinate safe rollout or canary testing to confirm stability before mandatory updates.

1. **Measure & Publish Remediation Metrics**
   - e.g., average time to fix a critical CVE or high severity vulnerability.
   - Encourages healthy competition and accountability across teams.

1. **Align with Overall Risk Registers**
   - When a big vulnerability emerges, feed it into your organisational risk register, referencing [NCSC or departmental risk management frameworks](https://www.ncsc.gov.uk/collection/supply-chain-security).

By integrating real-time threat intel, employing contextual code usage analysis, collaborating with dev for safe patch rollouts, tracking remediation metrics, and linking to broader risk management, you elevate centralised monitoring to a dynamic, strategic posture in addressing supply chain security.

### We use advanced tools to watch and fix supply chain risks, focusing on real threats.

#### **How to determine if this good enough**

At this highest maturity level, your organisation unifies proactive scanning, advanced threat intel, context-based triage, and real-time analytics to handle supply chain security. You might consider it "good enough" if:

1. **Minimal Noise, High Impact**
   - Automated processes accurately prioritise genuine threats, with few wasted cycles on false positives.

1. **Strategic Alignment**
   - The SOC or security function continuously updates leadership or cross-department risk boards about relevant vulnerabilities or supplier issues, referencing [NCSC’s supply chain security frameworks](https://www.ncsc.gov.uk/).

1. **Cross-Organisational Culture**
   - DevOps, security, and product leads collaborate seamlessly, ensuring supply chain checks are integral to release processes.

Still, you might adopt zero trust or HPC/AI scanning, cross-government code sharing, or advanced developer training as next steps. [NIST SP 800-161 on supply chain risk management](https://csrc.nist.gov/) and [NCSC advanced DevSecOps patterns](https://www.ncsc.gov.uk/) suggest iterative expansions of scanning and collaboration.

#### **How to do better**

Below are **rapidly actionable** ways to refine advanced, integrated supply chain security:

1. **Implement Automated Policy-as-Code**
   - e.g., [Open Policy Agent (OPA) in CI/CD](https://www.openpolicyagent.org/docs/latest/how-to-guides/opa-in-ci-cd/) or vendor-based tools ([AWS Service Control](https://aws.amazon.com/service-control/), [Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview), [GCP Org Policy](https://cloud.google.com/resource-manager/docs/organisation-policy/overview), [OCI Security Zones](https://www.oracle.com/cloud/free/oci-training/)).

1. **Extend SBOM Generation & Validation**
   - Enforce real-time SBOM generation and sign-off at each build:
     - referencing [NIST SBOM frameworks or NCSC guidelines on software transparency](https://www.ncsc.gov.uk/).
   - Automate verifying known safe versions.

1. **Adopt Multi-Factor Scanning**
   - Combine static code analysis, dependency scanning, container image scanning, and runtime threat detection:
     - e.g., [AWS CodeGuru Security + ECR scanning](https://aws.amazon.com/codeguru/security/), [Azure DevOps SAST + Container Registry scans](https://learn.microsoft.com/en-us/azure/devops/security/overview), [GCP Cloud Build with Container Analysis + Snyk](https://cloud.google.com/container-analysis/docs/overview), or [OCI Vulnerability Scanning + DevOps scanning integrations](https://www.oracle.com/cloud/free/oci-training/).

1. **Coordinate with Supplier/Partner Security**
   - If you rely on external code or vendors, integrate them into your scanning or require them to produce SBOMs:
     - align with [NCSC supply chain risk management best practices](https://www.ncsc.gov.uk/).

1. **Drive a Security-First Culture**
   - Provide ongoing staff training, referencing [NCSC e-learning resources or relevant NIST-based secure coding frameworks](https://csrc.nist.gov/).
   - Encourage environment that prioritises prompt, efficient patching.

By implementing policy-as-code in your pipelines, strengthening SBOM usage, blending multiple scanning techniques, managing upstream vendor security, and fostering a security-first ethos, you sustain a cutting-edge supply chain security environment—ensuring minimal risk, maximum compliance, and rapid threat response across UK public sector software development.
