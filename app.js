import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./index.js";
import { Command } from "commander";

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

console.log("argv:", argv);

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table(contacts);
        break;

      case "get":
        const contact = await getContactById(id);
        if (!contact) {
          throw new Error(`contact with id = ${id} not found`);
        }
        console.table(contact);
        break;

      case "add":
        const newContact = await addContact({
          name,
          email,
          phone,
        });
        console.log("Contact added:");
        console.table(newContact);
        break;

      case "remove":
        const contactToDelete = await removeContact(id);
        if (!contactToDelete) {
          throw new Error(`contact with id = ${id} not found`);
        }
        console.log("Contact has been deleted:");
        console.table(contactToDelete);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(`Error: ${error.messge}`);
  }
}

(async () => {
  try {
    await invokeAction(argv);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
})();
