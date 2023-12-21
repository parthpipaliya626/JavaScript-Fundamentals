let data = "Abra ka dabra";

/* 
 function countArra (data) {
    let str = data.toLowerCase();     // convert to lowercase 
    let arr = str.split("");    // ['a', 'b', 'r', 'a', ' ', 'k', 'a', ' ', 'd', 'a', 'b', 'r', 'a']   with space also

    let newArr = [];
    let newObj = {};
 for (let i = 0; i < arr.length; i++) {
     if(arr[i] !== ' ') {
        !newObj[arr[i]] ? newObj[arr[i]] = 1 : newObj[arr[i]]++;
     }
 
  }
  newArr.push(newObj);
  console.log(newArr);
  console.log(`total : ${arr.length}`);

}

countArra(data);

 */


/* 
function countArr(data) {
    let str = data.toLowerCase();
    let arr = str.split("");
    let newarr = {};
    let counts = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== ' ') {
            let found = counts.find(item => item.char === arr[i]);
            //  console.log(found);
            if(found) {
                found.count++;
            } else {
                counts.push({char: arr[i], count: 1})
            }
        }
    }
    console.log(counts);    
    console.log(arr.length);    
    //  newarr.push(counts);
     console.log(newarr);
}

countArr(data);
 */










function countChars(data) {
    let str = data.toLowerCase();
    let charCount = {};

    for (let char of str) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    return charCount;
}

let result = countChars(data);
// console.log(result);





let arr1 = [3, 5, 8];
let obj1 = [ ...arr1] ;
console.log(obj1);

function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}
console.log(sum(...arr1));  // 16
console.log(sum(obj1));   

console.log();

/* var printNumTwo;
   for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        };
      }
   }
console.log(printNumTwo());       // 3

 */
let printNumTwoo;
   for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwoo = function() {
            return i;
        };
      }
   }
console.log(printNumTwoo());       // 2
// console.log(i);    //  i is not defined


let options = {
     size : {
        width : 100, 
        height : 200
     }, 
     items : ["Cake", "Donut"],
     extra : true
};


let {
    size : { 
        width,
        height
    }, 
    items : [item1, item2],
    title = "Menu"
} = options;

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);


