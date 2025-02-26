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

// closures
// 🔹 What Are JavaScript Closures?
// A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished executing.
// Closures allow functions to retain access to their lexical environment, making them useful for data encapsulation, private variables, and callbacks.

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureExample = outerFunction("Hello");
closureExample("World");

//

// factorial

function getFactorial(n) {
  if (n <= 0) return 1;

  return n * getFactorial(n - 1);
}

console.log(getFactorial(5));
console.log(getFactorial(8));

// Used recursive functions for this operation. The rules for recursion:
// 1. Base case scenario: A base case must always be present to stop function execution; otherwise, it will result in a maximum call stack size error.
// 2. The function must call itself within its own execution, similar to a for loop.

//

// How does the `this` keyword work in JavaScript?
// The `this` keyword in JavaScript refers to the object that is executing the current function. Its value depends on how and where the function is called.

// Example:
// const obj = {
//   name: "Bahar",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// obj.greet(); // Output: Hello, my name is Bahar
// In this example, `this.name` refers to the `name` property of `obj` because `greet` is called within `obj`.

// However, in regular functions, `this` may refer to the global object (`window` in browsers or `global` in Node.js) unless used in strict mode (`'use strict'`), where it would be `undefined`.

// Arrow Functions and `this`
// Arrow functions do not have their own `this`; they inherit `this` from their surrounding lexical scope.

// const obj2 = {
//   name: "Ali",
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// obj2.greet(); // Output: Hello, my name is undefined (or empty in strict mode)

// Here, `this` does not refer to `obj2` but instead to the outer scope where the function was defined.

//

// Explain the concept of hoisting in JavaScript.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved (hoisted) to the top of their scope before code execution. This means you can use functions and variables before declaring them.

// Example with Function Hoisting:
// sayHello(); // Output: Hello, world!

// function sayHello() {
//   console.log("Hello, world!");
// }
// Even though `sayHello()` is called before its declaration, JavaScript moves function declarations to the top, making it accessible.

// Example with Variable Hoisting:
// console.log(name); // Output: undefined
// var name = "Bahar";

// Here, `var name` is hoisted to the top, but only the declaration—not the assignment. So, it outputs `undefined`.

// Let and Const Hoisting:
// Unlike `var`, variables declared with `let` and `const` are hoisted but do not get initialized, leading to a **ReferenceError** if accessed before declaration.

// console.log(age); // ReferenceError: Cannot access 'age' before initialization
// let age = 25;

// This behavior is known as the "temporal dead zone", where the variable exists but cannot be accessed before its declaration.

//

// Write a function to find the sum of all numbers in an array.

function sumArrNums(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArrNums([1, 2, 3]));
console.log(sumArrNums([4, 8, 1]));

// arrow funcs VS regular funcs

// Feature |	Regular Function | Arrow Function
// Syntax:	Uses function keyword |	Uses => (arrow notation)
// this Binding:	this depends on how the function is called (dynamic) |	this is lexically inherited (from surrounding scope)
// arguments Object:	Available and refers to function parameters |	Not available (use rest parameters instead)
// Usage as Constructor:	Can be used with new to create objects |	Cannot be used as a constructor
// Implicit Return:	Requires return keyword unless in a single-line expression |	Returns implicitly if there's no {} around the body
// Methods in Objects:	Can be used as methods in objects |	Should not be used as methods because this does not refer to the object

function regularFunction() {
  console.log("reg"); // Works, logs arguments object
}

const arrowFunction = () => {
  console.log("arrow"); // Error: arguments is not defined
};

regularFunction(1, 2, 3);
arrowFunction(1, 2, 3);

//

// Grade Calculator
// Given a student's score (0-100), determine their letter grade based on the following scale:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

function gradeCalculator(score) {
  if (score > 100 || score < 0) return "Invalid score.";

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(gradeCalculator(85));
console.log(gradeCalculator(99));
console.log(gradeCalculator(9));

//

// Minimum of Two Numbers
// Write a program that takes two numbers as input and prints the smaller number.

const minNum = (num1, num2) => {
  let min = num1;

  if (num2 < min) {
    min = num2;
  }

  return min;
};

console.log(minNum(2, 5));
console.log(minNum(14, 7));
console.log(minNum(22, 50));

//

// Leap Year Checker
// A year is a leap year if it is divisible by 4 but not by 100, unless also divisible by 400. Write a program that determines if a given year is a leap year.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(1403));
console.log(isLeapYear(1404));
console.log(isLeapYear(2025));

//
