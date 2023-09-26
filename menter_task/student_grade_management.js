/* Student Grade Management  */

const students = [
          { id: 1, name: 'Parth', scores: [90, 90, 98, 92] },
          { id: 2, name: 'Dhruvik', scores: [78, 86, 80, 88] },
          { id: 3, name: 'Urva', scores: [92, 94, 80, 96] }              
    ];

//----------------------------------------------------------------------------------------------

// console.table(students);
 console.log("Task - 1 : Calculate and log the average score for each student.");    
 console.log();


// here, we calculate average score for each students
const averageStudents = students.reduce((acc, student) => {
     const sum = student.scores.reduce((sum, score) => sum + score, 0);
     console.log(`${student.name} : total score = ${sum}`);     // print total of score
     const average = sum / student.scores.length;
     console.log(average);          // print average of each student
     acc[student.name] = average;
     return acc;
}, {});

// here, log average score for each student
 console.log();       // space maintain in terminal
console.log(averageStudents);       // student name with averagescore in object

//----------------------------------------------------------------------------------------------
console.log();
console.log("Task - 2 : To use map to create a new array that contains objects with the student's name and their highest score.");


const highestScores = students.map((student) =>
    ({ 
     name : student.name,
     highestScores: Math.max(...student.scores, ),
     //  LowestScores: Math.min(...student.scores),
    }));

    console.log(highestScores);     // print each student name with their higher score (like a key, value pair)


//----------------------------------------------------------------------------------------------

console.log();
console.log("Task - 3 : Use filter to create a new array that includes only students who have scored 90 or above on any test.");

const studenthighScores = highestScores.filter((student) => student.highestScores >= 80);
console.log(studenthighScores);

//----------------------------------------------------------------------------------------------

console.log();
console.log("Task - 4 : Use reduce to find the student with the highest average score");

// // Calculate the average score for each student.
// const averageStudents = students.reduce((acc, student) => {
//      const sum = student.scores.reduce((sum, score) => sum + score, 0);
//      const average = sum / student.scores.length;
//      acc[student.name] = average;
//      return acc;
//    }, {});

const highestAverageScore = Object.entries(averageStudents).reduce((acc, [name, average]) => {
     if (average > acc.average) {
          acc.name = name;
          acc.average = average;
     }
     return acc;
}, {name:"", average: ""});

console.log(highestAverageScore);

//----------------------------------------------------------------------------------------------

console.log();
console.log("Task - 5 : Add a new student to the array.");
students.push({  id: 4, name: 'Raju', scores: [90, 90, 98, 92] });
students.push({  id: 5, name: 'Krunal', scores: [70, 90, 98, 92] });
students.push({  id: 6, name: 'Utsav', scores: [70, 80, 96, 92] });
console.log(students[0]);


//----------------------------------------------------------------------------------------------

console.log();
// console.table(students);
console.log("Test - 6 : Remove a student with a specific ID from the array.");

const studentIndex = students.findIndex((student) => student.id === 4);    // remove id number
console.log(studentIndex);
console.log(students.splice(studentIndex, 1), "----------------------------" )  // how many id delete from 4

console.log(students);


//----------------------------------------------------------------------------------------------

console.log();
console.log("Test - 7 : Sort the students by their average scores in descending order and log the sorted list. ");

// Calculate the average score for each student.

// const averageStudents = students.reduce((acc, student) => {
//      const sum = student.scores.reduce((sum, score) => sum + score, 0);
//      const average = sum / student.scores.length;
//      acc[student.name] = average;
//      return acc;
//    }, {});

const sortedStudents = students.sort((studentA, studentB) => {
     const averageA = averageStudents[studentA.name];
     const averageB = averageStudents[studentB.name];
     return averageB - averageA;
});

console.log(sortedStudents);



//----------------------------------------------------------------------------------------------
console.log();
console.log("task - 8 : Use forEach to print a congratulatory message for each student who scored above 95.");



// const highestScores = students.map((student) => ({
//      name: student.name,
//      highestScores: Math.max(...student,scores),
// }));

highestScores.forEach((student) => {
     if (student.highestScores > 95) {
          console.log(`Congretulations to ${student.name} for scoring ${student.highestScores} on the test!`);
     }
});

// ----------------------------------------------------------------

