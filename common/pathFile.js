const path = require("path");

async function pathFile() {
  const pathToFile = path.join(__dirname, "../db/contacts.json");
  return pathToFile;
}

module.exports = pathFile;
