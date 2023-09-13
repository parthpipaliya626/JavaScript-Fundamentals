let user = {
    name: "Raju",
    age: 21,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};

console.log(user);




let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);


console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN



let i = 3;
while (i) 
console.log(i--);


 user = {
    sayHi() {
        console.log("Hello");
    },
    [Symbol("id")]: 123,
    something: undefined
 };

 console.log(JSON.stringify(user));      // {}  (empty object because ignored all function properties)



 

