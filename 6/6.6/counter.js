/// custom properties


function makeCounter() {
    // counter.count = 0;
    function counter() {
        
        return counter.count++;
    };

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
counter.count = 10;
console.log( counter() );
// console.log( counter() );





let sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest");
    }
};


let welcome = sayHi;

sayHi = null;

welcome();




