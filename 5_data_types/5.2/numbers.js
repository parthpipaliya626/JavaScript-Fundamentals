// Numbers

/* 
    two types of
    1. Regular numbers
    2. BigInt numbers   
    
    They are sometimes needed because a regular integer number can’t safely 
    exceed (2(53)-1) or be less than -(253-1), as we mentioned earlier in the chapter Data types.
     As bigints are used in few special areas, we devote them a special chapter BigInt.
*/ 

let billion = 1000000000;
 
// we also can use underscore _ as the separator:

 billion = 1_000_000_000;  // like we write 1e9 means 9 time zero

/* 
  Here the underscore _ plays the role of the “syntactic sugar”, 
    it makes the number more readable. The JavaScript engine simply ignores _ between digits,
     so it’s exactly the same one billion as above.


*/


 billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

console.log( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)


 // e multiplies the number by 1 with the given zeroes count

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000



// 1 microsecond ( one millionnth of a second)
let mсs = 0.000001;


// Just like before, using "e" can help. If we’d like to avoid writing 
//     the zeroes explicitly, we could write the same as:

let mcs = 1e-6; // five zeroes to the left from 1



// a negative number after "e" means a division by 1 with the given number of zeroes:
// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times




