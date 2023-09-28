// Rest parameters and spread syntax

// Rest parameters



function sum(a, b, c) {
    return a + b + c;
}

console.log( sum (1, 2, 3, 4, 5) );    // 6



function showName(firstName, lastName, ...titles) {
   console.log(firstName + ' ' + lastName);

   console.log( titles[0] );
   console.log( titles[1] );
   console.log( titles.length );
}

showName("Raju", "Thummar", "Krunal", "Vora");



function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6










