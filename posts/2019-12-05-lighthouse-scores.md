---
title: Green across the board
description: Running Google's Lighthouse audit tool against new website
summary: It's a good feeling getting (almost) 100% passing score

date: 2019-12-05T00:00:01.00-05:00

tags:
  - post
  - eleventy
  - web
  - code
  - performance
  - accessibility


layout: layouts/layout-post
---
This was one of the things I had my fingers crossed for when deciding to use a Static Site Generator for my site. As I'm writing my own HTML and CSS from scratch I try and weave in all the best practices I've learned over the years.

Navigating to the homepage in the Chrome browser (incognito mode to make sure no extensions are effecting the results) I opened the Developer tools and clicked audit.

![Lighthouse audit results all green for new homepage](/img/lighthouse-results-homepage.png "Audit results all green")

Homepage returned the following results:
- 98% Performance
- 100% Accessibility
- 100% Best Practices
- 100% SEO (Search Engine Optimization)

Not too shabby for a first run.

My 'post' pages faired pretty well too. Only difference was a 97% score for performance.

![Lighthouse audit results all green for post pages](/img/lighthouse-results-post.png "Audit results all green")

And yes, I know that you can get [Lighthouse to give a 100% for accessibility on a completely inaccessible site](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/ "Manuel Matuzovic's post pointing out the dangers of automated testing"), but 100% is a great starting point to make changes from.

The ding on performance, on both mobile and desktop tests, is from using Google Fonts. You'll get that regardless, and I personally think just using two is fairly restrained.

Just to be sure I had ran the templates through an HTML validator, and the only thing that it reported was `rel="microsub"` in the `<head>`. I'm sure as [microsub is a W3C spec](https://www.w3.org/TR/micropub/#endpoint-discovery "End point discovery in the spec") this will be corrected soon.

I will be keeping an eye on all of this, but not slavishly.