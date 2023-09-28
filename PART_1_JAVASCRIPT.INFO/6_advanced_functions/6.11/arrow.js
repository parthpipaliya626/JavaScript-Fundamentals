let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    // arrow function
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    },

  /// foreach
    showList1() {
        this.students.forEach(function(student) {
          // Error: Cannot read property 'title' of undefined
          console.log(this.title + ': ' + student);
        });
      }

  };
  
  group.showList();
  group.showList1();






  // arrow function have no "arguments"


  function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  
  function sayHi(who) {
    console.log('Hello, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John"); // Hello, John after 2 seconds