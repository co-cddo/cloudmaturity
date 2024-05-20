---
title: How does your organization handle user provisioning for cloud systems, focusing on authentication for human users?
tags: security
eleventyNavigation:
  parent: security
---

### **Shared Accounts and Manual Account Management:** Accounts are shared or reused between multiple people with limited ability to discern who carried out an action from any logs collected. Where individual accounts exist for each user accounts they are manually created, deleted, updated, and assigned, involving significant manual effort and potential for inconsistency.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Identity Repository with Manual Processes:** An organizational identity repository (like Active Directory or LDAP) is used as the user source of truth, but processes for cloud system integration are manual or inconsistent.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Common Standards for Identity Management:** Standardized protocols and practices are in place for managing and mapping user identities between identity providers and cloud systems. Non-compliant services are less preferred.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Automated Federated Identity Management:** Federated identity management is fully automated, ensuring consistent user provisioning across all systems. Non-compliant services are isolated with appropriate mitigations.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Unified Cloud-Based Identity Provider:** A fully cloud-based user directory or identity provider acts as the single source of truth. Centralized management is aligned with user onboarding, movements, and terminations. Services not supporting federated identity have been phased out.

Keep doing what you're doing, write some blog posts and make pull requests to this guidance to help others.
