let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) );


// closure

function getFunc() {
    let value = "test";

    let func = new Function('console.log(value)');

    return func;
}

getFunc()();



function getFunc() {
    let value = "test";
  
    let func = function() { console.log(value); };
  
    return func;
  }
  
  getFunc()(); // "test", from the Lexical Environment of getFunc