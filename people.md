---
layout: default
title: Cool people
---
# Other Cool People
I've met a lot of other programmers, artists, and creators that I feel are worth a shoutout. These are people who have either inspired or taught me something, done some really impressive work, or generally just seem cool. Give them a look!

{% for p in site.data.people %}
[{{ p.name }} ({{ p.role }})]({{ p.link }})
{% endfor %}
