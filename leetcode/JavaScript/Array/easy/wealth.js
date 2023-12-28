// 1672
// Richest Customer Wealth

let accounts = [[1,2,3],[3,2,1]];

const sum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

var maximumWealth = function(accounts) {
    const result = accounts.map((item) =>  sum(item) );
    return Math.max(...result);
};

console.log(maximumWealth(accounts));


