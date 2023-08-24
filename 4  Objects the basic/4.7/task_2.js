// Symbols are skipped by for...in

//  Symbolic properties do not participate in for..in loop.

// For instance:


let id = Symbol("id");
let user = {
    name: "Parth",
    age: 21,
    [id]: 123
};

for (let key in user) console.log(key);  // name, age (no symbols)

// the direct access by the symbol works
console.log( "Direct: " + user[id] );  // Direct: 123


