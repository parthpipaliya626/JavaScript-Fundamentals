// Arrays

// Declaration

let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] );    // Apple

fruits[3] = 'Lemon';
console.log( fruits.length ); // 3
console.log( fruits ); // [ 'Apple', 'Orange', 'Plum', 'Lemon' ]

// An array can store element of any type

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello



