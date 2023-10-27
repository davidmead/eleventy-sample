---
title: Dirty Tots Pulled Pork
description: Dirty Tots Pulled Pork at Moe's Grill & Bar, Dulles Airport
summary: Moe's Grill & Bar, Dulles Airport

date: 2016-12-13T02:41:58-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5981697.jpg
imgAlt: Dirty Tots Pulled Pork

restaurantName: Moe's Grill & Bar
caption: Potato, cheese sauce, and BBQ pork. Not bad for an airport.

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