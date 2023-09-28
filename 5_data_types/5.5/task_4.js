// split and join

// here we split by a comma followed by space:
let names = 'raju, utsav, Krunal';

let arr = names.split(', ');

for (let name of arr) {
    console.log( `A message to ${name}.` ); 
}


 arr = 'raju, utsav, Krunal'.split(', ', 3);
 console.log(arr);



// tunk ma type karela array ma kai sudhara vadhara karva hoy tyare split thi changes kari sakay
// jem k space mukvi and koma related baki biju kai add karvu hoy to e pan 




