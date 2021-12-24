---
title: Beer Braised Brisket Sandwich
description: Beer Braised Brisket Sandwich
summary: Winking Lizard Tavern, Independence

date: 2015-10-16T18:16:03.00-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5612484.jpg
imgALT: Beer Braised Brisket Sandwich

restaurantName: Winking Lizard Tavern
caption: Really tasty. Guinness sauce and Havarti cheese with mushrooms.

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