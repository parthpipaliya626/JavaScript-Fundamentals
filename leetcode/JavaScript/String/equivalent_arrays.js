// #1662
// Check if two string arrays are equivalent


let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('');
};

console.log(arrayStringsAreEqual(word1, word2));


