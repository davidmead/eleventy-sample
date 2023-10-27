---
title: Italian Trio Tasta And Corn Salad
description: Italian Trio Tasta And Corn Salad at Piada Italian Street Food
summary: Piada Italian Street Food

date: 2017-05-01T16:14:56-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6054181.jpg
imgAlt: Italian Trio Tasta And Corn Salad

restaurantName: Piada Italian Street Food
caption: Very tasty

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