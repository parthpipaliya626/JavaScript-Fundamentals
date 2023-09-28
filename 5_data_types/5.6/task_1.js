 // here we use 
    /*
    range[Symbol.iterator]() object
    for..of loop
    next() method
    this.current

    */ 
 
 let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
 };

 for (let num of range) {
    console.log(num);       // 1, 2, 3, 4, 5
 }



// String is iterable

// for..of loops over
for (let char of "test") {
    // triggers 4 times: once for each character
    console.log( char ); // t, then e, then s, then t
  }


// for..of loop
let str = '𝒳😂';
for (let char of str) {
    console.log( char ); // 𝒳, and then 😂
}

