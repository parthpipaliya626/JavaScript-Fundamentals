// Hidden properties

let user = {
    name: "Parth"
};

let id = Symbol("id");

user[id] = 1;

console.log( user[id] );  // 1 ,    we can access the data using the symbol as the key




