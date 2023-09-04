// Date andd Timee

let now = new Date();
console.log(now);     // show curent date/time by timezone of your device system

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );


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


