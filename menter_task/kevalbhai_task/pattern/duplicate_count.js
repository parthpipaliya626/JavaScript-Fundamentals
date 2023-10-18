// Write a JS code to find duplicate values in a given array 
// and give me return value as [{4:2 times}]

let array = [1, 2, 3, 1, 2, 3, 4, 1, 4, "@", "@", "@"];
   array = [1,5,11,2,3,1,2,3,4,1,4,"@","@","@"];



// example 1 using foreach() method 
 const arrcount = {};

   array.forEach((element) => arrcount[element] = (arrcount[element] || 0) + 1);
   
console.log( arrcount);




// example 2  : count each element && unique array 

// here , first we count each element using foreach() method

const count = {};
 array.forEach((element) => {
   (count[element] === undefined) ? count[element] = 1 : count[element]++;
 });
console.log("each char count : ",count);


// here i use filter method for uniqye array

function removeDuplicates(array) {
   let unique =  array.filter((item, index) => array.indexOf(item) === index);
   return unique;
}
console.log("Unique array : ", removeDuplicates(array));





// example 3: find duplicate element in arrraay

/* let duplicate = [];
for (let i = 0; i < arry.length; i++) { // nested for loop
   for (let j = 0; j < arry.length; j++) {
       if (i !== j) { 

       }
      }
   }
 */