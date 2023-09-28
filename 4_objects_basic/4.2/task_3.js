// comparison by reference
// we enter two different class a and b
// let a = {};   in let is variable and a is class = is operator and {} is objects

// two objects are equal only if they are the same object.
// For instance, here a and b reference the same object, thus they are equal:

// example 1
var a = {};
var b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

// example 2
// here two independent objects are not equal, even though they look alike (both are empty):


let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

