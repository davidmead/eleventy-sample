---
title: Farmhouse Skillet
description: Farmhouse Skillet at Steak & Shake
summary: Steak & Shake

date: 2017-12-02T15:22:27-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/6141503.jpg
imgAlt: Biscuits, cheese, eggs, cheese, and sausage gravy

restaurantName: Steak & Shake
caption: S'okay. Nothing special. If I get it again it'd be without cheese. They add so much.

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