---
title: Cherry Cake Donut
description: Biagio's Donut Shop & Pizzeria
summary: Biagio's Donut Shop & Pizzeria

date: 2016-01-02T17:03:34-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5699075.jpg
imgALT: Cherry Cake Donut and coffee on a counter

restaurantName: Biagio's Donut Shop & Pizzeria
caption: They make the best donuts. This is my favorite.

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
		<p>Ate this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>