//  A number has methods of its own, for instance, 
//       toFixed(n) rounds the number to the given precision:


let n = 1.23456;

console.log( n.toFixed(3) ); // 1.23


// In JavaScript, that’s also possible for historical reasons,
//   but highly unrecommended. Things will go crazy in several places.


console.log( typeof 0 ); // "number"

console.log( typeof new Number(0) ); // "object"!

// Objects are always truthy in if, so here the alert will show up:

let zero = new Number(0);

if (zero) {
    console.log( "zero is truthy!?!" );  // zero is truthy!?!
}

