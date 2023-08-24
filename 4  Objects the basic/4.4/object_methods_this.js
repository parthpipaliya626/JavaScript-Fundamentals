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



    // Summary
    // Functions that are stored in object properties are called “methods”.
    // Methods allow objects to “act” like object.doSomething().
    // Methods can reference the object as this.
    // The value of this is defined at run-time.

    // When a function is declared, it may use this, but that this has no value until the function is called.
    // A function can be copied between objects.
    // When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
    // Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
