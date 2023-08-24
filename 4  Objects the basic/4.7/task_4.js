// global symbols
/*
     In order to read (create if absent) a symbol from the registry, 
     use Symbol.for(key).

     That call checks the global registry, and if there’s a symbol 
       described as key, then returns it, otherwise creates a new symbol
         Symbol(key) and stores it in the registry by the given key.
*/
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log( id === idAgain );   // true


// Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.
