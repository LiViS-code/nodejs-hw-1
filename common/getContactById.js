import listContacts from "./listContacts.js";

async function getContactById(contactId) {
  try {
    const list = await listContacts();
    const result = list.find((item) => item.id === contactId);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(`Error: ${error.messge}`);
  }
}

export default getContactById;
