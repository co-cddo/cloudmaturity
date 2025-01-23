---
title: How does your organisation monitor and observe its cloud infrastructure and application data?
tags: operations
eleventyNavigation:
  parent: operations
---

### **Reactive and Development-Focused Observation:** Observations are primarily made during the development phase or in response to issues, with no continuous monitoring in place.

#### **How to determine if this good enough**

At this stage, monitoring is minimal or ad hoc, primarily triggered by developer curiosity or urgent incidents. You might consider it "good enough" if:

1. **Small-Scale, Low-Criticality**

   - Your applications or infrastructure handle low-priority workloads with few users, so the cost of more advanced monitoring might feel unjustified.

1. **Occasional Issues**

   - Incidents happen rarely, and when they do, developers can manually troubleshoot using logs or ad hoc queries.

1. **No Formal SLAs**
   - You haven’t promised end users or other stakeholders strict uptime or performance guarantees, so reactive observation hasn’t caused major backlash.

While this might be workable for small or test environments, ignoring continuous monitoring typically leads to slow incident response, knowledge gaps, and difficulty scaling. In the UK public sector, especially if you handle official or personally identifiable data, a lack of proactive observability is risky.

#### **How to do better**

Below are **rapidly actionable** steps to move from reactive observation to basic continuous monitoring:

1. **Implement Simple Infrastructure Monitoring**

   - Use vendor-native dashboards or minimal agent-based metrics:
     - [AWS CloudWatch Metrics for CPU, memory, disk usage on EC2 or containers](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Get_Started.html)
     - [Azure Monitor for VMs, App Service, or container workloads with built-in default metrics](https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/monitor-azure-resource)
     - [GCP Cloud Monitoring for CPU/memory metrics, standard dashboards for GCE/GKE](https://cloud.google.com/monitoring/docs/monitoring-getting-started)
     - [OCI Monitoring for compute instances, block storage, or load balancers](https://docs.oracle.com/en-us/iaas/Content/Monitoring/Concepts/monitoringoverview.htm)

1. **Enable Basic Application Logging**

   - Configure logs to flow into a centralised service:
     - [AWS CloudWatch Logs or AWS OpenSearch for aggregated log analysis](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)
     - [Azure Log Analytics workspace for collecting app logs from multiple sources](https://docs.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview)
     - [GCP Cloud Logging for storing structured logs from GCE, GKE, or App Engine](https://cloud.google.com/logging/docs/overview)
     - [OCI Logging for collecting logs from compute and other OCI services](https://docs.oracle.com/en-us/iaas/Content/Logging/Concepts/loggingoverview.htm)

1. **Set Up Minimal Alerts**

   - e.g., CPU usage > 80% triggers an email, or container restarts exceed a threshold:
     - This ensures you don’t rely purely on user reports for operational awareness.

1. **Document Observability Practices**

   - A short wiki or runbook describing how to check logs, which metrics to watch, and who to contact if issues emerge.
   - Even a minimal approach fosters consistency across dev and ops teams.

1. **Schedule a Monitoring Improvement Plan**
   - Book a monthly or quarterly checkpoint to discuss any monitoring issues or data from the past period.
   - Decide on incremental enhancements each time.

By adopting basic infrastructure metrics, centralising logs, configuring minimal alerts, and documenting your approach, you shift from purely reactive observation to foundational continuous monitoring.

### **Basic Monitoring Tools and Manual Checks:** Basic monitoring tools are used. Checks are often manual and are not fully integrated across different cloud services.

#### **How to determine if this good enough**

Here, your organisation uses straightforward dashboards or partial metrics from various cloud services, but lacks integration or automation. You might consider it "good enough" if:

1. **Steady Workloads, Infrequent Changes**

   - Infrastructure or application changes rarely happen, so manual checks remain sufficient to catch typical issues.

1. **Limited Cross-Service Dependencies**

   - If your environment is not very complex, you might get away with separate dashboards for each service.

1. **No Urgent Performance or SLA Pressures**
   - Although you have some basic visibility, you haven’t seen pressing demands to unify or automate deeper monitoring.

However, as soon as you need a single view into your environment, or if you must detect cross-service problems quickly, relying on manual checks and siloed dashboards can hinder timely responses.

#### **How to do better**

Below are **rapidly actionable** ways to integrate your basic monitoring tools:

1. **Consolidate Metrics in a Central Dashboard**

   - If each cloud service has its own dashboard, unify them in a single view:
     - [AWS CloudWatch or Amazon Managed Grafana for multi-service metrics in one place](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Get_Started.html)
     - [Azure Monitor plus Azure Dashboards or Azure Workbooks for cross-resource visibility](https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/monitor-azure-resource)
     - [GCP Cloud Monitoring dashboards that unify multiple projects or services in one location](https://cloud.google.com/monitoring/docs/monitoring-getting-started)
     - [OCI Observability and Management with a single console for compute, storage, and networking metrics](https://docs.oracle.com/en-us/iaas/Content/Observability/Concepts/observabilityoverview.htm)

1. **Automate Alerts**

   - Replace or supplement manual checks with automated alerts for abnormal spikes or dips:
     - e.g., memory usage, 5xx error rates, queue backlogs, etc.
   - Alerts should reach relevant Slack/Teams channels or an email distribution list.

1. **Introduce Tagging for Correlation**

   - If you tag resources consistently, your monitoring tool can group related services:
     - e.g., "Project=ServiceX" or "Environment=Production."
   - This helps you spot trends across all resources for a specific application.

1. **Document Standard Operating Procedures (SOPs)**

   - For each common alert (e.g., high CPU, memory leak), define recommended steps or references to logs for quick troubleshooting.
   - This reduces reliance on guesswork or individual heroics.

1. **Integrate with Deployment Pipelines**
   - If you have a CI/CD pipeline, embed a step that checks basic health metrics post-deployment:
     - e.g., if error rates spike after a new release, roll back automatically or alert the dev team.

By consolidating metrics, automating alerts, introducing consistent tagging, and creating SOPs, you reduce manual overhead and gain a more unified picture of your environment, improving response times.

### **Systematic Monitoring with Alerts:** Systematic monitoring is in place with alert systems for potential issues. However, the integration of infrastructure and application data is still developing.

#### **How to determine if this good enough**

At this stage, you have systematic monitoring, likely with a range of alerts for infrastructure-level events and some application-level checks. You might consider it "good enough" if:

1. **Reliable Incident Notifications**

   - Issues rarely go unnoticed—teams are informed promptly of CPU spikes, database errors, or performance slowdowns.

1. **Moderate Integration**

   - You combine some app logs with system metrics, but the correlation might not be seamless.
   - High-level dashboards exist, but deeper analysis might require manually cross-referencing data sources.

1. **SLAs Are Tracked but Not Always Guaranteed**
   - You monitor operational metrics that relate to your SLAs, but bridging them with application performance (like user transactions) can be patchy.

If your environment is relatively stable or the partial integration meets day-to-day needs, you may consider it sufficient. However, a more holistic approach can cut troubleshooting time and reduce guesswork.

#### **How to do better**

Below are **rapidly actionable** ways to deepen integration of infrastructure and application data:

1. **Adopt APM (Application Performance Monitoring) Tools**

   - Pair your infrastructure metrics with application tracing or performance insight:
     - [AWS X-Ray for distributed tracing, or Amazon CloudWatch Synthetics for synthetic user tests](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Getting_Started.html)
     - [Azure Application Insights for .NET/Java/Node.js performance monitoring, integrated with Azure Monitor logs](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
     - [GCP Cloud Trace, Cloud Profiler, or Cloud Logging to see request-level performance in real-time](https://cloud.google.com/trace/docs/overview)
     - [OCI Application Performance Monitoring for tracing, metrics, and log correlation in Oracle Cloud](https://docs.oracle.com/en-us/iaas/Content/Observability/Concepts/observabilityoverview.htm)

2. **Implement Unified Logging and Metric Correlation**

   - Use a logging solution that supports correlation IDs or distributed traces:
     - This helps you pivot from an app error to the underlying VM or container metrics in one step.

3. **Create Multi-Dimensional Alerts**

   - Instead of CPU-based alerts alone, combine them with application error rates or queue backlog:
     - e.g., alert only if CPU > 80% AND 5xx errors spike, reducing false positives.

4. **Enable Synthetic Monitoring**

   - Set up automated user-journey or transaction tests:
     - If these fail, you know the user experience is impacted, not just backend metrics.

5. **Refine SLA/SLI/SLO**
   - If you measure high-level "availability," break it down into a more precise measure (e.g., 99.9% of user requests under 2 seconds).
   - Align your alerts to these SLOs so your monitoring focuses on real user impact.

By combining APM, correlated logs, synthetic tests, and multi-dimensional alerts, you ensure your teams spot potential issues quickly and tie them directly to user experience, thereby boosting operational effectiveness.

### **Advanced Monitoring with Partial Integration:** Advanced monitoring tools are used, providing more comprehensive data. There's a degree of integration between infrastructure and application monitoring, but it's not fully seamless.

#### **How to determine if this good enough**

Here, your organisation invests in advanced monitoring or APM solutions, has robust metrics/alerts, and partial correlation across layers (e.g., logs, infrastructure usage, application performance). You might consider it "good enough" if:

1. **Wide Observability Coverage**

   - Most services—compute, storage, container orchestration—are monitored, along with main application metrics or user experiences.
   - Teams rarely scramble for data in incidents.

1. **Significant Cross-Data Correlation**

   - You can jump from an app alert to relevant infrastructure metrics within the same platform, though some manual steps might remain.

1. **Flexible Dashboards**

   - Stakeholders can view customised dashboards that show real-time or near real-time health.

1. **Occasional Gaps**
   - Some older systems or sub-services might still lack advanced instrumentation.
   - Full-blown correlation (like linking distributed traces to container CPU usage) might not always be frictionless.

If your advanced tools already deliver quick incident resolution and meet compliance or user demands, your approach might suffice. But full integration could further streamline triaging complex issues.

#### **How to do better**

Below are **rapidly actionable** methods to push partial integration to near full integration:

1. **Enhance Distributed Tracing**

   - If you only partially track transactions across microservices, unify them:
     - [AWS X-Ray or AWS OpenSearch Observability to connect traces from multiple apps to infrastructure metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Getting_Started.html)
     - [Azure Monitor’s distributed tracing via Application Insights, bridging logs from multiple services in a single map](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
     - [GCP Cloud Trace integrated with Cloud Logging, correlating logs, metrics, and traces automatically](https://cloud.google.com/trace/docs/overview)
     - [OCI Application Performance Monitoring with distributed trace correlation to compute or container metrics in Oracle Cloud](https://docs.oracle.com/en-us/iaas/Content/Observability/Concepts/observabilityoverview.htm)

1. **Adopt an Observability-First Culture**

   - Encourage developers to embed structured logs, custom metrics, and trace headers from day one.
   - This synergy helps advanced monitoring tools build a full picture of performance.

1. **Automate Root Cause Analysis (RCA)**

   - Some advanced tools or scripts can identify potential root causes by analyzing correlated data:
     - e.g., pinpoint a failing database node or a memory leak in a specific container automatically.

1. **Refine Alert Thresholds Using Historical Data**

   - If you have advanced metrics but struggle with noisy or missed alerts, adjust thresholds based on past trends.
   - e.g., If your memory usage typically runs at 70% baseline, alert at 85% instead of 75% to reduce false positives.

1. **Integrate ChatOps**
   - Deliver real-time alerts and logs to Slack/Teams channels. Let teams query metrics or logs from chat directly:
     - e.g., a chatbot that surfaces relevant data for incidents or just-in-time debugging.

By fortifying distributed tracing, adopting an "observability-first" mindset, automating partial root cause analysis, and refining alerts, you close the remaining gaps and strengthen end-to-end situational awareness.

### **Integrated 'Single Pane of Glass' Monitoring:** A sophisticated, integrated monitoring system is in place, offering a 'single pane of glass' view. This system provides actionable insights from both infrastructure and application data.

#### **How to determine if this good enough**

At this top level, your organisation has an advanced platform or combination of tools that unify logs, metrics, traces, and alerts into a cohesive experience. You might consider it "good enough" if:

1. **Full Observability**

   - From server CPU usage to request-level app performance, all data is aggregated in near real time, and dashboards elegantly tie them together.

1. **Proactive Issue Detection**

   - Teams often find anomalies or performance drifts before they cause incidents.
   - MTTR (Mean Time to Resolution) is very low.

1. **Data-Driven Decision-Making**

   - Observability data informs capacity planning, cost optimisation, and reliability improvements.
   - Leadership sees clear reports on how changes affect performance or user experience.

1. **High Automation**
   - Beyond alerting, some aspects of remediation or advanced analytics might be automated.

Even so, continuous evolution is possible—particularly in adopting AI/ML-based analytics, implementing even more automated healing, or orchestrating global multi-cloud monitoring.

#### **How to do better**

Below are **rapidly actionable** ways to refine an already integrated "single pane of glass" approach:

1. **Leverage AI/ML-Based Anomaly Detection**

   - Some vendor-native or third-party solutions can preemptively spot unusual patterns:
     - [AWS DevOps Guru or Amazon Lookout for Metrics integrated into CloudWatch for anomaly alerts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Get_Started.html)
     - [Azure Monitor with ML-based Smart Detection or GitHub Advanced Security Insights for app patterns](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
     - [GCP AIOps solutions with Cloud Operations, or third-party solutions integrated into Cloud Logging and Cloud Monitoring](https://cloud.google.com/trace/docs/overview)
     - [OCI Logging Analytics or other AI-based tools for pattern recognition, outlier detection in logs and metrics](https://docs.oracle.com/en-us/iaas/Content/Observability/Concepts/observabilityoverview.htm)

1. **Implement Self-Healing**

   - If your integrated system detects a consistent fixable issue, automate the remedy:
     - e.g., automatically scale containers or restart a microservice if certain metrics exceed thresholds.
   - Ensure any automated fix logs the action for audit or compliance.

1. **Integrate Observability with ChatOps**

   - Offer real-time interactive troubleshooting:
     - e.g., Slack bots that can run queries or "explain" anomalies using your "single pane" data.

1. **Adopt Full Lifecycle Cost and Performance Analysis**

   - Link your monitoring data to cost metrics for a holistic view:
     - e.g., seeing how scaling up or out affects not only performance but also budget.
   - This fosters more strategic decisions around resource usage.

1. **Share Observability Insights Across the Public Sector**
   - If you’ve achieved a truly integrated solution, document your architecture, the tools you used, and best practices.
   - Present or collaborate with other agencies or local councils, uplifting broader public sector observability.

By harnessing AI-driven detection, automating remediation steps, integrating real-time ChatOps, and linking cost with performance data, you push your advanced single-pane-of-glass monitoring to a new level—enabling near-instant responses and deeper strategic insights.

**Keep doing what you’re doing,** and consider writing internal blogs or case studies on your observability journey. Submit pull requests to this guidance or other public sector best-practice repositories to help others learn from your experiences with integrated cloud monitoring.
