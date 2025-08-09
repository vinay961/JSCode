
let userProfile = [];
function createUserProfile(name, email, age, street, city, postalCode, isAdmin) {
   //code here
   const user = {
        'name':name,
        'email':email,
        'age':age,
        'street':street,
        'city':city,
        'postalCode':postalCode,
        'isAdmin':isAdmin
   }
   userProfile.push(user);
}

function displayProfile(){
    userProfile.map((item)=>{
        console.log("-----------------------------------------------");
        console.log("Name:"+item.name + " || Age:"+item.age + " || Email:"+item.email);
        console.log("Address:" + item.street + "," + item.city + "," +item.postalCode);
    })
}

function updateEmail(Name, NewEmail){
    userProfile.forEach((item) => {
        if(item.name == Name){
            item.email = NewEmail;
        }
    })
}

// Create a user profile
createUserProfile("Alice", "alice@example.com", 28, "123 Elm Street", "Wonderland", "12345", false);
createUserProfile("Bob","bob@example.com",21,"321 Gali me","Gurgaon","122001",true)

// Display the user's profile
displayProfile();

// Update the user's email
updateEmail("Alice","newalice@example.com");

// Display the updated profile
console.log()
console.log("UPDATED USER'S INFORMATION")
displayProfile();







  