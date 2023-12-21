

let myJSON = [{
    "Boss" : "John",
    "Department" : "Finance",
    "Department id": 1,
    "employees":[
        {
            "name":"Shaun",
            "age": 30
        },
        {
            "name":"Paul",
            "age" : 27
        }
    ]
},  {
    "Boss" : "Raju",
    "Department" : "Finance",
    "Department id": 2,
    "employees":[
        {
            "name": "Utsav",
            "age": 22
        },
        {
            "name":"Krunal",
            "age" : 22
        }
    ]
}  ];


// console.log(myJSON[0]);
// console.log(myJSON[0]["employees"]);

// console.log(myJSON.valueOf(0));



/* let str = 123;
 let sr111 = str.toString(2);
 console.log(typeof sr111); */

/* 
 // Object of objects
const data = {
    person1: {
      name: "John",
      age: 25,
      address: {
        city: "New York",
        zip: "10001"
      }
    },
    person2: {
      name: "Alice",
      age: 30,
      address: {
        city: "San Francisco",
        zip: "94105"
      }
    }
  };
  
  // Accessing data
  console.log(data.person1.name); // Output: John
  console.log(data.person2.age);   // Output: 30
  console.log(data.person1.address.city); // Output: New York
   */



  let str = 'Widget with id';

console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
console.log( str.indexOf("with") ); // 7, not found, the search is case-sensitive

console.log( str.indexOf("id") );  // 1 , why ??????

let substr = str.indexOf("id");
console.log(substr);     // 1 
