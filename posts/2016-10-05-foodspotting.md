---
title: Everything Bagel With Black Pepper & Horseradish Schmear
description: Six Shooter Coffee
summary: Six Shooter Coffee

date: 2016-10-05T11:59:21-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5941652.jpg
imgALT: Everything Bagel With Black Pepper & Horseradish Schmear

restaurantName: Six Shooter Coffee
caption: Great. CLE Bagel Co are the best.

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