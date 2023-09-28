const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function ask(question, ...handlers) {
  rl.question(question + ' (yes/no): ', (answer) => {
    const isYes = answer.toLowerCase().trim() === 'yes';

    for (let handler of handlers) {
      if (handler.length === 0) {
        if (isYes) handler();
    } else {
        handler(isYes);
      }
    }
    
    rl.close();
});
}

ask("Question?", () => console.log('You said yes'), result => console.log(result));
