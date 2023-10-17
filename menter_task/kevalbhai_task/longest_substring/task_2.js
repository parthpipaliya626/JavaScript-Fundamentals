let lengthOfLongestSubstring = function(s) {
    let ls = s.split("");
    let longestsub = 1;
    let currentsub = "";

    for(let char of ls) {
        currentsub = currentsub.slice(currentsub.indexOf(char) + 1);
    }

    currentsub += char;

    if(currentsub.length > longestsub.length) {
        longestsub = currentsub.length;
    }

    return longestsub;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

