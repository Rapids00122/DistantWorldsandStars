// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("user", function (firstName, lastName) {
    return `<div class="user-info">${firstName} ${lastName} wrote this page.</div>`;
  });
};