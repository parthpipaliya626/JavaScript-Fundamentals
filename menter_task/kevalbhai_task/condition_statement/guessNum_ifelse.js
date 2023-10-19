/*

Write JS Code to generate a random number and allow someone to guess a number exactly 5
times.Program should stop after correct guess or All 5 attempt are used.

If the user guesses the number correctly. It prints "Right answer" Otherwise it will print "wrong number"

*/
const prompt = require('prompt-sync')();



    function guessNumber () {
        const EnterDigitNumber = parseInt(prompt("Guess for random digit of number you take: "));      // random digit from someone
        const randomNumber = Math.floor(Math.random() * (10 ** EnterDigitNumber)) ;               // generate random integer from the user

    //     // The parseInt() converts the numeric string value to an integer value
        let number; 
        
        console.log(randomNumber, "random number");
        for (let i = 0; i < 5; i++ ) {
            number = parseInt(prompt(`Guess number in ${EnterDigitNumber} digit :  `));
            if (number !== randomNumber) {
              console.log('wrong guess, Try again!');
            } else {
                console.log('Right answer'); 
                break;
            }
        }
        console.log(`Right number : ${randomNumber}`);
    }


guessNumber();










