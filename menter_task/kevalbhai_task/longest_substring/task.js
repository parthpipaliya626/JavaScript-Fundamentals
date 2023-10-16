let s = "abcabcbb";
let string = s.split(' ').join('');     // abcabcbb

function lengthOfLongestSubstring(string) {
      let substring = string[0];
      let longestsubstring = 0;
      
      for(let i = 1; i < string.length; i++) {
        const char  = string[i];

        substring.includes(char) ?  substring = substring.slice(substring.indexOf(char) + 1) :  substring += char ;

        if (substring.length > longestsubstring) {
          longestsubstring = substring.length;
        }
        
      }

     const longestsubstringName =  string.slice(0, longestsubstring);
     console.log("Longest substring name : ", longestsubstringName);
    //  console.log(`The answer is "${longestsubstringName}", with the length of ${longestsubstringName.length}`);

      return longestsubstring;
}

console.log(lengthOfLongestSubstring(string));




