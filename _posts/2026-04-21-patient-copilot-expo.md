---
title: "Patient Co-Pilot: A Cross-Platform Expo App That Helps Patients Prepare Better"
date: 2026-04-21
permalink: /posts/2026/04/patient-copilot-expo/
tags:
  - healthcare ai
  - expo
  - react native
  - patient tools
---

I built **Patient Co-Pilot** to make medical visits easier to manage for patients and families. The app helps users capture visit information, organize documents, and prepare better questions before the next appointment.

## Why this app is useful

Patients often leave visits with too much information and too little structure. Patient Co-Pilot helps by turning scattered inputs into a clear, reviewable workflow:

- Record and transcribe doctor conversations.
- Save follow-up questions so nothing important is forgotten.
- Import clinical documents and keep only relevant items in view.
- Generate a structured patient summary (timeline, mention points, and medication points) that can be reviewed before the next visit.

The goal is not to replace clinicians. The goal is to help patients show up prepared, with better context and better questions.

## Technical snapshot

From the app implementation and development history:

- Built with **Expo / React Native** (`expo` 54, `react-native` 0.81) for a cross-platform mobile app workflow.
- Uses **expo-audio** for recording and OpenAI transcription (`/v1/audio/transcriptions`).
- Uses **expo-document-picker** for importing reports and transcript files.
- Uses **expo-secure-store** for local API key storage on-device.
- Includes dedicated tabs for **Record**, **Docs**, **Reports**, and **Setup**.
- Includes explicit safety guardrails:
  - manual transcript review flow before downstream AI features,
  - patient-facing vs clinician-facing export separation,
  - source-restricted report Q&A and summary generation rules.

## Screenshot placeholders

I left these placeholders so screenshots can be dropped in quickly once ready:

![Patient Co-Pilot Record tab screenshot](/images/patient-copilot/record-tab.png)
*TODO: replace with actual Record tab screenshot.*

![Patient Co-Pilot Docs tab screenshot](/images/patient-copilot/docs-tab.png)
*TODO: replace with actual Docs tab screenshot.*

![Patient Co-Pilot Reports tab screenshot](/images/patient-copilot/reports-tab.png)
*TODO: replace with actual Reports tab screenshot.*
