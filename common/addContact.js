import fs from "fs/promises";
import { nanoid } from "nanoid";
import listContacts from "./listContacts.js";
import pathFile from "./pathFile.js";

async function addContact({ name, email, phone }) {
  try {
    const list = await listContacts();
    const newContact = { name, email, phone, id: nanoid() };
    list.push(newContact);
    await fs.writeFile(pathFile, JSON.stringify(list));
    return newContact;
  } catch (error) {
    console.log(`Error: ${error.messge}`);
  }
}

export default addContact;
