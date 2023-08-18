// using this  in object literal

function makeUser() {
    return {
        name: "Parth",
        ref: this
    };
}

let user = makeUser();

console.log( makeUser().name ); // undefined