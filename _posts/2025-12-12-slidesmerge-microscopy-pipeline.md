---
title: "slidesMerge: Microscopy Slide Alignment and 14-Channel OME-TIFF Fusion"
date: 2025-12-12
permalink: /posts/2025/12/slidesmerge-microscopy-pipeline/
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
I developed **slidesMerge** as a practical pipeline to align two large Aivia microscopy slides (>7 channels each) from different imaging cycles and fuse them into a single **multi-channel OME-TIFF** file.

This project is designed for high-resolution microscopy workflows where preserving spatial consistency across cycles is critical for downstream analysis.

## What the pipeline does

The implementation follows a four-step process:

1. Coarse alignment using two top bright connected components.
2. Contour-based refinement of rotation and translation.
3. Tiled full-resolution warping of the moving slide across all channels.
4. Channel-wise merge into one 14-channel OME-TIFF output.

## Why this is useful

- Preserves spatial integrity across channels and cycles.
- Avoids unnecessary cropping while aligning large slides.
- Produces debug outputs for visual quality control at each stage.
- Exports outputs compatible with **Aivia** and **QuPath**.

This helps reduce manual alignment effort and makes multi-cycle tissue analysis more reproducible and scalable.

For non-technical readers: **slidesMerge** helps researchers line up multiple microscope scans of the same tissue and combine them into one accurate view. This reduces manual work and makes it easier to compare biological signals across imaging cycles.

One key challenge is scale: these slide files are often **multi-gigabyte**, and manual pixel-level alignment is usually not feasible. A common shortcut is to align low-resolution copies, but that can introduce pixel degradation and reduce final alignment accuracy when projected back to full resolution. In my workflow, slidesMerge has been the only approach that consistently delivers this level of full-resolution alignment accuracy while still using modest computational resources through targeted refinement and tiled processing.

<img src="/images/Cycle.jpg" alt="slidesMerge imaging cycle visualization" style="display:block; width:100%; max-width:880px; height:auto; margin:1rem auto;" />

Repository:
[nimadarbandi/slidesMerge](https://github.com/nimadarbandi/slidesMerge)
