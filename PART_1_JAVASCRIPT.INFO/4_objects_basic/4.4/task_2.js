// this method

// the value of this is the object "before dot", the one used to call the method.

let user = {
    name: "Parth",
    age: 21,

    sayHi() {
        // here "this" is the "current object"
        console.log(this.name);
    }
};

 user.sayHi();   // Parth



let admin = user;
user = null;

admin.sayHi(); // Parth