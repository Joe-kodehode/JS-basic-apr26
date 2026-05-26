// Declare global variables
let randomNumber, guessedNumbers, guessesLeft;

// Targeting html elements (cache the DOM elements)
const guessInput = document.getElementById("guessInput");
const feedbackPara = document.getElementById("feedbackPara");
const guessesPara = document.getElementById("guessesPara");
const prevGuessesPara = document.getElementById("prevGuessesPara");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");

// Function to initialize (on page load) OR restart the game

function initGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessesLeft = 10;
  guessedNumbers = [];
  guessesPara.textContent = `Guesses Left: ${guessesLeft}`;
  feedbackPara.textContent = "";
  prevGuessesPara.textContent = "";
  guessInput.value = "";
  restartBtn.style.display = "none";
  guessBtn.disabled = false;
  guessInput.focus();
}

// Function to update the game based on the user's guess ✅
function checkGuess() {
  const guess = Number(guessInput.value);

  // validation that user has put a number between 1-100
  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedbackPara.textContent = "Please enter a valid number between 1-100";
    return;
  }

  // Check if the user has already guessed the number
  // if (guessedNumbers.includes(guess)) {
  //   feedbackPara.textContent = `You've already guessed ${guess}. Try something else.`;
  //   return;
  // }

  // figure out if user is within 5 ✅
  const difference = Math.abs(guess - randomNumber);

  // update feedbackPara (too high, too low, close, you win) ✅
  if (guess === randomNumber) {
    feedbackPara.textContent = `Congratulations! You got it right! The number was: ${randomNumber}`;
    endGame();
  } else if (difference <= 5) {
    feedbackPara.textContent = `You're close! Within 5!`;
  } else if (guess < randomNumber) {
    feedbackPara.textContent = `Too low! Guess Higher!`;
  } else {
    feedbackPara.textContent = `Too high! Guess lower!`;
  }

  // update prevGuessesPara ✅
  guessedNumbers.push(guess);
  prevGuessesPara.textContent = `Previous Guesses: ${guessedNumbers.join(", ")}`;

  // reduce guessesLeft by 1 / update the guesses left paragraph ✅
  guessesLeft--;
  guessesPara.textContent = `Guesses Left: ${guessesLeft}`;

  // End the game if no guesses remain ✅
  if (guessesLeft === 0) {
    feedbackPara.textContent = `Game over! You're out of guesses! The number was: ${randomNumber}`;
    endGame();
  }

  // Clear the guessInput
  guessInput.value = "";
}

// Function that runs when the user wins or loses ✅
function endGame() {
  restartBtn.style.display = "inline-block";
  guessBtn.disabled = true;
}

// Run the checkGuess function when the user hits enter on keyboard ✅
guessInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && !guessBtn.disabled) {
    checkGuess();
  }

  console.log(event);
});

// Check if the user has already guessed the number and if they have, disable the guess button ❌
guessInput.addEventListener("input", (event) => {
  const guess = Number(event.target.value);

  guessBtn.disabled = guessedNumbers.includes(guess);
});

// Stretch goals:
// Check if the user has already made that guess.
// Create a hard mode where the user guesses between 1-200 OR starts with 5 guesses instead of 10
