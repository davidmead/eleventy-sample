---
title: Wild Tuna Poke
description: Wild Tuna Poke at Townhall
summary: Townhall

date: 2017-07-21T17:38:31-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6094788.jpg
imgAlt: Wild Tuna Poke bowl

restaurantName: Townhall
caption: Delicious! Rice, Yum Yum Sauce, Wild Yellowfin Tuna, Wild Salmon, Seaweed Salad, Avocado, Kimchi, Sesame Seeds, Organic Beets, Pickled Ginger, Scallion

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