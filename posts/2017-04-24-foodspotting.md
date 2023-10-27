---
title: Ohio City Pasta Of The Day
description: Ohio City Pasta Of The Day at Elements Bistro
summary: Elements Bistro

date: 2017-04-24T17:19:18-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6050729.jpg
imgAlt: Ohio City Pasta Of The Day

restaurantName: Elements Bistro
caption: Delicious. Mushrooms, chicken, and peppers in a masala sauce.

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