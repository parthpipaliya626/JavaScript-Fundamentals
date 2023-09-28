// Array methods

// Add/remove items

/* 

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.

*/

// splice
// The arrays are objects, so we can try to use delete:
let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log( arr[1] ); // undefined

// now arr = ["I",  , "home"];
console.log( arr.length ); // 3


// remove [0, 3] means first 3 means (0, 1, 2)  thik haii ??

arr = ["I", "study", "JavaScript"];

arr.splice(1, 2); // from index 1 remove 1 element    [ 'I' ]
console.log( arr ); // ["I", "JavaScript"]

arr = ["I", "study", "JavaScript"];
 arr.splice(0, 2); // from index 1 remove 1 element   [ "JavaScript"]

console.log( arr ); // ["I", "JavaScript"]

console.log( arr.length );     // 2


// In the next example we remove 3 elements and replace them with the other two:
 arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 2, "Let's", "dance", "Raju");

console.log( arr ) // now ["Let's", "dance", "right", "now"]






// splice returns the array of removed elements

 arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements



 arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log( arr ); // "I", "study", "complex", "language", "JavaScript"

