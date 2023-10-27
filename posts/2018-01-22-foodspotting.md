---
title: Chicken Bowl
description: Chicken Bowl from Chipotle Mexican Grill
summary: Chipotle Mexican Grill

date: 2018-01-22T17:41:08-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6150871.jpg
imgAlt: Chicken Bowl

restaurantName: Chipotle Mexican Grill
caption: Tasty, but an extra $2 for guacamole is a bit much.

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