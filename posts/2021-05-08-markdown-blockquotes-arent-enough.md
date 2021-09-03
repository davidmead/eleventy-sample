---
title: Changing to <figure>
description: When Markdown blockquotes aren't enough 
summary: When Markdown blockquotes aren't enough

date: 2021-05-08T00:00:01.00-05:00

tags:
  - post
  - code
  - HTML
  - semantics
  
  

layout: layouts/layout-post
---
One of the nice things I've settled into with Eleventy powering this blog is I can mix [markdown](https://daringfireball.net/projects/markdown/ "Jon Gruber's 2004 post") with HTML in the same area when creating a post/page. I know that it'll all get processed and rendered as HTML in the browser.

Take blockquotes for instance. Markdown just requires I start the line with a <kbd>></kbd> and when rendered it'll wrap that in the HTML <code>&lt;blockquote&gt;</code> element.

<pre>
<code>
> This is a blockquote

&lt;blockquote&gt;This is a blockquote&lt;/blockquote&gt;
</code>
</pre>

This is nice and quick. But I like to include attribution to quotes I put in. Who said it, where it was said, and a link to it if it was online. There's no way to include that in Markdown.

It either becomes part of quote and I have to do some CSS hoop-jumping to get it out of the quotation marks, or it sits outside of the element and looks detached, leading to more CSS.

After much searching I liked the [MDN example](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote "Mozilla Developer page") of wrapping it the <code>&lt;figure&gt;</code> element.

It passes the smell test for the intent of a figure (<q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure">represents self-contained content, potentially with an optional caption</q>) and gives me some legitimate hooks to use CSS without extra <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements.

I created the following clip in [Coda](https://www.panic.com/coda/ "discontinued Mac coding software") so I can just drag-and-drop it in.

<pre>
<code>
&lt;figure class="blockquote"&gt;
    &lt;blockquote cite=&ldquo;link to original&rdquo;&gt;
        &lt;p&gt;Quoted text&lt;/p&gt;
    &lt;/blockquote&gt;
    &lt;figcaption&gt;— Person, &lt;cite&gt;Where it&rsquo;s from&lt;/cite&gt;&lt;/figcaption&gt;
&lt;/figure&gt;
</code>
</pre>

And here it is styled

<figure class="blockquote">
    <blockquote cite=“/posts/2021-05-08-markdown-blockquotes-arent-enough/”>
        <p>This is nice and quick. But I like to include attribution to quotes I put in. Who said it, where it was said, and a link to it if it was online.</p>
    </blockquote>
    <figcaption>— David Mead, <cite>This blog</cite></figcaption>
</figure>

And yes, I know, I use a class name to describe the thing it is.

So now I'm off to go through and replace all my markdown blockquotes with this HTML version. Another downside of using Markdown is I can't find & replace. Search for <kbd>></kbd> and see how many matches you get in your site.