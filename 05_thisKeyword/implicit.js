const user = {
    name : "Vinay Rai",
    greet : function (){
        console.log("\nImplicit Binding:");
        console.log(`Hello, my name is ${this.name}.`);
    },
    nested:{
        name : "Anna",
        greet : function (){
            console.log(`Hello, my name is ${this.name}.`);
        }
    }
}

// user.greet() // this refer to the user object that why only first method get executed.

// user.nested.greet() // Now this refer to the nested object which is present inside the object that's why inner method get called.

const greetFunc = user.greet;
greetFunc() // here, this time we get name as undefined because the method get called into the global context that's why this refer to global context.