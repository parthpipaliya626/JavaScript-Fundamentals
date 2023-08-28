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


let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
  };
  
  // Error (no Symbol.iterator)
  for (let item of arrayLike) {}

  