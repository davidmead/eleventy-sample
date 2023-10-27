---
title: Corned Beef Hash With Eggs And Grits
description: Corned Beef Hash With Eggs And Grits at Fifth Wheel
summary: Fifth Wheel

date: 2016-12-02T17:18:44-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5976038.jpg
imgAlt: Corned Beef Hash With Eggs And Grits

restaurantName: Fifth Wheel
caption: Big portion and great taste. All for under $7. Cash only.

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