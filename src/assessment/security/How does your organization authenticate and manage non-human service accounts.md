---
title: How does your organization authenticate and manage non-human service accounts?
tags: security
eleventyNavigation:
  parent: security
---

### **Basic User/Pass Credentials:** Non-human service accounts are managed using basic ID/secret pair credentials, with a user/password approach.

### **API Key Usage:** Non-human service accounts are authenticated using API keys, which are less dynamic and might have longer lifespans.

### **Centralized Secret Store with Some Credential Rotation:** A central secret store is in place, possibly supporting automated rotation of credentials for some systems, enhancing security and management efficiency.

### **Mutual TLS for Authentication:** Mutual Transport Layer Security (mTLS) is used for non-human service accounts, providing a more secure, certificate-based authentication method.

### **Short-Lived, Federated Identities with Strong Verification:** Non-human service accounts use short-lived, federated identities that are strongly verifiable and validated with each request, ensuring a high level of security and minimizing the risk of credential misuse.
