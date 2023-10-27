---
title: Beef Curry Soup With Vermicelli Noodles
description: Beef Curry Soup With Vermicelli Noodles at LJ Shanghai
summary: LJ Shanghai

date: 2018-03-28T00:06:47-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6160892.jpg
imgAlt: Beef Curry Soup With Vermicelli Noodles

restaurantName: LJ Shanghai
caption: Delicious. Great for a cold wet day.

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
