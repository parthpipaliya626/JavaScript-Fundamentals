let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)
