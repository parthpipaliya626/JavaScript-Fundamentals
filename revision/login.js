const prompt = require('prompt-sync')();

let userName = prompt("Who's there?", '');

   if (userName === 'Admin') {
      const password = prompt("Password? ", "");
      
      if (password == '12345') {
         console.log("Welcome!");
      } else if ( password === '' || password === null ) {
         console.log("Canceled");
      } else {
         console.log("Wrong Password");
      }


   } else if ( userName === '' || userName === null) {
    console.log("Canceled");
   } else {
    console.log("I don't know you");
   }