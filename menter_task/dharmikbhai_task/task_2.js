// let find cristmus day how to far

let day = 1000*60*60*24;
let today = new Date();
let Christmas = new Date(2023, 11, 25);      // fix  (11 =  month count 0 to 11)
let result = Math.ceil((Christmas - today) / day);
console.log(result);


// math.ceil find today day is how to pass half or full at time