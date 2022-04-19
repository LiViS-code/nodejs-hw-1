const fs = require("fs/promises");
const pathFile = require("./pathFile");

async function listContacts() {
  try {
    const data = await fs.readFile(pathFile);
    const list = JSON.parse(data);
    return list;
  } catch (error) {
    console.log(`Error: ${error.messge}`);
  }
}

module.exports = listContacts;
