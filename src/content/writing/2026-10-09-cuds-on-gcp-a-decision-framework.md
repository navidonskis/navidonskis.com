---
title: "CUDs on GCP: a decision framework, not a sales pitch"
description: "Find the floor, sort what sits on it, pick the instrument per bucket, cover 70 to 80% in tranches and review every quarter. The framework I use, with the BigQuery query and a worked example."
pubDate: 2026-10-09
tags: ["gcp", "finops", "cuds", "bigquery"]
cta: talk
---

A committed use discount is a bet that your own infrastructure will look roughly the same for one or three years. Google prices that bet well, which is why the account team brings it up every quarter. The decision is not whether to commit but how much, with which instrument, and for how long. The framework below is the one I use: find the floor, sort what sits on it, pick the instrument per bucket, cover 70 to 80% of the floor in tranches, and review every quarter.

## What you are actually buying

A commitment is an hourly obligation. You agree to pay for a fixed amount of resources (vCPUs, memory, GPUs in a given family and region) or a fixed amount of spend per hour, every hour, for one or three years. In return, usage that matches the commitment is billed at the discounted rate. Usage above it is billed on demand. Usage below it still costs the full committed amount; nothing rolls over.

Six things follow from that and decide most of the framework:

- Once bought, a commitment cannot be cancelled or shrunk. It can only be added to.
- Discounts apply in a fixed order: resource-based commitments first, then compute flexible commitments, then sustained use discounts on whatever is left, where the machine family still has them.
- Resource-based commitments are scoped to a machine series and a region. Move the workload to a different series or region and the commitment keeps charging while the new usage pays on demand.
- Spend-based commitments follow the money: any eligible usage in the covered services counts, in any region and family.
- Commitments live on the billing account. Resource-based ones need discount sharing switched on to cover all projects under that account; without it they are scoped to the project that bought them.
- Spot VMs, licences, local SSD and most storage are outside every commitment. GPUs and local SSD need resource-based commitments.

Everything else is arithmetic.

## The instruments

Rates as published by Google in October 2026. Resource-based rates differ by machine series; the pricing table for your series is the source of truth.

<figure class="wide">

| Instrument | Commit to | 1 year | 3 years | Locked to | Covers | Buy it when |
| --- | --- | --- | --- | --- | --- | --- |
| Resource-based CUD | vCPUs, memory, GPUs, local SSD | typically 30 to 40% | up to 55% (up to 70% memory-optimized) | Machine series and region | Compute Engine VMs, GKE Standard nodes | The fleet is steady on one series and will stay there for the whole term |
| Compute flexible CUD | Spend per hour, in dollars | 28% | 46% | Nothing: follows spend across series and regions | Compute Engine, GKE Standard and Autopilot, Cloud Run instance-based services, jobs and worker pools | The floor is steady but its shape is not: migrations, series upgrades, moves between VMs, GKE and Cloud Run |
| Compute flexible CUD, request-based | Spend per hour | 17% | 17% | Nothing | Cloud Run request-based services and functions | Rarely; only on a large, boring request-based floor |
| Cloud SQL CUD | Spend per hour, per region | 25% | 52% | Region | vCPU and memory of all Cloud SQL instances in that region, any engine, both editions | Databases are the steadiest thing you run, and they usually are |
| Other spend-based CUDs | Spend per hour | varies | varies | Service, often region | Spanner, Memorystore, AlloyDB, Bigtable, VMware Engine | Same logic as Cloud SQL, per service |
| BigQuery editions commitments | Slots | varies | varies | Edition and region | Slot capacity | Only after you know your slot usage curve; different mechanics, same framework |

</figure>

Two things that used to exist and no longer do: GKE Autopilot CUDs cannot be bought any more (Autopilot is covered by compute flexible CUDs), and Cloud SQL sustained use discounts were folded into the list price years ago. Sustained use discounts for VMs still apply automatically on older series such as N1, N2, N2D, C2, M1 and M2, and not on E2, N4, C3 or C4.

## Step 1: find the floor

The floor is the amount of compute that is running in the quietest hour of a normal week. Not the average, not the peak. Commitments are paid every hour, so the quiet hours decide whether a commitment is used or wasted.

Take 90 days of hourly usage from the billing export, per machine series and region, and look at the distribution. The 10th or 20th percentile of hourly usage is the floor you can commit to without thinking; the median is the most you should ever consider. Do this separately for vCPUs and memory, because the ratio is rarely the one your commitment would assume.

A starting query against the standard billing export, for N2 vCPUs in one region:

```sql
WITH hourly AS (
  SELECT
    usage_start_time AS hour,
    SUM(usage.amount) AS vcpu_hours
  FROM `billing.gcp_billing_export_v1_XXXXXX`
  WHERE service.description = 'Compute Engine'
    AND sku.description LIKE 'N2 Instance Core running in%'
    AND sku.description NOT LIKE '%Preemptible%'
    AND location.region = 'europe-north1'
    AND usage_start_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 90 DAY)
  GROUP BY hour
)
SELECT
  APPROX_QUANTILES(vcpu_hours, 100)[OFFSET(10)] AS p10,
  APPROX_QUANTILES(vcpu_hours, 100)[OFFSET(20)] AS p20,
  APPROX_QUANTILES(vcpu_hours, 100)[OFFSET(50)] AS p50,
  MAX(vcpu_hours) AS peak
FROM hourly;
```

SKU names differ slightly per series; check yours in the export before trusting the numbers. Memory is a separate SKU ("Ram running"). GKE Standard nodes show up here as ordinary VMs, which is correct: they are eligible for the same commitments.

The console gives you two shortcuts. The commitment analysis report under Billing shows coverage and utilisation of what you already own. The recommender proposes new commitments from the last 30 days of usage. Both are inputs, not decisions: the recommender has no idea that you plan to move that fleet to a newer series next spring.

## Step 2: classify what sits on the floor

The floor is a number. What matters is what the number is made of. Walk through the workloads that make up the quiet-hour usage and put each into one of three buckets.

Steady. Databases, core services, message brokers, anything with a stable size for the last year and no plan to change it. Ask: what would have to happen for this to shrink, move region or change machine series in the next 12 months? If the honest answer is "a decision nobody is planning", it is steady.

Variable. CI runners, batch jobs, nightly pipelines, autoscaled web tiers above their minimum. This usage exists in the average and the peak, not in the floor. It belongs on Spot or on demand, never in a commitment.

Uncertain. Anything touched by a plan: a migration to a newer machine series, a move from VMs to GKE or Cloud Run, a region change, a rearchitecture, a product line that might be sold or shut down, a right-sizing exercise that has not happened yet. Uncertain usage is still real usage, so it still earns a discount, but only through an instrument that survives the change.

Two questions sharpen the sort:

- Have we right-sized this already? Committing to over-provisioned machines locks in the waste at a discount. Right-size first, commit second.
- Who would know if this workload disappeared? If nobody can name an owner, it is not steady, it is forgotten.

Write the buckets down with their sizes. That page is the decision record, and it is what the quarterly review checks against.

## Step 3: choose the instrument per bucket

The rules are short because the hard work was the sorting.

- Steady, one machine series, same series for the whole term: resource-based. It is the deepest discount and the only one for GPUs and local SSD.
- Steady in size but not in shape, or any workload in the uncertain bucket: compute flexible. You give up roughly 10 to 20 points of discount and in return the commitment follows the usage to the next series, the next region, or into GKE Autopilot and Cloud Run.
- Steady Cloud SQL: the Cloud SQL commitment for that region. It covers every instance and engine in the region, so it is hard to strand unless you leave the region or move off Cloud SQL.
- Variable: nothing. Spot for interruptible work, on demand for the rest. A three-year commitment at 55% is still more expensive than Spot for a batch job that runs four hours a night.
- Memory-optimized at 70% for three years: only when the database behind it has a three-year roadmap. Those machines are the most expensive to strand.

If you cannot decide between resource-based and flexible for a given fleet, the answer is flexible. The extra 10 to 20 points are the price of being wrong, and most companies are wrong about their own two-year roadmap more often than they expect.

## Step 4: coverage and term

A commitment pays off when the committed resource is actually used for more hours than the discount gives back. The break-even is simply one minus the discount: a 28% discount needs the commitment used at least 72% of the term to beat on demand.

| Discount | Break-even utilisation over the term | Typical instrument |
| --- | --- | --- |
| 25% | 75% | Cloud SQL, 1 year |
| 28% | 72% | Compute flexible, 1 year |
| 37% | 63% | Resource-based general purpose, 1 year (series-dependent) |
| 46% | 54% | Compute flexible, 3 years |
| 52% | 48% | Cloud SQL, 3 years |
| 55% | 45% | Resource-based general purpose, 3 years |
| 70% | 30% | Resource-based memory-optimized, 3 years |

Read the table backwards: a three-year resource-based commitment only needs to be useful for 16 of 36 months to beat on demand. That is why three-year terms look safe on a spreadsheet and still go wrong: the question is not whether the usage exists today but whether this exact series in this exact region exists in month 30.

Three rules for coverage:

1. Commit to 70 to 80% of the floor, not to the floor. The floor you measured includes workloads that will be right-sized, retired or moved; the uncovered 20 to 30% is your margin for being right about that, and it still gets sustained use discounts where the series has them.
2. Buy in tranches, not in one purchase. Three or four smaller commitments spread over a year expire at different times, so every renewal is a small decision made with fresh data instead of one large decision made under deadline. The first tranche can go in the day the analysis is done; the next one after a quarter of watching utilisation.
3. Three years only for the part of the floor you can describe in a sentence that will still be true in three years. "The transactional database runs on this series in this region" usually qualifies. "The web tier" rarely does.

When a commitment is about to expire, decide actively. Auto-renew is a setting, not a strategy.

## A worked example

Illustrative numbers. One region, one series (N2), vCPUs only; memory follows the same logic. On-demand price assumed at $0.035 per vCPU-hour, 730 hours a month. Resource-based 1-year rate assumed at 37%; check your series.

The fleet over 90 days: peak 520 vCPUs, average 380, floor (20th percentile) 320. Of the floor, 200 vCPUs are steady on N2 for at least a year. The other 120 belong to services that will probably move to a newer series within 18 months.

<figure class="wide">

| Option | What you buy | Monthly cost | Saving vs on demand | If the fleet leaves N2 at month 18 |
| --- | --- | --- | --- | --- |
| On demand | Nothing | $9,700 | 0% | Nothing stranded |
| B: everything, 3 years, resource-based | 380 vCPUs N2, 3 years at 55% | $5,400 | 44% | 18 months of unused commitment, about $79,000 |
| C: the ladder | 200 vCPUs N2 resource-based 1 year at 37%, plus flexible 1 year covering the next 120 vCPUs of spend at 28%, rest on demand | $7,000 | 28% | Resource tranche already expired at month 12; the flexible tranche follows the spend. Nothing stranded |
| D: all flexible | Flexible 1 year covering 320 vCPUs of spend at 28%, rest on demand | $7,400 | 24% | Nothing stranded |

</figure>

Over three years, if nothing changes, B saves about $56,000 more than C. If the fleet moves at month 18, B comes out about $50,000 worse than C. Only you know the odds of that move; the arithmetic just tells you what you are betting. In this example the bet is close to a coin flip, which is exactly when the ladder earns its keep: C gives up a third of the maximum saving and removes the whole downside.

Two details that change the picture in practice. Shifting the variable part above the floor to Spot usually saves more than squeezing another 5% out of the commitment mix. And the 200 steady vCPUs can move to a 3-year commitment at the first renewal, once a year of utilisation data has confirmed they are as steady as the owners said.

## Mistakes that keep showing up

- Committing to the average instead of the floor. The average includes the busy hours; the commitment is paid in the quiet ones.
- Committing before right-sizing. A 55% discount on machines that are twice too big is a 10% saving dressed up as 55%.
- Three-year resource-based commitments on a series that is already two generations old. Google ships a better price-performance series roughly every 18 months; the commitment does not move with you.
- Buying because the quarter ends. The account team's calendar is not an input to your floor calculation.
- Forgetting that GKE Standard node pools are VMs. They are often the largest steady fleet and the one most people leave uncovered.
- Covering CI runners, batch and anything autoscaled. That usage is cheaper on Spot than on any commitment.
- Buying resource-based commitments per project with discount sharing off, then watching one project waste what another pays on demand for.
- Letting commitments expire or auto-renew without a decision. Both are decisions; only one of them was made on purpose.
- Treating the recommender's number as the plan. It sees 30 days of history and none of your roadmap.
- Nobody owning it. Commitments need a named owner, a decision record, and a calendar entry for every expiry.

## The quarterly review

Thirty minutes, once a quarter, with the decision record open. If utilisation of any commitment is below 90%, something in the sort was wrong and the next tranche should be smaller.

- [ ] Rerun the floor query for the last 90 days, per series and region. Compare with the floor in the decision record.
- [ ] Utilisation of every active commitment from the commitment analysis report. Anything below 90%: find out which workload left and why.
- [ ] Coverage: how much of the current floor is covered, by instrument. Under 60%: plan the next tranche. Over 85%: stop buying.
- [ ] Expiries in the next two quarters, with an owner and a decision date for each.
- [ ] Roadmap check: any planned series upgrade, region move, migration to GKE or Cloud Run, product shutdown. Move the affected usage from steady to uncertain in the record.
- [ ] Right-sizing recommendations that would shrink a committed fleet. Apply them before the next purchase, not after.
- [ ] One line in the record: what we learned this quarter about our own predictions.

## Sources

Rates and eligibility checked against Google's documentation on 9 October 2026. Rates change; the pages below are the source of truth.

- [Committed use discounts for Compute Engine](https://docs.cloud.google.com/compute/docs/instances/committed-use-discounts-overview): resource-based and compute flexible commitments, rates, eligible SKUs, order of application.
- [Committed use discounts for GKE](https://docs.cloud.google.com/kubernetes-engine/cud): Autopilot and Standard coverage, retirement of Autopilot CUDs.
- [Committed use discounts for Cloud SQL](https://docs.cloud.google.com/sql/cud): spend-based commitments per region, what they cover and what they do not.
