---
title: Problems with Eleventy pagination
description: Pagination control in the frontmatter is creating extra folders.
summary: Showing the last 3 posts is causing extra folders to be created and I don't know why.

date: 2019-12-25T00:00:01.00-05:00

tags:
  - post
  - code
  - eleventy
  - problem



layout: layouts/layout-post
---
Everytime I ran a build I started to notice extra folders being written in the `_site` folder. These were named 1, 2, 3, etc. Inside was a copy of the `index.html` file - Weird.

I am up to 6. I normally just delete them but they'd always came back. I did some searching of the usual places for answers but nothing turned up.

Logging back into Twitter I [posted a cry for help](https://twitter.com/davidmead/status/1209137921393152006 "tweet") and, lo & behold, [an answer](https://twitter.com/zachleat/status/1209138266148085761 "Zach Leatherman's reply") from "the creator" himself.

> Sounds like a pagination template to me!

## Pagination

A lot of me getting this Eleventy blog off the ground was cribbing from other peoples posts and tutorials. I wasn't aware of using any particular pagination templates for generating pages *but* I did have something in the frontmatter of the home page that showed the last 3 posts.

```
pagination:
  data: collections.post
  size: 3
  reverse: true
  alias: posts
```

Stopping the server, removing this, deleting the extra folders from `_site`,  and restarting solved the problem. No more extra folders.

Also meant not showing the last three posts on the home page either.

I then tried using a different way to show these with this code.

```
<div class="wrapper-tiles">
{\%- for post in collections.post | reverse -%\}
  <div class="tile">
			<div class="tile-head txt-center">
			<time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
		</div>
		<div class="tile-body">
		<p><a href="{{ post.url | url }}" title="">{{ post.data.title }}</a></p>
		<p class="snippet hide-sml">{{ post.data.summary }}</p>
		</div>
	</div>
{\%- endfor -%\}
</div>

```

But that lists every post, and I haven't figured out a way to limit it to only the last 3.

So, I've added back the pagination to the frontmatter and added this to my clean-up list for 2020.
 