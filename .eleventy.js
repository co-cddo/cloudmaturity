const govukEleventyPlugin = require("@x-govuk/govuk-eleventy-plugin");
const markdownItinput = require("./plugins/inputs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: `Cloud Maturity Model <strong class="govuk-tag govuk-phase-banner__content__tag">Alpha</strong>`,
    },
  });

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItinput, {}));
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "./src",
      layouts: "../node_modules/@x-govuk/govuk-eleventy-plugin/layouts",
    },
  };
};
