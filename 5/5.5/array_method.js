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




arr = ["I", "study", "JavaScript"];

arr.splice(2, 2); // from index 1 remove 1 element    [ 'I', 'study' ]
 arr.splice(1, 1); // from index 1 remove 1 element   ["I", "JavaScript"]

console.log( arr ); // ["I", "JavaScript"]



// In the next example we remove 3 elements and replace them with the other two:
 arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

console.log( arr ) // now ["Let's", "dance", "right", "now"]


