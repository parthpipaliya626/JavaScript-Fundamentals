// output after swap 2 from index value in length time

let array = [1, 2, 3, 4];
let rindex = 2;

function rotation(array, rindex) {
  let array2 = [];
  for(let i = 0; i < array.length; i++) {
   array2[(i + rindex) % array.length] = array[i]
  }
  return array2;
};

console.log(rotation(array, rindex));


