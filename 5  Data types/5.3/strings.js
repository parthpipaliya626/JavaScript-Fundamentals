// Strings can be enclosed within either single quotes, double quotes or backticks:

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

// Another advantage of using backticks is that they allow a string to span multiple lines:



// Strings are immutable

let str = 'Hi';

str[0] = 'h'; // error
console.log( str[0] ); // doesn't work

tr = 'Hi';

str = 'h' + str[1]; // replace the string

console.log( str ); // hi


// changing the case

/*  method toLowerCase() and toUpperCase() change the case:   */

console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface


// Or, if we want a single character lowercased:
console.log( 'Interface'[0].toLowerCase() ); // 'i'



// Searching for a substring
// The first method is str.indexOf(substr, pos).

let str1 = 'Widget with id';

console.log( str1.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str1.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( str1.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)




// Accessing characters

let str2 = `Mahadev`;

// the first character
console.log( str2[0] );  //M
console.log( str2.at(0) );  //M

// the last character
console.log( str2[str2.length - 1] );   // v
console.log( str2.at(-1) );  // v
console.log( str2.at(-1.9) );  // v

console.log( str2[-2] );   // undefined

console.log( str.at(-2) );      //  h





let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };

  console.log(user); // hint: string -> {name: "John"}


  // Strings are immutable

  let str3 = 'Hi';

  str3[0] = 'h';  // error
  console.log( str3[0] );  //  H




  let str4 = 'Hi';

  str4 = 'h' + str4[1]; // replace the string
  
  console.log( str4 ); // hi




