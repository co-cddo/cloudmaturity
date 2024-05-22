---
title: How does your organization handle the creation and storage of build artifacts?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Ad-Hoc or Non-Existent Artifact Management:** Build artifacts are not systematically managed; code and configurations are often edited live on servers.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Environment-Specific Rebuilds:** Artifacts are rebuilt in each environment, leading to potential inconsistencies and inefficiencies.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Basic Artifact Storage with Version Control:** Build artifacts are stored, possibly with version control, but without strong emphasis on immutability or security measures.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Pinned Dependencies with Cryptographic Verification:** All dependencies in build artifacts are tightly pinned to specific versions, with cryptographic signing or hashes to ensure integrity.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Immutable, Signed Artifacts with Audit-Ready Storage:** Immutable build artifacts are created and cryptographically signed, especially for production. All artifacts are stored in immutable storage for a defined period for audit purposes, with a clear process to recreate environments for thorough audits or criminal investigations.

Keep doing what you're doing, write some blog posts and make pull requests to this guidance to help others.
