// two premitive types of object property keys:
// string type, or
// symbol type.


let id1 = Symbol("id1");
console.log(id1); // TypeError: Cannot convert a Symbol value to a string

let id2 = Symbol("id2");
console.log(id2.toString()); // Symbol(id2), now it works

let id3 = Symbol("id3");
console.log(id3.description); // id3

