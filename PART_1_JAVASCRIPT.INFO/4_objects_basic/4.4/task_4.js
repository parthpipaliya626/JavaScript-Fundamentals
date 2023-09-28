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

// That’s a special feature of arrow functions,
//      it’s useful when we actually do not want to have a separate this,
//      but rather to take it from the outer context. 
//      Later in the chapter Arrow functions revisited we’ll go more
//      deeply into arrow functions.