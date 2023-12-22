let candies = [2,3,5,1,3];
let extraCandies = 3;
 
var kidsWithCandies = function(candies, extraCandies) {
     let kids = [];
     let max = Math.max(...candies);
    for(let i = 0; i < candies.length; i++) {
        let result = candies[i] + extraCandies;
        if (max <= result) {
                kids.push(true);
        } else {
            kids.push(false);
        }
    }   return kids;
};

console.log(kidsWithCandies(candies, extraCandies));




