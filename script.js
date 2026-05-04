// Lesson 4: Functions

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// Section 1: Function Declarations and Hoisting

// This function logs a simple greeting. It is "hoisted" to the top of our script.js meaning we can call the function even before creating it.
function sayHello() {
  console.log("hello");
}

sayHello();

// Section 2: Arrow functions.

// An arrow function expression. Is NOT hoisted, we can't call it before it is created in the code.
const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

// Section 3: Return statement and scope

// creating a variable inside a function means it is scoped only to that function (can't be accessed outside the function)
// No code after a return gets read. Return is always the last thing in a function.

function returnExample() {
  const myMessage = 5;
  return myMessage;
}

console.log(returnExample());
// let returnedData = returnExample();

// Section 4: Functions with Parameters

// Example of hard coding

function add() {
  return 3 + 4;
}

console.log(add());

// Example of dynamic function, using parameters. This makes our function reusable with different data each function call.

function minus(num1, num2) {
  return num1 - num2;
}
console.log(minus(4, 3));
console.log(minus(10, 5));
console.log(minus(50, 27));

// Example of dynamic function using strings.
// A greeter function that uses parameters and template literals.

const greeter = (timeOfDay, firstName) => {
  return `Good ${timeOfDay} ${firstName}.`;
};

console.log(greeter("Morning", "Joe"));
console.log(greeter("Evening", "Dan"));
console.log(greeter("Night", "Kent"));

// Section 5: Implicit return. This removes the return and {}, only useable when you have nothing else but a return inside your arrow function.

// const adder = (num1, num2) => {
//   return num1 + num2;
// };

const adder = (num1, num2) => num1 + num2;

console.log(adder(10, 5));
console.log(adder(50, 50));

// Section 6: Calculator function using a switch statement.

function calculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "Not a valid operator!";
  }
}

console.log(calculator("+", 10, 5));
console.log(calculator("-", 100, 23));
console.log(calculator("/", 1000, 25));
console.log(calculator("*", 10, 10));
console.log(calculator("chicken nugget", 10, 10));

// Section 7: Updating a global variable via a Function

// We're making a game and we need a function to update the player's health.

// 1 - health should never go above 100.
// 2 - if health goes to or below 0, tell the user they died and reset health to 100.

let health = 100;

const updateHp = (change, amount) => {
  if (change === "heal") {
    health += amount;
    if (health > 100) {
      health = 100;
    }
  } else if (change === "damage") {
    health -= amount;
    if (health <= 0) {
      console.log("You died!");
      health = 100;
    }
  }
};

console.log(health);
updateHp("damage", 199);
console.log(health);
// updateHp("heal", 100);
// console.log(health);

// Section 8: Using Template Strings and Ternary Operator in a Function

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];

// const checkItem = (item) => {
//   if (fruits.includes(item)) {
//     return "Your item is in the array";
//   } else {
//     return "Your item is not in the array";
//   }
// };

const checkItem = (item) =>
  `Your item is ${fruits.includes(item) ? "" : "not"} in the array`;

// console.log(checkItem("Apple"));
console.log(checkItem("Fries"));
// console.log(checkItem("Kiwi"));
// console.log(checkItem("Chicken nuggies"));
