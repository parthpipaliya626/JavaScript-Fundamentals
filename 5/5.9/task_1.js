// Sum of properties

function sumSalaries(salaries) {
      let sum = 0;
      for (let salary of Object.values(salaries)) {
        sum += salary;
      }
      return sum;      // 150000
}

let salaries = {
    "Raju" : 50000,
    "Krunal" : 50000,
    "Utsav" : 50000,
};

console.log( sumSalaries(salaries));

