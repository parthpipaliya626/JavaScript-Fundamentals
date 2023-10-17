// right way to code


var lengthOfLongestSubstring = function (s) {

    let ls = s.split("");
    let longestSub = "";
    let currentSub = "";
  
    ls.forEach((char) => {
      if (currentSub.includes(char)) {
        currentSub = currentSub.slice(currentSub.indexOf(char) + 1);
      }
      currentSub += char;
  
      if (currentSub.length > longestSub.length) {
        longestSub = currentSub;
      }
    });
  
    //  longestSub = longestSub.split("").join("");
     console.log(longestSub);
    return longestSub.length;
  };
  
  console.log(lengthOfLongestSubstring("pwwkew"));
  
  

  
  // var lengthOfLongestSubstring = function (s) {
  //   let longestSub = "";
  //   let currentSub = "";
  
  //   for (let char of s) {
  //     if (currentSub.includes(char)) {
  //       currentSub = currentSub.slice(currentSub.indexOf(char) + 1);
  //     }
  //     currentSub += char;
  
  //     if (currentSub.length > longestSub.length) {
  //       longestSub = currentSub;
  //     }
  //   }
  //   // console.log(longestSub);
  //   return longestSub.length;
  // };
  
  // console.log(lengthOfLongestSubstring());
  