
// let x = "  h  ell o";
// console.log(x.split(' ').join(''));             // hello     // right output

// without variable declaration

/*
console.log(x.split());                         //  ['  h  ell o']
console.log(x.split(''));                       //  [ ' ', ' ', 'h', ' ', ' ', 'e', 'l', ' ', 'o' ]
console.log(x.split(' '));                      //  [ '', '', 'h', '', 'ell', 'o' ]

console.log(x.split(' ').filter(Boolean));      //  [ 'h', 'ell', 'o' ]

console.log(x.split().join());                  //  h  ell o
console.log(x.split('').join());                //  , ,h, , ,e,l,l, ,o
console.log(x.split(' ').join());               //  ,,h,,ell,o


console.log(x.split().join(''));                 //   h  ell o
console.log(x.split('').join(''));               //   h  ell o
console.log(x.split(' ').join(''));              //   hello       // this is right output

console.log(x.split().join(' '));                 //   h  ell o
console.log(x.split('').join(' '));               //     h    e l l   o
console.log(x.split(' ').join(' '));              //   h  ell o       

/*




/* example 2 */






let sentence = "Hello my name is Parth Pipaliya";
let word = sentence.split(" ").join(' ');        // [ 'Hello', 'my', 'name', 'is', 'Parth', 'Pipaliya' ]
console.log(word);
let words = sentence.split("   ");        // [ 'Hello my name is Parth Pipaliya' ]
console.log(words);





