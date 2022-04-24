import contactsOperations from "./index.js";
import { Command } from "commander";
import {Reset, FgCyan, FgRed, FgYellow} from './common/colorsMsg.js';

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await contactsOperations.listContacts();
        console.log(FgCyan, 'Contacts list:', Reset);
        console.table(contacts);
        break;

      case "get":
        const contact = await contactsOperations.getContactById(id);
        if (!contact) {
          throw new Error(`contact with id = ${id} not found`);
        }
        console.log(FgCyan, `Contact with id = ${FgYellow}${id}`, Reset)
        console.table(contact);
        break;

      case "add":
        const newContact = await contactsOperations.addContact({
          name,
          email,
          phone,
        });
        console.log(FgCyan, `New Contact with id = ${FgYellow}${newContact.id}${FgCyan} added:`, Reset);
        console.table(newContact);
        break;

      case "remove":
        const removeContact = await contactsOperations.removeContact(id);
        if (!removeContact) {
          throw new Error(`contact with id = ${id} not found`);
        }
        console.log(FgCyan, `Contact with id = ${FgYellow}${id}${FgCyan} has been deleted:`, Reset);
        console.table(removeContact);
        break;

      default:
        console.warn(FgYellow, "Unknown action type!", Reset);
    }
  } catch (error) {
    console.log(FgRed, `Error: ${error.messge}`, Reset);
  }
}

(async () => {
  try {
    await invokeAction(argv);
  } catch (error) {
    console.log(FgRed, `Error: ${error.message}`, Reset);
  }
})();
