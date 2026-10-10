---
title: "Why gcloud started asking you to log in every morning, and how to stop it"
description: "Google quietly capped CLI sessions at 16 hours. The fix is a user access binding in Access Context Manager, not a longer token."
pubDate: 2026-10-20
draft: true
tags: ["gcp", "iam", "opentofu"]
cta: talk
---

[Outline. The full text is drafted in Google Docs and pasted here when final.]

## What changed

- One day every engineer's `gcloud` session expires overnight. No announcement in the console, just a rollout on Google's side.
- The new default session length and what it applies to (CLI, SDK credentials, not service accounts).

## What does not fix it

- Longer access tokens, re-running `gcloud auth login` in scripts, workarounds people reach for first.

## The actual fix

- `google_access_context_manager_gcp_user_access_binding`: scope it to a Google group, set the session length you can defend to security, manage it as code.
- Minimal OpenTofu example.
- How to verify it applied, and what the user experience looks like afterwards.

## Trade-offs

- Why seven days and not thirty. Where reauth settings and this binding overlap.

## Takeaway

- Session policy belongs in the foundation repo next to org policies, not in a wiki page.
