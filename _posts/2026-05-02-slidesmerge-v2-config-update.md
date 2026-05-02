---
title: "slidesMerge Update: Config-Driven Parameters, Manual CC Selection, and Better Diagnostics"
date: 2026-05-02
permalink: /posts/2026/05/slidesmerge-v2-config-update/
tags:
  - microscopy
  - image alignment
  - computational pathology
  - ome-tiff
  - computer vision
skills:
  - Software
  - Animal Data
  - Human Data
  - Cancer
  - Medical Image
  - Computer Vision
post_icon: /images/virus.jpg
post_icon_width: 30
---

I pushed a new version of **slidesMerge** with several practical improvements based on real-world use. The core pipeline (coarse alignment, contour refinement, tiled warping, multi-channel merge) is unchanged. What changed is adding a centralized configuration file, improving edge-case handling in tissue detection, and improving resilience across diverse immunofluorescent slides with selectable image features.

Repository: [nimadarbandi/slidesMerge](https://github.com/nimadarbandi/slidesMerge)

## What changed

### 1) Centralized parameter config via `pipeline_params.json`

Previously, parameters were set per-script or via long argument lists. Now there is a single `pipeline_params.json` file that holds all shared parameters, and each script supports three modes:

- `--config`: specify the config file location
- `--use_config`: read only specific keys from the config
- `--use_config_all`: load all available params from the config

This makes it practical to version-control your parameter set, run the same config across a batch of slides, and reproduce an alignment without reconstructing a long CLI call from scratch.

### 2) Per-slide brightness thresholds

The original pipeline used a single brightness threshold to isolate the top bright connected components. That assumption breaks when the two imaging cycles have different exposure or staining intensity profiles.

The new version exposes `--top_percent_fixed` and `--top_percent_moving` separately, so each slide can be tuned independently. Both are also configurable through `pipeline_params.json`.

### 3) Manual connected component selection

When automatic component selection fails — dense debris fields, folded tissue, strong background signal — the pipeline now supports `--cc_select_fixed` and `--cc_select_moving` to manually specify which connected components to use.

This is a direct response to cases where the top-two-CC heuristic picks the wrong regions. Instead of a failed alignment, users can inspect the CC diagnostic image, identify the correct components, and pass them explicitly.

### 4) Tissue component control via `--tissue_k`

A new `tissue_k` parameter controls how many tissue components are considered during the alignment step. This gives more precise control in cases with multiple large tissue regions, complex tissue architecture, or partial tissue loss between cycles.

### 5) Minimum area percentage mode

The existing `min_area` pixel-count filter has been extended with a percentage-based mode. When working across slides at different resolutions or zoom levels, a fixed pixel threshold can be too aggressive on lower-resolution inputs and too permissive on higher ones. The percentage mode adapts to the actual image dimensions.

### 6) Colored diagnostic images on selection failure

When connected component selection fails, the pipeline now outputs a colored diagnostic image that highlights each component. This replaces a silent failure with a visual that shows exactly what the detector found, making it much faster to determine whether the problem is thresholding, area filtering, or something structural in the tissue.

### 7) Arbitrary channel count support

The merge step now supports any number of channels, not just the original 14-channel configuration. The channel count is inferred from the input slides rather than hardcoded, which makes the pipeline usable on other imaging protocols without code changes.

## What is still the same

The four-step pipeline structure is unchanged:

1. Coarse alignment using bright connected components
2. Contour-based rotation and translation refinement
3. Tiled full-resolution warping across all channels
4. Channel-wise merge into a single OME-TIFF output

The workflow is still designed for step-by-step execution with inspection between stages, not single-pass automation. This is intentional: these are multi-gigabyte files where a silent alignment failure wastes significant compute and storage.
