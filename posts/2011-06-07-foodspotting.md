---
title: Hummos Chicken Plate
description: Hummos Chicken Plate at Aladdin's Eatery
summary: Aladdin's Eatery

date: 2011-06-07T16:30:00-05:00


tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/617972.jpg
imgAlt: Hummos Chicken Plate

restaurantName: Aladdin's Eatery
caption: Awesome lunch - Hummos topped with Chicken Mishwi, diced tomato, and parsley. Pita on the side. Make sure to order the hot sauce too.

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