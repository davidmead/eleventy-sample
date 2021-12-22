---
title: Validators, checkers, and a favicon
description: More code tinkering on my site
summary: More code tinkering on my site

date: 2021-12-19T00:00:01.00-05:00

tags:
- post
- code
- website
- html
- css
- accessibility
- eleventy

layout: layouts/layout-post
---
I decided to run the my site through some the old tools I used way-back-when.  It's easy to get blasé and miss the simplest of things. Also created, and added, a favicon for the site.

## Validators

<a href="https://validator.w3.org" title="Check the markup (HTML, XHTML, …) of Web documents">HTML</a>, <a href="https://jigsaw.w3.org/css-validator/" title="Check Cascading Style Sheets (CSS) and (X)HTML documents with style sheets">CSS</a>, and <a href="https://validator.w3.org/feed/" title="Check the syntax of Atom or RSS feeds">RSS</a> all have free validators you can access via the <a href="https://www.w3.org" title="">W3C website</a>.

Running pages through these help catch those annoying little bugs and mistakes.  With this site running on <a href="https://www.11ty.dev" title="staic site generator">Eleventy</a> meant I could make fixes in certain template files, update all the pages at once (which was nice).

The CSS validated, apart from 47 warnings which are due to the dynamic nature of CSS variables, according to the tool.

### Fixed

- Moved the XFN profile link out of the `<head>` to it's own `<link rel="profile" href="http://gmpg.org/xfn/11">`
- Found I had pixels stated in some `width` &amp; `height` attributes for images, and removed them

After fixing those I got a clean bill of markup.

### To do
- 4 recommendations on the feed to look into

## Checkers
I always try my best to conform to WCAG as much as I can.  Using the really helpful <a href="https://brucelawson.github.io/tota11y/" title="Visual Accessibility Checking Solution">Tota11y</a> bookmarklet, recently updated by <a href="https://brucelawson.co.uk" title="" rel="met colleague">Bruce Lawson</a>, let's me catch a few things I missed. It also helped me find an issue with my page templates too.

### Fixed
- Couple of pages had incorrectly nested headings
- Alt attributes were missing on some images. This was due to my template variable being `imgAlt` in the front matter, and `imgALT` in the body
- Couple of links still had "title attribute" as the title attribute

### To do
- Contrast issue with the post date on the homepage

## Favicon
After seeing Andrey Sitnik's <a href="https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs" title="">'How to Favicon in 2021: Six files that fit most needs'</a> post, I decided to add my own.

I created an SVG version of my profile photo, using Sketch, and followed his suggestion of using GIMP to export it as a `.ico` file. Then I added the following to the `<head>` of my base layout file.

```
<link rel="icon" href="/favicon.ico" sizes="any"><!-- 32×32 -->
<link rel="icon" href="/icon.svg" type="image/svg+xml">
```

I didn't add the Apple touch icons, nor the web manifest. I really don't think anyone is dragging this to their device home screens.

