// create new calculator

/*  
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/

// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


const readline = require('readline-sync');


let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a - this.b;
    },
    read() {
        this.a = parseFloat(readline.question('a? ', { defaultInput: 0 }));
        this.b = parseFloat(readline.question('b? ', { defaultInput: 0 }));
    }
};

calculator.read();
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );