// Filter inBetween

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6









// Filter inArray


function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
   arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2