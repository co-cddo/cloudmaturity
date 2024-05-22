---
title: What strategies guide your decisions on geographical distribution and operational management of cloud workloads and data storage?
tags: cost
eleventyNavigation:
  parent: cost
---

### **Single Zone, Constant Operation:** All data and workloads are confined to a single availability zone within an approved region, with workloads typically running continuously.

#### How to determine if this good enough?

Many cloud vendors do not offer a [Service Level Agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) for compute and storage services when workloads exist only in a single availability zone.

If a loss of availability or loss of data for your services are important then then considering at least an Intra-Region distribution strategy is important.

If you are consuming services that are server based such as virtual machines or database servers where you are paying based on the time spent, there are likely times where you might not require them to be constantly available, for example non production environments may not always be necessary out of working hours and weekends.

#### How do I do better?

A relative quick win for the resilience concern may be to create a regular backup process that stores a snapshot of your data at regular intervals in to another availability zone; this will at least provide an ability to manually recover data to the point of the last backup in the event of a failure.

For the cost concern, if you were to schedule your non production environments to shutdown at 19:00 and start backup at 7:00 on weekdays, savings up to 68% of your non production workload may be achievable, and you will be continually restarting these environments which will test their resilience and surface any potential startup issues close to where the issue was introduced.

##### Backup based solutions to consider:

- [AWS Backup](https://aws.amazon.com/backup)
- [Azure Backup](https://azure.microsoft.com/en-gb/products/backup/)
- [GCP Backup and DR Service](https://cloud.google.com/backup-disaster-recovery)
- [OCI Backup](https://www.oracle.com/uk/cloud/backup-and-disaster-recovery/)
- Also to consider:
  - [NCSC: Principles for ransomware-resistant cloud backups](https://www.ncsc.gov.uk/guidance/principles-for-ransomware-resistant-cloud-backups)

While a solid backup solution is a great way to lay down the foundations, by developing a [Recovery Point Objective (RPO)](https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Point_Objective) it does not inherently provide a [Recovery Time Objective](https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Time_Objective) this is the time it takes you restore availability to the service; which could be quite a manual process, especially if you've not deployed the services recently or don't have access to who did.

##### Intra-region distribution

You can reduce your RPO by replicating data across multiple availability zones within a single region, there are various ways to achieve this such as using a distributed file system. In this way your data is replicated in realtime between availability zones. This is a rather blunt solution and not recommended if you are running a database for cost and performance reasons.

###### Distributed File System solutions to consider:

- [AWS EFS](https://aws.amazon.com/efs/)
- [Azure Files](https://azure.microsoft.com/en-gb/products/storage/files)
- [CEPH](https://ceph.io/)

If your workload includes a database then migrating to a managed database solution could provide more resilient service with a lower operational burden, and will be far more performant than running a database on top of a distributed file system.
You may have some configuration options, and features in your self managed database that are not compatible with a managed database solution such as stored procedures or low level performance tweaks, you should be confident in the benefits of maintaining a self managed solution over a managed solution in relation to the operational responsibilities you're retaining.

###### Managed database solutions to consider:

- [AWS Databases](https://aws.amazon.com/products/databases/)
- [AWS RDS](https://aws.amazon.com/rds/)
- [Azure SQL](https://azure.microsoft.com/en-gb/products/sql-database/)
- [GCP Cloud SQL](https://cloud.google.com/sql)
- [OCI Database](https://www.oracle.com/database/)

Similarly other components in your application may be possible to migrate to a managed service including message queues, file conversion, video processing, load balancing and so on.

##### Scheduling workloads

Many cloud vendors provide capability to schedule your workloads to startup and shutdown, you will still pay for the storage costs, and some other baseline, costs, so generally don't expect this to reduce your cost to zero when things are turned off, but you should still be able to enjoy a noticeable benefit from this.

- [AWS Instance scheduler](https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/)
- [Azure Start-Stop-VMs](https://learn.microsoft.com/en-us/azure/azure-functions/start-stop-vms/overview)
- [GCP Schedule VM Operations](https://cloud.google.com/compute/docs/instances/schedule-instance-start-stop)
- [OCI Scheduled Autoscaling](https://docs.oracle.com/en-us/iaas/compute-cloud-at-customer/topics/compute/using-schedule-based-autoscaling.htm)

There may be scenarios where this needs to be overridden, for example during an incident, the operations team may find it beneficial to test their proposed fixes on a non-production instance before applying to production, so you will need to add to the operational runbook/playbook guidance on how to override this.

### **Intra-Region Distribution:** Workloads and data are spread across multiple availability zones within a single region to enhance availability and resilience.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Selective Multi-Region Utilization:** An additional, legally compliant non-UK region is used for specific purposes, such as non-production workloads, certain data types, or as part of disaster recovery planning.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Capability and Sustainability-Driven Selection:** Regions are chosen based solely on their technical capabilities, cost-effectiveness, and environmental sustainability credentials, without any specific technical constraints.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Dynamic and Cost-Sustainable Distribution:** Workloads are dynamically allocated across various regions and availability zones, with scheduling optimized for cost-efficiency and sustainability, adapting in real-time to changing conditions.

Keep doing what you're doing, write some blog posts and make pull requests to this guidance to help others.
