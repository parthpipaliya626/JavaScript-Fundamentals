// Constructor mode test: new.target

function User(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
  
    this.name = name;
  }
  
  let john = User("John"); // redirects call to new User
  console.log(john.name); // John