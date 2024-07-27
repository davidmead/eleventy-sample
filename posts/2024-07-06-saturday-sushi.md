---
title: Euclid roll and Salmon Skin roll
description: Two delicious sushi rolls, Euclid roll and Salmon Skin roll, from Issho Ni Ramen
summary: Issho Ni Ramen

date: 2024-07-06T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- japanese
- sushi
- dinner

imgSRC: /img/2024-07-06-sushi-rolls.jpeg
imgAlt: close up of Euclid roll and Salmon Skin roll

restaurantName: Issho Ni Ramen
caption: Delicious special rolls from our local sushi & ramen place. Just what the doctor ordered after mowing the lawn.

urlRestaurant: https://www.isshoniramen.com
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
		<p>Picked this up from {% if urlRestaurant %}<a href="{{urlRestaurant}}" title="">{% endif %}{{ restaurantName }}{% if urlRestaurant %}</a>{% endif %} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>