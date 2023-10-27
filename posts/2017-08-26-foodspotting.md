---
title: Black And Blue Dawg
description: Black And Blue Dawg at Scooters Dawg House
summary: Scooters Dawg House

date: 2017-08-26T18:26:27-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6112333.jpg
imgAlt: Black And Blue Dawg

restaurantName: Scooters Dawg House
caption: Great. This was the "long". Blue cheese and Sweet Baby Ray's BBQ sauce.

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