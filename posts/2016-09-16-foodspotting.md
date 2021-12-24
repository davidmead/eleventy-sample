---
title: Pad Thai Country Style
description: Map of Thailand
summary: Map of Thailand

date: 2016-09-16T17:18:49-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5929288.jpg
imgALT: Pad Thai Country Style

restaurantName: Map of Thailand
caption: Delicious. Filling, but not that spicy to me.

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
		<p>Ate this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>