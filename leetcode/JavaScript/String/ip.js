// #3
// Defenging an IP address


let address = "1.1.1.1";
var defangIPaddr = function(address) {
    return address.split(".").join("[.]");
 };

 console.log(defangIPaddr(address));
