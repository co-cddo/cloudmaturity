const govukEleventyPlugin = require("@x-govuk/govuk-eleventy-plugin");
const markdownItinput = require("./plugins/inputs");
const fs = require("fs");

function gitRev() {
  const rev = fs.readFileSync(".git/HEAD").toString().trim();
  if (rev.indexOf(":") === -1) return rev;
  else
    return fs
      .readFileSync(".git/" + rev.substring(5))
      .toString()
      .trim();
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: `Cloud Maturity Model <strong class="govuk-tag govuk-phase-banner__content__tag">Alpha</strong>`,
    },
    footer: {
      meta: {
        text: `Page built from <a href="https://github.com/co-cddo/cloudmaturity/commit/${gitRev()}">${gitRev().slice(
          0,
          8
        )}</a> at ${new Date().toISOString()} <script src="/assets/cmm.js"></script>`,
      },
    },
  });

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItinput, {}));
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/govuk-frontend/dist/govuk/assets/images": "./assets/images",
    "./node_modules/govuk-frontend/dist/govuk/assets/fonts": "./assets/fonts",
  });

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
