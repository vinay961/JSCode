
function validateAge(ageInput) {
    const age = parseInt(ageInput);
    console.log(age);
    if(isNaN(age)){
        console.log("Not a valid age.")
    }
    else{
        console.log("Age is valid.")
    }
}

// Example usage
let ageInput = "25a";  // User input as a string
validateAge(ageInput);


  