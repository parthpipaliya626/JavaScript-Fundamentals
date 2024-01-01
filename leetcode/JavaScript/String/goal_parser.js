// # 1678
// Goal Parser Interpretation


var command = "G()(al)";
var interpret = function(command) {
         let result = "";
     for (let i = 0; i < command.length; i++) {
        if(command[i] == "G") {
            result += "G";
            
        } else if(command[i] === "(" && command[i + 1] === ")") {
            result += "o";
            i++;
        } else if(command[i] == "(" && command[i + 1] == "a" && command[i + 2] == "l" && command[i + 3] == ")")  {
            result += "al";
            i += 3;
        } else {
            result += command[i];
        }
     
     } return result;
};

console.log(interpret(command));





