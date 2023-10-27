---
title: Corned Beef Hash
description: Corned Beef Hash at Petie's Family Restaurant
summary: Petie's Family Restaurant

date: 2017-07-30T14:49:04-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6099558.jpg
imgAlt: Corned Beef Hash

restaurantName: Petie's Family Restaurant
caption: Grits and poached eggs make this corned beef hash a killer breakfast.

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