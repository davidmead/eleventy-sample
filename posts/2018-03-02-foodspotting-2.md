---
title: Raspberry And Lemon Doughnut
description: Raspberry And Lemon Doughnut from Bigmouth Donut Company
summary: Bigmouth Donut Company

date: 2018-03-02T03:48:59-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6157189.jpg
imgAlt: Raspberry And Lemon Doughnut

restaurantName: Bigmouth Donut Company
caption: The most refreshing doughnut I've ever had.

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