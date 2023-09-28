//  Tests: isFinite and isNaN


console.log( isNaN(NaN) );   // true
console.log( isNaN("str") );   // true

// The value NaN is unique in that it does not equal anything, including itself:

console.log( NaN === NaN ); // false


// isFinite(value) converts its argument to a number and returns true 
//      if it’s a regular number, not NaN/Infinity/-Infinity:

console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, because a special value: NaN
console.log( isFinite(Infinity) ); // false, because a special value: Infinity







// let num = +prompt("Enter a number", '');

// // will be true unless you enter Infinity, -Infinity or not a number
// console.log(isFinite(num));



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  let num = +input;

  // Check if num is finite
  console.log(isFinite(num));

  rl.close();
});



console.log( Number.isFinite(123) ); // true
console.log( Number.isFinite(Infinity) ); // false
console.log( Number.isFinite(2 / 0) ); // false

// Note the difference:
console.log( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
console.log( isFinite("123") ); // true, because isFinite converts string "123" into a number 123