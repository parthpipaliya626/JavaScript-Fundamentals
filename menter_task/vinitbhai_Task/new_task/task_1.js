/*Task 1
    Create function that Accepts the String as a input and return the Array of Object sorted by the number of count.
    Input: Abra ka dabra
    Output1: Print Total input string length
    Output2: [{ a: 5 }, { b: 2 }, { r: 2 }, { d: 1 }, { k: 1 }];
    Time to complete this task : 30 mins
*/

/*
function hello() {
    input.reduce((acc, value) => {
        const result = acc + value;
        return String.length;
    }, 0);
    }


  const input = [{input : "Abra ka dabra"}];


 // output 1:
 console.log(input);
 console.log("Output1: Print Total input string length.....");

//  input.sort(for( ));
 console.log(input.toString());
*/

/* 
 function sortByCount(inputString) {
    // Step 1: Calculate the character counts
    const charCount = {};
    for (let char of inputString.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
    }
  
    // Step 2: Convert the character counts to an array of objects
    const charCountArray = [];
    for (let char in charCount) {
      charCountArray.push({ [char]: charCount[char] });
    }
  
    // Step 3: Sort the array by the count in descending order
    charCountArray.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
  
    // Step 4: Print the total input string length
    console.log("Total input string length:", inputString.length);
  
    // Step 5: Return the sorted array
    return charCountArray;
  }
  
  // // Example usage:
  // const input = "Abra ka dabra";
  // const result = sortByCount(input);
  // console.log(result);
   */

// function countAndSortCharacters(inputString) {
//   const charCount = {};
//   for (let char of inputString.toLowerCase()) {
//     if (/[a-z]/.test(char)) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
//   }

//   const charCountAArray = [];
//   for (let char in charCount){
//     charCountAArray.push({ [char]: charCount[char] });
//   }

//   charCountAArray.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
// }

/*Task 1
    Create function that Accepts the String as a input and return the Array of Object sorted by the number of count.
    Input: Abra ka dabra
    Output1: Print Total input string length
    Output2: [{ a: 5 }, { b: 2 }, { r: 2 }, { d: 1 }, { k: 1 }];
    Time to complete this task : 30 mins
*/

function countArra (s) {
  let str = s.toLowerCase();
  let arr = str.split("");    // ["a", "b"]
  let newArr = [];
  let newObj = {};

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] !== ' ') {
      !newObj[arr[i]] ? newObj[arr[i]] = 1 : newObj[arr[i]]++;
    }
  }

/*   let arrr = []
  for(let char of str){
    console.log(char);
    if(!arrr[char]){
      console.log("I am new")
      arrr[char] = 1;
    } else {
      console.log("I m old")
      arrr[char] = arrr[char] +1
    }
  }
  console.log(arrr, "*****************"); */

  newArr.push(newObj);
  console.log(newArr);
  console.log(arr.length);

}

countArra ('Abra ka dabra');
// countArra.length;