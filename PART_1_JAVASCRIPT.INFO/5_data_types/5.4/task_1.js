// Get last emement with "at"

let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[fruits.length-1] );   // Plum
console.log( fruits[fruits.length-2] );   // Orange
console.log( fruits[fruits.length-0] );   // undefined

console.log( fruits.at(-1) );       // Plum
console.log( fruits.at(1) );       // Orange
console.log( fruits.at(0) );       // Apple



