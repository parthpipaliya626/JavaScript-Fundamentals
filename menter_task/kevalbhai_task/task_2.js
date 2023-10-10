
/* 
Input array
let array=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
Output
 [  { evenCount : '' , evenNumber : [ , , ] },
    { oddCount : '' , oddNumber : [ , , ] }  ]

*/

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
const evenNumber = [];
const oddNumber = [];
let evenCount = 0;
let oddCount = 0;

   function array2(array) {
       for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 ) {
           console.log( evenNumber.push(array[i]) );
            // evenCount++;
        //    console.log( evenCount ); 
        } else {
            console.log( oddNumber.push(array[i]) );
            // oddCount++;
            // console.log( oddCount );
        }
       }
   }

   console.log(array2(array));















