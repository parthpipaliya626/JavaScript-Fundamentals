// best for understanding how to loop iteration in this task

const s = "pwwkew";
let string = s.split(' ').join('');
console.log("Input : ", string);      //  abcabcbb

function lengthOfLongestSubstring(string) {
  let longestSubstring = 1;
  let substring = string[0];


  for (let i = 1; i < string.length; i++) {
      const char = string[i];

      console.log("first : ", substring);           // a 
      console.log("next check : ", char);          // b
      if (substring.includes(char)) {
            substring = substring.slice(substring.indexOf(char) + 1);
            console.log(  "remove first same char -- : " , substring);                   // when any char same then remove first old char
      } 

      substring += char;        // when char is not same then ++
      console.log( "add++ : ", substring);
      console.log();
    
      if (substring.length > longestSubstring) {
            longestSubstring = substring.length;
      }
  }  
  console.log("longest substring : " , substring);           // abc
     return longestSubstring;
}

 console.log("longest substring length : ", lengthOfLongestSubstring(string));         // 3






