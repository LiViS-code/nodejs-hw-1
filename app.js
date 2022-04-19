const contactsOperations = require("./index");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await contactsOperations.listContacts();
        console.table(contacts);
        break;

      case "get":
        const contact = await contactsOperations.getContactById(id);
        if (!contact) {
          throw new Error(`contact with id ${id} not found`);
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
        const removeContact = await contactsOperations.removeContact(id);
        if (!removeContact) {
          throw new Error(`contact with id ${id} not found`);
        }
        console.log("Contact has been deleted:");
        console.table(removeContact);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

(async () => {
  await invokeAction(argv);
})();
