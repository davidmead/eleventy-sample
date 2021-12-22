---
title: Lamb Balti
description: Lamb Balti
summary: The Indian Kitchen

date: 2021-05-01T00:51:28.00-05:00

tags:
- post
- nom
- eat
- dinner
- food
- photo

imgSRC: /img/lamb-balti.jpg
imgALT: Indian lamb dish in thick sauce

restaurantName: The Indian Kitchen
caption: Delicious boneless marinated lamb in a thick spiced sauce. Really good.

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