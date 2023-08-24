// Arrays

// Declaration

let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] );         // Apple

fruits[3] = 'Lemon';
console.log( fruits.length ); // 3
console.log( fruits );      // [ 'Apple', 'Orange', 'Plum', 'Lemon' ]

// An array can store element of any type

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr[1].name );            // John

// get the function at index 3 and run it
arr[3]();            // hello



/* 
 Methods pop/push , shift/unshift

 - push adds an element to the end    
 - pop takes an element from the end

   =  that’s also called LIFO (Last-In-First-Out) principle. 

*/

//      pop

// Extracts the last element of the array and returns it:
 fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.pop() );        // remove "Pear" and console.log it

console.log( fruits );              // Apple, Orange


//      push

// Append the element to the end of the array:
 fruits = ["Apple", "Orange"];

fruits.push("Pear");

console.log( fruits );          // Apple, Orange, Pear


//     shift

// Extracts the first element of the array and returns it:
 fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.shift() );         // remove Apple and console.log it

console.log( fruits );                // ['Orange', 'Pear']


//     unshift

// Add the element to the beginning of the array:
fruits.unshift('Apple');

console.log( fruits );                  //  ['Apple', 'Orange', 'Pear'];

//   push and unshift can add multiple elements at once:
 fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits );






