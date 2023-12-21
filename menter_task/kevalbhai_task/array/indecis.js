/* 
- Given an nums of integers nums and an integer target, return indices of the two numbers such that they add up to target.
- You may assume that each input would have exactly one solution, and you may not use the same element twice.
- You can return the answer in any order.
*/

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

// let nums = [2,7,11,15];
// let target = 9;
// // target = 13;
// // target = 17;
// // target = 18;
// target = 22;

  /*  // example - 1 : 

for (let i = 0; i <= nums.length; i++) {
  for (let j = 0; j <= nums.length; j++) {
    // if ( (target - nums[i] === nums[j]) && (nums[i] != nums[j]) ) {
    if ( (nums[i] + nums[j] === target) && (nums[i] != nums[j]) )  {
     var output = [i, j];
     console.log(output);
     return output;
    }  
  }
} 
*/



// example 2 : make a function to easy use 

 /* 
 
 let output = function (nums, target) {
          for (let i = 0; i <= nums.length; i++) {
            for (let j = 0; j <= nums.length; j++) {
              // if ( (target - nums[i] === nums[j]) && (nums[i] != nums[j]) ) {
              if ( (nums[i] + nums[j] === target) && (nums[i] != nums[j]) )  {
    
               return [i, j]
              }  
            }
      }
 }

console.log(output(nums, target));

 */




// example 3 : with only one loop iteration possible 
 
   let nums = [2, 7, 11, 15]
  let target = 13;

  let output = function (nums, target) {
    
    for (let i = 0; i <= nums.length; i++) { 
      let nums2 = target - nums[i];
   
          if ( nums.includes(nums2) ) {
          let result = nums.indexOf(nums2)
          return [i, result] 
        }  else {
          return ("two number of sum is not target in our input.");
        }
      }
    }

    
    console.log(output(nums, target));



  











