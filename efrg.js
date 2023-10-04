let students = [
  { firstName: 'Parth', lastName: 'Pipaliya', age: 21, joinedDate: 'july 15, 2023',
  },
  { firstName: 'Utsav', lastName: 'Thummar', age: 22, joinedDate: 'January 15, 2023',
  },
  { firstName: 'Krunal', lastName: 'Vora', age: 22, joinedDate: 'January 24, 2023',
  },
];


// operation in change property value
students[1].age = 24;
students[0].joinedDate = "November 5, 2023";

// console.table(students);


// operation with ascending & descending order by age

 students.sort((a, b) => a.age - b.age);
//  console.table(students);        // ascending order

 students.sort((a, b) => b.age - a.age);
//  console.table(students);       // discending order


 // operation ascending , descending by joineddate

 students.sort((a, b) => b.joinedDate - a.joinedDate);
//  console.table(students);  
 

 students.forEach(student => { 
  console.log(`FirstName: ${student.firstName} `);
  for(let char of student.firstName) {
    return console.log(char);
  }

  // console.log(`LastName: ${student.lastName} `);
  // const fullName = students.firstName + students.lastName;
  // return fullName;

});
 console.table(students);  





 