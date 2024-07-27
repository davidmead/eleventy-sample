---
title: Breakfast Buffet
description: Breakfast Buffet at Warwick Allerton, Chicago
summary: Warwick Allerton, Chicago

date: 2016-11-16T13:15:37-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5967544.jpg
imgAlt: Breakfast Buffet

restaurantName: Warwick Allerton
caption: Pretty decent. Bacon was good and the salsa had a nice kick.

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