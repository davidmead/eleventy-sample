---
title: Yakiniku Don
description: 
summary: Kiko's Kitchen

date: 2021-06-19T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- dinner
- photo

imgSRC: /img/2021-06-19-yakiniku-don.jpeg
imgALT: Close up of Yakiniku Don

restaurantName: Kiko's Kitchen
caption: Really tasty. Sliced Ribeye & onions on a rice bowl.

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