// multidimensional arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log( matrix[0][0] ); // 1, the central element
  console.log( matrix[0][1] ); // 2, the central element
  console.log( matrix[0][2] ); // 3, the central element
  console.log( matrix[1][0] ); // 4, the central element
  console.log( matrix[1][1] ); // 5, the central element
  console.log( matrix[1][2] ); // 6, the central element
  console.log( matrix[2][0] ); // 7, the central element
  console.log( matrix[2][1] ); // 8, the central element
  console.log( matrix[2][2] ); // 9, the central element




  // toString

  let arr = [1, 2, 3];

console.log( arr ); // 1,2,3
console.log( String(arr) === '1,2,3' ); // true


console.log( "" + 1 ); // "1"
console.log( "1" + 1 ); // "11"
console.log( "1,2" + 1 ); // "1,21"


// Don’t compare arrays with ==

console.log( [] == [] ); // false
console.log( [0] == [0] ); // false


// after [] was converted to ''
console.log( 0 == '' ); // true, as '' becomes converted to number 0

console.log('0' == '' ); // false, no type conversion, different strings


/*

So, how to compare arrays?

That’s simple: don’t use the == operator.
  Instead, compare them item-by-item in a loop or using iteration methods explained in the next chapter.

*/