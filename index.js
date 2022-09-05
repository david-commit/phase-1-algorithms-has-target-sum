function hasTargetSum(array, target) {
  // Iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify an complement that adds to the target (complement = target - num)
    let complement = target - array[i];
    // Iterate through the rest of the array
    for (let j = i + 1; j < array.length; j++) {
      // Check if any number is our complement
      if(array[j] === complement) return true
      // if so, return true
    }
  }
  // If I reach the end of the array, returns false
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* PSEUDOCODE
  hasTargetSum([3, 8, 12, 4, 11, 7], 10)   // returns true, since 3 and 7 add up to 10
  Iterate through each number in the array
    for the current number, identify an complement that adds to the target (complement = target - num)
      Iterate through the rest of the array
        Check if any number is our complement
          if so, return true
    If I reach the end of the array, returns false
*/

/*
  Add written explanation of your solution here
  >> Make a function hasTarhetSum that checks if two numbers from the array add up to the same target.
  For example , if I have an array [1, 2, 3, 4] and the target is 6, I should return true becayse 2 and 4
  add to 6. 
  For each other mumber, check is there's a number that adds to the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
