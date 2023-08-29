// return from constructors

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.
// In other words, return with an object returns that object, in all other cases this is returned.

function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  alert( new BigUser().name );  // Godzilla, got that object
