// Autocorrection


// in console not correct items
// example - 1 :

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date);   //  2013-01-31T18:30:00.000Z
// Really ...is 1st Feb 2013! this type as per javascript.info 


// example - 2 :

 date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log( date ); //   2016-02-29T18:30:00.000Z
//  Really    1 Mar 2016   as per javascript.info


// example - 3 :

date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
console.log( date );      // 2015-12-31T18:30:00.000Z

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
console.log( date );     // 2015-12-30T18:30:00.000Z
//  31 Dec 2015   really this output aavvu joye