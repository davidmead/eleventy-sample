---
title: Breakfast Platter with Sausage
description: Breakfast Platter with Sausage at Open Kitchen, Ney York
summary: Open Kitchen, New York

date: 2017-03-10T12:34:06-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6026892.jpg
imgAlt: Breakfast Platter with Sausage

restaurantName: Open Kitchen
caption: Lot for $5. Potatoes a little dry, but the peppers and onions make up for that.

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