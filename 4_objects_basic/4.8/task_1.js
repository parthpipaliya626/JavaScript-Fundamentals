// toString/valueOf

/*
        By default, a plain object has following toString and valueOf methods:

        The toString method returns a string "[object Object]".
        The valueOf method returns the object itself.
*/

// demo

let user0 = {name: "John"};

console.log(user0); // [object Object] in allert function use otherwise { name: 'John' }
console.log(user0.valueOf() === user0); // true





let user = {
    name: "Parth",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  console.log(user); // toString -> {name: "John"}
  console.log(+user); // valueOf -> 1000
  console.log(user + 500); // valueOf -> 1500


// Often we want a single “catch-all” place to handle all primitive conversions. 
// In this case, we can implement toString only, like this:

  let user2 = { 
    name: "Raju",

    toString() {
        return this.name;
    }
  };

  console.log(user2);
  console.log(user2 + 500); 


  