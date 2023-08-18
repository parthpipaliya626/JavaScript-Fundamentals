// "this" is not bound

//  here the same function is assigned to two different objects and has different “this” in the calls:

let user = { name: "Parth" };
let admin = { name: "Admin" };

function sayHi() {
    alert( this.name );
}

// use the same function in two objects

user.f = sayHi;
admin.f = sayHi;


