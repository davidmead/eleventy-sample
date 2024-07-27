---
title: First time Filipino lunch
description: Pork Sisig from Parilya, new Filipino restaurant in Olmsted Falls
summary: Parilya

date: 2024-01-10T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- filipino
- lunch
- wednesday-nom-club

imgSRC: /img/2024-01-10-pork-sisig.jpeg
imgAlt: pork, peppers, rice, and egg

restaurantName: Parilya
caption: The Pork Sisig was huge, and really tasty. Chargrilled pork (including ear) with onions and peppers. Served over rice, topped with an egg. Will be coming back to try more.

urlRestaurant: https://www.facebook.com/ParilyaCLE/
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
		<p>Ate this at {% if urlRestaurant %}<a href="{{urlRestaurant}}" title="Facebook page">{% endif %}{{ restaurantName }}{% if urlRestaurant %}</a>{% endif %} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>