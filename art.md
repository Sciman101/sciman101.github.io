---
layout: default
title: Art
description: Art
---
<link href="/assets/css/art.css" rel="stylesheet" type="text/css" />
# Art
I've drawn a lot over time, largely character illustrations but with some other things mixed in here and there. This page doesn't have *everything*, but it contains the pieces I'm most proud of.

You might notice some reccuring characters in these, you can learn more about them [here](characters.html).

<!-- Generate each piece of art and categorize by month and year-->
<!--First, create a sorted array of art chronologically-->
{% assign art_sorted = site.data.art | sort:"date" | reverse %}

<!-- But first - let's figure out every tag-->
{% assign all_tags = "" | split:"" %}
	{% for art in art_sorted %}
	{% assign tag_arr = art.tags | split:", "%}
	{% for tag in tag_arr %}
		{% unless all_tags contains tag %}
			{% assign temp = all_tags | join:"," %}
			{% assign all_tags = temp | append: "," | append: tag%}
			{% assign all_tags = all_tags | split:"," %}
		{% endunless %}
	{% endfor %}
{% endfor %}
{% assign all_tags = all_tags | sort %}

<!-- Tag block-->
<hr>
<div class='tag-block'>
Sort by tags:

{% for tag in all_tags %}
{% if tag != "" %}
<span class='tag-selector'>{{tag}}</span>
{%endif%}
{% endfor %}
</div>

<!-- Lightbox -->
<div id='lightbox'>
<img id='lightbox-img'>
<h2 id='lightbox-caption'></h2>
</div>

<!--iterate over every piece of art-->
{% for art in art_sorted %}

<!--Figure out the date info of this piece, and the date info of the previous piece-->
{% assign current_year = art.date | date:"%Y" %}
{% assign prev_index = forloop.index0 | minus:1 | at_least: 0%}
{% assign previous_year = art_sorted[prev_index].date | date: "%Y" %}

{% assign current_month = art.date | date:"%B" %}
{% assign previous_month = art_sorted[prev_index].date | date: "%B" %}

<!--add month/year info for the first piece-->
{% if forloop.first %}
<h2>{{ current_year }}</h2>
<h3>{{ current_month }}</h3>
<div class='card-container'>
{% endif %}

<!--if the year isnt the same as the last, add a new year and month section-->
{% if current_year != previous_year %}
</div>
<hr>
<h2>{{ current_year }}</h2>
<h3>{{ current_month }}</h3>
<div class='card-container'>
{% else %}

<!--if the month isnt the same as the last, add a new month section-->
{% if current_month != previous_month %}
</div>
<hr>
<h3>{{ current_month }}</h3>
<div class='card-container'>
{% endif %}
{% endif %}

<!-- Actually place the image-->
<img class='art' src='/assets/img/art/thumb/{{ art.file }}' alt="{{ art.caption }}" data-tags="{{art.tags}}">

{% if forloop.last %}
</div>
{%endif%}

{% endfor %}

<script src='/assets/js/artloader.js'></script>