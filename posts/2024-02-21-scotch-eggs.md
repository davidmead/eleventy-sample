---
title: Scotch eggs
description: Scotch egss and a sausage roll for lunch, from Reilly's Irish Bakery
summary: Reilly's Irish Bakery

date: 2024-02-21T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- photo
- british
- lunch
- wednesday-nom-club

imgSRC: /img/2024-02-21-scotch-eggs.jpeg
imgAlt: close up of a scotch egg cut in half

restaurantName: Reilly's Irish Bakery
caption: A really tasty scotch egg. Also had a Sausage roll which was ok (whole sausage, instead of just the meat). Great to have a taste of home every now and then. Might try the breakfast pies next time.

urlRestaurant: https://www.reillysirishbakery.com
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