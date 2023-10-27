---
title: Macchiato
description: Macchiato at Six Shooter Coffee
summary: Six Shooter Coffee

date: 2016-10-12T12:12:12-05:00

tags:
- post
- nom
- eat
- food
- drink
- foodspotting
- photo

imgSRC: /img/foodspotting/5946331.jpg
imgAlt: Macchiato

restaurantName: Six Shooter Coffee
caption: Delicious.

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
		<p>Drank this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>