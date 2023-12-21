/* 

let array = [1, 2, 3, 4, 5];
 let reverseArray = array.reverse();
  
   console.log(reverseArray);
    */

   function User(name) {
     this.name = name;
     this.isAdmin = false;
   }

   let user = new User("Parth");

   console.log(user.name);
   console.log(user.isAdmin);



   function SmallUser() {
    this.name = "Parth";
    return;
   }

   console.log( new SmallUser().name );