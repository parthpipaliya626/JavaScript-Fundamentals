// # 3 
// Longest substring without repeating character

let s = "abcabcbb";

var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let String = 0;
    let longSubString = {};
   

    for (let i = 0; i < s.length; i++) {
      if (longSubString[s[i]] >= count) {
        count = longSubString[s[i]] + 1;
      }
       longSubString[s[i]] = i;
       String = Math.max(String, i - count + 1);
        
    } return String;
};

console.log(lengthOfLongestSubstring(s));