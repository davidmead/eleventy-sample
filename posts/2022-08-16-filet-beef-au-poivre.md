---
title: Filet of Beef au Poivre with Green Peppercorn, Sherry, Cognac & Demi Glacé
description: Dinner at Johnny's Bar on Fulton
summary: Johnnys Bar

date: 2022-08-16T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- dinner
- photo

imgSRC: /img/2022-08-16-nom-steak-poivre.jpeg
imgAlt: Filet of Beef au Poivre with Green Peppercorn, Sherry, Cognac & Demi Glacé

restaurantName: Johnny's Bar
caption: Dinner out with co-workers. Tasted delicious. Filet was melt-in-the-mouth.

urlFoodspotting:
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