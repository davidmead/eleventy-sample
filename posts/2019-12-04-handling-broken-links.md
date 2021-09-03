---
title: Handling broken links
description: Creating a 404 page for this static site
summary: Trying to help with what I broke

date: 2019-12-04T00:00:01.00-05:00

tags:
  - post
  - code
  - eleventy


layout: layouts/layout-post
---
Deleting all of my existing content, and there was a lot, means I've left a lot of broken links in my wake. With something like Wordpress or Known this is handled for you as a 404 error, the [server error code for missing files](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html "W3C information page"), will bring up a pre-built 404 page. Not so when rolling your own.

I found [an article](https://www.11ty.io/docs/quicktips/not-found/ "404 page for Eleventy") with steps to create one on the Eleventy site. Not too hard to implement, just means a little editing of my .htaccess file, and creating a new page to upload.

This should now be working.

I included an explanation of why the content someone was looking for may not be there, along with a link to the Wayback Machine which has snapshots of billions of web pages.

<figure class="blockquote">
    <blockquote>
        <p>On December 2nd 2019 I deleted all my content, and started fresh. If you're following a link from elsewhere you can try the Wayback Machine which may have a copy.</p>
        <p>You can also visit the home page to read anything new I've posted.</p>
    </blockquote>
    
</figure>


Hopefully that should be helpful.