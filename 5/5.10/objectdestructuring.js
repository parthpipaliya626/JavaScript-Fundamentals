// Object destructuring

// first example
/*
let options = {
    title: "Table",
    width: 100,
    height: 200
};

 let {title, width, height} = options;

console.log(title);
console.log(width);
console.log(height);
console.log(options.length);

 */



// second example

/*
 let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;
  
  // width -> w
  // height -> h
  // title -> title
  
  console.log(title);  // Menu
  console.log(w);      // 100
  console.log(h);      // 200
*/



let options = {
    title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

console.log(title);
console.log(w);
console.log(h);

// The rest pattern “…”

// also use 