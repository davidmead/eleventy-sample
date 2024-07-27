---
title: Mix Veg. Uttapam
description: Uttapam. Another delicious Indian lunch from Honest, Parma OH
summary: Honest Restaurant Cleveland

date: 2024-07-10T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- lunch
- indian
- wednesday-nom-club

imgSRC: /img/2024-07-10-uttapam.jpeg
imgAlt: Uttapam, chutneys, and sambar on a metal tray

restaurantName: Honest Restaurant Cleveland
caption: Tried something new. Uttapam. A rice lentil pancake with onion, tomato, green peas, and spices. Served with a spicy Sambar (vegtable stew) and coconut and tomato chutney's.  Really tasty and great size for lunch.

urlRestaurant: https://honestcle.com
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
		<p>Ate this at {% if urlRestaurant %}<a href="{{urlRestaurant}}" title="">{% endif %}{{ restaurantName }}{% if urlRestaurant %}</a>{% endif %} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>