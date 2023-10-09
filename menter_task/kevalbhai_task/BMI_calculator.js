// BMI Calculator

let weight = a = 90;
let height = b = 1.65;
 

 let BMI = ( a / (b * b) );
 console.log(`BMI = ${BMI} kg/(m*m)`);



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
  




  //  if(BMI < 16) {
  //   console.log("Severe Thinness");
  //  } else if ( BMI < 17) {
  //   console.log("Moderate Thinness");
  //  } else if ( BMI < 18.5)  {
  //   console.log("Mild Thinness");
  //  } else if ( BMI < 25)  {
  //   console.log("Normal");
  //  } else if ( BMI < 30)  {
  //   console.log("Overweight");
  //  } else if ( BMI < 35)  {
  //   console.log("Obese Class I");
  //  } else if ( BMI < 40)  {
  //   console.log("Obese Class II");
  //  } else if ( BMI > 40) {
  //   console.log("Obese Class III");
  //  }
   


   

  let array = [1, 2, 3, 4];
  let rindex = 2;

  function rotation(array, rindex) {
    let array2 = [];
    for(let i = 0; i < array.length; i++) {
     array2[(i + rindex) % array.length] = array[i]
    }
    return array2;
  };

console.log(rotation(array, rindex));

