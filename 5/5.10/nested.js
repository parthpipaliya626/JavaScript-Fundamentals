// Nested destructuring

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["cake", "Donut"],
    extra: true
};

let {
    size: {
        width,
         height
    },
    items: [item1, item2],
    title = "Menu"
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut




// Smart fuunction parameters


	
// we pass object to function
 options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  // ...and it immediately expands it to variables
  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log( `${title} ${width} ${height}` ); // My Menu 200 100
    console.log( items ); // Item1, Item2
  }
  
  showMenu(options);

