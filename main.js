/*
===========================================
Understanding the `sort()` Method in JavaScript
===========================================
*/

/*
1. Alpha Sort Order (Default Behavior)
--------------------------------------
By default, the `sort()` method sorts elements as strings in alphabetical order.
This can lead to unexpected results when sorting numbers.
*/

// Example 1: Sorting Strings
const alphaArray = ["zebra", "arial", "medium"];

const alphaSort = (array) => {
  if (!array.length) return;
  return array.sort();
};

console.log(alphaSort(alphaArray));
// Output: [ 'arial', 'medium', 'zebra' ]

// Example 2: Sorting Mixed Data (Strings and Numbers)
const alphaArray2 = ["zebra", "arial", "medium", 3, 1, 1000];

console.log(alphaSort(alphaArray2));
// Output: [ 1, 1000, 3, 'arial', 'medium', 'zebra' ]

/*
2. Sorting Numbers Accurately
-----------------------------
To sort numbers correctly, you need to provide a compare function to the `sort()` method.
*/

// Solution 1: Sort Numbers in Ascending Order
const arrayOfNumber = [1, 100000, 21, 30, 4];

const numberSortAsc = (array) => {
  if (!array.length) return;
  return array.sort((a, b) => a - b);
};

console.log(numberSortAsc(arrayOfNumber));
// Output: [ 1, 4, 21, 30, 100000 ]

// Solution 2: Sort Numbers in Descending Order
const numberSortDesc = (array) => {
  if (!array.length) return;
  return array.sort((a, b) => b - a); // Modified compare function
};

console.log(numberSortDesc(arrayOfNumber));
// Output: [ 100000, 30, 21, 4, 1 ]

/*
3. Sorting an Array of Numbers and Strings
------------------------------------------
To sort an array containing both numbers and strings, separate the numbers and strings,
sort them individually, and then combine the results.
*/

// Solution 3: Sort Numbers and Strings Separately
const arrayNumAndString = [1, 10000, -7, 21, 30, 4, 'zebra', 'abc', 'devcoder'];

const sortNumbersAndStrings = (array) => {
  if (!array.length) return;

  const numArray = [];
  const strArray = [];

  // Separate numbers and strings
  array.forEach((el) => {
    isNaN(el) ? strArray.push(el) : numArray.push(el);
  });

  // Sort numbers in ascending order
  numArray.sort((a, b) => a - b);

  // Sort strings in alphabetical order
  strArray.sort();

  // Combine the results
  return [...numArray, ...strArray];
};

console.log(sortNumbersAndStrings(arrayNumAndString));
// Output: [ -7, 1, 4, 21, 30, 10000, 'abc', 'devcoder', 'zebra' ]

/*=== Challenge: Define a funciton that takes an array of strings, and returns the most commonly occuring string ===*/

// Solution 1: 
const mostFrequentString = (array) => {
    if (!array.length) return null;
  
    const frequencyMap = {};
    array.forEach((str) => {
      frequencyMap[str] = (frequencyMap[str] || 0) + 1;
    });
  
    let mostFrequent = "";
    let maxCount = 0;
  
    for (const str in frequencyMap) {
      if (frequencyMap[str] > maxCount) {
        mostFrequent = str;
        maxCount = frequencyMap[str];
      }
    }
  
    return mostFrequent;
  };