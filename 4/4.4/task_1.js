// method shorthand

// these objects do the same

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
};

// As demonstrated, we can omit "function" and just write sayHi().


