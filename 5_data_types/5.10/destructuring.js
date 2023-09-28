// Destructuring assignment

// Array destructuring


let arr = ["Raju", "Utsav", "Krunal"]

let [FirstName, SecondName, LastName] = arr;

console.log(FirstName);
console.log(SecondName);
console.log(LastName);





let [firstName, surname] = "John Smith".split(' ');
console.log(firstName); // John
console.log(surname);  // Smith
 

// Assign to anything at the left-side

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith



// Looping with .entries()

 user = {
    name: "John",
    age: 30
  };
  
  // loop over keys-and-values
  for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, then age:30
  }



  