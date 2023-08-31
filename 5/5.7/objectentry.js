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
