//  #1480
// Runnning Sum of 1d Array


const nums = [1, 2, 3, 4];
const runningSum = function(nums) {
    let result = [];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
         sum += nums[i];
         result.push(sum);
     } return result;
};


console.log(runningSum(nums));