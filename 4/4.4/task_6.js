// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.


// npm install readline-sync
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
console.log('Sum:', calculator.sum());
console.log('Product:', calculator.mul());