//  parseInt and parseFloat

console.log( +"100px" );   // NaN


console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, only the integer part is returned
console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

console.log( parseInt('a123') ); // NaN, the first symbol stops the process

console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('ff', 16) ); // 255, without 0x also works

console.log( parseInt('2n9c', 36) ); // 123456



// other math functions

console.log( Math.random() ); // 0.1234567894322
console.log( Math.random() ); // 0.5435252343232
console.log( Math.random() ); // ... (any random numbers)

// Math.max(a, b, c...) and Math.min(a, b, c...)


console.log( Math.max(3, 5, -10, 0, 1) ); // 5
console.log( Math.min(1, 2) ); // 1


// Math.pow(n, power)

console.log( Math.pow(2, 10) ); // 2 in power 10 = 1024



// function Bike(model,color){
//     this.model = model,
//     this.color = color,
//  this.getDetails = function(){
//       return this.model+' bike is '+this.color;
//     }
//  }
//  var bikeObj1 = new Bike('BMW','BLACK');
//  var bikeObj2 = new Bike('BMW','WHITE');
//  console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
//  console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
//  console.log(bikeObj1,bikeObj2) //attacheced below image as output




 function Bike(model,color){
    this.model = model,
    this.color = color
  }
  Bike.prototype.getDetails = function(){
   return this.model+" bike is "+this.color;
  }
  var bikeObj1 = new Bike('BMW','Black');
  var bikeObj2 = new Bike('BMW','white');
  console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
  console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
  console.log(bikeObj1,bikeObj2) // attacheced below image as output


  /*
   Summary

        To write numbers with many zeroes:

      -  Append "e" with the zeroes count to the number. Like: 123e6 is the same as 123 with 6 zeroes 123000000.
      -  A negative number after "e" causes the number to be divided by 1 with given zeroes. E.g. 123e-6 means 0.000123 (123 millionths).
       

      For different numeral systems:

      -  Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems.
      -  parseInt(str, base) parses the string str into an integer in numeral system with given base, 2 ≤ base ≤ 36.
      -  num.toString(base) converts a number to a string in the numeral system with the given base.
      

      For regular number tests:

      -  isNaN(value) converts its argument to a number and then tests it for being NaN
      -  Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN
      -  isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
      -  Number.isFinite(value) checks whether its argument belongs to the number type, and if so, tests it for not being NaN/Infinity/-Infinity
       

      For converting values like 12pt and 100px to a number:

      -  Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.
       

      For fractions:

      -  Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
      -   Make sure to remember there’s a loss of precision when working with fractions.
      
      
      More mathematical functions:

      -  See the Math object when you need them. The library is very small, but can cover basic needs.
  
  */