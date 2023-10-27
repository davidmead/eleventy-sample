---
title: Toffee Apple Donut
description: Toffee Apple Donut at Bloom Bakery
summary: Bloom Bakery

date: 2017-05-24T20:38:00-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6066166.jpg
imgAlt: Toffee Apple Donut

restaurantName: Bloom Bakery
caption: Donut of the week. Toffee apple ganache donut. Made with fresh eggs and butter, matured for 2 days and gently fried. Delicious.

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