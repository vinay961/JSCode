import { createInterface } from 'readline';
// Function to create a Contact object constructor
function createContact(name, phone, email, address) {
    return {
        name: name,
        phone: phone,
        email: email,
        address: address
    };
}

// Function to create a Contact List object
function createContactList() {
    const contactList = [];
    return {
        // Method to add a new contact to the list
        addContact(name, phone, email, address){
            const details = createContact(name, phone, email, address);
            const existing = contactList.find(item => item.name == details.name);
            if(existing){ 
                const rl = createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                rl.question(`User with name ${details.name} already exists. Do you want to add (Y/N): `, (answer) => {
                    if (answer.toLowerCase() === 'y') {
                        contactList.push(details);
                        console.log("Contact added.");
                    } else {
                        console.log("Contact not added.");
                    }
                    rl.close();
                });
            }
            else{
                contactList.push(details);
            }
        },

        // Method to display contact details
        displayContactDetails(name){
            const existing = contactList.find(item => item.name == name);
            if(existing){
                contactList.map(item => {
                    if(item.name == name){
                        console.log(`Username: ${item.name} || Ph_Num: ${item.phone} || Email: ${item.email} || Address: ${item.address}`);
                    }
                })
            }
            else{
                console.log(`User with name ${name} does not exist!!`);
            }
        },
        
        // Method to update a contact's phone number or email
        updateContactInfo(user,phone,email){
            if(email) user.email = email
            if(phone) user.phone = phone;
        },
        
        // Return methods to interact with the contact list
        getContactList() {
            return contactList;
        }
    }
}

// Create a contact list instance
const myContactList = createContactList();
console.log(myContactList)

// Add initial contacts to the contact list
myContactList.addContact("John Doe", "555-1234", "john@example.com", "123 Elm Street, Springfield");
myContactList.addContact("Jane Smith", "555-5678", "jane@example.com", "456 Oak Avenue, Metropolis");

// Display the first contact's details
myContactList.displayContactDetails("Jane Smith");

// Update the second contact's phone number and email
const constListArr = myContactList.getContactList();
myContactList.updateContactInfo(constListArr[1], "555-8765", "jane.smith@example.com");

// Display the updated second contact's details
console.log("\nUpdated Contact Details:");
myContactList.displayContactDetails("Jane Smith");








  