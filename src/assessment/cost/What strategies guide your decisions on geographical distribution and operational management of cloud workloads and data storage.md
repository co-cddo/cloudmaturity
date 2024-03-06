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

#### How do I do better?

A relative quick win may be to create a regular backup process that stores a snapshot of your data at regular intervals in to another availability zone; this will at least provide an ability to manually recover data to the point of the last backup in the event of a failure.

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

### **Intra-Region Distribution:** Workloads and data are spread across multiple availability zones within a single region to enhance availability and resilience.

### **Selective Multi-Region Utilization:** An additional, legally compliant non-UK region is used for specific purposes, such as non-production workloads, certain data types, or as part of disaster recovery planning.

### **Capability and Sustainability-Driven Selection:** Regions are chosen based solely on their technical capabilities, cost-effectiveness, and environmental sustainability credentials, without any specific technical constraints.

### **Dynamic and Cost-Sustainable Distribution:** Workloads are dynamically allocated across various regions and availability zones, with scheduling optimized for cost-efficiency and sustainability, adapting in real-time to changing conditions.

Keep doing what you're doing!
