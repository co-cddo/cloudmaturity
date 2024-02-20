function getContentsAfterTags(htmlString, tagName) {
  if (!htmlString.trim()) return [];
  return htmlString
    .split(`<${tagName}`)
    .map((v, i) => (i === 0 ? v : `<${tagName}${v}`))
    .filter((v) => v.trim());
}
if (typeof module === "object" && module.exports)
  module.exports = getContentsAfterTags;
