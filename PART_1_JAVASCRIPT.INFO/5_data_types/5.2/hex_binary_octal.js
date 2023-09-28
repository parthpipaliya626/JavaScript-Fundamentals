// Hexadecimal numbers


// Numeric constants, preceded by 0x, are interpreted as hexadecimal: 0xFF = 255.
console.log( 0xff ); // 255
console.log( 0xFF ); // 255 (the same, case doesn't matter)




// Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log( a == b ); // true, the same number 255 at both sides




// There are only 3 numeral systems with such support. For other numeral systems, 
//    we should use the function parseInt (which we will see later in this chapter).


// toString(base)


let num = 255;

console.log( num.toString(16) );    // ff
console.log( num.toString(2) );     // 11111111


/* 
    The base can vary from 2 to 36. By default it’s 10.

  Common use cases for this are:

        base=16 is used for hex colors, character encodings etc,
        digits can be 0..9 or A..F.

        base=2 is mostly for debugging bitwise operations,
        digits can be 0 or 1.

        base=36 is the maximum, digits can be 0..9 or A..Z. 
        The whole latin alphabet is used to represent a number.
        A funny, but useful case for 36 is when we need to turn a 
        long numeric identifier into something shorter, for example to make a short url.
        Can simply represent it in the numeral system with base 36:

*/
console.log( 123456..toString(36) );  // 2n9c




