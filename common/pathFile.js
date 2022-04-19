const path = require("path");

async function pathFile() {
  return path.join(__dirname, "../db/contacts.json");
}

module.exports = pathFile;
