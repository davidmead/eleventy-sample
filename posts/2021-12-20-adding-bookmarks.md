---
title: Adding bookmarks
description: Moving more of my stuff onto this site
summary: Moving more of my stuff onto this site

date: 2021-12-20T00:00:01.00-05:00
updated: 2021-12-21T00:00:01.00-05:00

tags:
  - post
  - personal
  - web
  - bookmarks
  

layout: layouts/layout-post
---
Ever since I had access to the web I've been bookmarking pages I found interesting.

At first it was in a text file where I could copy & paste the URLs.  Then I started using the built-in option my browser. When we started getting multiple browsers, using online "social" bookmarking services, like [del.icio.us](https://del.icio.us/ "") or [Ma.gnolia](https://en.wikipedia.org/wiki/Gnolia "Wikipedia article"), was essential.

Now both of those services are closed. I have the exported files from both, along with multiple saved copies of my browsers "favorites", sitting in Dropbox gathering "bitrot".

## What now?
I've decided to start adding them here. I wanted them in a separate section to my posts, so I floundered around for an hour or so until I figured it out.

Created a `bookmarks.njk` file at the root of my Eleventy site. That created a bookmarks folder with a `index.html` file in it when built. I then created a bookmarks folder at the root, and added the individual `bookmark0000.md` files to that.

You can find them slowly amassing on <a href="/bookmarks/" title="">my bookmarks page</a>.

The markup of each uses the [bookmark microformat](https://indieweb.org/bookmark "Indieweb Wiki entry for bookmarks"), coz why not?

## Hand-coded curation
As I'm a simple bear I'm hand-coding each one. So, yes it's going to take me a month-of-Sundays to get them all done. But this does afford me the chance of curating them. 

Case in point.

One of my first Ma.gnolia entries is from 2006. It's a podcast of ambient music from Jim Butler. That URL is `http://web.mac.com/jimbutlermusic/iWeb/Site/Podcast/Podcast.html` and can no longer be found. But he's still making music, and putting out a podcast, at [https://jimbutlermusic.com/](https://jimbutlermusic.com/ "Jim Butler music").

## Still to do
- <s>Add microformats to entries listed on my bookmarks page</s>
- Look at creating an RSS feed for the bookmarks
- <s>Add recent bookmarks on homepage</s>