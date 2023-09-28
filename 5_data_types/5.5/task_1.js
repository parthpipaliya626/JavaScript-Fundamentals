// Searching in array

// indexOf/lastIndexOf and includes

/* 
    - arr.indexOf(item, from)     returns the index it was found, otherwise -1
    - arr.includes(item, from)     returns true if found otherwise false
*/


let arr = [1, 0, false];
console.log( arr.indexOf(0) );          // 1
console.log( arr.indexOf(false) );      // 2
console.log( arr.indexOf(null) );       // -1

console.log( arr.includes(1) );         // true


//   arr.lastIndeXOf  method is the same of indexOf, but looks for from right to left.


let fruits = ['Apple', 'Orange', 'Apple']
console.log( fruits.indexOf('Apple') );           // 0
console.log( fruits.lastIndexOf('Apple') );       // 2


 arr = [NaN];
console.log( arr.indexOf(NaN) );       // -1 (wrong, should be 0)
console.log( arr.includes(NaN) );      // true (correct)


console.log("new");

  










