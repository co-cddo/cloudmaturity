"use strict";

// Filters passed in html content by tag
function extractContentByTag(htmlString, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>(.*?)</${tagName}>`, "gi");
  let matches = [];
  let match;

  while ((match = regex.exec(htmlString)) !== null) {
    matches.push(match[1]);
  }

  return matches;
}

if (typeof module === "object" && module.exports)
  module.exports = extractContentByTag;
