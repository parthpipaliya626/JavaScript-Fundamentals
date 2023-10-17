// Write a JS code to find duplicate values in a given array 
// and give me return value as [{4:2 times}]


let array = [1, 2, 3, 1, 2, 3, 4, 1, 4];

const arrcount = {};

   array.forEach((element) => arrcount[element] = (arrcount[element] || 0) + 1);
   
console.log( arrcount);


