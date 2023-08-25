// find and findIndex/findLastIndex

// Here the arr.find(fn) method comes in handy.


let arr =  ["Apple"]
let result = arr.find(function(item, index, array) {
console.log(arr);
});

 // find
let users = [
    { id: 1, name: "Raju"},
    { id: 2, name: "Utsav"},
    { id: 3, name: "Krunal"}
];

let user1 = users.find(item => item.id == 1);
let user2 = users.find(item => item.id == 2);
let user3 = users.find(item => item.id == 3);

console.log(user1.name);      // Raju
console.log(user2.name);      // Utsav
console.log(user3.name);      // Krunal







