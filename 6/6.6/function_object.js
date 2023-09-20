// The name property

const { question } = require("readline-sync");


// console.log(sayHi.name);

let  sayHi = function() {
    console.log("hi");
};

console.log(sayHi.name);



// The "length" property

function f1(a) {}
function f2(a, b) {}
function many(a, b, c, ...more) {}

console.log(f1.length);
console.log(f2.length);
console.log(many.length);


const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question, ...handlers) {
    r1.question(question + ' (yes/no): ', (answer) => {
        const isYes = answer.toLowerCase().trim() === 'yes';

        for (let handler of handlers) {
            if (handler.length == 0) {
                if (isYes) handler();
        
            } else {
                handler(isYes);
            }
         }

         r1.close();
    })
}


ask("Question?", () => console.log('You said yes'),  result => console.log(result));


