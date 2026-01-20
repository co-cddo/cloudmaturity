import { govukEleventyPlugin } from "@x-govuk/govuk-eleventy-plugin";
import tagFilter from "./plugins/tagFilter.js";
import hashFilter from "./plugins/hashFilter.js";
import getContentsAfterTags from "./plugins/getContentsAfterTags.js";
import fs from "fs";
import util from "util";

function gitRev() {
  const rev = fs.readFileSync(".git/HEAD").toString().trim();
  if (rev.indexOf(":") === -1) return rev;
  else
    return fs
      .readFileSync(".git/" + rev.substring(5))
      .toString()
      .trim();
}
function gitSHA() {
  return gitRev().slice(0, 8);
}

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: `Cloud Maturity Model <strong class="govuk-tag govuk-phase-banner__content__tag">Alpha</strong>`,
    },
    footer: {
      meta: {
        text: `Page built from <a href="https://github.com/co-cddo/cloudmaturity/commit/${gitRev()}">${gitSHA()}</a> at ${new Date().toISOString()}`,
      },
    },
    templates: {
      error404: false,
    },
  });

  eleventyConfig.addFilter("tagfilter", tagFilter);
  eleventyConfig.addFilter("hash", hashFilter);
  eleventyConfig.addFilter("getContentsAfterTags", getContentsAfterTags);

  eleventyConfig.addFilter("console", function (value) {
    const str = util.inspect(value);
    return `<code style="white-space: pre-wrap;">${unescape(str)}</code>;`;
  });

  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/govuk-frontend/dist/govuk/assets/images": "./assets/images",
    "./node_modules/govuk-frontend/dist/govuk/assets/fonts": "./assets/fonts",
    "./node_modules/chaarts/dist/chaarts.min.css": "./assets/chaarts.min.css",
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "./src",
    },
  };
}
