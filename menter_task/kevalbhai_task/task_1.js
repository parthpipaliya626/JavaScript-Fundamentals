
/* 
Input array
let array=[1,2,3,4,5]
Output
1 is odd
2 is even
3 is odd
....

*/
const array = [1, 2, 3, 4, 5];

  for ( let i = 1; i < array.length + 1; i++) {
        if (i % 2 == 0) {
            console.log(`${i} is even`);
            continue;
        } else {
            console.log(`${i} is odd`);
        }
   };



console.log();     // space maintain


// with turnary operation
   for ( let i = 1; i < array.length + 1; i++) { 
    (i % 2 == 0) ? console.log(`${i} is even`) : console.log(`${i} is odd`); 
    continue;
   }


