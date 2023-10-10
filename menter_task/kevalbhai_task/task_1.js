
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



function array2(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            console.log(`${array[i]} is even`);
        } else {
            console.log(`${array[i]} is odd`);
        }
      }
};

console.log(array2(array));    





/* 

// with turnary operation
function array3(array) {

    for ( let i = 0; i < array.length; i++) { 
        (array[i] % 2 == 0) ? console.log(`${array[i]} is even`) : console.log(`${array[i]} is odd`); 
        continue;
    } 
}
console.log(array3(array));

*/
