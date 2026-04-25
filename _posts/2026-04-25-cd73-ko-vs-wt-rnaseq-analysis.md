---
title: "CD73 KO vs WT RNA-seq Analysis with Kallisto and Sleuth"
date: 2025-12-01
permalink: /posts/2026/04/cd73-ko-vs-wt-rnaseq-analysis/
tags:
  - bioinformatics
  - rna-seq
  - breast cancer
  - transcriptomics
  - kallisto
  - sleuth
skills:
  - Software
  - Cancer
  - Human Data
  - Animal Data
  - Bioinformatics
post_icon: /images/bioinformatic.png
post_icon_width: 35
---
I built this project to run a reproducible **RNA-seq comparison between CD73 knockout (KO) and wild-type (WT)** samples using a practical **Kallisto + Sleuth** workflow.

Project repository:
[omics/Project](https://github.com/nimadarbandi/omics/tree/main/Project)

The work is inspired by the paper:
**Knock-out of CD73 delays the onset of HR-negative breast cancer by reprogramming lipid metabolism and is associated with increased tumor mutational burden**.

## Why this matters
CD73 has an important role in tumor biology and lipid metabolism. Reproducing this analysis in an independent pipeline helps:
- validate published findings
- identify significant transcript-level changes between KO and WT groups
- support downstream pathway and mechanism-focused analysis in cancer research

## Dataset and biological context
- SRA BioProject: `PRJNA933922`
- Organism/reference used in pipeline: **Mus musculus (GRCm39)**

## What this pipeline does
1. Download sequencing runs from SRA.
2. Convert and compress FASTQ files.
3. Build a Kallisto index from Ensembl cDNA reference.
4. Run `kallisto quant` with bootstrap estimates.
5. Run Sleuth likelihood-ratio testing (`~1` vs `~condition`).
6. Export significant transcripts (`qval <= 0.05`) and generate result plots.

## Outcome
This project provides a structured and reusable transcriptomics workflow to study CD73-driven expression changes, with direct relevance to HR-negative breast cancer biology and downstream pathway interpretation.
