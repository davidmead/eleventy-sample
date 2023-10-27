---
title: Lunchtime Buffet
description: Lunchtime Indian Buffet at Bombay Chaat
summary: Bombay Chaat

date: 2016-11-17T18:29:12-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5968084.jpg
imgAlt: Lunchtime Buffet

restaurantName: Bombay Chaat
caption: Great selection of dishes. Aloo dish was really tasty. Naan bread runs out quickly.

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