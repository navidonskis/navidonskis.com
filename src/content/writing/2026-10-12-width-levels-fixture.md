---
title: "Width levels fixture"
description: "Layout fixture for the three post width levels. Every combination of standard, wide and full on a figure, a table and an embed, kept as a draft so the levels can be checked after a style change."
pubDate: 2026-10-12
draft: true
tags: ["fixture"]
cta: none
---

This post is not content. It exists so the three width levels can be checked at 390px and 1280px after any change to the post styles. It never reaches production because of `draft: true`.

## Figures

A figure with no class stays in the reading column.

<figure>
  <img src="/images/donatas-320.jpg" alt="" width="320" height="320" />
  <figcaption>Standard: reading column, 720px on a desktop. The picture keeps its own 320px.</figcaption>
</figure>

<figure class="wide">
  <img src="/images/donatas-320.jpg" alt="" width="320" height="320" />
  <figcaption>Wide: lines up with the site container, 1120px on a desktop.</figcaption>
</figure>

<figure class="full">
  <img src="/images/donatas-320.jpg" alt="" width="320" height="320" />
  <figcaption>Full: edge to edge, caption pulled back to the gutter.</figcaption>
</figure>

## Tables

| Level | Width | Author writes |
|---|---|---|
| standard | reading column | nothing |
| wide | site container | `<figure class="wide">` around the table |
| full | viewport | `<figure class="full">` around the table |

*Standard: a Markdown table with nothing around it.*

<figure class="wide">

| Region | Instances | Commitment | Coverage |
|---|---|---|---|
| europe-west1 | 412 | 3 year | 78% |
| europe-west4 | 180 | 1 year | 64% |
| us-central1 | 96 | none | 0% |

<figcaption>Wide: the same Markdown table, blank lines around it, inside a figure.</figcaption>
</figure>

<figure class="full">

| Region | Instances | Commitment | Coverage |
|---|---|---|---|
| europe-west1 | 412 | 3 year | 78% |
| europe-west4 | 180 | 1 year | 64% |

<figcaption>Full: edge to edge, the table still scrolls inside its own box on a phone.</figcaption>
</figure>

## Embeds

<iframe src="about:blank" title="Standard embed"></iframe>

<iframe class="wide" src="about:blank" title="Wide embed"></iframe>

<iframe class="full" src="about:blank" title="Full embed"></iframe>

## After the embeds

A paragraph at the end, to show that the blocks above leave the column alone.
