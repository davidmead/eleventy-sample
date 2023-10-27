---
title: Boneless Chicken
description: Boneless Chicken from Popeyes Louisiana Kitchen
summary: Popeyes Louisiana Kitchen

date: 2016-11-28T22:19:32-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5974307.jpg
imgAlt: Boneless Chicken, fries, and a biscuit

restaurantName: Popeyes Louisiana Kitchen
caption: For $5 it's not bad. Chicken was moist and tasty.

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