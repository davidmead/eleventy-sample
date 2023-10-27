---
title: Brisket Burger
description: Brisket Burger at Market Garden Brewery
summary: Market Garden Brewery

date: 2017-08-25T18:26:12-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6111843.jpg
imgAlt: Brisket Burger with a side of handcut fries

restaurantName: Market Garden Brewery
caption: Delicious. Smoked Brisket, BBQ aioli, and fried pickles onions made it.

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