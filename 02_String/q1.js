
/*
CASE1: If password is 'abcd'
*/

const password = 'abcd';

function isValidPassword(password){
	if(password.length >= 8){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidPassword(password)) // Returns false as the length of password is less than 8 characters




  