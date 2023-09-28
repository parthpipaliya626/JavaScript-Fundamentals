const user = {
    username: "Parth",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }

}


// user.welcomeMessage();
// user.username = "Raju";
// user.welcomeMessage();


console.log(this);



function chai() {
     username = "bhai";
    console.log(this.username);;
}

chai();







const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(5, 7));