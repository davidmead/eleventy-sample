---
title: Miso Noodle Broth Bowl
description: Miso Noodle Broth Bowl at Dig Inn, New York
summary: Dig Inn, New York

date: 2017-03-09T18:22:10-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6026606.jpg
imgAlt: Miso Noodle Broth Bowl

restaurantName: Dig Inn
caption: Really tasty. Yam noodles with winter veg. Added chicken.

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