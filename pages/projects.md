---
layout: page
title: Projects
permalink: /projects/
---

{% translate_file projects.html %}

<div class="projects-grid">
  {% for project in site.posts %}
    <a href="{{ project.url | relative_url }}" class="project-card">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image">
      {% endif %}
      <h2>{{ project.title }}</h2>
      <p class="project-date">{{ project.date | date: "%B %Y" }}</p>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-technologies">
        {% for tech in project.technologies %}
          <span class="tech-tag">{{ tech }}</span>
        {% endfor %}
      </div>
    </a>
  {% endfor %}
</div>