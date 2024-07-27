---
title: Sushi lunch
description: Delicious sushi rolls at Ohashi Sushi, North Olmsted
summary: Ohashi Sushi

date: 2024-05-22T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- lunch
- japanese
- wednesday-nom-club

imgSRC: /img/2024-05-22-ohashi-sushi.jpeg
imgAlt: Green Dragon roll and Spicy Tuna roll

restaurantName: Ohashi Sushi
caption: Two great rolls (Green Dragon, Spicy Tuna) and a shared appetizer of Tempura vegetables.

urlRestaurant: https://www.facebook.com/OhashSushi/
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