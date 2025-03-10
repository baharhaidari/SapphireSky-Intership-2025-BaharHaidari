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

// Triangle Validity
// Given three sides of a triangle, check if they form a valid triangle.
// The sum of any two sides must be greater than the third.

function isTriangleValid(side1, side2, side3) {
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isTriangleValid(5, 6, 7); // valid
isTriangleValid(10, 15, 25); // valid

//

// Speeding Ticket Calculator
// Speed limit = 60 km/h.
// - If a driver goes above the speed limit, they get a fine.
// - If they are driving over 100 km/h, they get double the fine.
// - Implement a program that takes speed as input and determines the fine.

function speedTicketCalculator(speed) {
  let fine = null;
  const speedLimit = 60;
  const speedMax = 100;

  if (speed < speedLimit) {
    fine = 0;
  } else if (speed <= speedMax) {
    fine = 100;
  } else {
    fine = 100 * 2;
  }

  return fine;
}

console.log(speedTicketCalculator(90));
console.log(speedTicketCalculator(110));
console.log(speedTicketCalculator(310));
console.log(speedTicketCalculator(50));

//

// ATM Withdrawal
// A person wants to withdraw money from an ATM.
// If the withdrawal amount is a multiple of 10, allow withdrawal.
// If not, print an error message.
// If the account balance is less than the withdrawal amount, print "Insufficient Funds".

function atmWithdrawal(amount, accountBalance) {
  if (amount % 10 === 0 && accountBalance > amount) {
    return "Withdrawal successful.";
  } else if (accountBalance < amount) {
    return "Insufficient Funds";
  } else {
    return "Error: Withdrawal amount must be a multiple of 10.";
  }
}

console.log(atmWithdrawal(50, 300));
console.log(atmWithdrawal(45, 300));
console.log(atmWithdrawal(350, 300));

//

// Body Mass Index (BMI) Calculator
// Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
// Categorize it into:
// Underweight: BMI < 18.5
// Normal weight: 18.5 ≤ BMI < 25
// Overweight: 25 ≤ BMI < 30
// Obese: BMI ≥ 30

function bmiCalculator(weight, height) {
  const BMI = weight / (height * height);
  console.log(BMI);

  let result = "";

  if (BMI < 18.5) {
    result = "Underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    result = "Normal weight";
  } else if (BMI >= 25 && BMI < 30) {
    result = "Overweight";
  } else {
    result = "Obese";
  }

  return result;
}

console.log(bmiCalculator(55, 1.65));
console.log(bmiCalculator(80, 1.65));
console.log(bmiCalculator(90, 1.65));

//

// Electricity Bill Calculator
// Units Consumed:
// Up to 100 units: $0.50 per unit
// 101 to 200 units: $0.75 per unit
// 201 to 500 units: $1.20 per unit
// Above 500 units: $1.50 per unit
// Write a program that calculates the total electricity bill.

function electricityBill(units) {
  let bill = 0;

  if (units > 500) {
    bill += (units - 500) * 1.5;
    units = 500;
  }
  if (units > 200) {
    bill += (units - 200) * 1.2;
    units = 200;
  }
  if (units > 100) {
    bill += (units - 100) * 0.75;
    units = 100;
  }
  bill += units * 0.5;

  return `$${bill.toFixed(2)}`;
}

// Test cases
console.log(electricityBill(50)); // $25.00
console.log(electricityBill(150)); // $87.50
console.log(electricityBill(300)); // $295.00

//

// Password Strength Checker
// A strong password must:
// Be at least 8 characters long.
// Contain at least one uppercase letter, one lowercase letter, and one number.
// Write a program that checks if a given password is strong or weak.

function passwordChecker(password) {
  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  ) {
    return "Strong";
  } else {
    return "Weak";
  }
}

console.log(passwordChecker("12wsIX2ovS"));
console.log(passwordChecker("12wsdw2oc"));
console.log(passwordChecker("WERRwsdwoc"));

// Loops

// Print Numbers from 1 to 100
// Write a for loop that prints numbers from 1 to 100.

function printNum() {
  let num = "";

  for (let i = 1; i <= 100; i++) {
    num += i + " ";
  }

  return num;
}

console.log(printNum());

//

// Sum of First N Natural Numbers
// Write a program that takes N as input and calculates the sum of the first N natural numbers.

function sumOfNaturalNumbers(N) {
  let sum = null;

  for (let i = 0; i <= N; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfNaturalNumbers(5));

//

// Multiplication Table
// Ask the user for a number and print its multiplication table up to 10.

// solution 1
function multiplicationTable(num) {
  let targetNum = 10;
  let multiplicationArr = [];

  for (let i = 1; i <= targetNum; i++) {
    let res = num * i;
    multiplicationArr.push(res);
  }

  return multiplicationArr;
}

console.log(multiplicationTable(2));

// solution 2
function multiplicationTable2(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${num} = ${num * i}`);
  }
}

multiplicationTable2(2);

// Reverse a Number
// Given an integer, reverse its digits. (Example: 1234 → 4321)

function reverseNumber(num) {
  let reversedNum = 0;

  while (num > 0) {
    // Get the last digit of the number
    let digit = num % 10;
    // console.log(digit);

    // Add the digit to the reversed number (shift left by multiplying by 10)
    reversedNum = reversedNum * 10 + digit;
    // console.log(reversedNum);

    // Remove the last digit from the number
    num = Math.floor(num / 10);
    // console.log(num);
  }

  return reversedNum;
}

console.log(reverseNumber(1234)); // Output: 4321
// console.log(reverseNumber(567)); // Output: -765

//

// Count Digits in a Number
// Take a number as input and count how many digits it has.

function countDigits(number) {
  let counter = 0;

  if (number === 0) return 1;

  while (number > 0) {
    number = Math.floor(number / 10); // Remove last digit
    counter++;
  }

  return counter;
}

// console.log(countDigits(10));
// console.log(countDigits(3456));

//

// Check for Prime Number
// Write a program that takes a number as input and checks if it is prime.

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  const sqrtNum = Math.floor(Math.sqrt(num));

  // console.log(sqrtNum);

  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(29)); // true
console.log(isPrime(30)); // false

//

// Factorial of a Number
// Implement a function that calculates the factorial of a number using a loop.

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(7));

//

// Find Largest and Smallest in a List
// Given an array of numbers, find the largest and smallest numbers using a loop.

function findLargestAndSmallestNum(arr) {
  let smallestNum = arr[0];
  let largestNum = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }

    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  return {
    smallestNum,
    largestNum,
  };
}

console.log(findLargestAndSmallestNum([1, 4, 2, 3]));

//

// Fibonacci Sequence
// Print the first N Fibonacci numbers using a loop.

function findFibonacciSequence(N) {
  let first = 0;
  let second = 1;
  let fibonacciArr = [first, second];

  for (let i = 2; i < N; i++) {
    let next = first + second;
    fibonacciArr.push(next);

    first = second;
    second = next;
  }

  return fibonacciArr;
}

console.log(findFibonacciSequence(10));
console.log(findFibonacciSequence(38));

//

// Palindrome Checker
// Write a program that checks if a given number is a palindrome (Example: 121 → True, 123 → False).

function isPalindrome(num) {
  let reversedNum = reverseNumber(num);

  if (reversedNum == num) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(123));
console.log(isPalindrome(121));
console.log(isPalindrome(1331));
console.log(isPalindrome(456));

// Functions Section

// Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:
// F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59​)+32

function celsiusToFahrenheit(celsius) {
  let result = (celsius * 9) / 5 + 32;
  return result;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));

//

// Find the Maximum of Three Numbers
// Implement a function maxOfThree(a, b, c) that returns the largest of three numbers.

function findMax(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }

  return max;
}

console.log(findMax(1, 2, 4));
console.log(findMax(1, 5, 2));

//

// Check Even or Odd
// Create a function isEven(number) that returns true if the number is even and false otherwise.

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));
console.log(isEven(5));

//

// Count Vowels in a String
// Write a function countVowels(str) that takes a string and returns the number of vowels in it.

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("aeiou"));

//

// Reverse a String
// Implement reverseString(str), which takes a string and returns it reversed.
// Example: "hello" → "olleh"

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("sapphire sky"));

//

// Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  const sqrtNum = Math.floor(Math.sqrt(num));

  // console.log(sqrtNum);

  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));

//

// Calculate Factorial Using Recursion
// Implement factorial(n), which calculates the factorial of n using recursion.

function calculateFactorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * calculateFactorial(n - 1);
}

console.log(calculateFactorial(5));
console.log(calculateFactorial(3));

//

// Find the nth Fibonacci Number
// Implement fibonacci(n), which returns the nth Fibonacci number.

function fibonacci(n) {
  // Base cases
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(0));

//

// Check if a String is a Palindrome
// Write a function isPalindrome(str) that returns true if the given string is a palindrome.
// Example: "racecar" → true, "hello" → false

function isPalindrome(str) {
  let reversedString = reverseString(str);

  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));

//
