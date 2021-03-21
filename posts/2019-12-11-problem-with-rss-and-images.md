---
title: Problem with Eleventy, RSS, and images
description: Some images show in my RSS feed, and some don't.
summary: Some images show in my RSS feed, and some don't. I think it's to do with how and when the content is "built"

date: 2019-12-11T00:00:01.00-05:00

tags:
  - post
  - eleventy
  - problem
  - code

layout: layouts/layout-post
---
I've noticed that in the RSS feed of this site, images within posts only show up some of the time.

Looking at the generated source code, they are all within the main block of the content being displayed in the item.

A quick duck-duck-go-ing and I came across a couple of general RSS issues along the same lines. Some was where the `<img>` was being ignored as it wasn't in a containing element. Easy fix I thought. I made sure all the images were in a `<p>`, as the ones showing up in the feed were part of the written post (in the middle of content) as opposed to a specific "photo post" which was just the `<img>` element on its own.

Didn't make any difference.

## Here comes CDATA
Then I noticed a [conversation on the indieweb chat](https://chat.indieweb.org/dev/2019-12-11/1576080408129100 "") about images and RSS. Wrapping things between `<![CDATA[` and `]]>` was a recommendation. I checked at [Granary.io](https://granary.io/ "The social web translator"). After plugging a URL of one of my posts in that, the output did have those CDATA tags around it. So I added those into my `feed.njk` file. No luck. In fact it made the HTML be written out.

I then re-read through the [Eleventy post about adding RSS](https://www.11ty.dev/docs/plugins/rss/ "") a couple of times. Everything in my code matched, but something nagged at me about the `htmlToAbsoluteUrls` part. What if the URL for the image wasn't there when the page is being built?

## Photo post template
I created a specific template for photo posts. I use this in the front matter...

```
layout: layouts/layout-photo
imgSRC: /img/
imgALT:
```
...to pull in the photo so I can style it. So if it's not in the actual content until the flat HTML is "built" the feed file won't pull it in.

I guess this is an issue with all static site generators.