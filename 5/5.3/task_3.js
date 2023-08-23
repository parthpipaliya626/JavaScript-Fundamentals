//  Getting a substring

// str.slice(start [, end])  Returns the part of the string from start to (but not including) end.

let str = "stringify";
console.log( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

 str = "stringify";
console.log( str.slice(2) ); // 'ringify', from the 2nd position till the end


 str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
console.log( str.slice(-4, -1) ); // 'gif'




//  str.substring(start [, end])

 str = "stringify";

// these are same for substring
console.log( str.substring(2, 6) ); // "ring"
console.log( str.substring(6, 2) ); // "ring"

// ...but not for slice:
console.log( str.slice(2, 6) ); // "ring" (the same)
console.log( str.slice(6, 2) ); // "" (an empty string)



// str.substr(start [, length])




