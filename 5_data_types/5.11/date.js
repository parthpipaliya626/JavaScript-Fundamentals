// Date andd Timee

// let now = new Date();
// console.log(now);     // show curent date/time by timezone of your device system

// 0 means 01.01.1970 UTC+0
let Feb02_2002 = new Date(1);
console.log( Feb02_2002 );

// now add 24 hours, get 02.01.1970 UTC+0
 Feb02_2002 = new Date(24 * 3600 * 1000);
console.log( Feb02_2002 );


// Access date components
/*
Date object:
    getFullYear()
    getMonth()
    getDate()
    getHours(), getMinutes(), getSeconds(), getMilliseconds()
    getDay(),
    getTime(),
    getTimezoneOffset()



Setting date components:
        The following methods allow to set date/time components:

        setFullYear(year, [month], [date])
        setMonth(month, [date])
        setDate(date)
        setHours(hour, [min], [sec], [ms])
        setMinutes(min, [sec], [ms])
        setSeconds(sec, [ms])
        setMilliseconds(ms)
        setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

let today = new Date();

today.setHours(0);
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp

// 31 Dec 1969
// Dec31_1969 = new Date(24 * 3600 * 100);
// console.log( Dec31_1969 );      // 1970-01-01T02:24:00.000Z




