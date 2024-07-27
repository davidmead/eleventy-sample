---
title: Tonkotsu Ramen lunch
description: Bowl of hot, creamy, Tonkotsu ramen from Corner 11 in Strongsville
summary: Corner 11 Poke & Ramen

date: 2024-04-10T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- lunch
- ramen
- japanese
- wednesday-nom-club

imgSRC: /img/2024-04-10-tonkotsu-ramen.jpeg
imgAlt: Creamy ramen with egg, scallions, chashu pork

restaurantName: Corner 11 Poke & Ramen
caption: Pretty good bowl of ramen. Creamy, with all the trimmings.

urlRestaurant: https://www.corner11-oh.com
urlFoodspotting:
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
		<p>Ate this at {% if urlRestaurant %}<a href="{{urlRestaurant}}" title="">{% endif %}{{ restaurantName }}{% if urlRestaurant %}</a>{% endif %} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>