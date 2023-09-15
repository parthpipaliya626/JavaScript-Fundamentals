// example- 1
function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
  }
  
  // shows: 2, Julius, Caesar
  showName("Julius", "Caesar");
  
  // shows: 1, Ilya, undefined (no second argument)
  showName("Ilya");


// example 2
  function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
  }

  f(8);       // 1

console.log();
  // spread syntax

  let arr = [3, 5, 1];

  console.log( Math.max(arr) ); // NaN
  console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)


  let arr1 = [1, -2, 3, 4];
  let arr2 = [8, 3, -8, 1];
  
  console.log( Math.max(...arr1, ...arr2) ); // 8
  console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25



  let str = "Hello";

  console.log( Array.from(str) );




  let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}


