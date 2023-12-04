// visit this url: https://gist.github.com/gustavoalbuquerquebr/9c5ca63f743bd55e26bc1dad6a99cc6b


// 1. sum of all numbers in a range.

/* 
//  solution 1 : use Math.min(), Math.max() ,  For loop

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

let arr = [1,5];
console.log(sumAll(arr)); 
*/


/* 
// solution 2 : use Array.sort(), Array.reduce(), For Loop

function sumAll(arr) {
    return arr.sort((a, b) => a - b).reduce((a, b) => {
        let count = b - a;
        for (let i = 0; i < count; i++) {
            a += b--;
            // console.log(a);    // 11, 20, 28, 35, 41, 46, 50, 53, 55
            // console.log(b);    // 9, 8, 7, 6, 5, 4, 3, 2, 1
        }
        return a;
    });
}

let arr = [1, 10];
console.log(sumAll(arr)); 

 */

// solution 3: use Array.sort(), while loop, array.splice(), array.reduce()

/* 
function sumAll(arr) {
    arr.sort((a, b) => a - b);
    let count = arr[1] - arr[0] - 1;
    // console.log(count);

    while (count > 0) {
        arr.splice(1, 0, arr[arr.length - 1] - count);     
        count--;
        // console.log(a);
    }
    return arr.reduce((a, b) => a + b)
}


let arr = [1, 10];
console.log(sumAll(arr)); 

 */


// let arra = [1, 5];
// let counts = 9;
// let result = arra.splice(1, 0, arra[arra.length - 1] - counts);
// console.log(arra.length);
// console.log(arra);
// console.log(result);
