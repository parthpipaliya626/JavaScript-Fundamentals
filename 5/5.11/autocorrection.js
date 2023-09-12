// Autocorrection


// in console not correct items
// example - 1 :

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date);   //  2013-01-31T18:30:00.000Z       in terminal output
// 1st Feb 2013! this type as per javascript.info 


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
//  31 Dec 2015   really this output aavvu 





// Date to number, date diff


let start = new Date(); // start measuring time
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date(); // end measuring time
console.log( `The loop took ${end - start} ms` );   // The loop took 35 ms
// The loop took 4 ms          in browser 





// Date.now()


start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

 end = Date.now(); // done

console.log( `The loop took ${end - start} ms` ); // subtract numbers, not dates



let parth = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

console.log(parth);


let hour = 11;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("The office is closed.")
}


