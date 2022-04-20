import fs from "fs/promises";
import pathFile from "./pathFile.js";

async function listContacts() {
  try {
    const data = await fs.readFile(pathFile);
    const list = JSON.parse(data);
    return list;
  } catch (error) {
    console.log(`Error: ${error.messge}`);
  }
}

export default listContacts;
