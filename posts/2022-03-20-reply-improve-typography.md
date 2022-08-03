---
title: Reply—How can I improve the typography on my site?
description: 
summary: 

replyURL: https://jamesg.blog/2022/03/17/my-website-typography/
replyTO: James

date: 2022-03-20T00:00:01.00-05:00

tags:
  - post
  - reply
  - webmention
  - code
  - typography

layout: layouts/layout-reply
---
## The basics
As a starting point I would check out the presentation Richard Rutter & Mark Bolton did at SXSW 2007, <a href="http://webtypography.net/talks/sxsw2007/" title="">Web Typography Sucks</a>. I was lucky enough to be in the, very packed, room when they gave the talk. The <strong>big</strong> idea I took from it was Vertical Rhythm.


## Vertical Rhythm
A lot of articles were written about that. One I found useful was <a href="https://www.sitepoint.com/typography-baseline-rhythm-deciphered/" title="article at SitePoint">Baseline Rhythm Deciphered</a> by Matthew Magain. A handy resource to help calculate Vertical Rhythm is <a href="https://vertical-rhythm.crasman.fi" title="">https://vertical-rhythm.crasman.fi</a>.

A newer take on this can be found at <a href="https://zellwk.com/blog/why-vertical-rhythms/" title="">https://zellwk.com/blog/why-vertical-rhythms/</a> where Zell does a great job introducing the concept of varying repetitions so to group related content together.

## Fonts
For my blog I like a distinction between heading and body fonts.

I chose Calistoga this for headings.  Originally it was being called from Google Fonts. Now it's available to download from GitHub. Using a <a href="https://www.creativefabrica.com/webfont-generator/" title="web font generator">web font generator</a> to turn the <code>.TTF</code> to a web font package and self host.

The body font is <a href="https://brailleinstitute.org/freefont" title="">Atkinson Hyperlegible Font</a>, a free download from Braille Institute. This too is self-hosted.

Both of these have a web-safe fallback in the CSS.

## Color
I've made some color choices to things like code blocks, pull quotes, etc.  All trying to adhere to WCAG contrast levels. That's another way to enhance the typography.

## For your site
I don't think you'd have to change much on your site. Don't feel the need to get a custom font if the web-safe one you have works for you.

I would suggest looking at getting rid of the border that surrounds your main copy. I find it disconnects from the main title. Also use sub-headings to break up the content, where applicable.

Hope you find this of use.