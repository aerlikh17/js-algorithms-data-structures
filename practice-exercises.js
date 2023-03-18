// Anagram checker function 
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

// 2nd solution using Frequency Counter Pattern. this approach is more efficient than sorting the two strings and comparing them character by character, since it only loops through each string once and uses an object to keep track of the frequency of each character.

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