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

for (let key of Object.keys(user)) {
       console.log(key);
}








