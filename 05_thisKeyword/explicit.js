function showName(greeting, punctuation){
    console.log(`\nExplicit Binding:`);
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = {name : "Vinay"};
const anotherPerson = {name : "Nihal"}

showName.apply(person,["Hii","!"]); // here we have to pass the context first and then array of parameter.
showName.call(anotherPerson,"Hello","?");

const fixed = showName.bind(person,"Hello"); // it return a new function with fixed context of object.
fixed(".")