---
title: Pastrami Reuben sandwich
description: Pastrami Reuben sandwich from Manhattan Deli Bar & Grille
summary: Manhattan Deli Bar & Grille

date: 2022-02-05T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- dinner

imgSRC: /img/2022-02-05-pastrami-reuben.jpeg
imgAlt: Pastrami Reuben sandwich

restaurantName: Manhattan Deli Bar & Grille
caption: Ages since I had one of these. Delicious. Thousand Island dressing really makes it.

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