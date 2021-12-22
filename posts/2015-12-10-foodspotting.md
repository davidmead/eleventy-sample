---
title: Bento
description: Mizu Sushi
summary: Mizu Sushi

date: 2015-12-10T04:00:22-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5672649.jpg
imgALT: Deep fried pork, dumplings, and sushi

restaurantName: Mizu Sushi
caption: Deep fried pork, dumplings, and sushi. Tasted really nice.

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