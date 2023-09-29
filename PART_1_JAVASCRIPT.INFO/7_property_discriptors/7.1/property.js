// Property flags

/*

writable
enumerable
configurable

*/


let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */



// non-writable


let user1 = { };

Object.defineProperty(user1, "name", {
    value :"Parth",
    enumerable: true,
    configurable: true
});

console.log(user1.name);
user1.name = "Raju";    // Error





// non-enumerable

let user2 = {
    name: "Raju",
    toString() {
        return this.name;
    }
};

Object.defineProperty(user2, "toString", {
    enumerable: false
});

for (let key in user2) console.log(key);




// non-configurable

 descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
 
 console.log( JSON.stringify(descriptor, null, 2) );




Math.PI = 3;


 user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
  });
  
  // won't be able to change user.name or its flags
  // all this won't work:
  user.name = "Pete";
  delete user.name;
  Object.defineProperty(user, "name", { value: "Pete" });





  /*

Object.preventExtensions(obj)
Object.seal(obj)
Object.freeze(obj)
Object.isExtensible(obj)
Object.isSealed(obj)
Object.isFrozen(obj)

  */