const fs = require("fs/promises");
const { v4 } = require("uuid");
const listContacts = require("./listContacts");
const pathFile = require("./pathFile");

async function addContact({ name, email, phone }) {
  const list = await listContacts();
  const newContact = { name, email, phone, id: v4() };
  list.push(newContact);
  await fs.writeFile(pathFile, JSON.stringify(list));
  return newContact;
}

module.exports = addContact;
