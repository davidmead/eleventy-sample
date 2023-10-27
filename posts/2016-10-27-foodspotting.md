---
title: No.8 Phở Tái Nạm Gầu
description: No.8 Phở Tái Nạm Gầu at Superior Pho
summary: Superior Pho

date: 2016-10-27T16:51:50-05:00

tags:
- post
- nom
- eat
- food
- foodspotting
- photo

imgSRC: /img/foodspotting/5955858.jpg
imgAlt: No.8 Phở Tái Nạm Gầu

restaurantName: Superior Pho
caption: My new fave. Eye-round steak, fat brisket, and flank.

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