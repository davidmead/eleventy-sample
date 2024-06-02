---
title: Soup Dumplings
description: Soup dumplings from LJ Shanghai, Cleveland OH
summary: LJ Shanghai

date: 2024-03-29T00:00:01.00-05:00

tags:
- post
- nom
- eat
- food
- lunch
- shanghaiese
- photo

imgSRC: /img/2024-03-29-soup-dumplings.jpeg
imgAlt: Soup dumplings in a bamboo steamer

restaurantName: <a href="https://ljshanghaicle.com/" title="">LJ Shanghai</a>
caption: Hadn't had these delicious steamed soup dumplings (XIAOLONGBAO) in while. I also had the Fried Rice Cakes.

urlFoodspotting:
urlNosh:
urlInstagram:
urlFlickr:
urlTwitter:

layout: layouts/layout-nom
---
<figure class="nom">
	<img class="u-photo img-border" src="{{ imgSRC }}" alt="{{ imgALT }}" width="300" height="300">
	<figcaption>
		<h1 class="title p-name">{{ title }}</h1>
		<p class="summary">{{ summary }}</p>
		<p>Ate this at {{ restaurantName }} on <time class="dt-published" datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>{% if caption %}, and noted <q class="caption">{{ caption }}</q>{% endif %}
	</figcaption>
</figure>