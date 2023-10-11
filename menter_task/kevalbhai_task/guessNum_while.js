// use with while condition


const prompt = require('prompt-sync')();


const digit = parseInt(prompt("Enter digit: "));
const random = Math.floor(Math.random() * (10 ** digit)); 

 let number ;

 let i = 1;


while (i <= 5) {
    i++;
    number = parseInt(prompt(`Guess in ${digit} digit number :  `));
    if (number !== random) {
        console.log("Wrong guess") 
    } else {
        console.log("Right answer");
        } 
   continue;
} 
console.log("Right random number is : ", random );


