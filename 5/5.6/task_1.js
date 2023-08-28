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




 