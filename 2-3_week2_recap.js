// Week 2 recap (functions / methods)

// Section 1: Check if a list includes an item. (function, methods, ternary, array)

const shoppingList = [
  "milk",
  "bread",
  "cheese",
  "cola",
  "strawberry",
  "eggs",
  "pies",
  "pokemon cards",
  "smash",
  "white monster",
  "green monster",
];

const games = [
  "enter the matrix",
  "forza horizon",
  "commando",
  "half life",
  "golden eye",
  "batman:arkham asylum",
  "tekken",
];

function checkItem(item, array) {
  // if (shoppingList.includes(item)) {
  //   return `${item} was included in the list`;
  // } else {
  //   return `${item} was not included in the list`;
  // }

  const result = array.includes(item) ? "" : "not";

  return `${item} was ${result} included in the list`;
}

// Don't repeat yourself!

console.log(checkItem("mario sunshine", games));

// Section 2: convert a sentence into kebab case (functions, methods)

function toKebabCase(string) {
  return string.trim().toLowerCase().replaceAll(" ", "-");
}

console.log(toKebabCase("   Hello World From JavaScript   "));

// Section 3: Checking if a word is a palindrome (function, methods)

function isPalindrome(word) {
  word = word.toLowerCase();

  let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  if (word === word.split("").reverse().join("")) {
    return `${capitalizedWord} is a palindrome`;
  } else {
    return `${capitalizedWord} is NOT a palindrome`;
  }
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Banana"));

// Section 4: Shorten a string and add "..." to the end if it's more than 20 characters (functions, methods)

function shorten(text, textLength) {
  if (text.length <= textLength) {
    return text;
  }
  return text.slice(0, textLength) + "...";
}

myText = "This is a long sentence that needs shortening.";

console.log(shorten(myText, 15));
console.log(shorten(myText, 10));
console.log(shorten(myText, 5));

// Section 5: Math.random()

// Math.random() is a built-in javascript method that gives you a random number between 0 (inclusive) and 1 (exclusive) 0.000000-0.999999

console.log(Math.random());

// Random number between 1-10

console.log(Math.random() * 11); // 0.0000 - 9.9999

console.log(Math.floor(Math.random() * 10)); // 0-9

console.log(Math.ceil(Math.random() * 10)); // 1 - 10

console.log(Math.floor(Math.random() * 10) + 1); // 1-10

// We can use this random number to target a random element in an array!

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "mew",
  "scyther",
  "abrakadabra",
  "meowth",
  "psyduck",
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "mew",
  "scyther",
  "abrakadabra",
  "meowth",
  "psyduck",
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "mew",
  "scyther",
  "abrakadabra",
  "meowth",
  "psyduck",
];

const randomNumber = Math.floor(Math.random() * pokemon.length);

console.log(randomNumber);

console.log(`Your starter pokemon is: ${pokemon[randomNumber]}`);

// Section 6: Rock, Paper, Scissors game. (functions, switch case, Math.random())

function rockPaperScissors(userInput, aiInput) {
  switch (userInput + aiInput) {
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "it's a draw";
    case "rock" + "paper":
    case "paper" + "scissors":
    case "scissors" + "rock":
      return "AI wins";
    default:
      return "You win!";
  }
}

const answerArr = ["rock", "paper", "scissors"];

const randomAnswer1 = answerArr[Math.floor(Math.random() * 3)];
const randomAnswer2 = answerArr[Math.floor(Math.random() * 3)];

console.log(randomAnswer1);
console.log(randomAnswer2);

console.log(rockPaperScissors(randomAnswer1, randomAnswer2));
