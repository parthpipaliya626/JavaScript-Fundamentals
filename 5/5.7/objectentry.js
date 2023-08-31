// Object.entries: Map from Object

// (Object.entries(obj)); use method

let obj = {
    name: "Raju",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  console.log( map.get('name') ); // Raju


/* Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ].
     That’s what Map needs.
     
     */



  ///Object.fromEntries: Object from Map
// example 1:
  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['beat', 4]
  ]);
  
  // now prices = { banana: 1, orange: 2, meat: 4 }
  
  console.log(prices.orange); // 2
  console.log(prices.beat); // 2

  // We can use Object.fromEntries to get a plain object from Map



  // example - 2:

   map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

 obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj.orange);    // 2


