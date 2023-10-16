// Longest substring without repeating characters
let s = "abcabcbb";
let t = "pwwkew";

let lengthOfLongestSubstring = function(s) {
  if(!s) {
    return 0;
  }

  let end = 0;
  let start = 0;
  let maxlength = 0;

  const uniqueCharacters = new Set();

  while(end < s.length) {

    if(!uniqueCharacters.has(s[end])){
      uniqueCharacters.add(s[end]);             // a
      end++;
      maxlength = Math.max(maxlength, uniqueCharacters.size);
    } else {
      uniqueCharacters.delete(s[start]);
      start++;
    }

  }
   return maxlength;

}; 


const res = lengthOfLongestSubstring(s);
console.log(res);
console.log(uniqueCharacters);
const result = lengthOfLongestSubstring(t);
console.log(result);

// working

/*
 
// Final string  ->  abcacbbb  -> 7 (length)
start 0
End 0

// abcabcbb
start 0
end 2
max 3

// bcabcbb     - a
start 1
end 3      
max 3

// cabcbb       - b
start 2
end 4      
max 3

// abcbb       - c
start 3
end 5      
max 3

// abcb
start 4
end 6
max 3

// abc
start 5
end 7
max 3





*/