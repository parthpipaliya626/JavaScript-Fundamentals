// example 1 
/*

const numbers = [3, 6, 5, 2, 7];
const sum = numbers.reduce((a, b) => {
    return a + b;
}, 0);
console.log(sum);      // 23
 
*/


// example 2

const peoples = [ 
    { name: "Parth", age: 21 }, 
    { name: "Krunal", age: 24 }, 
    { name: "Utsav", age: 23 }, 
];

const oldAge = peoples.reduce((a, b) => {
      let high =  age(a) > age(b);
      console.log(high);
}); 
console.log(oldAge);







