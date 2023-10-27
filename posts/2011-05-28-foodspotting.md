---
title: Backyard Mint and Dark Chocolate
description: Backyard Mint and Dark Chocolate from Jeni's ice creams
summary: Jeni's ice creams

date: 2011-05-28T18:30:57-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/595294.jpg
imgAlt: Backyard Mint and Dark Chocolate

restaurantName: Jeni's ice creams
caption: Tastes were great, but the texture of the ice-cream was nothing to write home about.

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
		<p>Ate this from {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>