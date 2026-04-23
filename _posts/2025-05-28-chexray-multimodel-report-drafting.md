---
title: "CheXray: Multi-Model Chest X-ray Analysis and Report Drafting"
date: 2025-05-28
permalink: /posts/2025/05/chexray-multimodel-report-drafting/
tags:
  - medical imaging
  - chest xray
  - ai
  - radiology
  - llm
post_icon: /images/chexray.png
post_icon_width: 30
---
I developed **CheXray** as a research prototype to combine computer vision models and an LLM for chest X-ray interpretation support.

The pipeline integrates:

- **CheXNet** (DenseNet121, Keras) for 14 thoracic findings.
- **TorchXRayVision** (PyTorch) for broader pathology scoring.
- **LangGraph + LangChain + OpenAI** to synthesize both model outputs into a structured draft report with **Findings** and **Impression** sections.

## Why this matters

CheXray is useful for research workflows where you need both reproducible model scores and readable first-pass report drafts. It supports:

- Faster triage-style experimentation.
- Side-by-side cross-model comparison.
- More consistent reporting prototypes during dataset studies.

## Workflow summary

1. Build image candidate lists from MIMIC-CXR metadata.
2. Run batch inference with CheXNet and TorchXRayVision.
3. Aggregate model outputs in LangGraph.
4. Generate a radiology-style draft report through the LLM.

The output is intended for **research and educational use**, with clinician review required.

Repository:
[nimadarbandi/chestXray](https://github.com/nimadarbandi/chestXray)
