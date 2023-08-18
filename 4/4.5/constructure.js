// Constructor 

class RailwayForm {
    constructure() {
        console.log("CONSTRUCTURE CALLED...")
    }
    submit() {
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
        alert(this.name + ": This form is cancelled for train number: " + this.trainnno)
    }

    fill(givenname, trainno) {
        this.name = givenname
        this.trainno = trainno
    }
}