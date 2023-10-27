---
title: Polish Girl Combo
description: Polish Girl Combo from Hot Sauce Williams Barbecue
summary: Hot Sauce Williams Barbecue

date: 2017-08-02T16:29:41-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6101019.jpg
imgAlt: Polish Girl Combo

restaurantName: Hot Sauce Williams Barbecue
caption: Hotdog with ribmeat, sauce, coleslaw, and fries. Delicious!

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