// calculator
const prompt = require('prompt-sync')();

const Num1 = parseInt(+prompt("Enter input number: ")); 
const operator = prompt("Enter operator (+, -, *, /): "); 
const Num2 = parseInt(+prompt("Enter input number: "));

let result;

if (isNaN(Num1) || isNaN(Num2)) {
  console.log("Enter valid numbers for Num1 and Num2.");
} else  if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
  console.log("Enter a valid operator (+, -, *, /).");
} else {
          
        function sum(Num1, Num2) {
            return  Num1 + Num2;
          };

        function sub(Num1, Num2) {
            return Num1 - Num2;
          };

        function mul(Num1, Num2) {
            return Num1 * Num2;
          };

        function div(Num1, Num2) {
          if (Num2 === 0) {
            console.log("Division by zero is not allowed.");
            return undefined;
          }
          return Num1 / Num2;
        };
  


  if (operator === '+') {
    result = sum(Num1, Num2);
  } else if (operator === '-') {
    result = sub(Num1, Num2);
  } else if (operator === '*') {
    result = mul(Num1, Num2);
  } else if (operator === '/') {
    result = div(Num1, Num2);
  } else {
    console.log("Wrong Operation.");
  }
  
  if (result !== undefined) {
    console.log(`Result: ${result}`);
  }
};