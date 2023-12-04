// Write a JS code to find the number of zeros in 2D Matrix

let arr = [[0,1,1],[0,1,0],[1,0,0]];

  function countMatrix(arr) {

    let zerocount = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // condition here
            if (arr[i][j] == 0) {
                zerocount++;
            }
        }
    }
    return zerocount;
  }

console.log(countMatrix(arr));
