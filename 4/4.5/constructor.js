// methods in constructor

// For instance, new User(name) below creates an object with the given name and the method sayHi:


function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi(); // My name is: John
  
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */



  /* 

        Summary
        Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
        Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
        We can use constructor functions to make multiple similar objects.

        JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets and others that we plan to study.
  */