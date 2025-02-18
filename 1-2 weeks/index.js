console.log("File is running");

// 1- What is the difference between var, let, and const in JavaScript?

// answer: the differnece is in their scope:
// var: Function-scoped (available throughout the function where it is declared).
// let: Block-scoped (only available within the block {} where it is declared).
// const: Block-scoped (like let, only available in the block {} where it is declared).

//

// 2- Write a function to check if a number is even or odd.
const checkEvenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "Number is Even.";
  } else {
    return "Number is Odd.";
  }
};

console.log(checkEvenOrOdd(3));

//

// 3- Explain the difference between == and === in JavaScript.

// answer: the differnece is in their compartion behavior
// == (Loose Equality): Compares values only. Performs type coercion (converts values to the same type before comparing).
// === (Strict Equality): Compares both value and type. No type coercion (values must be of the same type to be considered equal).

//

// 4- Write a program that takes user input and prints whether it is a positive, negative, or zero.

// Plain JavaScript
const checkNum = (num) => {
  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else if (num > 0) {
    return "The given number is a positive number.";
  } else if (num < 0) {
    return "The given number is a negative number.";
  } else {
    return "The given number is zero.";
  }
};

console.log(checkNum(3));
console.log(checkNum(-4));
console.log(checkNum(0));

// Node.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (input) => {
  const num = parseFloat(input);

  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else if (num > 0) {
    console.log("The number is positive.");
  } else if (num < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }

  rl.close();
});
