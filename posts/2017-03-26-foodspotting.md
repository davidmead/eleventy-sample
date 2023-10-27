---
title: Chicken Dhansak
description: Chicken Dhansak at Salam Bombay, Vancouver
summary: Salam Bombay, Vancouver

date: 2017-03-26T03:37:14-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6035439.jpg
imgAlt: Chicken Dhansak

restaurantName: Salam Bombay
caption: Delicious. Had it with basmati rice and a Paratha. Little pricey, but worth it.

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