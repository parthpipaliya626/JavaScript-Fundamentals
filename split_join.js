
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




/*

let sentence = "Hello my name is Parth Pipaliya";
let word = sentence.split(" ").join(' ');        //  Hello my name is Parth Pipaliya
console.log(word);

let chars = sentence.split(' ');
console.log(chars);                             // [ 'Hello', 'my', 'name', 'is', 'Parth', 'Pipaliya' ]

let ArraySentence = sentence.split("   ");      // [ 'Hello my name is Parth Pipaliya' ]
console.log(ArraySentence);

let word1 = sentence.split(" ").sort();        // [ 'Hello', 'Parth', 'Pipaliya', 'is', 'my', 'name' ]
console.log(word1);

let word2 = chars.join(' ');
console.log(word2);                            //   Hello my name is Parth Pipaliya



let x = sentence.split(' ').sort().join(' ');
console.log(x);                           // Hello Parth Pipaliya is my name



*/



