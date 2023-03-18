// Anagram checker function 
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
// formed from iceman.

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