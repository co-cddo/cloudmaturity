const govukEleventyPlugin = require("@x-govuk/govuk-eleventy-plugin");

module.exports = function (eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin);

  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "./src",
      layouts: "../node_modules/@x-govuk/govuk-eleventy-plugin/layouts",
    },
  };
};
