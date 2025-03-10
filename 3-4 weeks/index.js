console.log("File is Running");

// Arrays

// Write a function to find the largest element in an array.

function largestArrElement(arr) {
  let largestNum = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  return largestNum;
}

console.log(largestArrElement([1, 4, 2]));
console.log(largestArrElement([12, 40, 233]));

//

// Write a function to find the sum of all elements in an array.

function findSumOfElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(findSumOfElements([1, 2, 3]));
console.log(findSumOfElements([10, 25, 33]));

//

// How do you check if an array contains a specific element?

function doesIncludes(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return true;
    }
  }

  return false;
}

console.log(doesIncludes([1, 2], 2));
console.log(doesIncludes([1, 2], 6));

//

// Write a function to count the occurrences of a specific element in an array.

function countOccurrences(arr, element) {
  return arr.reduce(
    (count, current) => (current === element ? count + 1 : count),
    0
  );
}

console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2));
console.log(countOccurrences([5, 6, 7, 8], 9));

//

// Implement a function to find the smallest number in an array.

function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(findSmallest([4, 1, 7, 3, 9]));
console.log(findSmallest([-5, 0, 10, -2]));

//

// Write a function to reverse an array without using the built-in reverse() method.

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements
    [arr[start], arr[end]] = [arr[end], arr[start]];

    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["a", "b", "c", "d"]));

//

// How do you merge two sorted arrays into one sorted array?

function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add any remaining elements from arr1 or arr2
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Example usage:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 7], [3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 7]

//

// Implement a function that rotates an array k times to the right.

function rotateArray(arr, k) {}

//

// Write a function to find the second largest number in an array.

function findSecondLargeNum(arr) {
  let largest = largestArrElement(arr);
  let secondLargest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return {
    largest,
    secondLargest,
  };
}

console.log(findSecondLargeNum([1, 2, 4, 5]));
console.log(findSecondLargeNum([1, 2, 3, 6]));

//

// Implement a function that finds the intersection of two arrays.

function findIntersection(arr1, arr2) {
  let intersections = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersections.push(arr1[i]);
      }
    }
  }

  return intersections;
}

console.log(findIntersection([1, 3, 2], [3, 6, 2]));

//

// How do you remove duplicates from an array efficiently?

function removeDuplicates(arr) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < filteredArr.length; j++) {
      if (arr[i] === filteredArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

console.log(removeDuplicates([1, 3, 3, 4]));

//

// Write a function to find the missing number in an array of 1 to N.

// solution 1
function findMissingNum(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;

  let sum = 0;
  let missingNum = null;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  missingNum = expectedSum - sum;

  return { arr, missingNum };
}

console.log(findMissingNum([1, 2, 4, 5, 6], 6));
console.log(findMissingNum([1, 2, 3, 4, 5, 6, 8, 9], 9));

// solution 2
function findMissingNumbers(arr, n) {
  let missingNumbers = [];
  let index = 0;

  for (let i = 1; i <= n; i++) {
    if (arr[index] === i) {
      index++;
    } else {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

console.log(findMissingNumbers([1, 3, 4, 6, 7, 8], 8));

//

// How do you check if two arrays are equal?

function areArraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual(["a", "b", "c"], ["a", "b", "c"]));
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual([1, 2, 3], [1, 2, 4, 5]));
