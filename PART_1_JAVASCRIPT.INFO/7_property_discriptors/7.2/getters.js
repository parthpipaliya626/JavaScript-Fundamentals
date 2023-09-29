// getters property


let user = {
    name: "Parth",
    surname: "Pipaliya",

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user.fullName);






 user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  user.fullName = "Alice Cooper";
  
  console.log(user.name); // Alice
  console.log(user.surname); // Cooper





  // smarter getters/setters




user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};

user.name = "Parth";

console.log(user.name);

user.name = "";
// console.log(user.name);




