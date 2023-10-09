// BMI Calculator

const prompt = require('prompt-sync')({sigint: true});     // terminal exit


const weight = prompt(' What is your Weight ? ');     // take a weight
const height = prompt(' What is your height? ');      // take a height

 
 let BMI = ( weight / ((height * height)/10000) );     // apply BMI operation
 console.log(`Your BMI = ${BMI} kg/(m*m)`);   // float full value
      console.log();
 console.log(`Your BMI = ${BMI.toFixed(2)} kg/(m*m)`);     // float first two value
     console.log();

/* 
// 1.  Switch case statement
// console.log("Use switch case Statement here :  ");


switch(true) {
  case (BMI < 16) :
    console.log("Severe Thinness");
    break;
    case (BMI < 17) :
      console.log("Moderate Thinness");
         break;
      case (BMI < 18.5) :
      console.log("Mild Thinness");
        break;
      case (BMI < 25) :
      console.log("Normal");
        break;
      case (BMI < 30) :
      console.log("Overweight");
        break;
      case (BMI < 35) :
      console.log("Obese Class I");
        break;
      case (BMI < 40) :
      console.log("Obese Class II");
        break;
      case (BMI > 40) :
      console.log("Obese Class III");
        break;
        default : 
        console.log("BMI calculator is out of range...");
};
  
 */

console.log();
// 2.   if else condition
console.log("Use if else condition here :  ");


   if(BMI < 16) {
    console.log("Severe Thinness");
   } else if ( BMI < 17) {
    console.log("Moderate Thinness");
   } else if ( BMI < 18.5)  {
    console.log("Mild Thinness");
   } else if ( BMI < 25)  {
    console.log("Normal");
   } else if ( BMI < 30)  {
    console.log("Overweight");
   } else if ( BMI < 35)  {
    console.log("Obese Class I");
   } else if ( BMI < 40)  {
    console.log("Obese Class II");
   } else if ( BMI > 40) {
    console.log("Obese Class III");
   } 
   else {
  console.log("Out of range....");
}



BMI (1 < 10 ) ? "okk" : "not okk";

