// two premitive types of object property keys:
// string type, or
// symbol type.


let id1 = Symbol("id1");
console.log(id1); // TypeError: Cannot convert a Symbol value to a string

let id2 = Symbol("id2");
console.log(id2.toString()); // Symbol(id2), now it works

let id3 = Symbol("id3");
console.log(id3.description); // id3



/*  Symbols in an object literal

    If we want to use a symbol in an object literal {...}, we need square brackets around it.

    Like this:  
*/

let id = Symbol("id");

let user = {
  name: "Raju",
  [id]: 123 // not "id": 123
};


// That’s because we need the value from the variable 
//    id as the key, not the string “id”.


