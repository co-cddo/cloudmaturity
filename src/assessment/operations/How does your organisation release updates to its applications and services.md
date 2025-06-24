---
title: How do you release updates?
tags: operations
eleventyNavigation:
  parent: operations
---

### We stop services to update them, then restart.

#### **How to determine if this good enough**

Your organisation might tolerate taking production offline during updates if:

1. **Low User Expectations**

   - The service is internal-facing with predictable usage hours, so planned downtime does not disrupt critical workflows.

1. **Simple or Infrequent Releases**

   - You rarely update the application, so the cost and user impact of downtime remain acceptable.

1. **Minimal Data Throughput**
   - If the application doesn’t handle large volumes of data or real-time requests, a brief outage may not cause serious issues.

However, in the UK public sector environment—where services can be integral for citizens, healthcare, or internal government operations—planned downtime can erode trust and hamper 24/7 service expectations. Additionally, rollbacks relying on backups can be risky if not regularly tested.

#### **How to do better**

Below are **rapidly actionable** steps to transition from downtime-based updates to more resilient approaches:

1. **Pilot a Rolling or Blue/Green Approach**

   - Instead of a complete shutdown, start with a minimal approach:
     - [AWS: Use AWS Elastic Beanstalk or AWS CodeDeploy for rolling deployments with minimal downtime](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.rolling-deployments.html)
     - [Azure App Service Deployment Slots for staging, or Azure DevOps Pipelines for controlled rolling updates](https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
     - [GCP: Use rolling updates in GKE or versioned deployments in App Engine to reduce outages](https://cloud.google.com/kubernetes-engine/docs/concepts/rollouts)
     - [OCI: Implement rolling restarts or new instance groups in Oracle Container Engine or compute autoscaling groups](https://docs.oracle.com/en-us/iaas/Content/Container/Concepts/container-engine.htm)

1. **Establish a Basic CI/CD Pipeline**

   - So that updates are automated and consistent:
     - e.g., run unit tests, integration checks, and create a deployable artifact with each commit.
   - [NCSC’s guidance on DevSecOps](https://www.ncsc.gov.uk/) or [NIST SP 800-160](https://csrc.nist.gov/) can inform security integration into the pipeline.

1. **Use Snapshot Testing or Quick Cloning**

   - If you remain reliant on backups for rollback, test them frequently:
     - Ensure daily or more frequent snapshots can be swiftly restored in a staging environment to confirm reliability.

1. **Communicate Downtime Effectively**

   - If immediate elimination of downtime is not feasible, set up a transparent communication plan:
     - Inform users of upcoming windows via email or intranet, referencing any [gov.uk service continuity guidelines](https://www.gov.uk/service-manual).

1. **Aim for Rolling Updates Pilot**
   - Identify at least one non-critical service to pilot rolling or partial updates, building confidence for production.

By adopting minimal rolling or staging-based updates, automating deployment pipelines, and ensuring robust backup/restore processes, you reduce the disruptive nature of downtime-based updates—paving the way for more advanced, near-zero-downtime methods.

### We update parts of our services at a time, usually during scheduled windows.

#### **How to determine if this good enough**

At this stage, your organisation has moved past full downtime, using a rolling mechanism that replaces or updates a subset of instances at a time. You might consider it "good enough" if:

1. **Limited User Impact**

   - Some capacity is taken offline during updates, but carefully scheduled windows or off-peak hours minimise issues.

1. **Predictable Workloads**

   - If your usage patterns allow for stable maintenance windows (e.g., nights or weekends), then capacity hits don’t severely affect performance.

1. **Moderate Release Frequency**
   - The organisation has relatively few feature updates, so scheduled windows remain acceptable for user expectations.

While better than full downtime, rolling updates that rely on maintenance windows can still cause disruptions for 24/7 services or hamper urgent patch releases.

#### **How to do better**

Below are **rapidly actionable** improvements:

1. **Implement Automated Health Checks**

   - Ensure each instance is verified healthy before taking the next one offline:
     - [AWS: Use Amazon EC2 Auto Scaling with health checks or AWS Load Balancer checks in ECS/EKS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck-types.html)
     - [Azure: VM Scale Sets with automatic health checks or AKS readiness probes](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-health-extend-existing)
     - [GCP: GKE readiness/liveness probes, MIG autohealing policies, or HTTP health checks for Compute Engine](https://cloud.google.com/kubernetes-engine/docs/concepts/health-checks)
     - [OCI: Load Balancer health checks integrated with compute instance pools or OKE readiness checks](https://docs.oracle.com/en-us/iaas/Content/Container/Concepts/container-engine.htm)

1. **Adopt a Canary or Blue/Green Strategy for Critical Services**

   - Gradually test changes on a small portion of traffic before proceeding:
     - This reduces risk if an update has issues.

1. **Shorten or Eliminate Maintenance Windows**

   - If rolling updates are stable, see if you can do them in business hours for services with robust capacity.
   - Communicate frequently with users about partial capacity reductions, referencing relevant [GOV.UK operational guidelines](https://www.gov.uk/government/organisations/government-digital-service).

1. **Automate Rollback**

   - If an update fails, ensure your pipeline or scripts can quickly revert to the previous version:
     - Storing versioned artifacts in, for example, [AWS S3 or ECR, Azure Container Registry, GCP Artifact Registry, or OCI Container Registry](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html).

1. **Reference NCSC Guidance on Operational Resilience**
   - Rolling updates align with resilience best practices, but see if NCSC or [NIST SP 800-53 revision on system and communications protection controls](https://csrc.nist.gov/) suggests additional steps to reduce downtime.

By adding health checks, introducing partial canary or blue/green methods, and continuously automating rollbacks, you further minimise the user impact even within a rolling update strategy—potentially removing the need for fixed maintenance windows.

### We deploy new versions and switch over by hand, with manual rollback if needed.

#### **How to determine if this good enough**

This approach is somewhat akin to a blue/green deployment but with a manually triggered cut-over. You might consider it "good enough" if:

1. **Limited Release Frequency**

   - You update only occasionally, and a scheduled manual switch is acceptable to your stakeholders.

1. **Manual Control Preference**

   - You desire explicit human oversight for compliance or security reasons (e.g., sign-off from a designated manager before cut-over).

1. **Rollback Confidence**
   - Retaining the old version running in parallel offers an easy manual fallback if issues arise.

While this drastically reduces downtime compared to in-place updates, manual steps can introduce human error or delay. Over time, automating the cut-over can speed releases and reduce overnight tasks.

#### **How to do better**

Below are **rapidly actionable** ways to enhance manual cut-over processes:

1. **Automate the Switch**

   - Even if you keep a manual approval step, script the rest of the transition:
     - e.g., flipping a DNS entry, load balancer config, or feature toggle automatically:
       - [AWS Route 53 weighted DNS or AWS ALB target group switches](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html)
       - [Azure Traffic Manager or Front Door for region/endpoint-based switching](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview)
       - [GCP traffic splitting in App Engine or load balancer-based canary rollout for GCE/GKE](https://cloud.google.com/appengine/docs/standard/python/how-to-deploy-services-with-traffic-splitting)
       - [OCI traffic management policies at the load balancer or DNS level for new vs. old versions](https://docs.oracle.com/en-us/iaas/Content/LoadBalancer/Concepts/loadbalancer.htm)

1. **Incorporate Automated Testing Pre-Cut-Over**

   - Run smoke/integration tests on the new environment before the final switch:
     - If tests pass, you simply approve the cut-over.

1. **Establish Clear Checklists**

   - List each step, from final pre-check to DNS swap, ensuring all relevant logs, metrics, or alerts are turned on:
     - Minimises risk of skipping a crucial step during a manual process.

1. **Use Observability Tools for Rapid Validation**

   - After switching, verify the new environment quickly with real-time dashboards or synthetic user tests:
     - This helps confirm everything runs well before fully retiring the old version.

1. **Refer to NCSC Operational Resilience Guidance**
   - [NCSC documentation](https://www.ncsc.gov.uk/) offers principles for ensuring minimal disruption when switching environments.
   - [NIST SP 800-160 Vol 2](https://csrc.nist.gov/) can also provide insights on engineering for cyber-resilience in deployment processes.

By automating as many cut-over steps as possible, implementing integrated testing, and leveraging robust observability, you reduce manual overhead while retaining the safety of parallel versions.

### We use canary or blue/green releases, usually without maintenance windows.

#### **How to determine if this good enough**

Here, your organisation uses modern deployment patterns (canary or blue/green) but triggers the actual traffic shift manually. You might consider it "good enough" if:

1. **High Control Over Releases**

   - Your ops or dev team can watch key metrics (error rates, performance) before deciding to cut fully.
   - Reduces risk of automated changes if something subtle goes wrong.

1. **Flexible Schedules**

   - You’re no longer constrained by a formal maintenance window, as the environment runs both old and new versions.
   - You only finalise the transition once confidence is high.

1. **Minimal User Impact**
   - Users experience near-zero downtime, with only a potential brief session shift if done carefully.

If your manual step ensures a safe release, meets compliance requirements for sign-off, and you have the capacity to staff this process, it can be fully viable. However, further automation can accelerate releases, especially if you deploy multiple times daily.

#### **How to do better**

Below are **rapidly actionable** methods to enhance manual canary or blue/green strategies:

1. **Automate Traffic Shaping**

   - Instead of manually controlling traffic percentages, leverage:
     - [AWS AppConfig or AWS CloudFront weighted distributions for canary traffic shifting](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-weighted-distributions.html)
     - [Azure Front Door or Azure Traffic Manager with gradual percentage-based traffic routing](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview)
     - [GCP Cloud Load Balancing or App Engine traffic splitting for canary increments](https://cloud.google.com/appengine/docs/standard/python/how-to-deploy-services-with-traffic-splitting)
     - [OCI traffic management policies or advanced load balancer rules for partial traffic distribution to the new version](https://docs.oracle.com/en-us/iaas/Content/LoadBalancer/Concepts/loadbalancer.htm)

1. **Implement Automated Rollback**

   - If metrics degrade beyond thresholds, revert automatically to the stable version without waiting for manual action:
     - e.g., a pipeline checking real-time error rates or latency.

1. **Adopt Observability-Driven Deployment**

   - Use real-time logging, metrics, and user experience monitoring to confirm if the new version is healthy:
     - [NCSC and [NIST SP 800-137 (Continuous Monitoring)](https://csrc.nist.gov/) guidance can help formalise the approach].

1. **Enhance Developer Autonomy**

   - If your policy allows, let smaller updates or patch releases auto-deploy after canary checks pass, reserving manual oversight only for major changes or high-risk deployments.

1. **Consider ChatOps or Tools for One-Click Approvals**
   - Slack/Teams integrated pipeline steps let authorised personnel type a simple command or press a button to shift traffic from old to new version.
   - This lowers friction while preserving manual control.

By introducing traffic shaping with partial auto-deploy or rollback, deeper observability, and flexible chat-based control, you refine your canary or blue/green approach, reducing the manual overhead of each release while keeping high confidence.

### We use canary or blue/green releases and switch users with no need for maintenance windows.

#### **How to determine if this good enough**

At this pinnacle, your organisation deploys new versions seamlessly, shifting traffic automatically or semi-automatically. You might consider it "good enough" if:

1. **Continuous Deployment**

   - You can safely release multiple times a day with minimal risk.
   - Pipeline-driven checks ensure swift rollback if anomalies arise.

1. **Zero Downtime**

   - Users rarely notice updates—there are no enforced windows or service interruptions.

1. **Real-Time Feedback**

   - Observability tools collect usage metrics and error logs, auto-deciding if further rollout is safe.
   - Manual intervention is minimal except for major changes or exceptional circumstances.

1. **Strong Compliance & Audit Trails**
   - Each release is logged, including canary results, ensuring alignment with [NCSC operational resilience guidance](https://www.ncsc.gov.uk/) or internal audit requirements.
   - This meets or exceeds NIST guidelines for continuous monitoring and secure DevOps.

If you’ve reached near-instant deployments, zero-downtime strategies, and robust monitoring, your process is highly mature. You still might push further into A/B testing or advanced ML-driven optimisation.

#### **How to do better**

Even at this top maturity level, there are **rapidly actionable** improvements:

1. **Expand Automated Testing & AI/ML Analysis**

   - If canary performance is only measured by simple metrics (error rate, latency), consider advanced checks:
     - [AWS DevOps Guru or Lookout for Metrics for anomaly detection in deployment phases](https://docs.aws.amazon.com/devops-guru/latest/userguide/what-is-devops-guru.html)
     - [Azure Monitor ML-based anomaly detection or GitHub Advanced Security scanning as part of deployment acceptance](https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/monitor-alerts-unified-log)
     - [GCP Vertex AI or Dataproc to run deeper performance analytics or load tests before ramping up traffic](https://cloud.google.com/vertex-ai/docs/experiments/overview)
     - [OCI Data Science with integrated pipeline checks for advanced anomaly detection in performance metrics](https://docs.oracle.com/en-us/iaas/data-science/using/data-science-overview.htm)

1. **Implement Feature Flag Management**

   - Decouple feature releases from deployments entirely:
     - e.g., changing user experience or enabling new functionality with toggles, tested gradually.
   - Tools like [LaunchDarkly], or vendor-based solutions [AWS AppConfig feature flags, Azure Feature Management, GCP Feature Flags, or OCI-based toggles] can help.

1. **Advance Security & Testing**

   - Integrate real-time security checks pre- and post-deployment:
     - e.g., scanning container images or serverless packages for known vulnerabilities, referencing [NIST SP 800-190 for container security best practices](https://csrc.nist.gov/) or [NCSC’s container security guidance](https://www.ncsc.gov.uk/).

1. **Explore Multi-Cluster or Multi-Region Failover**

   - If one region or cluster is updating, route traffic to another fully operational cluster for absolute minimal disruption:
     - This further cements zero downtime across a national or global footprint.

1. **Collaborate with Other Public Sector Bodies**
   - Share your near-instant, zero-downtime deployment patterns with local councils or other departments:
     - Possibly present at cross-government events, referencing the [GOV.UK community approach to agile delivery](https://www.gov.uk/service-manual/agile-delivery) for broader impact.

By embedding advanced anomaly detection, feature flag strategies, multi-region failover, and deepening security checks, you maintain a cutting-edge continuous deployment ecosystem—aligning with top-tier operational excellence in the UK public sector.

**Keep doing what you’re doing,** and consider documenting your advanced release strategies in internal or external blog posts. You can also submit pull requests to this guidance or other public sector best-practice repositories, helping others progress toward zero-downtime, high-confidence release methods.
