function isPalindrome(word) {
  if (word === word.split("").reverse().join("")) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  1. Compare the reversed version of the input with the original input.
  2. If the reversed input is equal to the original input, return true.
  3. If the reversed input is not equal to the original input, return false.
*/

/*
  Add written explanation of your solution here
  The function checks whether a given word is a palindrome or not. To determine if a word is a palindrome, it compares the input with its reversed version. If the reversed version is the same as the original input, the function returns true, indicating that the word is a palindrome Otherwise, it returns false, indicating that the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("computer"));
}

module.exports = isPalindrome;
