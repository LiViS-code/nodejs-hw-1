const listContacts = require("./listContacts");

async function getContactById(contactId) {
  const list = await listContacts();
  const result = list.find((item) => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
}

module.exports = getContactById;
