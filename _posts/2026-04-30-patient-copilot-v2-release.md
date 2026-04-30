---
title: "Patient Co-Pilot v2: Multi-AI, Apple Health Monitoring, Source-grounded ChatBot"
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

I am publishing **Patient Co-Pilot v2 Beta**, a practical update focused on Multi-AI support and Symptom Monitoring. Download link for the Beta version is included.

This version is built for real patient workflows, especially when care is spread across multiple visits, multiple files, and multiple people (patient + family/caregiver). The goal is simple: make the next doctor conversation clearer and better prepared.

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

- `Voices`: record/import audio, transcribe visits, review transcript, and save follow-up questions.
- `Docs`: import reports/files, summarize selected files, manage timeline events, and validate transcript metadata.
- `Reports`: generate a structured patient report, export patient/clinician CSV, and use source-grounded Q&A.
- `Home`: configure providers/models, manage wearable sync settings, and run backup/restore.

This design keeps the path clear from raw inputs to practical next-visit preparation.

## Why this release matters in day-to-day care

Patient Co-Pilot v2 is especially useful when users need to:

- Keep accurate post-visit recall with transcript-backed notes.
- Turn scattered reports into structured summaries before appointments.
- Track symptoms/events with wearable trends for chronic-care follow-up.
- Coordinate with caregivers using shareable patient/clinician outputs.
- Ask questions from personal records instead of generic chatbot context.

## Most recent feature highlights

### 1) Multi-AI support

v2 supports OpenAI, Claude, and Gemini in one app, with provider-aware model routing for text-generation tasks. This makes the workflow more flexible and easier to evaluate across model providers.

### 2) Apple Health monitoring

v2 adds Apple Health-based monitoring support and lets patients configure metric thresholds, run sync, and review alerts over time. The health panel is designed to support patient awareness and discussion prep, not diagnostic decision-making.

### 3) Stronger report chat and follow-up loop

Report Q&A is designed to stay source-grounded to selected patient materials. Suggested questions can be saved directly into the follow-up workflow so patients can carry key questions into the next visit.

### 4) Safer data-sharing controls

The release includes explicit consent steps for optional de-identified research sharing and an API key donation request workflow with secure request packaging.

## Practical implementation notes (current beta)

- The app supports record import + report import workflows in one place, including common document/image formats used by patients.
- Report generation prioritizes reviewed transcript context when available, then falls back to patient documents and events.
- Report Q&A is constrained to selected sources and can hand off useful questions back into follow-up lists.
- Backup and portability are first-class: users can export/import ZIP backups and share patient/clinician CSV outputs.
- Storage posture remains local-first on device, with explicit user-controlled export actions.

## Safety boundaries

Patient Co-Pilot remains an informational patient companion:

- It does not replace clinician diagnosis or treatment planning.
- It emphasizes source-grounded summaries and reviewed inputs.
- It keeps patient education and clinical decision roles clearly separated.
- It is not appropriate for emergency care scenarios.

## Screenshots

<style>
  .copilot-phone-grid {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  .copilot-phone-frame {
    background: linear-gradient(180deg, #0a1f2a 0%, #0a1620 100%);
    border-radius: 28px;
    padding: 10px 10px 8px;
    width: min(31%, 270px);
    min-width: 220px;
    margin: 0;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.32), 0 3px 8px rgba(0, 0, 0, 0.24);
    border: 1px solid rgba(125, 221, 214, 0.25);
  }

  .copilot-phone-notch {
    width: 42%;
    height: 8px;
    border-radius: 999px;
    background: rgba(160, 199, 210, 0.4);
    margin: 0 auto 8px;
  }

  .copilot-phone-frame img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 20px;
  }

  .copilot-phone-caption {
    text-align: center;
    font-size: 0.9rem;
    margin-top: 0.35rem;
    color: #7dddd6;
  }

  @media (max-width: 900px) {
    .copilot-phone-frame {
      width: min(100%, 320px);
    }
  }
</style>

<div class="copilot-phone-grid">
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/1.PNG" alt="Patient Co-Pilot v2 screenshot 1" />
    <figcaption class="copilot-phone-caption">Screenshot 1</figcaption>
  </figure>
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/2.PNG" alt="Patient Co-Pilot v2 screenshot 2" />
    <figcaption class="copilot-phone-caption">Screenshot 2</figcaption>
  </figure>
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/3.PNG" alt="Patient Co-Pilot v2 screenshot 3" />
    <figcaption class="copilot-phone-caption">Screenshot 3</figcaption>
  </figure>
</div>

<div class="copilot-phone-grid">
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/4.PNG" alt="Patient Co-Pilot v2 screenshot 4" />
    <figcaption class="copilot-phone-caption">Screenshot 4</figcaption>
  </figure>
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/5.PNG" alt="Patient Co-Pilot v2 screenshot 5" />
    <figcaption class="copilot-phone-caption">Screenshot 5</figcaption>
  </figure>
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/6.PNG" alt="Patient Co-Pilot v2 screenshot 6" />
    <figcaption class="copilot-phone-caption">Screenshot 6</figcaption>
  </figure>
</div>

<div class="copilot-phone-grid">
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/7.PNG" alt="Patient Co-Pilot v2 screenshot 7" />
    <figcaption class="copilot-phone-caption">Screenshot 7</figcaption>
  </figure>
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/8.PNG" alt="Patient Co-Pilot v2 screenshot 8" />
    <figcaption class="copilot-phone-caption">Screenshot 8</figcaption>
  </figure>
  <figure class="copilot-phone-frame">
    <div class="copilot-phone-notch"></div>
    <img src="/images/9.PNG" alt="Patient Co-Pilot v2 screenshot 9" />
    <figcaption class="copilot-phone-caption">Screenshot 9</figcaption>
  </figure>
</div>

Project repository (docs, privacy, and terms): [nimadarbandi/CopilotApp](https://github.com/nimadarbandi/CopilotApp/tree/main)


Public beta (TestFlight): [Join Patient Co-Pilot Beta](https://testflight.apple.com/join/pvRks2nM)
