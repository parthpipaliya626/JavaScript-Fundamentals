/* let dataMap = new Map([ ["Parth", 21], ["Raju", 22] ]);
// keys
for(let name of dataMap.keys()) {
    // console.log(name);
}
// console.log(dataMap);
// values
for(let age of dataMap.values()) {
    // console.log(age);
}
// entry
for(let entry of dataMap) {
    // console.log(entry);
}
 */

/* dataMap.forEach((value, key, map) => {
    console.log(`${key} : ${value}`);
}); */


/* 
let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  console.log( map.get('name') ); // John

  console.log(map);

 */



let map = new Map();
map.set("Parth", ("age", 21));
map.set("Utsav", 22);
map.set("Krunal", 23);

console.log(map.entries());

let obj = Object.fromEntries(map.entries());
console.log(obj);




