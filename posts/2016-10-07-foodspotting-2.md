---
title: Saigon Bowl
description: Saigon Bowl at Cafe 55
summary: Cafe 55

date: 2016-10-07T16:03:11-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5942970.jpg
imgAlt: Saigon Bowl

restaurantName: Cafe 55
caption: Saigon Bacon, spicy slaw, toasted coriander, cilantro. Added brown rice and tofu. The slaw is excellent, but tofu and rice tasted a little underwhelming.

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