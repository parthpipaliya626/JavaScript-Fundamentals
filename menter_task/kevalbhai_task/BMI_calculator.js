// BMI Calculator

let weight = a = 90;
let height = b = 1.65;
 

 let BMI = ( a / (b * b) );
 console.log(`BMI = ${BMI} kg/(m*m)`);
  

   if(BMI < 16) {
    console.log("Severe Thinness");
   } else if (BMI < 17) {
    console.log("Moderate Thinness");
   } else if (BMI < 18.5)  {
    console.log("Mild Thinness");
   } else if (BMI < 25)  {
    console.log("Normal");
   } else if (BMI < 30)  {
    console.log("Overweight");
   } else if (BMI < 35)  {
    console.log("Obese Class I");
   } else if (BMI < 40)  {
    console.log("Obese Class II");
   } else if (BMI > 40) {
    console.log("Obese Class III");
   }
   




   














