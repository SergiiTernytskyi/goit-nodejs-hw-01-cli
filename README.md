# goit-nodejs-hw-01-cli-application

The programm allowt to work with contacts in form of JSON file.

To get all contacts:
node index.js --action="list"
https://monosnap.com/file/GgiW5LFsqxuVR8suH4ZUK7xVuLd8Gn

Contacts returns in form of table:
https://monosnap.com/file/vSeWLpaIQzVuIkJl76BLbvYIy91Mo5

To get a specific contact by its ID:
node index.js --action="get" --id=5
https://monosnap.com/file/w7SV8SNiMPyx7FdOkSu8QDC9MtCUV6

Contact returns (as a table):
https://monosnap.com/file/YOCZTBE4sCdhyLsKssul99iLMI0mVD

To create (add) new contact:
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/eQrPJHJkMnKwx1OkBSY5mPyRB8xFAu

Contact is added to contacts.json file and the new contact returns (in form of table):
https://monosnap.com/file/ZbkIGBMc3GQLQll6eo4qASA3KgNzgg

To remove existed contact:
node index.js --action="remove" --id=3
https://monosnap.com/file/EHJrPG6KmUanV7xwlLQGMv2Py8CPqf

Contacts with specific ID is removed from contacts.json file and this contact returns (as a table):
https://monosnap.com/file/5xkIFELmFKVHzjO7YHXtgNnDITvW4k
