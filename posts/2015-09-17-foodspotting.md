---
title: Lunch Buffet
description: 
summary: Kumo Japanese Seafood Buffet, Parma

date: 2015-09-17T16:44:23.00-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5578035.jpg
imgALT: Tempura, Sweet & Sour chicken, rice

restaurantName: Kumo Japanese Seafood Buffet
caption: 

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