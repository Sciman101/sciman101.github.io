---
layout: default
title: Characters and Lore
description: A gang of misfits
---
# Characters and Lore

I've made a bunch of characters up over time to use in art, games, writing - whatever! (They're even the background of this website). If you're interested, you can learn more about each of them here.

{% for item in site.data.lore %}
<!--Expandable section-->
<div class='expandable' style='background-color:{{item.bgcolor}};'>
    <!-- The actual toggle button-->
    <{% if item.is_lore %}h2{% else %}h1{% endif %} id='{{item.name}}' title='Click to toggle section' class='expandable-toggle'>{{item.name}}</{% if item.is_lore %}h2{% else %}h1{% endif %}>
    <!-- Content to show -->
    <div class='expandable-content'>
    <h2>{{ item.subtitle | markdownify }}</h2>
    {% unless item.is_lore %}
        <ul class='stats'>
            <h3>Stats</h3>
            <li>[BODY: {{item.stat-body}}/5]</li>
            <li>[MIND: {{item.stat-mind}}/5]</li>
            <li>[HEART: {{item.stat-heart}}/5]</li>
            <li>[{{item.stat-custom}}]</li>
        </ul>
    {% endunless %}
    {% if item.img %}
    <img alt='{{item.name}}' src='{{item.img}}' style='filter:drop-shadow(2px 2px 2px black);'>
    {% endif %}
    {{ item.content | markdownify }}
    </div>
</div>
{% endfor %}