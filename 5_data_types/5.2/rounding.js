// Rounding

/* 

Here’s the table to summarize the differences between them:

                 Math.floor    Math.ceil    Math.round    Math.trunc
   
  3.1               3              4            3              3
  3.6               3              4            4              3    
 -1.1              -2             -1           -1             -1    
 -1.6              -2             -1           -2             -1    



*/

// 1. Multiply-and-divide

let num = 1.23456;

console.log( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// 2. toFixed(n)  rounds method

num = 12.35;
console.log( num.toFixed(5) );   //  "12.3"




// We can convert it to a number using the unary plus or a Number() call, e.g write +num.toFixed(5).



//   Imprecise calculations


// 64-bit storage
console.log( 1e500 );  // Infinity 


console.log( 0.1 + 0.2 == 0.3 );  // false


console.log( 0.1 + 0.2 );  // 0.30000000000000004  ( "3" after 15 times "0" after "4")


console.log( 0.1.toFixed(20) ); // 0.10000000000000000555



//  And when we sum two numbers, their “precision losses” add up.

// That’s why 0.1 + 0.2 is not exactly 0.3.

let sum = 0.1 + 0.2;
console.log( sum.toFixed(2) ); // "0.30"


 sum = 0.1 + 0.2;
console.log( +sum.toFixed(2) ); // 0.3


console.log( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
console.log( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001


