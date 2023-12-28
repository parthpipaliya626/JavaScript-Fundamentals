/// # 2574
// Left and rigth sum differences

let nums = [10, 4, 8, 3];

var leftRightDifference = function (nums) {
    let result = [];
    let left = 0;
    let right = 0;

    for (var i = 0; i < nums.length; i++) {
        right += nums[i];
    }
    for (var i = 0; i < nums.length; i++) {
        right -= nums[i];
        result.push(Math.abs(left - right));
        left += nums[i];
    }
    
    return result;
};

let result = leftRightDifference(nums);
console.log(result);


// output : [15, 1, 11, 22 ]


//  solution 2

/* let nums = [10, 4, 8, 3];
var leftRightDifference = function(nums) {
let leftSum = [0], rightSum = [0], result = [];
    let leftElem = 0, rightElem = 0, abs = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i == nums.length - 1) {
            break;
        }
        leftElem = nums[i] + leftElem;
        rightElem = nums[nums.length - 1 - i] + rightElem;
        leftSum.push(leftElem);
        rightSum.unshift(rightElem);
    }
    for (let i = 0; i < leftSum.length; i++) {
        abs = Math.abs(leftSum[i] - rightSum[i]);
        result.push(abs);
    }
return result;
}

console.log(leftRightDifference(nums)); */