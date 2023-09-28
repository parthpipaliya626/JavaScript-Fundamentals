// Internals


let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

console.log( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

console.log( fruits ); // Banana, Pear - 2 items now





// Performance

// Methods push/pop run fast, while shift/unshift are slow



 fruits.pop();   // take 1 element from the end
 console.log(fruits);      // [ 'Banana' ]



