---
layout: sub-navigation
title: Cost & Sustainability
eleventyNavigation:
  parent: Assessment
---

## What approaches does your organization use to plan, measure, and optimize cloud spending?[radios] =

() **Restricted Billing Visibility:** Billing details are only accessible to management and finance teams, with limited transparency across the organization.
() **Proactive Spend Commitment by Finance:** The finance team uses billing information to make informed decisions about pre-committed cloud spending where it's deemed beneficial.
() **Cost-Effective Resource Management:** Cloud environments and applications are configured for cost-efficiency, such as automatically shutting down or scaling down non-production environments during off-hours.
() **Cost-Aware Development Practices:** Developers and engineers have daily visibility into cloud costs and are encouraged to consider the financial impact of their choices in the development phase.
() **Comprehensive Cost Management and Optimization:** Multi-tier spend alerts are configured to notify various levels of the business for immediate action. Developers and engineers regularly review and prioritize changes to improve cost-effectiveness significantly.

## How does your organization allocate capacity for production workloads in the cloud?[radios] =

() **Peak Provisioning:** Capacity is typically provisioned based on peak usage estimates, potentially leading to underutilization during off-peak times.
() **Manual Scaling Based on Average Consumption:** Capacity is provisioned for average usage, with manual scaling adjustments made seasonally or as needed.
() **Basic Autoscaling for Certain Components:** Autoscaling is enabled for some cloud components, primarily based on simple capacity or utilization metrics.
() **Widespread Autoscaling with Basic Metrics:** Autoscaling is a common practice, although it mainly utilizes basic metrics, with limited use of log or application-specific metrics.
() **Advanced Autoscaling Using Detailed Metrics:** Autoscaling is ubiquitously used, based on sophisticated log or application metrics, allowing for highly responsive and efficient capacity allocation.

## How does your organization approach the use of compute services in the cloud?[radios] =

() **Long-Running Homogeneous VMs:** Workloads are consistently deployed on long-running, homogeneously sized Virtual Machines (VMs), without variation or optimization.
() **Primarily Long-Running VMs with Limited Experimentation:** Most workloads are on long-running VMs, with some limited experimentation in containers or function-based services for non-critical tasks.
() **Mixed Use with Some Advanced Compute Options:** Some production workloads are run in containers or function-based compute services. Ad-hoc use of short-lived VMs is practiced, with efforts to right-size based on workload needs.
() **Regular Use of Short-Lived VMs and Containers:** There is regular use of short-lived VMs and containers, along with some function-based compute services. This indicates a move towards more flexible and scalable compute options.
() **'Fit for Purpose' Approach with Rigorous Right-Sizing:** Cloud services selection is driven by a strict 'fit for purpose' approach. This includes a rigorous continual right-sizing process and a solution evaluation hierarchy favoring SaaS > FaaS > Containers as a Service > Platform/Orchestrator as a Service > Infrastructure as a Service.

## What strategies guide your decisions on geographical distribution and operational management of cloud workloads and data storage?[radios] =

() **Single Zone, Constant Operation:** All data and workloads are confined to a single availability zone within an approved region, with workloads typically running continuously.
() **Intra-Region Distribution:** Workloads and data are spread across multiple availability zones within a single region to enhance availability and resilience.
() **Selective Multi-Region Utilization:** An additional, legally compliant non-UK region is used for specific purposes, such as non-production workloads, certain data types, or as part of disaster recovery planning.
() **Capability and Sustainability-Driven Selection:** Regions are chosen based solely on their technical capabilities, cost-effectiveness, and environmental sustainability credentials, without any specific technical constraints.
() **Dynamic and Cost-Sustainable Distribution:** Workloads are dynamically allocated across various regions and availability zones, with scheduling optimized for cost-efficiency and sustainability, adapting in real-time to changing conditions.

## How does your organization plan, measure, and optimize the environmental sustainability and carbon footprint of its cloud compute resources?[radios] =

() **Basic Vendor Reliance:** Sustainability isn't actively measured internally; reliance is placed on cloud vendors who are contractually obligated to work towards carbon neutrality, likely through offsetting.
() **Initial Awareness and Basic Policies:** Some basic policies and goals for sustainability are set. Efforts are primarily focused on awareness and selecting vendors with better environmental records.
() **Active Measurement and Target Setting:** The organization actively measures its cloud compute carbon footprint and sets specific targets for reduction. This includes choosing cloud services based on their sustainability metrics.
() **Integrated Sustainability Practices:** Sustainability is integrated into cloud resource planning and usage. This includes regular monitoring and reporting on sustainability metrics and making adjustments to improve environmental impact.
() **Advanced Optimization and Dynamic Management:** Advanced strategies are in place, like automatic time and location shifting of workloads to minimize impact. Data retention and cloud product selection are deeply aligned with sustainability goals and carbon footprint metrics.

{% include 'nextAssessmentButton.njk' %}
