console.log("This is date and time tutorial");
// example - 1:
let now  = new Date();
console.log(now);      //  2023-09-05T07:20:30.201Z    (in terminal)
/* Tue Sep 05 2023 12:51:42 GMT+0530 (India Standard Time)      in browser  */

// example - 2:
let dt = new Date(1000);
console.log(dt);       // 1970-01-01T00:00:01.000Z     (in terminal)
/* Thu Jan 01 1970 05:30:01 GMT+0530 (India Standard Time)     in browser */


// let newDate = new Date("2029-09-30");
// console.log(newDate);      // 2029-09-30T00:00:00.000Z     (in terminal)

// example - 3:
// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(2002, 1, 2, 3, 15, 10, 10);
console.log(newDate);            // 2002-02-01T21:45:10.010Z
/* Sat Feb 02 2002 03:15:10 GMT+0530 (India Standard Time)    in browser  */

let yr = newDate.getFullYear();
console.log("The year is :", yr);

let month = newDate.getMonth();
console.log("The month is :", month);

let dat = newDate.getDate();
console.log("The date is :", dat);

 let hours = newDate.getHours();
console.log("The hours is :", hours);

console.log(newDate);    //  Sat Feb 02 2002 03:15:10 GMT+0530 (India Standard Time)
 newDate.setDate(4);        // Mon Feb 04 2002 03:15:10 GMT+0530 (India Standard Time)
 newDate.setMinutes(38);   // Mon Feb 04 2002 03:38:10 GMT+0530 (India Standard Time)
 console.log(newDate);   
  
  setInterval(updateTime, 1000);
  function updateTime() {
    time.innerHTML = new Date();
  }






