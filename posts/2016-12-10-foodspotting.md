---
title: Chipotle Double Burger
description: Chipotle Double Burger at Steak & Shake
summary: Steak & Shake

date: 2016-12-10T19:28:07-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5980375.jpg
imgAlt: Chipotle Double Burger

restaurantName: Steak & Shake
caption: Can't beat it for $4. Little kick, not that spicy.

urlFoodspotting: y
urlNosh:
urlInstagram:
urlFlickr:
urlTwitter:

layout: layouts/layout-nom
---
<figure class="nom">
	<img class="u-photo img-border" src="{{ imgSRC }}" alt="{{ imgALT }}">
	<figcaption>
		<h1 class="title p-name">{{ title }}</h1>
		<p class="summary">{{ summary }}</p>
		<p>Ate this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>