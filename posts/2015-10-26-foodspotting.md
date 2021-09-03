---
title: Dr Pepper Braised Pork Shank
description: Dr Pepper Braised Pork Shank
summary: The Oak Barrel, Valley View

date: 2015-10-26T17:49:36.00-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5624788.jpg
imgAlt: Dr Pepper Braised Pork Shank

restaurantName: The Oak Barrel
caption: OMG! So tasty. Served with roasted garlic whipped potatoes and soy chile jam.

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
