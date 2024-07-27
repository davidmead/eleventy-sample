---
title: Birria Taco lunch
description: Birria tacos with a side of consome from Tacos del Pueblo, North Ridgeville
summary: Tacos del Pueblo

date: 2024-06-12T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- lunch
- mexican
- wednesday-nom-club

imgSRC: /img/2024-06-12-birria-tacos-and-consome.jpeg
imgAlt: Birria tacos with a side of consome

restaurantName: Tacos del Pueblo
caption: OMG. So rich and meaty! These tacos were stuffed. Delicious. And the consome had a big piece of beef in there too. Very rich.

urlRestaurant: https://www.instagram.com/tacosdelpueblo.official/
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
		<p>Ate this at {% if urlRestaurant %}<a href="{{urlRestaurant}}" title="Instagram">{% endif %}{{ restaurantName }}{% if urlRestaurant %}</a>{% endif %} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>