// Create a function that calculates the sum of two given numbers.
// Input: 3, 5
// Output: 8

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
console.log("==============================");

// Write a function that checks if a number is prime (a number that can only
//   be divided by 1 and itself without any remainder).
//   Input: 7
//   Output: true

function prime(a) {
  if (a <= 1) return false;
  for (var i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) return false;
  }
  return true;
}
console.log(prime(1));
console.log(prime(2));
console.log(prime(4));
console.log(prime(7));
console.log("==============================");

// Write a function to reverse a given string (using built in method).
// Input: "hello"
// Output: “olleh"

function reverse(word) {
  return word.split("").reverse().join("");
}

console.log(reverse("hello"));
console.log("==============================");

// Write a function to find the largest number in an array
// Input: [1, 3, 7, 2, 4]
// Output: 7

function largestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNumber([1, 3, 7, 2, 4]));
console.log(largestNumber([-5, -2, -10]));
console.log("==============================");

// Write a function that filters an array and returns only the even numbers
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function even(array) {
  return array.filter((num) => num % 2 == 0);
}

console.log(even([1, 2, 3, 4, 5, 6]));
console.log("==============================");

// Implement a function to reverse a string without using the built-in reverse()
// method.
// Input: "route"
// Output: “etuor"

function opposite(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(opposite("route"));
console.log("==============================");

// Write a function to calculate the average value of all numbers in an array.
// Input: [1, 2, 3, 4, 5]
// Output: 3

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));
console.log("==============================");

// Write a function that determines whether a given day number (1-7)
// represents a weekday or weekend.
// Input: 5
// Output: "Weekday"
// Input: 7
// Output: “Weekend"

function dayOfWeek(day) {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
    case 6:
    case 7:
      return "Weekend";
    default:
      return "Invalid";
  }
}

console.log(dayOfWeek(5));
console.log(dayOfWeek(7));
console.log("==============================");

// Write a function that filters an array of numbers and returns only those that
// are divisible by 2 or 3.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: [2, 3, 4, 6, 8, 9]

function divided(array) {
  return array.filter((num) => num % 2 == 0 || num % 3 == 0);
}

console.log(divided([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("==============================");

// Write a function that finds the index of a given element in an array. If the
// element isn’t found, return `-1`.
// Input: [1, 2, 3, 4, 5], 3
// Output: 2
// Input: [1, 2, 3, 4, 5], 10
// Output: -1

function find(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target == array[i]) {
      return i;
    }
  }
  return -1;
}

console.log(find([1, 2, 3, 4, 5], 3));
console.log("==============================");

// Write a function to calculate the factorial of a given number.
// Input: 5
// Output: 120

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
console.log("==============================");

// Write a function that takes an object and returns an array containing only
// its keys.
// Input: {name: "John", age: 30}
// Output: ["name", “age"]

function keys(obj) {
  return Object.keys(obj);
}

console.log(keys({ name: "John", age: 30 }));
console.log("==============================");

// Write a function that returns only the unique numbers from an array.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 3, 5]

function unique(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(unique([1, 2, 2, 3, 4, 4, 5]));
console.log("==============================");

// Write a function to count the occurrences of each character in a string.
// Input: "hello"
// Output: {h: 1, e: 1, l: 2, o: 1}

function count(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}

console.log(count("hello"));
console.log("==============================");

// Write a function that sorts an array of numbers in ascending order.
// Input: [5, 3, 8, 1, 2]
// Output: [1, 2, 3, 5, 8]

function sort(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log(sort([5, 3, 8, 1, 2]));
console.log("==============================");

// Write a function to check if a given string is an anagram of another string
// (i.e., contains the same characters in a different order).
// Input: "listen", "silent"
// Output: true

function isEqual(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isEqual("listen", "silent"));
console.log("==============================");

// Write a function that creates a car object with properties such as `model`
// and `year’ and includes a method to display the car's details.
// Input: Toyota, 2020
// Output: "Model: Toyota, Year: 2020"

function car(model, year) {
  return `Model: ${model}, Year: ${year}`;
}

console.log(car("Toyota", 2020));
console.log("==============================");

// Write a function that checks if a given object contains a specific property
// Input: {name: "Alice", age: 25}, "name"
// Output: true
// Input: {name: "Alice", age: 25}, "address"
// Output: false

function checkProperty(obj, property) {
  return obj.hasOwnProperty(property);
}

console.log(checkProperty({ name: "Alice", age: 25 }, "name"));
console.log("==============================");

// Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`)
// on two numbers.
// Input: 5, 3, "+"
// Output: 8
// Input: 5, 3, "%"
// Output: "Invalid operator"

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(5, 3, "+"));
console.log(calculator(5, 3, "%"));
