/* const classes = ` header ${ 
      isLargeScreen() ? "" : item1.isCollapsed ? "icon-expander" : "icon-collapser"
 } `;


 const calsses = `header ${
     isLargeScreen() ? "" : item1.isCollapsed ? "icon-expander" : "icon-collapser"
 }`;

  */

 const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
     const failureItems = [];
    for(let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class= "text-warning">${arr[i]}</li>`);
    } 
    // Only change code above this line
    return failureItems;
  }
  const failuresList = makeList(result.failure);
  console.log(failuresList);

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
  };


function topSalary(salaries) {
   let maxSalary = 0;
   let maxName = null;

   for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
        console.log(name);
    }
   }return maxName;
}

topSalary(salaries);

let today = new Date()    // 2023-12-20T10:12:09.246Z
console.log(today);
console.log(Date());    // Wed Dec 20 2023 15:42:09 GMT+0530 (India Standard Time)
console.log(today.getFullYear());    //  2023
console.log(today.getMonth());       //  11
console.log(today.getDate());        //  20
console.log(today.getHours());       //  15
console.log(today.getUTCHours());    //  10
console.log(today.getMinutes());     //  42
console.log(today.getSeconds());     //  9
console.log(today.getMilliseconds());//  246
console.log(today.getDay());         //  3
console.log(today.getTime());         //  3
today.setHours(0);
console.log(today);
today.setHours(0, 0, 0, 0);
console.log(today);



let array =  ["Parth", "Dhruvik", "Foram", "Urva"];
for (let char of array) {
  // console.log(`${char} : ${char.length} `);
}
console.log();
for (let char in array) {
  // console.log(`${array[char]} : ${array[char].length} `);
}

// array.forEach((char) => console.log(`${char} : [${char.length}] `));
// array.filter((char) => console.log(`${char} : ${char.length} `));
console.log(array.map((char) => (char.length)));
console.log();







