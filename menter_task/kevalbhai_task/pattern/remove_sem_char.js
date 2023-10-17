// Write a JS code to delete all occurrence of element in given array

let array = [1, 2, 5, 1, 1, 2, 6, 7, 4, 4 , "4"];
 array = ["a", "b", "c", "a", "4", "d", "a", ""];

let newarray = array.filter((char, dup) => array.indexOf(char) === dup);
console.log(newarray);


