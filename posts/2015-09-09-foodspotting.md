---
title: The Bazzard
description: The Bazzard
summary: Gentiles Bakery & Deli, Parma

date: 2015-09-09T00:51:28.00-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5567026.jpg
imgALT: Stuffed sandwich

restaurantName: Gentiles Bakery & Deli
caption: Awesome sandwich, served hot.

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
