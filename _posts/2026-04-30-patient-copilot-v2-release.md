---
title: "Patient Co-Pilot v2: Multi-AI, Apple Health Monitoring, and API Key Donation Workflow"
date: 2026-04-30
permalink: /posts/2026/04/patient-copilot-v2-release/
tags:
  - healthcare ai
  - patient education
  - digital health
  - clinical workflow
skills:
  - Agentic AI
  - Software
  - Human Data
  - Cancer
  - Multi-Sensor
post_icon: /images/faraz-icon.png
post_icon_width: 35
---
I am publishing **Patient Co-Pilot v2 Beta**, a practical update focused on helping patients handle complex care information with less confusion and better visit preparation.

## What is new in v2

- Multi-provider AI support with **OpenAI, Claude, and Gemini**.
- Per-provider API key storage and model selection, including model refresh.
- API key donation request flow with explicit legal consent capture.
- Apple Health wearable integration for patient monitoring workflows.
- Health threshold checks with alert history and attention suggestions.
- Improved source-grounded Report Q&A flow.
- Follow-up question handoff between chat and visit-prep lists.
- Expanded consent and research-share workflows for de-identified summaries.

## Core patient workflow in v2

Patient Co-Pilot v2 is organized around four app areas:

- `Record`: record/import audio, transcribe visits, review transcript, and save follow-up questions.
- `Docs`: import reports/files, summarize selected files, manage timeline events, and validate transcript metadata.
- `Reports`: generate a structured patient report, export patient/clinician CSV, and use source-grounded Q&A.
- `Home`: configure providers/models, manage wearable sync settings, and run backup/restore.

This design keeps the path clear from raw inputs to practical next-visit preparation.

## Most recent feature highlights

### 1) Multi-AI support

v2 supports OpenAI, Claude, and Gemini in one app, with provider-aware model routing for text-generation tasks. This makes the workflow more flexible and easier to evaluate across model providers.

### 2) Apple Health monitoring

v2 adds Apple Health-based monitoring support and lets patients configure metric thresholds, run sync, and review alerts over time. The health panel is designed to support patient awareness and discussion prep, not diagnostic decision-making.

### 3) Stronger report chat and follow-up loop

Report Q&A is designed to stay source-grounded to selected patient materials. Suggested questions can be saved directly into the follow-up workflow so patients can carry key questions into the next visit.

### 4) Safer data-sharing controls

The release includes explicit consent steps for optional de-identified research sharing and an API key donation request workflow with secure request packaging.

## Safety boundaries

Patient Co-Pilot remains an informational patient companion:

- It does not replace clinician diagnosis or treatment planning.
- It emphasizes source-grounded summaries and reviewed inputs.
- It keeps patient education and clinical decision roles clearly separated.


Public beta (TestFlight): [Join Patient Co-Pilot Beta](https://testflight.apple.com/join/pvRks2nM)
