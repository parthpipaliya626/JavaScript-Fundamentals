// Loops


// for loop
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] );                // Apple      Orange      Pear
}


// for..of loop
fruits = ["Apple", "Orange", "Pulm"];
 
// iterates over array elements
for (let fruit of fruits) {
    console.log( fruit );      // Apple     Orange    Pulm
}
 

// for..in
 arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  console.log( arr[key] );    // Apple, Orange, Pear
}





// A word about "length"
// the length property automatically updates when we modify the array
// a single element with a large index gives a big length:
 fruits = [];
fruits[123] = "Apple";

console.log( fruits.length ); // 124


// the array is truncated

arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log( arr );       // [1, 2]

arr.length = 5;
console.log( arr[3] );      // undefined
console.log( arr[0] );      // undefined
console.log( arr.length );      // undefined



// new Array()

 arr = new Array(2); // will it create an array of [2] ?

console.log( arr[0] );     // undefined! no elements.

console.log( arr.length );     // length 2





