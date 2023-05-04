# CI

The `ci.yml` file uses [`silverstripe/gha-ci`](https://github.com/silverstripe/gha-ci/) which does its best to identify which types of tests need to be run for your project, against which version of `silverstripe/installer`, with which PHP versions.

If you find it isn't quite getting it right, there are configuration options available for you to define exactly what jobs you want to be run. See the readme of the gha-ci repository for more information.

It is recommended that you make this run on a cron, referred to in GitHub Actions as a "schedule". See [the GitHub Actions documentation](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) for details.

Make sure to remove this readme in your actual module!
