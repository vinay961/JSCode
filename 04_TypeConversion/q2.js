
function validatePhoneNumber(phoneInput) {
    const trimmedString = phoneInput.trim();

    if(/^[\d_-]+$/.test(trimmedString)){
        console.log("Valid Phone number.")
    }
    else{
        console.log("Invalid phone number.")
    }
}

// Example usage:
let phoneInput = " 555-123-4567 ";
validatePhoneNumber(phoneInput);


  