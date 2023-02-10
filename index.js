const contactsOperations = require("./contacts");
const { Command } = require("commander");

const program = new Command();
program
    .option("-a, --action <type>", "Choose the action")
    .option("-i, --id <type>", "Enter contact ID")
    .option("-n, --name <type>", "Enter contact name")
    .option("-e, --email <type>", "Enter contact email")
    .option("-p, --phone <type>", "Enter contact phone");

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const contacts = await contactsOperations.listContacts();
            console.table(contacts);
            break;

        case "get":
            const contact = await contactsOperations.getContactById(id);
            if (!contact) {
                throw new Error(`Contact with ID ${id} not found`);
            }
            console.table(contact);
            break;

        case "remove":
            const removeContact = await contactsOperations.removeContact(id);
            if (!removeContact) {
                throw new Error(`Contact with ID ${id} not found`);
            }
            console.table(removeContact);
            break;

        case "add":
            const addContact = await contactsOperations.addContact(
                name,
                email,
                phone
            );
            console.table(addContact);
            break;

        default:
            console.log("\x1B[31m Unknown action type!");
    }
};

(async () => {
    await invokeAction(argv);
})();
