---
title: Shrimp Poboy
description: Shrimp Poboy at Winking Lizard Tavern
summary: Winking Lizard Tavern

date: 2018-02-01T17:54:41-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6152505.jpg
imgAlt: Shrimp Poboy with handcut crisps

restaurantName: Winking Lizard Tavern
caption: Not bad. Coleslaw was tasty.

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