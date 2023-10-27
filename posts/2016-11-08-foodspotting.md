---
title: Americas, With Chicken And Brown Rice
description: Americas, With Chicken And Brown Rice at Cafe 55
summary: Cafe 55

date: 2016-11-08T20:28:03-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5963141.jpg
imgAlt: Americas, With Chicken And Brown Rice

restaurantName: Cafe 55
caption: The chimichurri and roast onions make this. Really good.

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