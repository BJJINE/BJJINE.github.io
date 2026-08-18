---
layout: page
permalink: /contact/
title: "Contact"
subtitle: "Feel free to reach out — please email us in advance if you plan to visit."
description: "How to reach and how to find the Cyber Threat Intelligence Lab."
---

<div class="contact-grid">

  <div>
    <ul class="info">
      <li>
        <div class="k">Lab</div>
        <div class="v">{{ site.subtitle }} ({{ site.title }})<br>{{ site.institution }}</div>
      </li>
      <li>
        <div class="k">Address</div>
        <div class="v">{{ site.address }}</div>
      </li>
      <li>
        <div class="k">Email</div>
        <div class="v"><a href="mailto:{{ site.email }}">{{ site.email }}</a></div>
      </li>
      <li>
        <div class="k">Phone</div>
        <div class="v">{{ site.phone }}</div>
      </li>
      <li>
        <div class="k">Directions</div>
        <div class="v">
          Subway Line O, OO Station Exit O — 10 min walk.<br>
          Bus OOO, get off at the OO University stop.
        </div>
      </li>
      <li>
        <div class="k">Parking</div>
        <div class="v">
          Underground parking is available at the Engineering Building
          (prior registration required).
        </div>
      </li>
    </ul>
  </div>

  <div class="map">
    <iframe
      src="https://www.google.com/maps?q={{ site.map_query | url_encode }}&output=embed"
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      title="Map to {{ site.title }}"></iframe>
  </div>

</div>
