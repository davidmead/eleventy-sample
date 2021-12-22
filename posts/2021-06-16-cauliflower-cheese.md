---
title: Cauliflower Cheese
description: 
summary: An old home favourite

date: 2021-06-16T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- cook
- dinner
- photo

imgSRC: /img/2021-06-16-cauliflower-cheese.jpeg
imgALT: Closeup of cauliflower cheese straight out of the oven

restaurantName: Home
caption: 

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
		<p>Ate this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>