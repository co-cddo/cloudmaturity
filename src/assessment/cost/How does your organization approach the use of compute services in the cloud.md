---
title: How does your organization approach the use of compute services in the cloud?
tags: cost
eleventyNavigation:
  parent: cost
---

### **Long-Running Homogeneous VMs:** Workloads are consistently deployed on long-running, homogeneously sized Virtual Machines (VMs), without variation or optimization.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Primarily Long-Running VMs with Limited Experimentation:** Most workloads are on long-running VMs, with some limited experimentation in containers or function-based services for non-critical tasks.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Mixed Use with Some Advanced Compute Options:** Some production workloads are run in containers or function-based compute services. Ad-hoc use of short-lived VMs is practiced, with efforts to right-size based on workload needs.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Regular Use of Short-Lived VMs and Containers:** There is regular use of short-lived VMs and containers, along with some function-based compute services. This indicates a move towards more flexible and scalable compute options.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **'Fit for Purpose' Approach with Rigorous Right-Sizing:** Cloud services selection is driven by a strict 'fit for purpose' approach. This includes a rigorous continual right-sizing process and a solution evaluation hierarchy favoring SaaS > FaaS > Containers as a Service > Platform/Orchestrator as a Service > Infrastructure as a Service.

Keep doing what you're doing, write some blog posts and make pull requests to this guidance to help others.
