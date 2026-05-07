// Lesson 5: JavaScript Methods

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it.

// Section 1: String Methods.

const text = "   Hello, JavaScript World World!   ";

console.log(text.trim()); // removes whitespace from both ends of the string
console.log(text.toUpperCase()); // converts the string to all uppercase
console.log(text.toLowerCase()); // converts the string to all lowercase
console.log(text.indexOf("JavaScript")); // returns the starting index of "JavaScript" in the string
console.log(text.slice(0, 5)); // extracts characters from 0-4
// let slicedData = text.slice(10, 20);
// console.log(slicedData);
console.log(text.replace("World", "Universe")); // replaces the first instance of the word "World" with "Universe"
console.log(text.replaceAll("World", "Galaxy")); // replaces all instances of the word "World" with "Galaxy"
console.log(text.charCodeAt(3)); // returns the Unicode value of the character at index 3
console.log(text.length); // returns the length of the String
console.log(text.repeat(3)); // repeats the string 3 times

// Section 1.1 - Splitting a string into an array.
console.log(text.trim().split(" ")); // splits the string into an array of substrings whenever it hits a space

// Section 1.2 - Converting a string into a number
let numericString = "123.45xyz";

console.log(Number(numericString)); // converts entire string into a number, returns NaN if any part is invalid

console.log(parseInt(numericString)); // parses as an ineger until an invalid character; returns 123

console.log(parseFloat(numericString)); // parses as a float until an invalid character; returns 123.45

// Section 2: Array Methods
const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns the number of elements in the array

colors.push("Yellow"); // adds "Yellow" as an element to the end of the array
console.log(colors);

colors.pop(); // removes the last element in the array
console.log(colors);

colors.unshift("Purple"); // adds "Purple" as an element to the start of the array
console.log(colors);

colors.shift(); // removes the first element in the array
console.log(colors);

const newColors = colors.toSpliced(1, 2, "Orange", "Pink", "Brown"); // Starting at index 1, replaces 2 elements with "Orange", "Pink" and "Brown". Does NOT affect the original so we store it in a new vaiable.
console.log(newColors);

colors.splice(0, 1, "Chartruse"); // Like toSpliced but affects the original
console.log(colors);

let sortedColors = colors.toSorted(); // sorts the array alphabetically/numerically and stores it in a new array. DOES NOT affect the original.
console.log(sortedColors);

colors.sort(); // like toSorted but affects the original array.
console.log(colors);

console.log(sortedColors.at(1)); // returns element at index 1
console.log(sortedColors.at(-1)); // returns last element

// Section 2.1 - converting an array into a string

console.log(colors.join(" ")); // Joins the elements in the array into a string, separated by whatever is inside the ""

// Section 3: Number Methods
const myNum = 3.1415926;

console.log(myNum.toFixed(2)); // returns the number turned into a string with decimals limited to 2

console.log(myNum.toString()); // converts myNum into a string

console.log(myNum.toExponential()); // returns a string with myNum in exponential notation

// Section 4: Chaining methods together

// Example 1
const rawString = "   JavaScript is fun!   ";
const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();

console.log(processedString);

// Example 2
const wordsArr = ["hello", "world"];
const messageFromArr = wordsArr.join(" ").toUpperCase();
console.log(messageFromArr);

// Example 3
let num1 = 100.12345;
// Take a number, round it to 2 decimals and convert to string, repeat it twice.

console.log(num1.toFixed(2).repeat(2));
