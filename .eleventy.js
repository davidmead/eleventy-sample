const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	
	// next previous entry
eleventyConfig.addCollection("posts", function(collection) {
  const coll = collection.getFilteredByTag("post");

  for(let i = 0; i < coll.length ; i++) {
    const prevPost = coll[i-1];
    const nextPost = coll[i + 1];

    coll[i].data["prevPost"] = prevPost;
    coll[i].data["nextPost"] = nextPost;
  }

  return coll;
});

	//RSS feed
	eleventyConfig.addPlugin(pluginRss);
	
	eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
	  });

	eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
	});

	eleventyConfig.addShortcode('excerpt', article => extractExcerpt(article));

  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Copy `css/` to `_site/css`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy `video/` to `_site/video`
  eleventyConfig.addPassthroughCopy("video");

};


const moment = require('moment');

moment.locale('en');

