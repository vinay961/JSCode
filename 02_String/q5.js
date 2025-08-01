
function cleanPhoneNumber(phoneNumber) {
    return phoneNumber.trim();
}

const phoneNumber = "  +1 234 567 890  ";  // User input with leading and trailing spaces
const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);

console.log(cleanedPhoneNumber);  // Output: "+1 234 567 890"





  