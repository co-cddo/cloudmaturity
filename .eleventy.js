const govukEleventyPlugin = require("@x-govuk/govuk-eleventy-plugin");
const markdownItinput = require("./plugins/inputs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: "Cloud Maturity Model",
    },
  });

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItinput, {}));
  eleventyConfig.addPassthroughCopy("./src/assets");

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
