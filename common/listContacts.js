const fs = require("fs/promises");
const pathFile = require("./pathFile");

async function listContacts() {
  const data = await fs.readFile(pathFile);
  const list = JSON.parse(data);
  return list;
}

module.exports = listContacts;
