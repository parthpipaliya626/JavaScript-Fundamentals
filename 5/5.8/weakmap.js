// WeakMap and WeakSet

// WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object


/*  
 WeakMap has only the following methods:

        weakMap.set(key, value)
        weakMap.get(key)
        weakMap.delete(key)
        weakMap.has(key) 
*/


//  use case: additional data

// visitsCountMap() method use for garbage collection

// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}   // null value define





