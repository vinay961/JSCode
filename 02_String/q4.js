
function checkGmailDomain(email, domain) {
    const position = email.indexOf(domain);

    if(email.toLowerCase().includes(domain.toLowerCase()) && position > 4){
        console.log("Email is valid.")
    }
    else{
        console.log("Email is not valid.")
    }
}

const email = "unknown@gmail.com"; 
const domain = "@gmail.com";

checkGmailDomain(email, domain);




  