
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


/* example - 3  */

// Split Array into chunks in JavaScript

/*
function chunkArray(myArray, chunkSize) {
    const results = [];
    let index = 0;
    while (index < myArray.length) {
        results.push(myArray.slice(index, index + chunkSize));
        index += chunkSize;
         console.log(index);
    }
    return results;
}

let arrayData = [1, 2, 3, 4, 5, 6];
console.log(chunkArray(arrayData, 1));       // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ]
console.log(chunkArray(arrayData, 2));       // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(chunkArray(arrayData, 3));       // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(chunkArray(arrayData, 4));       // [ [ 1, 2, 3, 4 ], [ 5, 6 ] ]
console.log(chunkArray(arrayData, 5));       // [ [ 1, 2, 3, 4, 5 ], [ 6 ] ]
console.log(chunkArray(arrayData, 6));       // [ [ 1, 2, 3, 4, 5, 6 ] ]
console.log(chunkArray(arrayData, 7));       // [ [ 1, 2, 3, 4, 5, 6 ] ]


*/

// example - 4

/*
function chunkArray(myArray, chunkSize) {
    const results = [];
    // let index = 0;
    while (myArray.length) {
        results.push(myArray.slice(0, chunkSize));
        myArray = myArray.slice(chunkSize);
    }
    return results;
}

let myArray = [1, 2, 3, 4, 5, 6];
console.log(chunkArray(myArray, 3));     // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]



*/



let x = "       tttnhnnnjhjn      h   l ll  oooooo )))) *** @@@@@@"
let y = x.split(' ').join('');
console.log(y);
// let z = y.slice(0, 10);
//     console.log(z);

    







// "tttnhnnnjhjnhllloooooo"





