// One of the fundamental differences of objects versus primitives is 
// that objects are stored and copied “by reference”,
//  whereas primitive values: strings, numbers, booleans,
//  etc – are always copied “as a whole value”.

//  A variable assigned to an object stores not the object itself,
//  but its “address in memory” – in other words “a reference” to it.


// When an object variable is copied, the reference is copied, but the object itself is not duplicated.


// comparison by reference

//  Cloning and merging, Object.assign

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user.name ); // still John in the original object