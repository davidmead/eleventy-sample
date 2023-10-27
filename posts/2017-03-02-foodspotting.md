---
title: Lamb Gyro
description: Lamb Gyro from Rumi's Market
summary: Rumi's Market

date: 2017-03-02T18:24:49-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6023076.jpg
imgAlt: Lamb Gyro

restaurantName: Rumi's Market
caption: Delicious.

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
		<p>Ate this from {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>