---
title: Egg and avocado on English Muffin
description: Egg and avocado on English Muffin
summary: Throwing lunch together

date: 2021-06-01T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- cook
- lunch

imgSRC: /img/2021-06-01-egg-avocado.jpeg
imgAlt: Fried eggs and avocado on English Muffin

restaurantName: Home
caption: Quick lunch. Sprinkled everything bagel topping all over. Delicious.

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