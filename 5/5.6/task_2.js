// Calling an iterator explicitly
// for..of , but with direct calls


let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);  // outputs characters one by one
}




// Iterables and array-likes


// let arrayLike = { // has indexes and length => array-like
//     0: "Hello",
//     1: "World",
//     length: 2
//   };
  
//   // Error (no Symbol.iterator)
//   for (let item of arrayLike) {}


  // Array.from

  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  console.log(arr.pop()); // World (method works)


//   // assuming that range is taken from the example above
//  arr = Array.from(range);
// console.log(arr); // 1,2,3,4,5 (array toString conversion works)  // not defined

// here we use Array.from to a string into an array of char:
 str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2


