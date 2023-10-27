---
title: Chorizo Seared Brussel Sprouts
description: Chorizo Seared Brussel Sprouts at Townhall
summary: Townhall

date: 2017-05-11T22:26:59-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6059437.jpg
imgAlt: Chorizo Seared Brussel Sprouts

restaurantName: Townhall
caption: Really good. No grease from the chorizo, but plenty of flavour.

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