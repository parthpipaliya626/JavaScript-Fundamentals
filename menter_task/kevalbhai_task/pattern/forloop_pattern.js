// Write a JS code to print a pattern using for loop
console.log("8 * 8 ");

let max = 8;

for(let i = 1; i <= max; i++) {
    
    let pattern = '';
    for(let j = 1; j <= max ; j++ ) {
        pattern +=  "* "
    }
    console.log(pattern);
}


console.log("------------------------------left to right triangle");



 max = 8;

for(let i = 1; i <= max; i++) {
    
    let pattern = '';
    for(let j = 1; j <= i ; j++ ) {
        pattern +=  "* "
    }
    console.log(pattern);
}


console.log("---------------------------------Right to left triangle");

max = 8;
for(let i = 1; i <= max; i++) {
    
    let pattern = '';
    for(let j = 1; j <= (max - i)+ 1 ; j++ ) {
        pattern +=  "* "
    }
    console.log(pattern);
}















