const prompt = require('prompt-sync')({sigint: true});

const numberToGuess = Math.floor(Math.random() * 10) + 1;
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
    let guess = prompt('Guess a number from 1 to 10: ');
    guess = Number(guess);

    if (guess === numberToGuess) {
        console.log('Congrats, you got it!');
        foundCorrectNumber = true;
    } else {
        console.log('Sorry, guess again!');
    }
}



