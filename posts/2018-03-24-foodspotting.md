---
title: The Malnati Chicago Classic
description: The Malnati Chicago Classic at Lou Malnati's Pizzeria
summary: Lou Malnati's Pizzeria, Chicago

date: 2018-03-24T04:42:29-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6160341.jpg
imgAlt: The Malnati Chicago Classic deep dish pizza

restaurantName: Lou Malnati's Pizzeria
caption: Very tasty.

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