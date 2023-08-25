// Transform an array

/*    map

   arr.map method
   syntax:
    let result = arr.map(function(item, index, array) {
        // returns the new value insted of item
    });

 */
// here we transform each element into its length:

let lengths = [ "Raju", "Krunal", "Utsav" ].map(item => item.length);

console.log(lengths);   // [ 4, 6, 5 ]  // (raju = 4, krunal = 6, utsav = 5) akshar na map mate each elementt