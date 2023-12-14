---
layout: sub-navigation
order: 99
title: Unsorted
eleventyNavigation:
  parent: Assessment
---

## New project tech choices[radios] = 
() Each project starts afresh with a blank slate of technology choices resulting in a divergent estate
() strictly controlled, fixed homogeneous consistent design
() some patterns and shared documentation exist, but are not maintained or promoted
() documentation and patterns that cover most use cases exist, are maintained and actively promoted
() show+tells and collaboration with existing teams, reuse and extension rewarded, innovation and experimentation encouraged

## Sponsorship: What type of executive sponsorship do you have for a 100% cloud adoption?[radios] = 

() No executive sponsorship.
() Sponsorship is from senior management.
() Sponsorship is from one or more C-level executives.
() Comprehensive C-level sponsorship with a shared roadmap for cloud adoption and migration.
() Comprehensive C-level sponsorship consistently sets the tone for a culture of cloud-first adoption across the organization as well as experimentation and innovation within teams.

## Which of the following is your predominant means of provisioning cloud services?[radios] = 

() Manually or imperatively provisioned by the console/portal/CLI or other tool.
() Cloud services are provisioned with limited scripting. There are no formal standards or consistency in how scripting is implemented across project teams.
() Some cloud services are provisioned via declarative automation for the full lifecycle, but this is not consistent across all project teams.
() Most project teams use declarative automation for cloud services provisioning.
() Declaratively defined automation for cloud services provisioning is mandated for all production services and only executed from CI/CD.

## How do you release updates to your applications and services?[radios] = 

() Shut down production, update applications in place, and restart. Roll back from backups if needed.
() Use rolling updates to perform updates in place with some impact on production capacity, usually during a maintenance window.
() Deploy a new version of the application without impacting existing production with a manual cut-over during a maintenance window. Manually fall back to the prior version if needed.
() Utilize a canary or blue/green strategy with manual transition between current and new versions. Formal maintenance windows are not routinely required.
() Utilize a canary or blue/green strategy and dynamically transition users to and from the new versions. Formal maintenance windows are not required.

## CI/CD: How comprehensive is your CI/CD tooling?[radios] = 

() No CI/CD tooling in place and projects employ traditional build/test/deploy practices.
() Some projects make limited use of CI/CD tooling. There are no formal standards in place.
() Many project teams use CI/CD tooling based on project team preference.
() Most project teams use CI/CD tooling based on project team preference, with very limited use of traditional build/test/deploy practices.
() Standardized CI/CD pipeline used consistently by project teams across the organization by consent.

## What does the majority of your current technology stack look like?[radios] = 

() Monolithic applications with a wide technology stack, each deployed as a single unit.
() Applications are split into modules, providing greater flexibility for development, but such modules may not be deployable as individual components.
() Applications are modularized such that each of the individual components are self-contained and individually deployable. Significant dependencies exist, which adds complexity to the testing.
() Most application components can be deployed and tested independently, but one or more core components of the system are still based on a monolithic stack.
() Applications consistently utilize a component-based modular architecture. All components can be tested and deployed independently. No monolithic stack dependencies exist.

## What is your approach to using compute services in the cloud?[radios] = 

() Workloads are always deployed in long-running homogeneous sized VMs.
() Most workloads are deployed in long-running VMs, right-sizing only increases the compute demand. There is some limited experimentation with containers or function-based services for noncritical workloads.
() Some production workloads running in containers or function-based compute. There is some ad-hoc use of short-lived VMs based on workload characteristics and these are right-sized with no default VM size.
() Regularly use short-lived VMs or containers. There is some use of function-based compute services or containers.
() The selection of cloud services is driven by a 'fit for purpose' approach, rigorous right-sizing is continually applied, evaluation of solution is SaaS > FaaS > Containers as a Service > Platform/orchestrator as a Service > Infra as a Service.


{% include 'nextAssessmentButton.njk' %}
