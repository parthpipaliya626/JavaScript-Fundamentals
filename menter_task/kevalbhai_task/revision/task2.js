function Student(firstname, lastname, age) { 
    this.firstname = firstname,
     this.lastname = lastname,
      this.age = age
    };


 let student1 = new Student("Raj", "Soni", 21);
 let student2 = new Student("Utsav", "Thummar", 22);


 
//  console.log(delete (student1.firstname)); 
 console.log(student1.firstname);

  student1.firstname = "Keval";
  console.log(student1);
//   student1.lastname = "Pipaliya";
//   student1.age = 21;
//   console.log(student1);
// console.log(student2);

