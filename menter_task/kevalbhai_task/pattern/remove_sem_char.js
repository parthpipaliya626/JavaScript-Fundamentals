// Write a JS code to delete all occurrence of element in given array

let array = [1,2,1,2, 11, 11, 111,1,8,8,8,8,"8","a","a","a","@","@"];


let newarray = array.filter((char, dup) => array.indexOf(char) === dup);
console.log(newarray);

//  output in terminal : [
//   1, 2,   11,  111,
//   8, '8', 'a', '@'
// ]



// output in console : [1, 2, 11, 111, 8, '8', 'a', '@']








