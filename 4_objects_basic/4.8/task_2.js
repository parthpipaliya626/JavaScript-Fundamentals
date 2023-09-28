// Further Conversions
  

  /* 
        The object is converted to a primitive (using the rules described above).
        If necessary for further calculations, the resulting primitive is also converted.
  */


     let obj = {
            // toString handles all conversions in the absence of other methods
            toString() {
              return "2";
            }
          };
          
          console.log(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number
          
//    The multiplication obj * 2 first converts the object to primitive (that’s a string "2").
// Then "2" * 2 becomes 2 * 2 (the string is converted to number).



  obj = {
    toString() {
        return "2";
    }
};


console.log(obj + 2);  // 22 ("2" + 2), conversion to primitive returned a string => concatenation


