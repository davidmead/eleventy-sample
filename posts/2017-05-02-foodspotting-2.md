---
title: Mushroom & Spinach Scramble
description: Mushroom & Spinach Scramble from Perkins Restaurant & Bakery
summary: Perkins Restaurant & Bakery

date: 2017-05-02T11:39:07-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6054573.jpg
imgAlt: Mushroom & Spinach Scramble

restaurantName: Perkins Restaurant & Bakery
caption: Tasty with turkey sausage.

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