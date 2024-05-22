# Cloud Maturity Model and Assessment Tool

[![CI](https://github.com/co-cddo/cloudmaturity/actions/workflows/ci.yaml/badge.svg)](https://github.com/co-cddo/cloudmaturity/actions/workflows/ci.yaml) [![CodeQL](https://github.com/co-cddo/cloudmaturity/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/co-cddo/cloudmaturity/actions/workflows/github-code-scanning/codeql) ![GitHub License](https://img.shields.io/github/license/co-cddo/cloudmaturity) ![GitHub deployments](https://img.shields.io/github/deployments/co-cddo/cloudmaturity/github-pages) ![GitHub language count](https://img.shields.io/github/languages/count/co-cddo/cloudmaturity) ![GitHub top language](https://img.shields.io/github/languages/top/co-cddo/cloudmaturity) [![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/co-cddo/cloudmaturity/badge)](https://scorecard.dev/viewer/?uri=github.com/co-cddo/cloudmaturity) [![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8980/badge)](https://www.bestpractices.dev/projects/8980)

![Screenshot from report page](images/report-screengrab.png)

This repository is the home of the CDDO Cloud Maturity Model and Assessment Tool

The project is currently in an alpha phase, contributions are very welcome.

The intend of the maturity model tool and report is to provide targeted actionable guidance.

The questions are structured with (generally) 5 potential answers that are intended to range from the worst it could be, to the best it could be, with a distributed spread between that.

The answers are framed as attestations you should be able to make based on your current state, scoring 'low' is not necessarily a 'bad thing' in fact scoring too 'high' might in fact indicate over optimization and a disproportionate solution.

For example having a highly resilient and secure solution for the passport validating service makes sense, however would be disproportionate for the canteen menu.

Likewise there is little value creating robust privileged access processes that require management sign off to exercise if you're a small parish council with only one person qualified to manage the small IT infrastructure footprint.

The report in response to the attestations is structured firstly as helping the reader understand if the current state is good enough, and if not provide very explicit and targeted guidance on how to work towards the next attestation.

## What it isn't

Its important to clarify what this is not, this is not intended to be a assurance tool, or for results to be collected, it is first and foremost a tool to help provide targeted explicit guidance that will help organizations recognize where they are, what risks they're operating with, and specifically how to improve their position.

## Pull requests are very welcome
