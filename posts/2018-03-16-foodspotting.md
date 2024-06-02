---
title: Shrimp Rice Crepes
description: Shrimp Rice Crepe at Emperor's Palace
summary: Emperor's Palace

date: 2018-03-16T20:38:47-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6159212.jpg
imgAlt: Shrimp Rice Crepes drizzled with soy sauce

restaurantName: <a href="https://www.emperorspalacecleveland.com" title="">Emperor's Palace</a>
caption: Tasty.

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