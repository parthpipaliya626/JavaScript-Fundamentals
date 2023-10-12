/* // The "for..in" loop

const { keyIn } = require("readline-sync");

let user = {
    name : "Parth",
    age : 30,
    isAdmin : true
};

for (key in user ) {
    console.log(key);
}

 */



for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0)continue;
    console.log(i);
}













