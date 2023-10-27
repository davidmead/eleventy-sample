---
title: Spicy Chicken Primetime Nachos
description: Spicy Chicken Primetime Nachos at Qdoba Mexican Grill
summary: Qdoba Mexican Grill

date: 2017-07-15T21:55:26-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6092156.jpg
imgAlt: Spicy Chicken Primetime Nachos

restaurantName: Qdoba Mexican Grill
caption:

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