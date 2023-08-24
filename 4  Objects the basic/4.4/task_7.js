// chaining

//  There’s a ladder object that allows to go up and down:


let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
    }
  };


   ladder.up();
   ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0