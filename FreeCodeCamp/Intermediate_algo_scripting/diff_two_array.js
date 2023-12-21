// diff two arrays

// solution 1: array.concat(), array.filter(), array.indexOf(), array.lastIndexOf()



let arr1 = [1, 2, 3, 9, 2, 5, 5]
let arr2= [8, 7, 3, 2, 7, 5]

/* 
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter((item, i, arr) => arr.indexOf(item) === arr.lastIndexOf(item) );
}
console.log(diffArray(arr1, arr2));

 */


// solution 2 : use with array.filter(), array.concat(), array.includes()

/* 
function diffArray(arr1, arr2) {
   let filter1 = arr1.filter(item => !arr2.includes(item));
   let filter2 = arr2.filter(item => !arr1.includes(item));
   return filter1.concat(filter2);
}
console.log(diffArray(arr1, arr2));
 */


// solution 3 : For loop(), indexOf(), Array.push()

/*
 function diffArray(arr1, arr2) {
    let diff = [];

    for (let i = 0; i < arr1.length; i++) {
        arr2.indexOf(arr1[i]) === -1 && diff.push(arr1[i]);
        
    }

    for (let i = 0; i < arr2.length; i++) {
        arr1.indexOf(arr2[i]) === -1 && diff.push(arr2[i]);
        // console.log(diff);
    }
   return diff;
}
console.log(diffArray(arr1, arr2));
 */


// solution 4 : array.concat(), array.indexOf(), array.push()



function diffArray(arr1,arr2) {
    let arr = arr1.concat(arr2);
    console.log(arr);
    let diff = [];

    for (let i = 0; i < arr.length; i++) {
        (arr1.indexOf(arr[i]) === -1 || arr2.indexOf(arr[i]) === -1) && diff.push(arr[i]);
    }
    return diff;
}
console.log(diffArray(arr1, arr2));










