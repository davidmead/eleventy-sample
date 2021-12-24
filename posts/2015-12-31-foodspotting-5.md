---
title: Broccoli And Cheddar Soup
description: Panera Bread
summary: Panera Bread

date: 2015-12-31T17:46:55-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5696521.jpg
imgALT: Broccoli And Cheddar Soup

restaurantName: Panera Bread
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
		<p>Ate this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>