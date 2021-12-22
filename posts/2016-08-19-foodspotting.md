---
title: Chicken Tacos
description: Barrio
summary: Barrio

date: 2016-08-19T18:01:07-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo
- rustbeltrefresh

imgSRC: /img/foodspotting/5909284.jpg
imgALT: Chicken Tacos

restaurantName: Barrio
caption: Love thier coleslaw. Great tasting ingredients all around. This was build your own for the Rustbelt Refresh conference.

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