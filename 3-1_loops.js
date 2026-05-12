// JavaScript Loops

// A loop is a way to repeat code without writing it multiple times.

// DRY - Don't repeat yourself!

// Section 1: Why we use loops!

const names = ["Tom", "Eric", "Jessica", "Joe", "Bill", "Kristin"];

// console.log(`Hei ${names[0]}`);
// console.log(`Hei ${names[1]}`);
// console.log(`Hei ${names[2]}`);

// Section 2: The 'for loop'

// Where does the loop start // When does the loop end // What changes between each loop

// for (let i = 0; i <= 3; i++) {
//   console.log(`Hei ${names[i]}`);
// }

for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

// This for loop goes backwards
for (let i = names.length - 1; i >= 0; i--) {
  console.log(`Hei ${names[i]}`);
}

// This for loop increments by 2 each loop.
for (let i = 0; i < names.length; i += 2) {
  console.log(`Hei ${names[i]}`);
}

// Section 3: Combine loops with functions and methods

// Create a function with a loop to greet and clean names in an array.

function greetEveryone(nameArray) {
  let cleanedNames = [];

  for (let i = 0; i < nameArray.length; i++) {
    const cleanName =
      nameArray[i].trim().charAt(0).toUpperCase() +
      nameArray[i].trim().slice(1).toLowerCase();
    cleanedNames.push(cleanName);
  }
  return cleanedNames;
}

const people = ["alice", " BOB ", "charlie", "dEbBy", "henRY     "];

console.log(greetEveryone(people));

// Section 4: The 'for of' loop

const colors = ["red", "green", "blue"];

// A 'for of' loop will loop through an entire array from start to finish giving you access to one element in the array each loop.
for (let color of colors) {
  console.log(color);
}

for (let person of people) {
  console.log(person);
}

// Section 5: The 'While loop'

let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// Number guessing game using while loop and Math.random()

// random number between 1-10
const secretNum = Math.floor(Math.random() * 10) + 1;

let guess = 0;

while (guess !== secretNum) {
  guess++;
  console.log(`Guessing: ${guess}`);
  if (guess === secretNum) {
    console.log("Correct!");
  }
}

// Section 6: Creating an Array using a Loop.

// A function that takes in a paramater of length. The function will retrun an array that contains random numbers and has as many elements as the paramater.

// pass in 2 parameters.  how many elements in the array. what dice am I using.

function makeRandomArray(arrLength, sides) {
  const result = [];

  for (let i = 0; i < arrLength; i++) {
    result.push(Math.floor(Math.random() * sides) + 1);
  }

  return result;
}

const randomNumbers = makeRandomArray(50, 100);

console.log(randomNumbers);

// Section 7: Finding the biggest number

function findBiggest(array) {
  let biggest = 0;

  for (let num of array) {
    if (num > biggest) {
      biggest = num;
    }
  }
  return `The biggest number in the array is: ${biggest}`;
}

console.log(findBiggest(randomNumbers));

// Section 8: Using Break and Continue

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

// Skip "Andy"
for (let name of moreNames) {
  if (name === "Andy" || name === "Carl") {
    continue;
  }
  // console.log(`Hei ${name}`);
}

// Stop the loop when we reach "Ashley"
for (let name of moreNames) {
  console.log(`Hei ${name}`);

  if (name === "Ashley") {
    break;
  }
}

// Section 9: Loop Practice Challenges.

// Challenge 1: Log even numbers between 1-100

// What type of loop should we use?

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

let i = 2;
while (i <= 100) {
  console.log(i);
  i += 2;
}

// Challenge 2: Reverse an array using a loop
const reverseArray = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]

// Challenge 3: Guessing game with a limited number of guesses
const secretNumber = Math.ceil(Math.random() * 10);
let guessCount = 0;
const maxGuesses = 5;
let guessed = false;

while (guessCount < maxGuesses && !guessed) {
  guessCount++;
  const guess = guessCount; // Simulated guess
  console.log(`Guess ${guessCount}: ${guess}`);
  if (guess === secretNumber) {
    console.log(`Correct! The number was ${guess}`);
    guessed = true;
  }
}
if (!guessed) {
  console.log(`Out of guesses! The number was ${secretNumber}`);
}

// --------------------------------------
// Summary
// --------------------------------------

// for        → best when using an index or counting
// for...of   → great for looping through array values
// while      → useful when you don’t know how many times to repeat
// break      → stops the loop early
// continue   → skips to the next loop cycle
