---
title: Bacon, Blue Cheese, And Fennel Empanada
description: Bacon, Blue Cheese, And Fennel Empanada from Six Shooter Coffee
summary: Six Shooter Coffee

date: 2017-10-12T12:34:14-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6130011.jpg
imgAlt: Bacon, Blue Cheese, And Fennel Empanada

restaurantName: Six Shooter Coffee
caption: Delicious

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