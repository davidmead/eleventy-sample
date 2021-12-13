---
title: Website updates
description: December's round of tweaks and additions
summary: December's round of tweaks and additions

date: 2021-12-05T00:00:01.00-05:00

tags:
- post
- code
- website
- html
- css
- eleventy

layout: layouts/layout-post
---
Today I spent some time doing a little tidying up and adding a few features I've been waiting on.

## Home page
I re-wrote the heading. Got rid of my name and focused on what this site is.  Removed the last two posts under each topic, just leaving the topics themselves. I think I'll add some had-drawn illustrations for each of those. I added something else too.


### Blogroll
That's right. Added back a blogroll—Just a small portion of other blogs I'm reading.  At the moment it's only on the home page. If it grows it may need its own page.

At the moment I'm using a simple <code>&lt;ul&gt;</code> and adding a <code>class="h-card"</code> to each link. I'm also adding back in the [XFN](http://www.gmpg.org/xfn/ "XHTML Friends Network") markup, such as <code>rel="friend met"</code> to each entry that warrants it.

I even went and found the original Fugue icons from [Yusuke Kamiyamane](https://p.yusukekamiyamane.com "title attribute") to give it that old familiar feel. These are added by CSS when the attributes match.

## Styles
I updated the recipes to now included a background graphic, as well as adding a background color and drop shadow.

I also removed the kerning from the headings.

## sitemap.xml
I used Mark Thomas Miller's post on [adding an Eleventy sitemap](https://mtm.dev/eleventy-sitemap "") as a guide. It was easy to follow and implement. Only took a few minutes to get it running and added to the Google Search Console.

Now I zero trackers & analytics on this site, but I do want to check on the health of it occasionally.  This <em>should</em> help as the console now includes [Core Web Vitals](https://moz.com/learn/seo/performance-metrics "article on MOZ.com").

## Double backslashes in URL
After playing around in the search console I noticed that my canonical URLs were showing to have double backslashes in them. Weird, right.

So, for this page, it would read <code>&lt;link rel=&quot;canonical&quot; href=&quot;https://davidjohnmead.com//posts/2021-12-05-website-updates/&quot;&gt;</code>

Turns out I had the URL value in the metadata.json ending with a backslash.  When I removed that it fixed all the canonical links.  That's been in place since I built the site and I've never noticed it.

It will take some time to have that drop (if it was picked up) by the search engines, but I'm not that bothered.

