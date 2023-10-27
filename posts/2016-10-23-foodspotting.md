---
title: Petie's Chopped Steak
description: Petie's Chopped Steak at Petie's Family Restaurant
summary: Petie's Family Restaurant

date: 2016-10-23T22:04:42-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5953978.jpg
imgAlt: Petie's Chopped Steak and fries

restaurantName: Petie's Family Restaurant
caption: Topped with bacon, mushrooms, and cheese. Couldn't finish the whole thing. Tasty.

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