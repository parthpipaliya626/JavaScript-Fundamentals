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

console.log( arr.concat([3, 4]) );     // 1, 2, 3, 4