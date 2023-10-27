---
title: Chorizo, Corn, And Queso Empanadas
description: Chorizo, Corn, And Queso Empanadas from Six Shooter Coffee
summary: Six Shooter Coffee

date: 2017-07-26T12:02:46-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6097258.jpg
imgAlt: Chorizo, Corn, And Queso Empanadas

restaurantName: Six Shooter Coffee
caption: Nice spicy kick. Like a small pastie

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