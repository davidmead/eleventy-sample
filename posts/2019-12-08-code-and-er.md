---
title: Code cleanup and the emergency room
description: Add some CSS Grid, removed a lot of cruft, and took a trip to the hospital
summary: Tidied up some Eleventy templates, CSS, and took a trip to the ER

date: 2019-12-08

tags:
  - post
  - code
  - html
  - css
  - family
  - hospital

layout: layouts/layout-post
---
I had an idea of the look and layout I wanted for this blog, but I didn't do a mock in Sketch or anything. I wanted to "find" it while I was marking up the templates. It came together pretty quick. I changed the fonts a couple of times but that was about it.

But after I launched it I saw there was quite a bit I could clean up. Yeah it validated and was semantic, but there was a few things I could do better with CSS Grid..

Looking back through my notes from [Rachel Andrews](https://rachelandrew.co.uk/ "official site")'s workshop at [Rustbelt Refresh](https://rustbeltrefresh.com/ "Web conference in Cleveland"), as well as a couple of videos from [Jen Simmons](https://youtu.be/FEnRpy9Xfes "Layout Land video on YouTube") and [Miriam Suzanne](https://youtu.be/KOvGeFUHAC0 "Mozilla Dev video on YouTube"), I quickly dumped a lot of classes and employed grid in 3 of the Eleventy templates.

## Base template
My main HTML template now uses grid for its structure. The `<header>`, `<main>`, and `<footer>` are set as rows. With the footer always being at the bottom of the page with just four lines of CSS.

```
display:grid;
grid-gap: 1em;
grid-template-rows: auto 1fr auto;
min-height: 100vh;
```

## Content templates
I have a couple of different templates at the moment, for different types of content. One for mini album reviews, one for photos, etc.

With these few lines of CSS I can get 2 columns laid out for the 'listen' type, within the grid that wraps the whole page.

```
display: grid;
grid-template-columns: 240px 1fr;
grid-gap: 1.5em;
grid-auto-rows: minmax(auto, auto);
```
## Emergency room

![Josh in a triage room](/img/2019-12-08-jjm-er.jpg "Josh in a triage room")

Halfway through writing this Josh came home with Julie. He had been complaining about a pain in his back in the morning. It hadn't got better with an Advil. Seeing as the local Urgent Care isn't open on Sunday, it was a trip to the ER as he was in pain walking around.

Pain pills, muscle relaxant injection, and an icy-hot patch later, he feels a little better and has a note to excuse hime from gym this week.

Hopefully that's all the excitement for the week out the way.
