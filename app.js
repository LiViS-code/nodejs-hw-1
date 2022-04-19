const contactsOperations = require("./index");

// const argv = require("yargs").argv;

const { Command } = require("commander");
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
  const idx = parseInt(id);
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(idx);
      if (!contact) {
        throw new Error(`contact with id = ${idx} not found`);
      }
      console.table(contact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact({
        name,
        email,
        phone,
      });
      console.log("Contact added:");
      console.table(newContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.removeContact(idx);
      if (!removeContact) {
        throw new Error(`contact with id = ${idx} not found`);
      }
      console.log("Contact has been deleted:");
      console.table(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

(async () => {
  try {
    await invokeAction(argv);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
})();
