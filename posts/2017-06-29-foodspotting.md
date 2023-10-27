---
title: The Black and Bleu Burger
description: The Black and Bleu Burger at Urban Kitchen & Deli
summary: Urban Kitchen & Deli

date: 2017-06-29T17:53:50-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6084006.jpg
imgAlt: The Black and Bleu Burger

restaurantName: Urban Kitchen & Deli
caption: Big patty. Tasty. Fries are really good. We ordered an egg separate for a topper.

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