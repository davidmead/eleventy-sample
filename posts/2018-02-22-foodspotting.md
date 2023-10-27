---
title: Egg And Bacon Breakfast Sandwich
description: Egg And Bacon Breakfast Sandwich from Bigmouth Donut Company
summary: Bigmouth Donut Company

date: 2018-02-22T13:48:09-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6156053.jpg
imgAlt: Egg And Bacon Breakfast Sandwich

restaurantName: Bigmouth Donut Company
caption: This is delicious. Got it without cheese. All on an unglazed yeast donut.

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