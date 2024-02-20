---
title: How does your organization handle the creation and storage of build artifacts?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Ad-Hoc or Non-Existent Artifact Management:** Build artifacts are not systematically managed; code and configurations are often edited live on servers.

### **Environment-Specific Rebuilds:** Artifacts are rebuilt in each environment, leading to potential inconsistencies and inefficiencies.

### **Basic Artifact Storage with Version Control:** Build artifacts are stored, possibly with version control, but without strong emphasis on immutability or security measures.

### **Pinned Dependencies with Cryptographic Verification:** All dependencies in build artifacts are tightly pinned to specific versions, with cryptographic signing or hashes to ensure integrity.

### **Immutable, Signed Artifacts with Audit-Ready Storage:** Immutable build artifacts are created and cryptographically signed, especially for production. All artifacts are stored in immutable storage for a defined period for audit purposes, with a clear process to recreate environments for thorough audits or criminal investigations.
