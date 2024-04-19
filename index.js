function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();

  for (let num of array) {
    const complement = target - num;

    if (seen.has(complement)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n)
  Space complexity: O(n)
*/

/* 
  Add your pseudocode here
  - Create a set to store seen numbers
  - Iterate through each number in the array
  - Calculate the complement of the current number with the target
  - If the complement is in the set, return true
  - Otherwise, add the current number to the set
  - If no pair is found, return false
*/

/*
  Add written explanation of your solution here
  This function iterates through the array once, storing each number in a set. For each number, it calculates the complement needed to reach the target. If the complement is found in the set, it means there exists a pair that adds up to the target, so the function returns true. If no such pair is found after iterating through the entire array, the function returns false.
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

