
// The ?.[] syntax also works, if we’d like to use brackets [] to access
//      properties instead of dot . Similar to previous cases,
//          it allows to safely read a property from an object that may not exist.

let key = "firstName";

let user1 = {
    firstName: "Parth"
};

let user2 = null;

console.log( user1?.[key] );     // Parth
console.log( user2?.[key] );     // undefined

