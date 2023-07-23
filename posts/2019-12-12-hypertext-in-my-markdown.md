---
title: Hypertext in my Markdown
description: Once again I think I've solved images not showing in the RSS feed
summary: Once again I think I've solved images not showing in the RSS feed

date: 2019-12-12T00:00:01.00-05:00

tags:
  - post
  - code
  - eleventy
  - html
  - markdown

layout: layouts/layout-post
---
In my [previous post about this](https://davidjohnmead.com/posts/2019-12-11-problem-with-rss-and-images/ "Problem with Eleventy, RSS, and images") I thought I'd solved it, but no.

Well now I really think I have, but it meant a slight template change as well as adding some HTML into my Markdown files.

In my `layout-photo.njk` file I had the following block

```
<div class="e-content">
	<p><img class="u-photo img-polaroid" src="'{'{ imgSRC }'}'" alt="'{'{ imgALT }'}'" width="500" height="500"></p>
	'{'{ content | safe }'}'
</div>
```
This would then pull the `imgSRC` and `imgALT` that I had in the `post.md` frontmatter when built.  I _think_ this is what was causing the images not to show.

Commenting out the `<img>` element in the template and moving that into the post actually seemed to cause the images to show up in my feed.

I'm not sure if pasting the HTML wholesale into the Markdown file is "right", but it seems to work.