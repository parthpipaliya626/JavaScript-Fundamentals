//  given array nums consisting of 2n elements in the form [x1, x2, ...,xn,y1,y2,...,yn].
// return the array in the form [x1,y1,x2,y2,...,xn,yn].

let nums = [2,5,1,3,4,7];
let  n = Math.floor([nums.length/ 2]);
var shuffle = function(nums, n) {
    result = [];
    for (let i= 0; i < n; i++) {
        result.push(nums[i]); 
        result.push(nums[i + n]); 
    } return result;
};

console.log(shuffle(nums, n));

