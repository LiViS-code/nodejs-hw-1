const fs = require("fs/promises");
const listContacts = require("./listContacts");
const pathFile = require("./pathFile");

async function removeContact(contactId) {
  try {
    const list = await listContacts();
    const removeIndex = list.findIndex((item) => item.id === contactId);
    if (removeIndex === -1) {
      return null;
    }
    const [removeContact] = list.splice(removeIndex, 1);
    await fs.writeFile(pathFile, JSON.stringify(list));
    return removeContact;
  } catch (error) {
    console.log(`Error: ${error.messge}`);
  }
}

module.exports = removeContact;
