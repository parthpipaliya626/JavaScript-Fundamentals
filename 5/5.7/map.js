/* Map and Set
    --> Objects are used for storing keyed collections.
    --> Arrays are used for storing ordered collections.
*/

/* Map
     Map is a collection of keyed data items, like an object.
     main diff is that map allows keys of any type

     --> new.map()            - creates the map.
     --> map.set(key, value)  - stores the vallue by the key.
     --> map.get(key)         - returns the value by the key, undefined if key doesn't exist in map.
     --> map.hash(key)        - returns true if the key exists, false otherwise.
     --> map.delete(key)      - removes the element(the key/value pair) by the key.
     --> map.clear()          - removes everything from the map.
     --> map.size             - returns the current element count.
 */


     let map = new Map();

     map.set('1', 'str1');   // a string key
     map.set(1, 'num1');     // a numeric key
     map.set(true, 'bool1'); // a boolean key
     
     // remember the regular Object? it would convert keys to string
     // Map keeps the type, so these two are different:
     console.log( map.get(1)   ); // 'num1'
     console.log( map.get('1') ); // 'str1'
     
     console.log( map.size ); // 3


     // map can also use objects as keys.

     let parth = { name: "Parth" };

     let visitsCountMap = new Map();
     visitsCountMap.set(parth, 123);
     console.log( visitsCountMap.get(parth) );       // 123


//      let Parth = { name: "Parth" };
// let raju = { name: "Raju" };
// let visitsCountObj = {};
// visitsCountObj[Parth] = 214;
// visitsCountObj[raju] = 1245;
// // visitsCountObj[parth] = 445;

// console.log( visitsCountObj["object object"] );



let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log( visitsCountObj["[object Object]"] ); // 123




/*
   Iteration over Map

  For looping over a map, there are 3 methods:

    --> map.keys() – returns an iterable for keys,
    --> map.values() – returns an iterable for values,
    --> map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

*/

console.log("Starting new v.1 ~~~~~");    // new entry

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);

for (let vegetables of recipeMap.keys()) {
    console.log(vegetables);          // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()) {
    console.log(amount);                  // 500, 350, 50
}

for (let entry of recipeMap) {
    console.log(entry);    // [ 'cucumber', 500 ], [ 'tomatoes', 350 ], [ 'onion', 50 ]
}
