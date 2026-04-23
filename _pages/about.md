---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


I am a Ph.D. student in Computer Science at the University of Georgia, working at the intersection of artificial intelligence and medicine. My research focuses on developing intelligent systems for early disease detection, precision medicine, and animal behavior analysis using multimodal data.

My work combines computer vision, machine learning, and large language models to build self-improving systems that can learn from limited data and adapt to real-world environments.

---

## Research Interests
- AI for Animal Behavior Analysis 
- Early Human/Animal Disease Detection 
- AI for Healthcare and Precision Medicine 
- Computer Vision and Multimodal Learning 
- Foundation Models and Label-Efficient Learning

---

## Skills and Related Posts

<style>
  .about-skills-wrap {
    margin: 0.5rem 0 1.2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }
  .about-skill-chip {
    display: inline-block;
    padding: 0.24rem 0.6rem;
    border: 1px solid var(--global-border-color);
    border-radius: 999px;
    background: rgba(186, 12, 47, 0.06);
    text-decoration: none;
    font-family: "Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.86rem;
    color: #494e52;
  }
  .about-skill-chip:hover {
    color: #BA0C2F;
    border-color: #BA0C2F;
    text-decoration: none;
  }
  .about-skill-date {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
  }
</style>

{% assign skills_blob = "" %}
{% for post in site.posts %}
  {% if post.skills %}
    {% for skill in post.skills %}
      {% capture skills_blob %}{{ skills_blob }}{{ skill }}|||{% endcapture %}
    {% endfor %}
  {% endif %}
{% endfor %}
{% assign skills_list = skills_blob | split: "|||" | uniq | sort %}

<div class="about-skills-wrap">
  {% for skill in skills_list %}
    {% assign skill_trim = skill | strip %}
    {% if skill_trim != "" %}
      <a class="about-skill-chip" href="#skill-{{ skill_trim | slugify }}">{{ skill_trim }}</a>
    {% endif %}
  {% endfor %}
</div>

{% for skill in skills_list %}
  {% assign skill_trim = skill | strip %}
  {% if skill_trim != "" %}
### <span id="skill-{{ skill_trim | slugify }}">{{ skill_trim }}</span>
  <ul>
    {% for post in site.posts %}
      {% if post.skills and post.skills contains skill_trim %}
        <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span class="about-skill-date">({{ post.date | date: "%B %d, %Y" }})</span></li>
      {% endif %}
    {% endfor %}
  </ul>
  {% endif %}
{% endfor %}

---

## Current Work
- Developing label-efficient pipelines for object detection using foundation models
- Building AI systems for medical image analysis and clinical decision support  
- Designing multimodal tracking systems integrating vision and sensor data  
- Exploring connections between behavior modeling and biological intelligence  

---

## Selected Publications
- *Artificial Intelligence Breakthroughs in Early Diagnosis and Precision Treatment of Breast Cancer: A Multimethod Study* (2024)  
- *Foundation Models as Data Engines:Label-Efficient Learning in Modern Computer Vision* (2026)


*(See the Publications page for the full list.)*

---

## Ongoing Projects
- Animal Behavior tracking in multi-sensor/multi-camera environments
- Patient Copilot for educating patient and help in decision making processes
- Autonomous data curation using foundation models and Vision-language models


---

## Contact
Feel free to reach out for collaborations or discussions related to AI, healthcare, and interdisciplinary research.

---
