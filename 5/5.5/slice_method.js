// the method arr.slice is much simpler than similer-looking arr.splice.

// syntax
// arr.slice([start], [end])


let arr = ["t", "e", "s", "t"];

console.log( arr.slice(0, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)


// we can also call it : arr.slice() creates a copy of arr



/* concat 

    the method arr.concat creates a new array thst includes value from other arrays and additional items.

    the syntax is:

    arr.concat(arg1, arg2...)
*/

console.log("concat method start here....");
arr = [1, 2];
// create an array from: arr and [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6




arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log( arr.concat(arrayLike) ); // 1,2,[object Object]


