// Comparing strings
/* 
       65 to 90 =>    A to Z character
       97 to 122 =>    a to z character
       91 to 96 =>     [ / ] ^ _ `       <= this 6 character value
*/
// As we know from the chapter Comparisons,
//  strings are compared character-by-character in alphabetical order.

// str.codePointAt(pos)

// different case letters have different codes
console.log( "Z".codePointAt(0) ); // 90
console.log( "Y".codePointAt(0) ); // 89
console.log( "A".codePointAt(0) ); // 65

console.log( "a".codePointAt(0) ); // 97

console.log( "z".codePointAt(0) ); // 122
console.log( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)
 

// string.fromCodePoingt(code)  

console.log( String.fromCodePoint(90) ); // Z
console.log( String.fromCodePoint(127) ); // 
console.log( String.fromCodePoint(128) ); //  ¡
console.log( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)


//  

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ







