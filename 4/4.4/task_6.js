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