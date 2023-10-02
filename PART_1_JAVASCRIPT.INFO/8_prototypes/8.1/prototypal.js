// prototype


/*
[[prototype]]

inherit method in child have a all access of parent properties,
but parent have a only access of his properties, not access of child properties.

Javascript, automatically takes it from the prototype.
*/


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
























