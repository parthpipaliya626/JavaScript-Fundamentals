// Write a JS code to delete all occurrence of element in given array

let array = [1,2,1,2,8,8,8,8,"8","a","a","a","@","@"];


let newarray = array.filter((char, dup) => array.indexOf(char) === dup);
console.log(newarray);
