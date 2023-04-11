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

// 5a. Multiple pointers. Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(arr, num){

    let start = 0;
    let end = arr.length-1;

    while(start < end){
      let avg = (arr[start]+arr[end]) / 2;
      if(avg === num) return true;
      else if(avg < num) start++
      else end--;
    }

    return false;
  }

// 5b. Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
function isSubsequence(str1, str2) {

    var i = 0;
    var j = 0;

    if (!str1) return true;

    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }

    return false;
  }

  function isSubsequence(str1, str2) {

    if(str1.length === 0) return true;
    if(str2.length === 0) return false;

    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));  
    return isSubsequence(str1, str2.slice(1));
  }

// 6a. Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
function maxSubarraySum(arr, num){

    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }

    let currentTotal = total;

    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }

    return total;
}
// 6b. Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
function minSubArrayLen(nums, sum) {

    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }
// 6c. Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring(str) {

    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

  // 7. BubbleSort function

  function bubbleSort (arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps=true;
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]){
                // SWAP! 
                let temp = arr[j];
                arr[j] = arr [j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
  }

// 8. SelectionSort function

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// 9. InsertionSort function

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

// 10. Merge function

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
        while(i < arr1.length){
            results.push(arr1[i]);
            i++;
        }
        while(j < arr2.length){
            results.push(arr2[j]);
            j++;
        } 

    return results;
}

// 11. MergeSort function

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// 12. Recursive function countDown

function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return; // base case
    }
    console.log(num);
    num--;
    countDown(num); // different input
}

// 13. sumRange (recursive function)

function sumRange(num){
    if(num === 1) return 1; // base case
    return num + sumRange(num-1); 
}

// 14. Factorial regular function

function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

// 15. Factorial recursive function

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

// 16. Helper method recursion

function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

// 17. Pure recursion

function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

// 18. Pivot helper function

function pivot(arr, start=0, end=arr.lenght+1){
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array [j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swpIdx = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]) {
            swpIdx++;
            swap(arr, swpIdx, i)
        }
    }
    swap(arr, start, swpIdx)
}

// 19. QuickSort function

function quickSort(arr, left = 0, right = arr.length -1 ){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

// 20. RadixSort function

function radixSort(){

}

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}