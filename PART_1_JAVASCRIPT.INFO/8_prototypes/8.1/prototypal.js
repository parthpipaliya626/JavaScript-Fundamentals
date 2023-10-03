// prototype


/*
[[prototype]]

inherit method in child have a all access of parent properties,
but parent have a only access of his properties, not access of child properties.

Javascript, automatically takes it from the prototype.
*/

/*
let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// walk is taken from the prototype
rabbit.walk();    // Animal walk

*/



/* 

let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

longEar.walk();    // Animal walk
console.log(longEar.jumps);     // true

 */




/* // Writing doesn't use prototype


let animal = {
    eats: true,
    walk() {

    }
};

let rabbit = {
    __proto__: animal
};

rabbit.walk = function() {
    console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk();    // Rabbit! Bounce-bounce!
 */




    let user = {
        name: "Parth",
        surname: "Pipaliya",

        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        },

        get fullName() {
            return ` ${this.name} ${this.surname} `;
        }
        
    };

    let admin = {
        __proto__: user,
        isAdmin: true
    };

    console.log(admin.fullName);

    admin.fullName = "Utsav Thummar";

    console.log(admin.fullName);
    console.log(user.fullName);







