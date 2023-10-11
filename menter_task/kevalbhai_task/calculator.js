const prompt = require('prompt-sync')();




function calculator() {

    const Number1 = +prompt("input number: ");
const Operator = +prompt("input operator: ");
const Number2 = +prompt("input number: ");


    switch(Operator) {
        case '+' : (Number1 + Number2);
        break;
        case '-' : (Number1 - Number2);
        break;
        case '*' : (Number1 * Number2);
        break;
        case '/' : (Number1 / Number2);
        break;
        case '%' : (Number1 % Number2);
        break;
        default : "Calculation is not valid! Try again."
    
    }
                     
};

calculator();