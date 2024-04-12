function hasTargetSum(array, target) {
  for (i = 0; i < array.length; i++){
    for(j = i + 1; j < array.length; j++) {
      let addedValues = array[i] + array[j];
      console.log(addedValues)

      if (addedValues === target) {
        return true
      }
    }
  }
  return false
}

hasTargetSum([22, 19, 4, 6, 30], 25);

/* 
  Write the Big O time complexity of your function here:
  The Big O complexity is O(n²) because its a nested iteration.
*/

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here:
  It loops through the array from the first index, adding it to all the other indexes and the sum is compared to the target. if the target is matched it returns true but if it loops through all indexes and adds all other indexes to the fixed number then it returns false as it exists the loop.
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
