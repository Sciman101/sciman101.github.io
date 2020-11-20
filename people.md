---
layout: default
title: Cool people
---
# Other Cool People
Here's a bunch of artists, programmers, and generally cool folk I know in no particular order. I wouldn't be where I am today without their help and support, so give them a look!

{% for p in site.data.people %}
[{{ p.name }} ({{ p.role }})]({{ p.link }})
{% endfor %}
