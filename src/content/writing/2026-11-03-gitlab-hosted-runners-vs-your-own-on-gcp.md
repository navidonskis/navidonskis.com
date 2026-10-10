---
title: "GitLab hosted runners vs your own on GCP: the real math"
description: "Teams either pay GitLab for compute minutes or run their own runners and pay an engineer to babysit them. This post puts numbers on both, for the common case of a team already on Google Cloud."
pubDate: 2026-11-03
draft: true
tags: ["gcp", "gitlab", "finops"]
cta: gitlab
---

## What a hosted minute costs

Beyond the minutes included in a plan, GitLab charges $10 per 1,000 compute minutes on its hosted Linux runners, which is $0.01 per minute on the small machine. Larger machines multiply that by a cost factor: medium 2x, large 3x, xlarge 6x, 2xlarge 12x. A large runner, the size most build jobs actually want, works out to about $1.80 an hour.

Self-hosted runners consume no compute minutes on any plan. That is the whole opening.

## The same job on your own GCP project

| Machine | GitLab hosted | GCP on-demand | GCP spot |
|---|---|---|---|
| Small, 2 vCPU | $0.60 / h | [price] / h | [price] / h |
| Medium, 4 vCPU | $1.20 / h | [price] / h | [price] / h |
| Large, 8 vCPU | $1.80 / h | [price] / h | [price] / h |

*Hosted prices derived from GitLab's published cost factors. GCP prices for europe-north1, [month year], from the public pricing calculator.*

## Where the savings leak

The compute gap is real, but three things eat into it: idle warm pools that nobody sizes, cache misses that make every job pull the world, and a runner manager configured once and never revisited. The default autoscaling settings in GitLab's own GCP provisioning keep instances running even when no job is queued, so the first thing to check is the idle timers.

```toml
[runners.autoscaler]
  capacity_per_instance = 1
  max_instances         = 20
  max_use_count         = 1

  [[runners.autoscaler.policy]]
    idle_count = 2
    idle_time  = "5m0s"
```

A warm pool of two instances with a five-minute idle window keeps first-job latency under a minute for a typical team and costs a fraction of one always-on runner. The exact numbers depend on your pipeline shape, which is what the audit measures.

## Run the numbers for your team

[Calculator: monthly job minutes, machine mix, spot share. Outputs hosted cost, own-runner cost and the difference per year.]
