let data = [{ "username" : "Parth" }, { "username" : "Dhruvik",  }, { "username" : "Dharmik" }];

const names = [];
 for (let i = 0; i < data.length; i++) {
    let fullnames = data[i].username;
    names.push(fullnames); 
 }
console.log(names);
// data = data.concat({ "username" : "Keval" });




data[1].username = "Gondaliya";


 data[1].surname = "Gondaliya";
 console.log(data);
 console.log(data[1]);







