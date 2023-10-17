// Write a JS code to print a pattern using for loop



let max = 9;

for(let i = 1; i <= max; i++) {
    
    let pattern = '';
    for(let j = 1; j <= (max - 1) + 1 ; j++ ) {
        pattern +=  "* "
    }
    console.log(pattern);
}













