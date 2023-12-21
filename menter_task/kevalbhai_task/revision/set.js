// Set method

/*
 let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// console.log(set.size);


for (let user of set) {
    // console.log(user.name);
}

 */


/* 
let set = new Set(["Orange", "apples", "bananas", "apples"]);
for (let value of set) {
    console.log(value);
}

set.clear()
set.forEach((value, valueAgain, set) => console.log(value) );
 */


/* function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );
 */




// set
  function getRandom() {
    return Math.round(Math.random() );

  }
console.log(getRandom());
const mySet = new Set();
while (mySet.size < 1) {
    mySet.add(getRandom())
}


console.log([...mySet]);


// map

const calculator = {
    add: (a, b) => a + b,
    minus: (a, b) => a - b
}

const myMap = new Map();
myMap.set(calculator.add, 'This is a add function');
myMap.set(calculator.minus, 'This is a minus function');

function getDescription(_funName) {
  return myMap.get(_funName)
}

console.log(getDescription(calculator.minus));
console.log(getDescription(calculator.add));



// weakSet
const myweakSet = new WeakSet();
{
    let myObj = {a : 1}
    myweakSet.add(myObj);
    console.log(myweakSet);
}
setTimeout(() => console.log(myweakSet));
console.log(myweakSet);

{
    let myObj2 = {b: 1}
    mySet.add(myObj2);
    console.log(mySet);
}

// map
console.log();
let map = new Map([["a1" , "Ajay"], ["a2", "Vikas"]]);
map.set("a2", "Ajay");
console.log(map.get("a2"));
for(let [key, value] of map) {
    console.log(`${key}, ${value}`);
}
console.log();
map.forEach((key, value) => {
    console.log(key, value);
})

