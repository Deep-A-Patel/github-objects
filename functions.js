console.log("functions.js");

let firstName = "Deep";
let lastName = "patel";

console.log(`${firstName} ${lastName}`);

function displayName(lastName, firstName){
    return(`${firstName} ${lastName} is awesome`);
}

let myNewName = displayName("cat", "fish");
console.log("myNewName", myNewName);
let myNewNamest = displayName("bacon", "crispy");
console.log(myNewNamest);