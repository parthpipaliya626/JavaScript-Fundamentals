const hours = [0,1,2,3,4];
const target = 2;
// n employees like 0 to n - 1;                                                                                                        


 let n = 0;    
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for (let i = 0; i < hours.length; i++) {
      if(hours[i] >= target ) {
        count++;
        console.log(`Employee ${n++} worked for ${hours[i]} hours and meet the target`);
      } else {
        console.log(`Employee ${n} worked for ${hours[i]} hours and didn't meet the target`);
      }
    } return count;
}

console.log(numberOfEmployeesWhoMetTarget(hours, target));




/* const countEmployeesWithTargetHourss = (hours, target) => {
    let count = 0;

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            count++;
        }
    }
    return count;
};



const result = countEmployeesWithTargetHourss(hours, target);
console.log(result); // Output: 3
 */