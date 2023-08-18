// optional chaining ?

// the "non-existing property" problem

// document.querySelector('.element).innerHTML   use with 


let user0 = {}; // user has no address

console.log(user0.address ? user0.address.street ? user0.address.street.name : null : null);

// There’s a little better way to write it, using the && operator:

let user1 = {}; // user has no address

console.log( user1.address && user1.address.street && user1.address.street.name ); // undefined (no error)


// optional chaining

// The optional chaining ?. stops the evaluation 
// if the value before ?. is undefined or null and returns undefined.


// Please note: the ?. syntax makes optional the value before it, but not any further.