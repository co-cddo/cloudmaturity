---
title: How does your organization release updates to its applications and services?
tags: operations
eleventyNavigation:
  parent: operations
---

### **Downtime for Updates:** Updates are applied by shutting down production, updating applications in place, and restarting. Rollbacks rely on backups if needed.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Rolling Updates During Maintenance Windows:** Updates are performed using rolling updates, impacting production capacity to some extent, usually scheduled during maintenance windows.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Manual Cut-Over with New Versions:** New versions of applications are deployed without impacting existing production, with a manual transition to the new version during a maintenance window. Manual rollback to the previous version is possible if needed.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Canary or Blue/Green Strategy with Manual Transition:** Updates are released using a canary or blue/green strategy, allowing manual transition between current and new versions. Formal maintenance windows are not routinely necessary.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Dynamic Canary/Blue/Green Strategy without Maintenance Windows:** Updates are managed via a canary or blue/green strategy with dynamic transitioning of users between versions. This approach eliminates the need for formal maintenance windows.

Keep doing what you're doing, write some blog posts and make pull requests to this guidance to help others.
