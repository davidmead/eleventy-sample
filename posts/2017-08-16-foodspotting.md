---
title: Chicken Tenders
description: Chicken Tenders from Popeyes Louisiana Kitchen
summary: Popeyes Louisiana Kitchen

date: 2017-08-16T16:53:23-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6107823.jpg
imgAlt: Chicken Tenders with red beans & rice, and a biscuit.

restaurantName: Popeyes Louisiana Kitchen
caption: With red beans & rice, and a biscuit. Not bad for $5.

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