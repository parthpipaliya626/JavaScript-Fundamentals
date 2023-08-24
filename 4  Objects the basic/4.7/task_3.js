// object.assign copies both string and symbol properties:

let id = Symbol("id");

let user = {
    [id] : 123
};

let clone = Object.assign({}, user);

console.log( clone[id] );   // 123

/* 
    There’s no paradox here. That’s by design.
     The idea is that when we clone an object or merge objects,
      we usually want all properties to be copied (including symbols like id).
*/


