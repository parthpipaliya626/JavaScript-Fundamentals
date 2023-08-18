// using this  in object literal

function makeUser0() {
    return {
        name: "Parth",
        ref: this
    };
}

 var user0 = makeUser0();

console.log( makeUser0().name ); // undefined



function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
  console.log( user.ref().name ); // John