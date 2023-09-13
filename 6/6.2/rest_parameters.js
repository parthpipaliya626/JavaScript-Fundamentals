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
}

showName("Raju", "Thummar", "Krunal", "Vora")