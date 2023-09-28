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



      console.log(g);

      


let arr = ["t", "e", "s", "t"];
console.log( arr.slice(1, 3) );
console.log( arr.slice(0, 3) );
console.log( arr.slice(2, 3) );

console.log( arr.slice(-2) );

console.log(arr);



 arr = [1, 2];

console.log( arr.concat([3, 4]) ); // 1,2,3,4
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
console.log(arr);

console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


let str = "Hello";
let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
  }




  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    console.log( `${title} ${width} ${height}` );
    // console.log( items );
  }

  showMenu(options);



  let name = "Raju";

  function sayHi() {
    console.log("Hi, "+ name);
  }

  name = "Utsav";

  sayHi();