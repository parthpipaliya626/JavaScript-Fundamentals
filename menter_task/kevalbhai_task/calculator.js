const prompt = require('prompt-sync')();

const Number1 = parseFloat(+prompt("Enter number: "));
const Operator = prompt("Enter operator (like +, - , *, /): ");
const Number2 = parseFloat(+prompt("Enter number: "));

let result;

// use with switch case condition
/*  
if (!isNaN(Number1) && !isNaN(Number2)) {
   switch(Operator) {
        case '+' : result = Number1 + Number2;
        break;
        case '-' : result = Number1 - Number2;
        break;
        case '*' : result = Number1 * Number2;
        break;
        case '/' : if (Number2 == 0) {
            console.log("Division by zero is not allowed.")
        } else {
          result = Number1 / Number2;
        }
        break;
        default : console.log("Enter a valid operator (+, -, *, /).");
    }

     if (result !== undefined) {
    console.log(`Output: ${Number1} ${Operator} ${Number2} = ${result}`);
  }
} else {
  console.log("Enter valid numbers.");
}

           
*/           


    // use with if else condition 

if ( isNaN(Number1) || isNaN(Number2) ) {
      console.log("Enter valid numbers.");
} else 

        if( Operator == '+' ) {
                result = Number1 + Number2;
            } else if ( Operator == '-' ) {
                result = Number1 - Number2;
            } else if ( Operator == '*' ) {
                result = Number1 * Number2;
            } else if ( Operator == '/' ) {
                        if (Number2 === 0 ) {
                            console.log(`${Number1} ${Operator} ${Number2} = 0 , Note :  Can't divide by zero`);
                        } else {
                        result = Number1 / Number2;
                       }
            } else {
                console.log("Not valid your Input, Try again!");
            }  
           
if (result == undefined ){
    console.log("Enter a valid operator (+, -, *, /) , Try again!");
} else {
    console.log(`Output: ${Number1} ${Operator} ${Number2} = ${result}`);

}

