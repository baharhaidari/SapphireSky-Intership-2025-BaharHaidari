console.log("File Running");

// max num
function findMaxNumber(arr) {
  let max = arr[0];
  let subMax = max;
  let min = max;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] > subMax && arr[j] !== max) {
      subMax = arr[j];
    }
  }

  for (let c = 1; c < arr.length; c++) {
    if (arr[c] < min) {
      min = arr[c];
    }
  }

  console.log(max - min);

  return {
    max,
    subMax,
    min,
  };
}

console.log(findMaxNumber([1, 4, 25, 3, 19, 27, 63, 2]));

// Node.js
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a number: ", (input) => {
//   const num = parseFloat(input);

//   if (isNaN(num)) {
//     console.log("Please enter a valid number.");
//   } else if (num > 0) {
//     console.log("The number is positive.");
//   } else if (num < 0) {
//     console.log("The number is negative.");
//   } else {
//     console.log("The number is zero.");
//   }

//   rl.close();
// });
