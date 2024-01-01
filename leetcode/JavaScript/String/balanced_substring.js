// # 1221
// Split a string in balanced strings



let s = "RLRRLLRLRL";

var balancedStringSplit = function(s) {
    let count = 0;
    let countBalanced = 0;
    for (let i = 0; i < s.length; i++) {
           for(let j = 0; j < s.length; j++) {     
            s[i] === "L" ? count++ : count--;
            if(count == 0) {
                countBalanced++
            }
        }         
    } 
    return countBalanced;
};


console.log(balancedStringSplit(s));


const number = [1, 2, 3, 4, 2, 3, 1, 8, 7];
const duplicates = number.filter((ele, index, arr) => arr.indexOf(ele) !== index);
console.log(duplicates);


