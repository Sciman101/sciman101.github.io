---
layout: default
title: Projects
---
<link href="/assets/css/project.css" rel="stylesheet" type="text/css" />
# Projects

Show me...
<select name="type" id="filter">
	<option value="all">Everything</option>
	<option value="game">Games</option>
	<option value="mod">Mods</option>
	<option value="software">Software & Tools</option>
	<option value="art">Art</option>
</select>

{% assign projects_sorted = site.data.projects | sort:"date" | reverse %}

{% for item in projects_sorted %}
<div class='project-container' data-type='{{item.type}}'>
	<div class='project-image-container'>
		{% if item.video %}
		<video autoplay loop muted {% if item.shift %}style="transform:translateX({{item.shift}}px)"{% endif %}>
			<source type="video/webm" src="{{item.video}}">
		</video>
		{% else %}
		<img alt="{{item.name}}" src="{{item.img}}" {% if item.shift %}style="transform:translateX({{item.shift}}px)"{% endif %}>
		{% endif %}
	</div>

	<span class='project-details'>
		<h2>{{item.name}}</h2>
		<h3>{{item.subtitle}}</h3>
		{{item.description | markdownify}}

		{{item.footer | markdownify}}
	</span>

</div>
{% endfor %}


<script src='/assets/js/projectfilter.js'></script>