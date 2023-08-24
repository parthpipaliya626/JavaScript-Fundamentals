// "this" is not bound

//  here the same function is assigned to two different objects and has different “this” in the calls:

let user = { name: "Parth" };
let admin = { name: "Admin" };

function sayHi() {
    console.log( this.name );
}

// use the same function in two objects

user.f = sayHi;
admin.f = sayHi;

// tese calls have different this
//  "this" inside the function is the object "before the dot"

user.f();   // Parth  (this == user)
admin.f();   // Admin  (this == admin)


admin['f']();   // Admin (dot or square brackets access the method – doesn't matter)
