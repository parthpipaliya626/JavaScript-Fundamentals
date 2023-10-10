//  What is the result of AND'ed consoles?

console.log( console.log(1) && console.log(2) );   // 1, undefined
console.log( console.log(1) || console.log(2) );   // 1, 2, undefined

// reason  console.log not return any value that print in value check next....
