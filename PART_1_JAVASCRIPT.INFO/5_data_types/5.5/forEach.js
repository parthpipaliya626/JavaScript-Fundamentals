// Iterate: forEach

// The arr.forEach method allows to run a function for every element of the array:

// for each element call console.log


// For instance, this shows each element of the array
["Raju", "Utsav", "Krunal"].forEach(console.log);     


// And this code is more elaborate about their positions in the target array:
["Raju", "Utsav", "Krunal"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });




