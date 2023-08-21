// object to primitive conversion

/* 
  Conversion rules
        In the chapter Type Conversions we’ve seen the rules for numeric, string and boolean conversions
         of primitives. But we left a gap for objects. Now, as we know about methods and symbols it becomes
          possible to fill it.

      1.  There’s no conversion to boolean. All objects are true in a boolean
         context, as simple as that. There exist only numeric and string conversions.
      
      2.  The numeric conversion happens when we subtract objects or apply mathematical functions.
         For instance, Date objects (to be covered in the chapter Date and time) can be subtracted,
          and the result of date1 - date2 is the time difference between two dates.
       
      3.  As for the string conversion – it usually happens when we output an object with
         console.log(obj) and in similar contexts.
    
*/


//  Symbol.toPrimitive

let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
   console.log(user); // hint: string -> {name: "John"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500


