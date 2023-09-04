// The rest '...'

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar
// Further items aren't assigned anywhere





// the rest” using three dots "...":



 [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one

console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2


// we can use any other variable name in place of rest, that also work in destructuring assignment

 [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(titles);



// default values



let [name = "Raju", surname = "Thummar"] = ["Utsav"];

console.log(name);
console.log(surname);



// runs only prompt for surname
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  rl.question('Enter your surname: ', (surname) => {
    rl.close();

    // Process the input
    name = name || "Julius"; // Default to "Julius" if no input provided
    console.log("Name:", name);
    console.log("Surname:", surname);
  });
});

