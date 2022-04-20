import fs from "fs/promises";
import listContacts from "./listContacts.js";
import pathFile from "./pathFile.js";

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

export default removeContact;
