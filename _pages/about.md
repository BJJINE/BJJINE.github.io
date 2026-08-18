---
layout: default
permalink: /
title: "Home"
description: "Cyber Threat Intelligence Lab (CTI Lab) — research on threat intelligence, attribution, dark web monitoring, malware analysis, and AI security."
---

<div class="container">

  <section class="hero">
    <img class="hero-logo" src="{{ site.logo | relative_url }}" alt="{{ site.subtitle }}">
    <p class="lede">
      {{ site.description }}
      We analyze malware and the rules that catch it, evaluate and report on threat data,
      and study how users are tracked and exposed in the browser — turning scattered
      signals into defenses that hold up in practice.
    </p>
    <p class="affil">
      <a href="{{ site.institution_url }}">{{ site.institution }}</a>
    </p>
  </section>

  <h2 class="block">Research Areas</h2>
  <div class="areas">
    {% for area in site.data.research %}
      <div class="area">
        <div class="ico">{{ area.icon }}</div>
        <h3>{{ area.title }}</h3>
        <p>{{ area.text }}</p>
        {% if area.topics %}
          <ul class="area-topics">
            {% for t in area.topics %}
              <li>
                <span class="topic-name">{{ t.name }}</span>
                {% if t.text %}<span class="topic-text">{{ t.text }}</span>{% endif %}
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      </div>
    {% endfor %}
  </div>

  <h2 class="block">News</h2>
  <ul class="news">
    {% for item in site.data.news %}
      <li>
        <span class="date">{{ item.date }}</span>
        <span class="text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</span>
      </li>
    {% endfor %}
  </ul>

  <h2 class="block">Selected Publications</h2>
  {% assign recent = site.publications | sort: "year" | reverse | slice: 0, 4 %}
  {% for p in recent %}
    {% include publication-item.html pub=p %}
  {% endfor %}
  <p class="more"><a href="{{ '/publications/' | relative_url }}">See all publications &rarr;</a></p>

  <div class="callout">
    <strong>We are recruiting.</strong> We are looking for motivated undergraduate and graduate
    (M.S. and Ph.D.) students interested in software security, cyber threat intelligence and web security.
    Please reach out at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.
  </div>

</div>
