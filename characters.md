---
layout: default
title: Characters
description: A bunch of weirdos
---
<link href="/assets/css/character.css" rel="stylesheet" type="text/css" />
# Characters

I've made a bunch of characters up over time to use in art, games, writing - whatever! (They're even the background of this website). If you're interested, you can learn more about each of them here.

<div class='card-container'>
{% for item in site.characters %}
{% unless item.hidden %}

<a href='{{ item.url }}'>
<div class='char-card' style='background-color:{{item.bgcolor}};'>
    <h2>{{ item.name }}</h2>
    {% if item.icon %}
    <img alt='{{item.name}}' src='{{item.icon}}'>
    {% endif %}
    <h3>{{ item.subtitle }}</h3>
</div>
</a>
{% endunless %}

{% endfor %}

</div>

<div style="text-align:center; padding-top:4em">
    <a href="/lore.html">Descend</a>
</div>