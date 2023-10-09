/// rewrite if into switch
const prompt = require('prompt-sync')();



let a = +prompt('a?', '');

// if (a == 0) {
//     console.log( 0 );
// } if (a == 1) {
//     console.log( 1 );
// }

// if (a == 2 || a == 3) {
//     console.log( '2,3' );
// }



switch(a) {
    case (a == 0) :
         console.log( 0 );
       break;

    case (a == 1) :
         console.log( 1 );  
          break;

    case (a == 2 || a ==  3) : 
         console.log( '2, 3' );   
          break;
}




switch(a) {
    case 0 :
         console.log( 0 );
       break;

    case 1:
         console.log( 1 );  
          break;

    case 2:
        case 3 : 
         console.log( '2, 3' );   
          break;
}