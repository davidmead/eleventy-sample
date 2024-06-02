---
title: Jerk Chicken and ground provision lunch
description: Jerk Chicken, ground provision, and cabbage from Gar & Mar Jamaican American Cuisine, Berea OH
summary: Gar & Mar Jamaican American Cuisine

date: 2024-03-20T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- lunch
- jamaican
- photo

imgSRC: /img/2024-03-20-jerk-chicken.jpeg
imgAlt: Jerk chicken, ground provisions

restaurantName: <a href="https://garandmar.com" title="">Gar & Mar Jamaican American Cuisine</a>
caption: Really tasty, and a lot for the lunch price. Had the sauce on the side.

urlFoodspotting:
urlNosh:
urlInstagram:
urlFlickr:
urlTwitter:

layout: layouts/layout-nom
---
<figure class="nom">
	<img class="u-photo img-border" src="{{ imgSRC }}" alt="{{ imgALT }}" width="300" height="300">
	<figcaption>
		<h1 class="title p-name">{{ title }}</h1>
		<p class="summary">{{ summary }}</p>
		<p>Ate this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>