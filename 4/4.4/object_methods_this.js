// object methods, "this"

// method example
//  let’s teach the user to say hello:


let user = {
    name: "parth",
    age: 21
};

user.sayHi = function() {
    console.log("Hello!");
};

user.sayHi();

// here we use a function expression to create a function and assign 
//  it to property user.sayHi of the object

// we have to pre-declared i  this method like,
// user.sayHI = sayHi then also work same direction