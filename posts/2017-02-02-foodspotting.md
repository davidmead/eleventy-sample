---
title: Cubano Sandwhich
description: Cubano Sandwhich at Market Garden Brewery
summary: Market Garden Brewery

date: 2017-02-02T17:58:53-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6008738.jpg
imgAlt: Cubano Sandwhich

restaurantName: Market Garden Brewery
caption: Really tasty.

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