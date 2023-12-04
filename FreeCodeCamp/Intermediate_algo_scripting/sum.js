// 1. sum of all numbers in a range.


function sumAll(arr) {
    let min = Math.min.apply(Math, arr);
    let max = Math.max.apply(Math, arr);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    // console.log(sum, "Hello");
    return sum;
   
}

let arr = [1,3];
console.log(sumAll(arr));