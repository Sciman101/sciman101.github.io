---
layout: default
---
<div class='blognavigation'>
	{% if page.previous.url %}
		<a class='prev' href='{{ page.previous.url }}'>&laquo; {{page.previous.title}}</a>
	{% endif %}
	{% if page.next.url %}
		<a class='next' href='{{ page.next.url }}'>{{page.next.title}} &raquo;</a>
	{% endif %}
</div>

<h1>{{ page.title }}</h1>
<h4>{{ page.date | date_to_string: "ordinal", "US" }}</h4>

<hr>

{{ content }}