// The first argument dest is a target object.
// Further arguments is a list of source objects.
// object.assign is cloning 
var user = {
    name: "John",
    age: 30
  };
  
  var clone = Object.assign({}, user);
  
  alert(clone.name); // John
  alert(clone.age); // 30






  // object will be copy and clone and user will share the same sizes

  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 60, get the result from the other one