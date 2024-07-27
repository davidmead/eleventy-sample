---
title: Indian for lunch, Vegetarian Thali
description: Punjabi Thali from Honest Cle
summary: Honest Restaurant

date: 2024-03-13T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- vegetarian
- indian
- lunch
- wednesday-nom-club

imgSRC: /img/2024-03-13-punjabi-thali.jpeg
imgAlt: metal tray with curry, rice, dhal

restaurantName: Honest Restaurant Cleveland
caption: Great meal. Rice, curry, dhal, and a couple of Roti & Naan (not shown). Bonus Gulab Jamun for dessert.

urlRestaurant: https://honestcle.com
urlFoodspotting:
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
		<p>Ate this at {% if urlRestaurant %}<a href="{{urlRestaurant}}" title="">{% endif %}{{ restaurantName }}{% if urlRestaurant %}</a>{% endif %} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>