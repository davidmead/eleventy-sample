---
title: Shoyu Ramen
description: Ramen at Issho Ni Ramen
summary: Issho Ni Ramen

date: 2021-05-22T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- japanese
- dinner
- ramen

imgSRC: /img/2021-05-22-shoyu-ramen.jpeg
imgALT: Close of a bowl of ramen with pork

restaurantName: Issho Ni Ramen
caption: Delicious bowl of ramen. Egg was creamy and the broth rich.

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
		<p>Ate this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>