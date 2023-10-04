/*
Write the code, one line for each action:

     1.   Create an empty object user.
     2.   Add the property name with the value Parth.
     3.   Add the property surname with the value Pipaliya.
     4.   Change the value of the name to Dhruvik.
     5.   Remove the property name from the object.

*/


// half understanding of create code
let user = {};

 user = { 
    "name" : "Parth",
    "surname": "Pipaliya"
  };

  user.name = "Dhruvik";
  console.log(user.name);

  delete(user.name);
  console.log(user);


// real this is use in question 

  let user1 = {};
  user1.name = "PArth";
  user1.surname = "Pipaliya";
  user1.name = "Dhruvik";
  delete user1.name; 
  console.log(user1);



  /* conclusion:    
              read proper question understanding requirement and then do action for create code.
         */