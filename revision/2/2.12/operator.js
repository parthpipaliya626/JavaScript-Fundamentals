// Nullish coalescing operator '??'



let user;

console.log(user ?? "Anonymous");


let height;
let width;
// without parentheses
let area = (height ?? 100) * (width ?? 50);     // 5000
area = height ?? 100 * width ?? 50;     // NaN    , proper declaration


// ...works this way (not what we want):
// area = height ?? (100 * width) ?? 50;
console.log(area);


// ?? use kai na hoy tyare fix kai rakhvu hoy tyare use karvanu
