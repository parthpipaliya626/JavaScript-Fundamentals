// Methods of primitives
// A primitive as an object




/*
A primitive

      -  Is a value of a primitive type.
      -  There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

An object

      -  Is capable of storing multiple values as properties.
      - Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects. 

*/

let parth = {
    name: "Parth",
    sayHi: function() {
        console.log("Hi buddy!");
    }
};

parth.sayHi();  // Hi buddy!

// A primitive as an object


const a = String.prototype.toUpperCase.call({
    toString() {
      return "abcdef";
    },
  });
  
  const b = String.prototype.toUpperCase.call(true);
  
  // prints out 'ABCDEF TRUE'.
  console.log(a, b);



  
//    toUpperCase()    
  let text = "Parth Pipaliya";
let result = text.toUpperCase();  
console.log(result);    // PARTH PIPALIYA

//    toLowerCase()    
   text = "Parth Pipaliya";
 result = text.toLowerCase();
 console.log(result);   // parth pipaliya

//    toLocaleUpperCase()    
   text = "parth Pipaliya";
  result = text.toLocaleUpperCase();
  console.log(result);    // PARTH PIPALIYA

//    toLocaleLowerCase()    
   text = "Parth Pipaliya";
 result = text.toLocaleLowerCase();
 console.log(result);     // parth pipaliya



