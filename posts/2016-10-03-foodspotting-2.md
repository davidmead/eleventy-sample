---
title: Wasabi Turkey Club Sandwich
description: Koko Bakery
summary: Koko Bakery

date: 2016-10-03T16:06:49-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5940776.jpg
imgALT: Wasabi Turkey Club Sandwich

restaurantName: Koko Bakery
caption: Sweet taste roll (honey?) with turkey, lettuce, tomatoes, cucumber, mayonnaise, and a thin spread of wasabi. Very tasty, and you get two in a serving.

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