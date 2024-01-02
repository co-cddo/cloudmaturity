---
layout: sub-navigation
title: Governance
eleventyNavigation:
  parent: Assessment
---

## New project tech choices[radios] = 
() Each project starts afresh with a blank slate of technology choices resulting in a divergent estate
() strictly controlled, fixed homogeneous consistent design
() some patterns and shared documentation such as a tech radar exist, but are not maintained or promoted
() documentation and patterns that cover most use cases exist, are maintained and actively promoted
() show+tells and collaboration with existing teams, reuse and extension rewarded, innovation and experimentation encouraged

## How do you choose where and when to run cloud workloads and store data?[radios] = 
() Single region approved for use, data and/or workload limited to single availability zone within that region, workloads typically run constantly.
() Workloads and data are spread/replicated/distributed over multiple availability zones within a single region
() An additional non-UK regions has been evaluated for legal equivalence, non-production and/or select data and workloads may run in the non-primary region, or it may be used as part of a disaster recovery solution.
() Regions are not technically important or relevant and are selected entirely based on the capabilities, cost and sustainability credentials.
() Workloads dynamically distribute over available regions and availability zones, and viable workloads time-shift execution based on cost and sustainability.

## How do you plan, measure, and optimize your compute environmental sustainability and carbon footprint?[radios] = 
() .
() .
() .
() .
() .

## How do you plan for incident response?[radios] = 
() TODO: Planned required at point of service introduction to live.
() .
() Blame free retros
() .
() Rehearsed and successful recovery of critical systems within a working day

## How do you manage data retention?[radios] = 
() TODO: Has been defined at an organization level and projects/programs are aware of their responsibilities.
() Projects and programs are required to attest their compliance.
() .
() Edge case scenarios are tracked in the risk register
() Retention is fully monitored and enforced


## How do you determine what kind of data is being stored and where?

() Data is managed in a decentralized and ad hoc manner with little organizational awareness of where data is stored.
() Documentation of the data stored, the schema, and data sensitivity exist on a team-by-team basis. Teams adhere to organization policy on data through manual review and interpretation.
() An inventory of data exists, developed either by hand or by using scanning / discovery tools. Data is classified by type (for example PII, card data, company confidential), sensitivity (impact if corrupted / breached), and regulatory requirement (retention, location, etc.).
() A comprehensive understanding exists of data location, classification, and sensitivity. This information is regularly reviewed for compliance. Data lineage is broadly understood, but not reliably documented.
() A data catalog exists, which documents what data the organization holds and the metadata that describes it. A business-friendly glossary outlining the source of the data, quality metrics and use cases exists. Tracking of data lineage (history of source, distribution, branching and modification) is in place.

{% include 'nextAssessmentButton.njk' %}
