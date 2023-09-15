{
    let message = "hello";
    console.log(message);
}
{
    let message = "Good bye";
    console.log(message);
}


let message = "hello";
    console.log(message);
 message = "good bye";
    console.log(message);



    // Nested function

    function sayHiBye(firstName, lastName) {
        function getFullName() {
            return firstName + " " + lastName;
        }

        console.log( "Hello, " + getFullName() );
        console.log( "Bye, " + getFullName() );
    }


    function makeCounter() {
        let count = 0;

        return function() {
            return count++;
        };
    }
    let counter = makeCounter();

    console.log(counter());
    console.log(counter());
    console.log(counter());
    console.log(counter());


    // lexical environment


    const { LocalStorage } = require('node-localstorage');
    const localStorage = new LocalStorage('./localStorage');
    
    clickCounter();
    
    function clickCounter() {
        if (localStorage.getItem('clickcount')) {
            let clickCount = Number(localStorage.getItem('clickcount'));
            clickCount++;
            localStorage.setItem('clickcount', clickCount.toString());
        } else {
            localStorage.setItem('clickcount', '1');
        }
    
        console.log("Click count: " + localStorage.getItem('clickcount'));
    }
    


    let value = "Surprise!";
      function f() {
        let value = "the closest value";

        function g() {
            debugger;
        }

        return g;
      }

      let g = f();
      g();



      