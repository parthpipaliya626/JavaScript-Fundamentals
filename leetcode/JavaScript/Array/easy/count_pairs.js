// #2824
// Count Pairs Whose sum is less than target

const nums = [-1,1,2,3,1];
const target = 2;

var countPairs = function(nums, target) { 

    let pairs = 0;
/*    for(let i = 0; i < nums.length; i++) {
    for(let j = [i] + 0; j < nums.length ; j++) {
        let sum = nums[i] + nums[j];         
        if (sum < target) {
         pairs++;
         console.log(pairs);
       } 
     }
   }

   console.log(countPairs(nums, target)); */

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        let sum = nums[i] + nums[j];
        if (sum < target) {
            pairs++;
            console.log([i, j]);
        }
    }
}

   return pairs
};
console.log(countPairs(nums, target));
