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
  return arr.includes(element);
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
  return Math.min(...arr);
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

//
