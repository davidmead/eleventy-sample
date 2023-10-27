---
title: Bangkok Bazaar
description: Bangkok Bazaar at Townhall
summary: Townhall

date: 2017-04-10T18:28:27-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6043630.jpg
imgAlt: Bangkok Bazaar

restaurantName: Townhall
caption: OMG this was tasty. Roasted chicken, rock shrimp, rice noodles, egg and Asian fish sauce. Spicy and full of flavor.

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