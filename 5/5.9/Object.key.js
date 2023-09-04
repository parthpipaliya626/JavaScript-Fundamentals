/*  Object.keys, values, entries

        Object.keys(obj) – returns an array of keys.
        Object.values(obj) – returns an array of values.
        Object.entries(obj) – returns an array of [key, value] pairs.

*/

let user = {
    name: "John",
    age: 30,
    Score: 15,
    Status: true
};

// only key value find for use
for (let key of Object.keys(user)) {
       console.log(key);
}

// use for original value of keys find
for (let value of Object.values(user)) {
       console.log(value);
}

// find all data of object in pairs [keys, values]
for (let entry of Object.entries(user)) {
    console.log(entry);
}



console.log();
console.log("Transforming data :  task start")
// Transforming objects

let prices = {
    banana : 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] *2])
);

console.log(doublePrices.banana);     // 2
console.log(doublePrices.orange);     // 4
console.log(doublePrices.meat);       // 8





