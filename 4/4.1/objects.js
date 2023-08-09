// Property values are accessible using the dot notation

 // get property values of the object: 
alert( user.name ); // John
alert( user.age ); // 30



// To remove a property, we can use the delete operator:
delete user.age;

// an alternative “square bracket notation” that works with any string:


"use strict";

let user = {};

 // set 
user["likes birds"] = true;

 // get 
alert(user["likes birds"]); // true

 // delete 
delete user["likes birds"];


// for in loop

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }