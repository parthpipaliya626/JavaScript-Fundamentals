// // setTimeout 




// function sayHi(phrase, who) {
//     console.log(phrase + ', ' + who);
//   }
  
//   setTimeout(sayHi, 1000, "Hello", "Parth");

// setTimeout(() => console.log('Hello'), 1000);


// // canceling with clearTimeout

// let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId); // same identifier (doesn't become null after canceling)


// // setTimeout("console.log('hello darling')", 2000);
// setTimeout("console.log('Hello')", 1000);

// setTimeout( console.log('Hello'), 1000);



 // Cancelling with clearTimeout

//  let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId);

// clearTimeout(timerId);
// console.log(timerId);




// setinterval

// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);


// Nested setTimeout

let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000);
}, 2000);


