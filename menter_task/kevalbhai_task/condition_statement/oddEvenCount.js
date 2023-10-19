
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

        evenNumber.push(array[i]);
            evenCount++;
        } else {
             oddNumber.push(array[i]);
            oddCount++;
        }
       } 
       console.log(`
       [ { evencount : ${evenCount} , evenNumber : ${evenNumber} }, 
       { oddcount : ${oddCount} , oddNumber : ${oddNumber} } ] `);
   }

   console.log(array2(array));
  /**
   output: 


   { evencount : 6 , evenNumber : 2,4,6,8,10,12 },
       { oddcount : 6 , oddNumber : 1,3,5,7,9,11 }


   */
