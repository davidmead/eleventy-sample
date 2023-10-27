---
title: Western BBQ 'n' Bacon Steakburger and fries
description: Western BBQ 'n' Bacon  Steakburger and fries at Steak 'n Shake
summary: Steak 'n Shake

date: 2017-05-02T00:18:41-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6054352.jpg
imgAlt: Western BBQ 'n' Bacon Steakburger and fries

restaurantName: Steak 'n Shake
caption:

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