// Lesson 1: Into to JS

// Comments in JS
// ctrl + *             to comment one line
// shift + alt + a      to comment multiple lines

// Useful hotkeys
// shift + alt + down arrow = copy current line
// ctrl + enter = jump to next line without messing up current line
// ctrl + d = highlight next instance of already highlighted selection
// alt + up/down = moves the current line up or down

// Console log

console.log("This text will go to the console");

// camelCase
// this is when we write the first word's letter in lowercase and subesequent first letters of words in uppercase. It's used for naming variables and functions in JS.

// Variables and simple data types

// String (text in JS)
let exampleString = "hello, I am a string";
console.log(exampleString);
exampleString = "Now this string is inside the variable";
console.log(exampleString);

// Number (both integers and decimals are Numbers in JS)
let exampleNumber = 42;
console.log(exampleNumber);

// Boolean (true/false)
let exampleTrue = true;
let exampleFalse = false;
console.log(exampleTrue);
console.log(exampleFalse);

// Array - can store more than one piece of data. Arrays are numbered, this is called "index". Indexes start at 0!
let exampleArray = ["first element", "second element", "third element"];
console.log(exampleArray);

console.log(exampleArray[0]);
console.log(exampleArray[1]);
console.log(exampleArray[2]);

// Objects store key value pairs.
let person = {
  name: "Joe",
  age: 38,
  location: "Stavanger",
  isPremium: false,
};
console.log(person);

// Undefined (declared but not assigned a value)
let exampleUndefined;
console.log(exampleUndefined);

// Null (A intentional absence of value)
let nullExample = null;
console.log(nullExample);

// Let vs Const
// Use "const" as default. Only use "let" if the value of the variable has to change.
let changeableMessage = "I can change!";
console.log(changeableMessage);
changeableMessage = "I've changed!";
console.log(changeableMessage);

const fixedMessage = "I cannot change!";
// fixedMessage = "I'm trying to change!";
console.log(fixedMessage);

// Basic Operators
// Operators perform calculations or comparisons.

// Arithmetic operators:
let num1 = 6;
let num2 = 5;
// addition
console.log(num1 + num2);
// subtraction
console.log(num1 - num2);
// multiplication
console.log(num1 * num2);
// division
console.log(num1 / num2);
// modulus/modulo - remainder
console.log(num1 % num2);

// using the + operator with strings to concatenate them

let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log("The user's name is" + " " + fullName);

// Increment operator (increases the count by 1)
let counter = 0;
counter++;
counter++;
counter++;
counter++;
console.log(counter);

// Decrement operator (decrease the count by 1)
counter--;
counter--;
counter--;
console.log(counter);

// Compound assignment operators

// Addition assignment
let score = 10;
score = score + 10;
// Does the same but with less code (better, use this!)
score += 10;
console.log(score);

// Subtraction assignment
score = score - 3;
// Does the same but with less code (better, use this!)
score -= 3;
console.log(score);

// Multiplication assignment (*=):
score *= 2; // Equivalent to score = score * 2;
console.log("After multiplying by 2:", score); // 24

// Division assignment (/=):
score /= 4; // Equivalent to score = score / 4;
console.log("After dividing by 4:", score); // 6

// Remainder/modulo assignment (%=):
score %= 5; // Equivalent to score = score % 5;
console.log("After modulus 5:", score); // 6 mod 5 equals 1

// Comparison operators (always returns true or false)
// Greater than >
// is 5 greater than 10 ? no.   false.
console.log(5 > 10);

// Less than <
console.log(5 < 10);

// Greater than or equal to. >=  Less than or equal to. <=
// is 10 less than or equal to 10.
console.log(10 <= 10);
console.log(5 >= 5);

// Equal to (does NOT take into account data type)
console.log(10 == "10");

// STRICTLY equal to (Takes into account data type!) use this one 99.9% of the time!
console.log(10 === "10");

// Not equal to (does NOT take into account data type)
console.log(15 != "15");

// STRICTLY not equal to (Takes into account data type!) use this one 99.9% of the time!
console.log(15 !== "15");
