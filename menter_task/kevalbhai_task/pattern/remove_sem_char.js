// Write a JS code to delete all occurrence of element in given array

let array = [1,2,1,2, 11, 11, 111,1,8,8,8,8,"8","a","a","a","@","@"];

    let uniquearray = array.filter((a, b) => array.indexOf(a) === b ) ;
    console.log(uniquearray);

    // output : 
    // [ 1, 2,   11,  111, 8, '8', 'a', '@']



