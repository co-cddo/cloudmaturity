const { createHash } = require("crypto");

function hash(string) {
  return createHash("sha256").update(string).digest("hex");
}
if (typeof module === "object" && module.exports) module.exports = hash;
