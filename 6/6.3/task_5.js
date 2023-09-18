// Function in if


let phrase = "Hello";

if (true) {
  let user = "Raju";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();




// example 2:  sum with closures
function sum(a) {
    return function(b) {
        return a + b;
    };
}

console.log( sum(1)(2) )
console.log( sum(5)(-1) );
