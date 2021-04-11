---
title: Style updates 
description: Playing with colors and styling
summary: Updating localhost during internet outage

date: 2021-04-10T00:00:01.00-05:00

tags:
  - post
  - code
  - css
  - design

layout: layouts/layout-post
---
So while waiting for the internet to come back on I decided to update the styling on this site. Playing around on localhost I updated as I went.

## Colours
Though I only had a few colors on here I decided to knock it down even more, and move from HEX values to RGBA. This gave me the option of playing with the Alpha channel to make things lighter/darker.

At the top of my CSS file I dropped in my values.

```
/* =COLORS
    white = rgba(255, 255, 255, 1)
    drk blue = rgba(8, 47, 55, 1)
    drk grey = rgba(45, 45, 46, 1)
    med grey = rgba(95, 82, 93, 1)
    lt grey = rgba(252, 252, 250, 1)
    gold = rgba(253, 188, 46, 1)
    green = rgba(2, 249, 0, 1)
    polaroid = rgba(239, 239, 239, 1)
*/

```
Some of these are direct conversions from HEX. Others, like the dark blue and gold are new.

I use the excellent [PIKA](https://superhighfives.com/pika "open source MacOS app") color picker. This gives the ability to grab colors and see how the contrast ratio complies to WCAG. It also let me choose HEX, RGB, etc when copy & pasting the values.

Dark blue is used for the main headings, the background for code blocks and blockquotes, and some borders. Gold is used for the text and left-border of blockquotes, as well as background of the `<strong>` element (but a different opacity). Green is used for the text in code blocks as well as the background of inline code (but a different opacity). 

## Attributes for Listen and Read posts
At the top of my posts relating to things I've read and listened to I had the attributes of the album or book. I wasn't happy with the way these bumped into the content using the grid, so I changed it.

I exposed the URLs so you you can see where you'll be going if clicking on the official website/buy link. I also added the title and <abbr title="International Standard Book Number">ISBN</abbr> for books.  These are in the Eleventy front matter of each post and pulled through with a variable in the Eleventy layout file.

```
artistURL: http://k-punk.org
artistNAME: Mark Fisher
bookTITLE: Ghosts of My Life - Writings on Depression, Hauntology and Lost Futures
bookISBN: 978-1-78279-624-4
purchaseURL: https://www.johnhuntpublishing.com/zer0-books/our-books/ghosts-my-life
```
Now these have a double border (using the dark blue) to separate them from "my thoughts". 

<p><img class="img-border" alt="screen shot of listen attributes styling" src="/img/screenshot-listen-attributes.png"></p>

## Small screen
I did a few tweaks to layout for small screens; increased some font sizes, stacked tiles on the homepage, and adjusted various `margin` and `padding` on some elements.
