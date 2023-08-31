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



// here we make line (*) shorter
// let obj = Object.fromEntries(map); // omit .entries()



/* Set
   A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

  Its main methods are:

        new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
        set.add(value) – adds a value, returns the set itself.
        set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
        set.has(value) – returns true if the value exists in the set, otherwise false.
        set.clear() – removes everything from the set.
        set.size – is the elements count.



        set.add(value)
*/

let set = new Set();

let raju = { name: "Raju" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let marys = { name: "Marys" };

// visits, some users come multiple times
set.add(raju);
set.add(pete);
set.add(mary);
set.add(raju);
set.add(raju);
set.add(mary);
set.add(marys);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // Raju (then Pete and Mary)
}




/* Iteration over set */
// we can use set after for..of or using  forEach
 set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});


/* set.keys()
   set.values()
   set.entries()
    */