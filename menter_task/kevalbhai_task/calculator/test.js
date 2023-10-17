const prompt = require("prompt-sync")();

let currentresult = 0;
function check(operator, num1, num2) {
  let result = 0; // Initialize result
  switch (operator) {
    case "+": result = num1 + num2;
      break;
    case "-": result = num1 - num2;
      break;
    case "*": result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.log("Division by zero is not allowed.");
      } else {
        result = num1 / num2;
      }
      break;
    default:
      console.log("Enter");
      break;
  }
  return result;
}
let Number1 = parseFloat(prompt("Enter number: "));
Operator = prompt("Enter operator (+, -, *, /): ");


if (Operator == "=") {
  return result;
}
if (["+", "-", "*", "/"].includes(Operator)) {
  let Number2 = parseFloat(prompt("Enter the second number: "));
  if (isNaN(Number2)) {
    console.log("Enter a valid second number.");
  }else{
    currentresult = check(Operator, Number1, Number2);
  }
} else {
  console.log("Enter a valid operator (+, -, *, /).");
}


do {
  let Operator = prompt("Enter operator (+, -, *, /, =): ");
  if (Operator === "=") {
    break; // Exit the loop when "=" is entered
  }
  if (["+", "-", "*", "/"].includes(Operator)) {
    let Number2 = parseFloat(prompt("Enter the number: "));
    if (isNaN(Number2)) {
      console.log("Enter a valid number.");
    } else {
      currentresult = check(Operator, currentresult, Number2);
    }
  } else {
    console.log("Enter a valid operator (+, -, *, /, =).");
  }
  console.log("Current result: " + currentresult);
} while (true);
console.log("Final result: " + currentresult);


















