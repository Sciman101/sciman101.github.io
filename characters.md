---
layout: default
title: Characters
description: A gang of misfits
---
# Characters

I've made a bunch of characters up over time to use in art, games, writing - whatever! (They're even the background of this website). If you're interested, you can learn more about each of them here.

<div class='card-container'>
{% for item in site.characters %}
{% unless item.hidden %}

<a href='{{ item.url }}'>
<div class='char-card' style='background-color:{{item.bgcolor}};'>
    <h2 style='background-color:white;'>{{ item.name }}</h2>
    {% if item.img %}
    <img alt='{{item.name}}' src='{{item.icon}}'>
    {% endif %}
    <h3 style='color: black;font-size:100%;background-color:white;'>{{ item.subtitle }}</h3>
</div>
</a>
{% endunless %}

{% endfor %}
</div>