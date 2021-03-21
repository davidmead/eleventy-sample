---
title: Website updates
description: Changes to this website
summary: I've been tinkering

date: 2020-12-19T00:00:01.00-05:00

tags:
  - post
  - website
  - html
  - css
  - design


layout: layouts/layout-post
---
Decided to do a little cleaning to this site.

## Fonts
I kept [Calistoga](https://fonts.google.com/specimen/Calistoga "Google fonts") as the heading and "title" font. I still like the rounded and heavy-ish look of it. The body font is now [Atkinson Hyperlegible Font](https://brailleinstitute.org/freefont "free download from Braille Institute"). A new font that...

> focuses on letterform distinction to increase character recognition, ultimately improving readability.

It has a clean look that I think pairs well with Calistoga. I host it on this site, so one less external call. And I think the '0' looks cool.

## Colours
I tweaked the gray I was using for the headings. Now <code>#5f525d</code> is a little darker and meets WCAG 2 - Level AAA for contrast. Main font colour is <code>#2e2e2e</code> which also meets that level.

Added a white background to the blockquotes, along with a coloured left-border.

Added a yellow background to the <strong>strong</strong> element.

## Layout
Not much here. Added more space between the meta section entries. This may change agains as I look at the vertical height used across the site.

## Code
Reverted back to adding a date in the front matter of each file. While this means posted date being a day off, due to the UTC and Eleventy, I'd rather that than every post created date being changed to the same date.

Raymond Camden [posted about this and more](https://www.raymondcamden.com/2020/02/06/adding-a-last-edited-field-to-eleventy "") on his blog which touches on this and other issues.