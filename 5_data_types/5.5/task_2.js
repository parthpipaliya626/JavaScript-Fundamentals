// find and findIndex/findLastIndex

// Here the arr.find(fn) method comes in handy.


// syntax
let arr = ["Apple"];
let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
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


// arr.findIndex
// arr.findLastIndex

users = [
    { id: 1, name: "Raju"},
    { id: 2, name: "Utsav"},
    { id: 3, name: "Krunal"},
    { id: 3, name: "Raju"}
];

// Find the index of the first Raju
console.log( users.findIndex(user => user.name == 'Raju') );   // 0

// Find the index of the last Raju
console.log( users.findLastIndex(user => user.name == 'Raju') );  // 3



// filter

// we can use arr.filter(fn) 
// syntax


let results = arr.filter(function(item, index, array) {
   // if true item is pushed to results and the iteration continues
   // returns empty array if nothing found
});

 users = [
    { id: 1, name: "Raju" },
    { id: 2, name: "Utsav" },
    { id: 3, name: "Krunal" },
 ];

 // returns array of the first two users
 let someUsers = users.filter(item => item.id < 3);

 console.log(someUsers.length);   // 2






