const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

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

};


const moment = require('moment');

moment.locale('en');

