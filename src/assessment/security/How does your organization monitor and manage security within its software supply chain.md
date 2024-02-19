---
tags: security
eleventyNavigation:
  parent: security
---

## How does your organization monitor and manage security within its software supply chain?[radios] =

() **Unmanaged Dependencies:** Dependencies are not formally managed, installed ad-hoc as needed, and updated periodically without tracking versions or full dependency trees, such as using `apt` or `yum` to install packages without a manifest file that can operate as an [SBOM](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance).
() **Basic Dependency Management with Ad-Hoc Monitoring:** All dependencies are set at project initiation and updated during major releases or in response to significant advisories. Some teams use tools to monitor supply chain security in an ad-hoc manner, scanning dependency manifests with updates aligning with project releases.
() **Proactive Remediation Across Repositories:** All repositories are actively monitored, with automated remediation steps. Updates are systematically applied, aligning with project release schedules.
() **Centralized Monitoring with Context-Aware Triage:** A centralized Security Operations Center (SOC) maintains an overview of all repositories, coordinating high-severity issue remediation. The system also triages issues based on dependency usage context, focusing remediation efforts on critical issues.
() **Advanced, Integrated Security Management:** This approach combines centralized monitoring, risk management, and context-aware triage, with a focus on minimizing false positives and ensuring focused, effective remediation across the organization's software supply chain.
