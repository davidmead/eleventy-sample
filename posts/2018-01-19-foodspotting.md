---
title: Spicy Beef Noodle Soup
description: Spicy Beef Noodle Soup from LJ Shanghai
summary: LJ Shanghai

date: 2018-01-19T18:11:04-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6150340.jpg
imgAlt: Spicy Beef Noodle Soup

restaurantName: LJ Shanghai
caption: OMG! This was so good. Large pieces of beef, so tender.

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