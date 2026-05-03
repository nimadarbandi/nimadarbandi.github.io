---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  /* hide redundant h1 — name is already in the sidebar */
  .page__title { display: none !important; }

  .about-intro {
    font-size: 1.02em;
    line-height: 1.78;
    color: #2a2e33;
    margin-bottom: 0.5rem;
  }

  .about-section {
    margin-bottom: 1.75rem;
  }

  .about-section h2 {
    font-size: 0.68rem !important;
    font-weight: 700 !important;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #BA0C2F !important;
    margin: 0 0 0.7rem !important;
    padding-bottom: 0 !important;
    border-bottom: none !important;
  }

  .interest-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .interest-chip {
    display: inline-flex;
    align-items: center;
    padding: 0.28rem 0.7rem;
    border-radius: 999px;
    border: 1px solid rgba(186, 12, 47, 0.2);
    background: rgba(186, 12, 47, 0.04);
    font-size: 0.84em;
    color: #2a2e33;
    font-family: "Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    line-height: 1.3;
    transition: border-color 0.15s, background 0.15s;
  }

  .interest-chip:hover {
    border-color: rgba(186, 12, 47, 0.5);
    background: rgba(186, 12, 47, 0.08);
  }

  .about-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .about-list li {
    position: relative;
    padding-left: 1.15rem;
    margin-bottom: 0.4rem;
    font-size: 0.96em;
    line-height: 1.6;
    color: #3a3f44;
  }

  .about-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #BA0C2F;
    font-size: 0.78em;
    top: 0.18em;
  }

  .pub-item {
    padding: 0.55rem 0.8rem;
    border-left: 3px solid #BA0C2F;
    background: #fafafa;
    border-radius: 0 5px 5px 0;
    margin-bottom: 0.55rem;
    line-height: 1.5;
  }

  .pub-year {
    font-style: normal;
    font-weight: 700;
    color: #BA0C2F;
    font-size: 0.75em;
    font-family: "Merriweather Sans", sans-serif;
    letter-spacing: 0.04em;
    display: block;
    margin-bottom: 0.15rem;
  }

  .pub-title {
    font-style: italic;
    font-size: 0.93em;
    color: #3a3f44;
  }

  .pub-see-all {
    font-size: 0.83em;
    margin-top: 0.4rem;
  }

  .pub-see-all a {
    color: #BA0C2F;
    text-decoration: none;
    font-family: "Merriweather Sans", sans-serif;
  }

  .pub-see-all a:hover {
    text-decoration: underline;
  }

  .about-contact {
    font-size: 0.93em;
    color: #555;
    line-height: 1.65;
  }
</style>

<p class="about-intro">I am a Ph.D. student in Computer Science at the University of Georgia, working at the intersection of artificial intelligence and medicine. My research focuses on developing intelligent systems for early disease detection, precision medicine, and animal behavior analysis using multimodal data.</p>

<p class="about-intro">My work combines computer vision, machine learning, and large language models to build self-improving systems that can learn from limited data and adapt to real-world environments.</p>

<div class="about-section">
  <h2>Research Interests</h2>
  <div class="interest-chips">
    <span class="interest-chip">AI for Animal Behavior Analysis</span>
    <span class="interest-chip">Early Disease Detection</span>
    <span class="interest-chip">AI for Healthcare &amp; Precision Medicine</span>
    <span class="interest-chip">Computer Vision &amp; Multimodal Learning</span>
    <span class="interest-chip">Foundation Models &amp; Label-Efficient Learning</span>
  </div>
</div>

<div class="about-section">
  <h2>Current Work</h2>
  <ul class="about-list">
    <li>Developing label-efficient pipelines for object detection using foundation models</li>
    <li>Building AI systems for medical image analysis and clinical decision support</li>
    <li>Designing multimodal tracking systems integrating vision and sensor data</li>
    <li>Exploring connections between behavior modeling and biological intelligence</li>
  </ul>
</div>

<div class="about-section">
  <h2>Selected Publications</h2>
  <div class="pub-item">
    <span class="pub-year">2026</span>
    <span class="pub-title">Foundation Models as Data Engines: Label-Efficient Learning in Modern Computer Vision</span>
  </div>
  <div class="pub-item">
    <span class="pub-year">2024</span>
    <span class="pub-title">Artificial Intelligence Breakthroughs in Early Diagnosis and Precision Treatment of Breast Cancer: A Multimethod Study</span>
  </div>
  <p class="pub-see-all"><a href="/publications/">See all publications →</a></p>
</div>

<div class="about-section">
  <h2>Ongoing Projects</h2>
  <ul class="about-list">
    <li>Animal behavior tracking in multi-sensor/multi-camera environments</li>
    <li>Patient Copilot for educating patients and supporting decision-making</li>
    <li>Autonomous data curation using foundation models and vision-language models</li>
  </ul>
</div>

<div class="about-section about-contact">
  <h2>Contact</h2>
  Feel free to reach out for collaborations or discussions related to AI, healthcare, and interdisciplinary research.
</div>
