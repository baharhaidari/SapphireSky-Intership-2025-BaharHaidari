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

// Generate Pascal’s Triangle
// Implement pascalTriangle(rows), which prints Pascal’s Triangle up to rows rows.

function pascalTriangle(rows) {
  let triangle = [];

  for (let row = 0; row < rows; row++) {
    let currentRow = [];

    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        currentRow.push(1);
      } else {
        currentRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
      }
    }

    triangle.push(currentRow);
  }

  // Find the maximum length of the last row for centering
  let maxLength = triangle[rows - 1].join(" ").length;

  // Print the triangle with centering
  for (let i = 0; i < rows; i++) {
    let rowStr = triangle[i].join(" ");
    let padding = " ".repeat((maxLength - rowStr.length) / 2);
    console.log(padding + rowStr);
  }
}

pascalTriangle(5);

// Switch-Case Section

// Day of the Week
// Write a program that takes an integer (1-7) as input.
// Use switch to print the corresponding day of the week.
// 1 → "Monday"
// 2 → "Tuesday"
// 7 → "Sunday"

function daysOfWeek(n) {
  let day;

  switch (n) {
    case 1:
      day = "Saturay";
      break;
    case 2:
      day = "Sunday";
      break;
    case 3:
      day = "Monday";
      break;
    case 4:
      day = "Tuesday";
      break;
    case 5:
      day = "Wednesday";
      break;
    case 6:
      day = "Thursday";
      break;
    default:
      day = "Friday";
  }

  return day;
}

console.log(daysOfWeek(2));
console.log(daysOfWeek(5));

//

// Simple Calculator
// Take two numbers and an operator (+, -, *, /).
// Use switch to perform the correct operation and return the result.

function calculator(num1, num2, operator) {
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    default:
      result = "Invalid Operator";
      break;
  }

  return result;
}

console.log(calculator(4, 2, "+"));
console.log(calculator(4, 2, "-"));
console.log(calculator(4, 2, "/"));
console.log(calculator(4, 2, "*"));

//

// Traffic Light System
// Take a traffic light color ("red", "yellow", "green") as input.
// Use switch to print the corresponding action:
// "Red" → "Stop"
// "Yellow" → "Slow Down"
// "Green" → "Go"

function trafficLightSystem(color) {
  let instruction = "";

  switch (color) {
    case "red":
      instruction = "Stop";
      break;

    case "yellow":
      instruction = "Slow Down";
      break;

    default:
      instruction = "Go";
      break;
  }

  return instruction;
}

console.log(trafficLightSystem("red"));
console.log(trafficLightSystem("green"));

//

// Month Name and Days
// Input a number (1-12) representing a month.
// Use switch to print the name of the month and how many days it has.

function monthNameAndDays(month) {
  let result = "";

  switch (month) {
    case 1:
      result = "January - 31 days";
      break;
    case 2:
      result = "February - 28 or 29 days (leap year)";
      break;
    case 3:
      result = "March - 31 days";
      break;
    case 4:
      result = "April - 30 days";
      break;
    case 5:
      result = "May - 31 days";
      break;
    case 6:
      result = "June - 30 days";
      break;
    case 7:
      result = "July - 31 days";
      break;
    case 8:
      result = "August - 31 days";
      break;
    case 9:
      result = "September - 30 days";
      break;
    case 10:
      result = "October - 31 days";
      break;
    case 11:
      result = "November - 30 days";
      break;
    case 12:
      result = "December - 31 days";
      break;
    default:
      result = "Invalid month. Please enter a number between 1 and 12.";
  }

  return result;
}

console.log(monthNameAndDays(2));
console.log(monthNameAndDays(6));
console.log(monthNameAndDays(13));

//

// Check for Vowel or Consonant
// Take a letter as input.
// Use switch to determine whether it is a vowel or a consonant.

function checkVowel(letter) {
  switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("Vowel");
      break;

    default:
      console.log("Consonant");
  }
}

checkVowel("a");
checkVowel("b");
checkVowel("e");

//

// Student Grade System
// Take a student's score (0-100).
// Use switch to assign a letter grade (A, B, C, D, F).

function studentGrade(score) {
  let grade = "";

  switch (true) {
    case score > 100 || score < 0:
      grade = "Please enter a valid score.";
      break;

    case score >= 90:
      grade = "A";
      break;

    case score >= 80:
      grade = "B";
      break;

    case score >= 70:
      grade = "C";
      break;

    case score >= 60:
      grade = "D";
      break;

    default:
      grade = "F";
  }

  return grade;
}

console.log(studentGrade(10));
console.log(studentGrade(95));
console.log(studentGrade(74));

//

// Currency Converter
// Take a currency code ("USD", "EUR", "INR", "JPY").
// Use switch to print the conversion rate relative to a base currency (e.g., USD).

function currencyConverter(amount, currency) {
  let conversionRate;

  switch (currency) {
    case "USD":
      conversionRate = 1; // 1 USD to USD
      break;
    case "EUR":
      conversionRate = 0.92; // 1 USD to EUR
      break;
    case "INR":
      conversionRate = 83.2; // 1 USD to INR
      break;
    case "JPY":
      conversionRate = 149.3; // 1 USD to JPY
      break;
    default:
      return "Invalid currency code. Please use 'USD', 'EUR', 'INR', or 'JPY'.";
  }

  let convertedAmount = amount * conversionRate;
  return `${amount} USD = ${convertedAmount.toFixed(2)} ${currency}`;
}

console.log(currencyConverter(100, "USD"));
console.log(currencyConverter(100, "EUR"));
console.log(currencyConverter(100, "INR"));
console.log(currencyConverter(100, "JPY"));
console.log(currencyConverter(100, "GBP"));

//

// Determine Season by Month
// Take an integer (1-12) as input.
// Use switch to print the corresponding season:
// 12, 1, 2 → Winter
// 3, 4, 5 → Spring
// 6, 7, 8 → Summer
// 9, 10, 11 → Fall

function determineSeason(month) {
  let season = "";

  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;

    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;

    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;

    case 9:
    case 10:
    case 11:
      season = "Fall";
      break;

    default:
      season = "Please enter a valid month";
  }

  return season;
}

console.log(determineSeason(2));
console.log(determineSeason(4));
console.log(determineSeason(13));
console.log(determineSeason(8));

//

// Rock, Paper, Scissors Game
// The user inputs "rock", "paper", or "scissors".
// The computer randomly selects one.
// Use switch to determine the winner.

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  switch (userChoice) {
    case "rock":
      console.log(computerChoice === "scissors" ? "You win!" : "You lose!");
      break;
    case "paper":
      console.log(computerChoice === "rock" ? "You win!" : "You lose!");
      break;
    case "scissors":
      console.log(computerChoice === "paper" ? "You win!" : "You lose!");
      break;
  }
}

playGame("rock");

//

// Roman Numeral Converter
// Take an integer (1-10) as input.
// Use switch to print the corresponding Roman numeral.

function getRomanNumeral(num) {
  switch (num) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    case 10:
      return "X";
    default:
      return "Inavlid input, try between 1-10";
  }
}

console.log(getRomanNumeral(3));

//

// Zodiac Sign Finder
// Take a birth month and day.
// Use switch to determine the person's zodiac sign.

function zodiacSignFinder(month, day) {
  switch (month) {
    case "january":
      return day <= 19 ? "Capricorn" : "Aquarius";

    case "february":
      return day <= 18 ? "Aquarius" : "Pisces";

    case "march":
      return day <= 20 ? "Pisces" : "Aries";

    case "april":
      return day <= 19 ? "Aries" : "Taurus";

    case "may":
      return day <= 20 ? "Taurus" : "Gemini";

    case "june":
      return day <= 20 ? "Gemini" : "Cancer";

    case "july":
      return day <= 22 ? "Cancer" : "Leo";

    case "august":
      return day <= 22 ? "Leo" : "Virgo";

    case "september":
      return day <= 22 ? "Virgo" : "Libra";

    case "october":
      return day <= 22 ? "Libra" : "Scorpio";

    case "november":
      return day <= 21 ? "Scorpio" : "Sagittarius";

    case "december":
      return day <= 21 ? "Sagittarius" : "Capricorn";

    default:
      return "Invalid month! Please enter a valid month.";
  }
}

console.log(zodiacSignFinder("march", 15));
console.log(zodiacSignFinder("october", 25));
console.log(zodiacSignFinder("july", 5));

//

// Discount System Based on Membership
// Input membership type ("Gold", "Silver", "Bronze").
// Use switch to apply different discount rates on a purchase.

function discountSystem(membership) {
  let purchase = 1000;
  let discountRate = 0;

  switch (membership) {
    case "gold":
      discountRate = 0.2;
      break;

    case "silver":
      discountRate = 0.15;
      break;

    case "bronze":
      discountRate = 0.1;
      break;

    default:
      console.log("Wrong Membership, no discount applied");
  }

  const discountAmount = purchase * discountRate;
  const finalPrice = purchase - discountAmount;

  return { discountAmount, discountRate, finalPrice };
}

console.log(discountSystem("gold"));
console.log(discountSystem("silver"));
console.log(discountSystem("Platinum"));

//

// Automated Toll Booth System
// Take a vehicle type ("Car", "Truck", "Bike") as input.
// Use switch to determine the toll fee.

function automatedTollBooth(vehicle) {
  let tollFee;

  switch (vehicle) {
    case "car":
      tollFee = "$80";
      break;

    case "truck":
      tollFee = "$60";
      break;

    case "bike":
      tollFee = "$30";
      break;

    default:
      tollFee = "Invalid vehicle type";
  }

  return tollFee;
}

console.log(automatedTollBooth("car"));
console.log(automatedTollBooth("bike"));
console.log(automatedTollBooth("bus"));

//

// Music Playlist Controller
// Take a command ("Play", "Pause", "Next", "Previous").
// Use switch to perform the correct action.

function musicPlaylistController(command) {
  switch (command) {
    case "play":
      return "Play music";

    case "pause":
      return "Pause music";

    case "next":
      return "Play next music";

    case "previous":
      return "Play previous music";

    default:
      return "Invalid command";
  }
}

console.log(musicPlaylistController("play"));
console.log(musicPlaylistController("next"));
console.log(musicPlaylistController("loop"));
