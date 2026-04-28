// Conditionals

// Section 1: typeof

// typeof returns the variable type. (string, number, boolean, object etc)
let myVariable = "this is a string";
console.log(typeof myVariable);

// Section 2: Comparison Operators

// These operators compare values and return a boolean (true or false).

console.log(15 > 20); // Greater than (>) operator
console.log(15 < 20); // Less than (<) operator

console.log(15 >= 20); // Greater than or equal to (>=) operator
console.log(15 >= 15);

console.log(15 <= 20); // Less than or equal to (<=) operator
console.log(15 <= 15);

// The equality (==) operator checks if values are equal (with type conversion):
console.log(15 == "15"); // true due to type coercion

// Strict equality (===) operator checks for both value and type:
console.log(15 === "15"); // false, because the types differ (number vs string)

console.log(15 != 20); // Not equal (!=) operator
console.log(15 != "15");

console.log(15 !== "15"); // Strict not equal (!==) operator

// Section 3: Conditionals with if, else if... else if... else

// basic if/else if statement:

let temperature = -5;
if (temperature > 30) {
  console.log("It's a VERY hot day!");
} else if (temperature > 25) {
  console.log("It's a hot day");
} else if (temperature > 20) {
  console.log("It's a warm day");
} else if (temperature > 1) {
  console.log("It's an okay day");
} else {
  console.log("It's freezing!");
}

// Section 4: Logical Operators: && / ||

let age = 18;
let hasLicense = true;
let isBanned = false;

// With logical and (&&) all checks must come back as true
if (age >= 18 && hasLicense === true && isBanned === false) {
  console.log("You are allowed to drive");
} else {
  console.log("You can't drive!");
}

let joeNorwegian = true;
// If you're checking if something is true, you don't need the === true.
if (joeNorwegian) {
  console.log("Velkommen!");
}

// Logical OR || - requires ONE of the checks to come back true.

let day = "Wednesday";
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend! Yipee!");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday");
} else {
  console.log("That's not a day!!");
}

// Using both && and || in the same check.

let referal = false;
let firstShop = true;
let premiumMember = false;

if ((referal && firstShop) || premiumMember) {
  console.log("You get a reduced price");
} else {
  console.log("You pay full price!");
}

// Section 5: Ternary Operators

// The ternary operator is like a shortcut for a simple if / else statement.

let isMember = true;

// let fee = "$10";
// if (isMember) {
//   fee = "$5";
// }

let fee = isMember ? "$5" : "$10";

console.log("Your fee is:", fee);

// Section 6: Switch Statement

let fruit = "strawberry";

switch (fruit) {
  case "banana":
    console.log("That's not a fruit! It's a berry!");
    break;
  case "apple":
    console.log("This one simple trick will keep all the doctors away");
    break;
  case "orange":
    console.log("Oranges are full of vitamin C");
    break;
  default:
    console.log("Unknown fruit detected!");
}

// Use if/else for complex or varied Conditionals
// Use switch for one variable with many fixed values

// Section 7: Truthy and Falsey values

let value = "change me to test";
if (value) {
  console.log("This is true!");
} else {
  console.log("This is false!");
}

// True
// a string with value
// a positive integer
// a negative integer
// an array with elements inside
// an empty array
// an empty object
// an object with key/value pairs

// False
// an empty sting
// 0
// undefined
// null
// NaN

// Section 8: Template Literal // Template String

const firstName = "Joe";
const lastName = "Nordmann";
const weekday = "Tuesday";
const welcomeMsg =
  "Welcome" + " " + firstName + " " + lastName + " " + "to our website!";

const welcomeMsg2 = `Welcome ${firstName} ${lastName} to our website on this fine ${weekday}!`;

console.log(welcomeMsg2);
