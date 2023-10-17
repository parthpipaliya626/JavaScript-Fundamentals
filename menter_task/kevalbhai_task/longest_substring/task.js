 // code is not satisfied.................
 
  let s = "pwwkew";
  s = "ewfegbefwedwfev"
  s = "abcabcbb";
  // s = "bbbbb"
 let string = s.split(' ').join('');     // abcabcbb


    function lengthOfLongestSubstring(string) {
          let substring = string[0];
          let longestsubstring = "";
          
          for(let i = 0; i < string.length; i++) {
            const char  = string[i];

          if (substring.includes(char)) {
            substring = substring.slice(substring.indexOf(char) + 1)
          }     
          
          substring += char ;

            if (substring.length > longestsubstring.length) {
              longestsubstring = substring;
            }
          }

        const longestsubstringName =  longestsubstring;
        console.log("Longest substring name : ", longestsubstringName);
        console.log(`The answer is "${longestsubstringName}", with the length of ${longestsubstring.length}`);

          return longestsubstring.length;
   }

let result = lengthOfLongestSubstring(string);
console.log(result);

