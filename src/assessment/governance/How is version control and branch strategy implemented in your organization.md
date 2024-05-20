---
title: How is version control and branch strategy implemented in your organization?
tags: governance
eleventyNavigation:
  parent: governance
---

### **Limited Version Control Usage:** Version control is used minimally, indicating a lack of robust processes for managing code changes and history.

#### How to determine if this good enough?

- **Small Scale Projects:** For very small or short-term projects with a minimal development team (possibly a single developer), the complexity introduced by extensive version control practices might not justify the benefits.

- **Non-Critical Applications:** Projects that do not directly impact the core operations or integrity of the organization, and where the risk of downtime or bugs is low and manageable without requiring immediate fixes.

- **Early-Stage Development:** In the very early stages of development, where exploration and rapid prototyping are prioritized over maintaining a detailed history of changes.

- **Low Collaboration Requirements:** Environments where developers work in silos on separate components without much need for collaboration or where there is no concurrent development occurring.

However, it's crucial to recognize that these conditions are relatively rare in modern software development, particularly within the context of cloud in the public sector. Moving towards a more comprehensive version control system and branch strategy is generally advisable as it:

- Enhances collaboration among developers.
- Improves the traceability of changes, aiding in compliance and audit processes.
- Facilitates continuous integration/continuous deployment (CI/CD) pipelines, which are integral to efficient cloud-native development.
- Mitigates risks associated with codebase regressions and facilitates faster rollback to stable versions when necessary.
- Decentralized systems can provide an inherent risk mitigation over individual failures, since every participant will typically have a full copy of the codebase locally, and they can push their work in progress to share with others or just mitigate against their workstation failure or theft.

#### How do I do better?

##### Select a Version Control System (VCS)

Generally speaking [Git](https://git-scm.com/) is considered the most widely used version control system today, and will service the majority of needs. There are some exceptions to this such as handling many large files such as video and other large files, where industry as developed specific solutions to this. However it is important to select the right tool for the job which may mean multiple tools.

Git is fantastic where the majority of the content is code stored as (plain text), it is not a good fit for keeping compiled copies though (these are typically called artifacts and have different storage requirements).

##### Select a Version Control Hosting Platform (VCS)

On the whole most public sector departments and workloads should by default look to a managed specialist service like [GitHub](https://github.com/), [GitLab](https://gitlab.com/) or [Bitbucket](https://bitbucket.org/) for hosting your version control.

In addition many cloud vendors to also provide their own such as:

- [Google Cloud Source Repositories](https://source.cloud.google.com)
- [Azure Repos](https://azure.microsoft.com/en-gb/products/devops/repos)
- [AWS CodeCommit](https://aws.amazon.com/codecommit/)

##### Onboard teams and projects to the hosting platform

Moving to version control is a significant investment not to be understated, the dividends are also significant; though the path may not be easy when teams and projects haven't done this before, it requires a level of discipline and change to ways of working and thinking.

You should look to migrate teams incrementally, and promote the benefits that they will enjoy such as not overwriting each others changes, and speeding up [identifying the cause of regression defects](https://martinfowler.com/bliki/DiffDebugging.html).

##### Related reading material:

- [GOV.UK Service Manual - Maintaining version control in coding](https://www.gov.uk/service-manual/technology/maintaining-version-control-in-coding)
- [How GDS uses Git and GitHub](https://technology.blog.gov.uk/2014/01/27/how-we-use-github/)
- [Internal guidance for GDS teams about using Git](https://gds-way.digital.cabinet-office.gov.uk/standards/source-code/working-with-git.html)
- [GOV.UK Developer docs: Github](https://docs.publishing.service.gov.uk/manual/github.html)
- [Government analysts introduction to Git](https://analysisfunction.civilservice.gov.uk/training/introduction-to-git/)
- [Codecademy: Learn Git & GitHub](https://www.codecademy.com/learn/learn-git)
- [NCSC: Manage change effectively](https://www.ncsc.gov.uk/collection/technology-assurance/principles-product-development/6-manage-change-effectively)
- [NCSC: Protect your code repository](https://www.ncsc.gov.uk/collection/developers-collection/principles/protect-your-code-repository)

### **Custom, Unconventional Branch Strategy:** An invented branch strategy is in use, not aligning with standard methodologies and potentially leading to confusion or inefficiencies.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Adapted Recognized Branch Strategy:** The organization adapts a recognized branch strategy (like GitFlow or GitHubFlow), tailoring it to specific needs while maintaining some standard practices.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Textbook Implementation of a recognized branch strategy:** The organization adheres strictly to a model such as GitFlow, a recognized branch strategy suitable for managing complex development processes.

#### How to determine if this good enough?

TODO

#### How do I do better?

TODO

### **Textbook Implementation of a streamlined branch strategy:** The organization follows a streamlined branch strategy ideal for continuous delivery and simplified collaboration such as GitHubFlow precisely.

Keep doing what you're doing, write some blog posts and make pull requests to this guidance to help others.
