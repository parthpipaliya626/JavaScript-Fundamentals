// two functions -one object

function A () {
    let obj = {};
  
    function A () {
      return obj;
    }
    function B () {
      return obj;
    }
  
    console.log (new A () == new B ()); // true
  }
  
  function B () {
    let obj = {};
  
    function A () {
      return obj;
    }
    function B () {
      return obj;
    }
  
    console.log (new A () == new B ()); // true
  }
  
  let a = new A ();
  let b = new B ();
  
  console.log (a == b); // true