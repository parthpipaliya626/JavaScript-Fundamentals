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





