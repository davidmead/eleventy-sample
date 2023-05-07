---
title: Unable to find a post about a CSS reset
description: Unable to find a post about a CSS reset
summary: The one time I didn't bookmark something

date: 2023-01-09T00:00:01.00-05:00

tags:
  - post
  - code
  - css
  - web

layout: layouts/layout-post
---
I have searched my browsers (both home & work) bookmarks and history—Nothing.

Evernote. My blog. My email. My code repo. Still nothing.

I read a post concerning a new CSS reset/baseline. I liked it's approach and cribbed some of it for this blog.

It contained adding the default system fonts to the <code>body</code> tag.

<pre>
<code>
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
/* Only supported on Chromium-based browsers and Safari */
font-family: system-ui;"
</code>
</pre>

Also had adding <code>word-wrap</code>, etc., to the <code>p</code> element...

<pre>
	<code>
word-wrap: break-word;
overflow-wrap: break-word;
hyphens: auto;
max-width: 80ch;
	</code>
</pre>

...as well as adding <code>color-scheme</code> to the root

<pre>
	<code>
:root {
		color-scheme: light dark;
	}
	</code>
</pre>

By the end of Saturday I had so many tabs open, but none of them were it.

It is <strong>not</strong> <a href="https://zellwk.com/blog/css-reset/" title="">Zell Liew's CSS reset</a>, <a href="https://piccalil.li/blog/a-modern-css-reset/" title="">Andy Bell's modern CSS reset</a>, or <a href="https://www.joshwcomeau.com/css/custom-css-reset/" title="">Josh Comeau's custom CSS reset</a>.

<a href="https://www.ellyloel.com/projects/modern-css-reset/" title="">Elly Loel's modern CSS reset</a> came close, but no cigar.

All the above have elements of it, and due to the collaborative nature of the web, build on each other, so I don't know if I'm mis-remembering and making a composite in my brain or what.

I do know the post was about creating something "mobile-first", light, and user-centric.

Until I find it (if ever) these are all good resources that I have now bookmarked, and posted here.
