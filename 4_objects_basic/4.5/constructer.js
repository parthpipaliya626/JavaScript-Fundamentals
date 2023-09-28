// Constructors in javascript  code with harry #77 video

class RailwayForm {
    constructor (givenname, trainno, address) {
      console.log ('CONSTRUCTOR CALLED...' + givenname + ' ' + trainno);
      this.name = givenname;
      this.trainno = trainno;
      this.address = address;
    }
  
      preview () {
          console.log (
          this.name +
              ': Your form is for train number: ' +
              this.trainno +
              ' and your address is ' +
              this.address
          );
      }
  
          submit () {
              console.log (
              this.name + ': Your form is submitted for train number: ' + this.trainno
              );
          }
  
          cancel () {
              console.log (
              this.name + ': This form is cancelled for train number: ' + this.trainnno
              );
              this.trainno = 0;
          }
      };
  
  // create & fill a form for parth
  
  let parthForm = new RailwayForm (
    'Parth',
    354457,
    'Shivrajgadh, rajkot - 360311'
  );
  
  // no need to fill the form with parth's details
  // parthForm.fill()
  
  // create & fill a forms for Raju
  let rajuForm1 = new RailwayForm ('Raju', 354458);
  let rajuForm2 = new RailwayForm ('Raju', 354459);
  
  parthForm.preview ();
  parthForm.submit ();
  rajuForm1.submit ();
  rajuForm2.submit ();
  rajuForm1.cancel ();
  
  
  // constructor function
  
  function User(name) {
      this.name = name;
      this.isAdmin = false;
    }
    
    let user = new User("Jack");
    
    console.log(user.name); // Jack
    console.log(user.isAdmin); // false
  
  
  //   That’s the main purpose of constructors – to implement reusable object creation code.
  
  
  
  
  // new function() { ... }
  
  //If we have many lines of code all about creation of a single complex object,
  //  we can wrap them in an immediately called constructor function, like this:
  
  // create a function and immediately call it with new
  let user1 = new function() {
      this.name = "John";
      this.isAdmin = false;
    
      // ...other code for user creation
      // maybe complex logic and statements
      // local variables etc
    };