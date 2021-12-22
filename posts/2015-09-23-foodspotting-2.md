---
title: Bacon, Dates & Goat Cheese Empanada
description: Bacon, Dates & Goat Cheese Empanada
summary: Empanadas 5411, Chicago

date: 2015-09-23T17:30:44.00-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5585652.jpg
imgALT: Bacon, Dates & Goat Cheese Empanada

restaurantName: Empanadas 5411
caption: Awesome!

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
