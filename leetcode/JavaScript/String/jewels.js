// #771
// Jewels and stones


let jewels = "aA";
let stones = "aAAbbbb";

/* var numJewelsInStones = function(jewels, stones) {
    let unique = 0;
    stones.forEach((char) => {
        (jewels == char) ? unique += char 
    });
}; */


var numJewelsInStones = function(jewels, stones) {
    let unique = 0;
    for(let char of stones) { 
        if(jewels.includes(char))    {
          unique++;
         }
    } return unique;
};

console.log(numJewelsInStones(jewels, stones));


