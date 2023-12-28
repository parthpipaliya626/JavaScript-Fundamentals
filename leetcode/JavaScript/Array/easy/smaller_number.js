// #1365
// How many numbers are smaller than the current number

// Gib=ven the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
//  that is, fro each nums[i] you hve to count the number of valid j's such that j != i and nums[j] < nums[i]. 
// Return the answer in an array.


const nums = [3, 3];
const result = [];

var smallerNumbersThanCurrent = function(nums) {
    for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let countSmaller = 0;
       for (let j = 0; j < nums.length; j++) {
        if (nums[j] < currentNumber) {
            countSmaller++;  
        } 
       } 
        result.push(countSmaller);
   } 
   return result;
};
console.log(smallerNumbersThanCurrent(nums));



