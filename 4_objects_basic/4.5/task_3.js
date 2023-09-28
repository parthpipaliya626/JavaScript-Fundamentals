// create new accumulator

// create a constructor function Accumulator(startingValue).
/* 

     Store the “current value” in the property value.
          The starting value is set to the argument of the constructor startingValue.
     The read() method should use prompt to read a new number and add it to value.
 In other words, the value property is the sum of all user-entered values with 
         the initial value startingValue.
*/ 


// let accumulator = new Accumulator(1); // initial value 1



const readline = require('readline-sync');


let accumulator = {
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


accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values