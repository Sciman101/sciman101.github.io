---
layout: default
title: Posts
description: Listen to me yell
---
<h1>Blog</h1>
<hr>
<ul>
	{% for post in site.posts %}
		<li>
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<h3>{{ post.date | date_to_string: "ordinal", "US" }}</h3>
			{{ post.excerpt }}
		</li>
	{% endfor %}
</ul>