---
title: Coastline, With Chicken And Brown Rice
description: Cafe 55
summary: Cafe 55

date: 2016-10-04T16:37:59-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5941278.jpg
imgALT: Coastline bowl, With Chicken And Brown Rice

restaurantName: Cafe 55
caption: Extremely tasty. Great ingredients.

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