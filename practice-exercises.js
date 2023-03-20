// 1. Anagram checker function 

// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
// formed from iceman.

// 1st solution
function validAnagram(str1, str2){
    
    // add whatever parameters you deem necessary - good luck!
    // If the strings have different lengths, they can't be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
    
    // Convert both strings to lowercase and remove any non-alphanumeric characters
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Sort the characters in both strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    
    // If the sorted strings are equal, the second string is an anagram of the first
    return str1 === str2;
  }
  
const str1 = 'iceman';
const str2 = 'cinema';
const isStr2AnagramOfStr1 = validAnagram(str1, str2);

console.log(isStr2AnagramOfStr1);

// 2nd solution using Frequency Counter Pattern. 
// This approach is more efficient than sorting the two strings and comparing them character by character, 
// since it only loops through each string once and uses an object to keep track of the frequency of each character.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length){
        return false;
    }

    // Create an object to store frequency of each letter in the first string and increment their frequency in the lookup object
    const lookup = {}

    // Loop through the first string
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // If letter exists in the lookup object, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // Loop through the second string 
    for (let i = 0; i < str2.length; i++) {
        let letter = second[i];
        // If can't find letter or letter is already zero then it is not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true; 
}

// 2. Count Unique Value function

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr){
    // The function initializes a variable i to 0, which will be used to keep track of the index of the last unique value found in the array.
    var i = 0;

    if (arr.length === 0){
        return false;
    }
    // loops through the array using a for loop and initializes a variable j to 1. The loop compares the current element at index j with the element at index i. If they are not equal, it means that arr[j] is a new unique value, so the i index is incremented and the unique value at arr[j] is moved to the new index i using the assignment arr[i] = arr[j].
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        console.log(i, j);
    }
    return i + 1;
}

countUniqueValues([1, 1, 4, 4, 4, 5, 5, 6, 7, 7])

// 3. Give two positive integers, find out if the two numbers have the same frequency of digits. Time complexity must be O(N)

function sameFrequency(num1, num2){
    
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if(strNum1.length !== strNum2.length){
        return false;
    }

    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for(let j = 0; j < strNum2.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
    }

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
      }

      return true;
}

// 4. Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Frequency counter method
function areThereDuplicates() {

    let collection = {}

    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }

    for(let key in collection){
      if(collection[key] > 1) return true
    }

    return false;
  }

// Multiple pointers method
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);

    let start = 0;
    let next = 1;

    while(next < args.length){
      if(args[start] === args[next]){
          return true;
      }
      start++;
      next++;
    }

    return false;
  }

  // One liner method
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }