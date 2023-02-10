const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const updateContacts = async (contacts) => {
    try {
        await fs.writeFile(contactsPath, JSON.stringify(contacts));
    } catch (error) {
        console.error(error.message);
    }
};

const listContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        console.error(error.message);
    }
};

const getContactById = async (id) => {
    try {
        const contacts = await listContacts();
        const contact = contacts.find((item) => item.id === id);

        if (!contact) {
            return null;
        }

        return contact;
    } catch (error) {
        console.error(error.message);
    }
};

const removeContact = async (id) => {
    try {
        const contacts = await listContacts();
        const index = contacts.findIndex((item) => item.id === id);

        if (index === -1) {
            return null;
        }

        const [removeContact] = contacts.splice(index, 1);
        await updateContacts(contacts);
        return removeContact;
    } catch (error) {
        console.error(error.message);
    }
};

const addContact = async (name, email, phone) => {
    try {
        const contacts = await listContacts();
        const newContact = { id: uuidv4(), name, email, phone };
        contacts.push(newContact);

        await updateContacts(contacts);
        return newContact;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
