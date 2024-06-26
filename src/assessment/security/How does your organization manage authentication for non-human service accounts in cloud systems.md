---
title: How does your organization manage authentication for non-human service accounts in cloud systems?
tags: security
eleventyNavigation:
  parent: security
---

### **Human-like Accounts for Services:** Non-human service accounts are set up similarly to human accounts, with long-lived credentials that are often shared.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Locally Managed Long-Lived API Keys:** Long-lived API keys are used for service accounts, with management handled locally at the project or program level.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Centralized Secret Store for Service Accounts:** A centralized repository or secret store is in place for all non-human service accounts, and its use is mandatory across the organization.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Ephemeral Identities with Attestation:** Service accounts do not use long-lived secrets; instead, identity is established dynamically based on attestation mechanisms.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Code-Managed Identities with Federated Trust:** Identities for non-human services are managed as part of the infrastructure-as-code paradigm, allowing seamless federation across the organization without needing point-to-point trust relationships.

Keep doing what you're doing, write some blog posts and make pull requests to this guidance to help others.
