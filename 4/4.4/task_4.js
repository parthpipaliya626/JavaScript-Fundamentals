// Arrow functions have no “this”


// For instance, here arrow() uses this from the outer user.sayHi() method:

let user = {
    firstName: "Parth",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi();  // Parth

