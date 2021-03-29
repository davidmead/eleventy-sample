---
title: Code updates
description: Updates to the blog
summary: Been tweaking and fixing this blog

date: 2021-03-28T00:00:01.00-05:00

tags:
  - post
  - code
  - eleventy

layout: layouts/layout-post
---
Circumstances dictated I did some work on the infrastructure  of this blog. So I spent most of today searching GitHub, Stack Overflow and the [Eleventy website](https://www.11ty.dev "") for answers.

## Pagination problem fixed
I blogged about the [issue I was having with showing the three most recents posts on the homepage](/posts/2019-12-25-pagination-problems/ "pagination problems"). I finally figured out how to solve it.

I removed the pagination from the front matter completely, replacing it with a [collection call](https://www.11ty.dev/docs/collections/ "official documentation") in the page. I also added a Nunjucks "special variable" inside a loop (thanks to [huphtur's comment](https://github.com/11ty/eleventy/issues/1368#issuecomment-683320630 "GitHub comment") on the "Limit the output of a Collection" issue on GitHub) to this.

```
<div class="wrapper-tiles">
  {\%- for post in collections.post | reverse -%\}
    {\%- if loop.index0 < 3 -%\}
      <div class="tile">
        <div class="tile-head txt-center">
          <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
        </div>
        <div class="tile-body">
         <p><a href="{{ post.url | url }}" title="">{{ post.data.summary }}</a></p>
        </div>
     <div>
    {\%- endif -%\}
  {\%- endfor-%\}
</div>
``` 
This now shows the last 'n' posts on the front page without creating lots of extra folders in the  `_site` folder.

Building on this I also added a new section on the homepage where the latest two posts from some chosen tags are shown.

## Styling
You may have noticed some fancy styling on the code block above.  I added some cue's from Chris Coyier's post [Styling Code In and Out of Blocks](https://css-tricks.com/styling-code-in-and-out-of-blocks/ "") over at CSS Tricks.

I also added some CSS for the new topics section on the homepage.

```
.tile-head * {
	color: #ffffff !important;
	margin: 0.25em;
	padding: 0.25em;
}
```
This makes sure whatever I put in to the head section of my tile is coloured white and has some spacing around it.

I also added a little something for the lists now in the body of the tiles.
```
.list-breathe {
	margin: 0;
}
	
.list-breathe li {
	padding: 0.9167em 0;

}
```
This gives me some spacing around each `li` without playing around with the `line-height`.

## Eleventy updated
When [Bridget](https://www.bridgestew.com "") fist helped me put this together Eleventy was on version 9. It's now on version 12 so I took the plunge and updated - But that's a whole blog post of its own.

