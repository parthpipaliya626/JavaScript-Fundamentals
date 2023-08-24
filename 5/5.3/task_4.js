/* str.substr(start [, length])

    Returns the part of the string from start, with the given length.
    In contrast with the previous methods, this one allows us to specify the length instead of the ending position: 



    stringify
012345678 (Positive positions)
876543210 (Negative positions)
*/

let str = "stringify"; 
console.log( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
// The first argument may be negative, to count from the end:
// in this case value is position after 2 in positive character
 str = "stringify";
console.log( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters
 str = "stringify";
console.log( str.substr(-8, 2) ); // 'tr', from the 4th position get 2 characters
 str = "stringify";
console.log( str.substr(4, 2) ); // 'ng', from the 4th position get 2 characters