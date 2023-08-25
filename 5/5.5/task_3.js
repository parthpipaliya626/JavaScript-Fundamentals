// Transform an array

/*    map

  the call to arr.map()
   syntax:
    let result = arr.map(function(item, index, array) {
        // returns the new value insted of item
    });

 */
// here we transform each element into its length:

let lengths = [ "Raju", "Krunal", "Utsav" ].map(item => item.length);

console.log(lengths);   // [ 4, 6, 5 ]  // (raju = 4, krunal = 6, utsav = 5) akshar na map mate each element.



/*  sort(fn) 
   the call to arr.sort()

   ascending order, descending order (chadta kram ma & utarta kram ma in gujarati)
*/


console.log("sort(fn) use");

let arr = [ 0, 2, 15, 3, 6, 18 ];

// the method reorders the content of arr
arr.sort();

console.log( arr );       //  [ 0, 15, 18, 2, 3, 6 ]

function compareNumeric(a, b) {
    if ( a > b )  return 1;
    if ( a == b )  return 0;
    if ( a < b )  return -1;
}

 arr = [ 1, 2, 15, 48, 45, 2 ];

arr.sort(compareNumeric);
console.log(arr);     //  [ 0, 2, 3, 6, 15, 18 ]




// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     console.log( a + " <> " + b );
//     return a - b;
//   });




 arr = [ 1, 2, 15, 18, 14, 24, 111, 11 ]; // same character first add, then diff char add like 1, 11 , 111, then 2, 22, 45 ...

// the method reorders the content of arr
arr.sort();

console.log( arr );  // 1, 15, 2

