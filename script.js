// Lesson 9: Recap - Loops & Objects

// Section 1 - Looping through Arrays

const fruitNames = ["Apple", "Banana", "Mango", "Grapes", "Pear", "Tomato"];

// 'for' loop. allows the possibility to change starting index, when the loop ends, how much we increment between loops.

for (let i = 0; i < fruitNames.length; i++) {
  console.log(fruitNames[i]);
}

// 'for of' loop works like a standard 'for' loop. It will loop through each element in the array from start to finish. No access to i.

for (let fruit of fruitNames) {
  console.log(fruit);
}

// Section 2 - Looping with conditions

const numbers = [12, 5, 8, 3, 44, 130, 22];

for (let number of numbers) {
  if (number < 10) continue; // exclude numbers that are under 10

  if (number > 100) break; // stop the loop if the number is over 100

  console.log(number);
}

// Section 3: The While loop / Guessing game

// random number between 1-10

Math.random(); // 0.0000 - 0.9999

Math.random() * 10; // 0.0000 - 9.9999

Math.floor(Math.random() * 10); // 0 - 9

const randomNum = Math.floor(Math.random() * 10) + 1; // 1 - 10

let guess = 0;

while (guess !== randomNum) {
  guess++;
  console.log(`Guessing ${guess}...`);
  if (guess === randomNum) {
    console.log(`Congratulations! The number was ${guess}!`);
  }
}

// Section 4 - Basic Object Review

// key value pairs

const book = {
  title: "The Hobbit",
  author: "Tolkien",
  pages: 310,
};

// dot notation to access value
console.log(book.pages);

// bracket notation to access value
console.log(book["pages"]);

// add a new key value pair for  published: 1937
book.published = 1937;
console.log(book);

// update our pages to 320
book.pages = 320;
console.log(book);

// delete the author key
delete book.author;
console.log(book);

// Section 5 - Looping through an object and using dynamic keys

for (let key in book) {
  console.log(key); // the key in the current loop
  console.log(book[key]); // the value in the current key
}

// Section 6 - Array of Objects // Object Array

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    countryOfOrigin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    countryOfOrigin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    countryOfOrigin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    countryOfOrigin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    countryOfOrigin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    countryOfOrigin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    countryOfOrigin: "Costa Rica",
  },
];

// Make a loop to loop over the fruits array. Console.log the following message for each fruit:

// Pineapple is a brown fruit from Costa Rica and costs 3 kr per kilogram.

// EXTRA: Add a new key to each of the objects called "taste" which will be an array that contains 3 random elements from the tastes array.

const tastes = [
  "juicy",
  "crispy",
  "moist",
  "crunchy",
  "moldy",
  "bitter",
  "sweet",
  "salty",
];

// for (let fruit of fruits) {
//   console.log(
//     `${fruit.name} is a ${fruit.color} fruit from ${fruit.countryOfOrigin} and costs ${fruit.pricePerKg} kr per kilogram.`,
//   );
// }

for (fruit of fruits) {
  console.log(
    `${fruit.name} is a${["a", "o", "e", "i", "u"].includes(fruit.color.charAt(0).toLowerCase()) ? "n" : ""} ${fruit.color.toLowerCase()} fruit from ${fruit.countryOfOrigin} and costs ${fruit.pricePerKg} kr per kilogram.\n`,
  );
  // fruit.tastesLike = [];

  // while (fruit.tastesLike.length !== 3) {
  //   // if the taste is already in the array, dont push the same taste again!
  //   const newTaste = tastes[Math.floor(Math.random() * tastes.length)];
  //   if (fruit.tastesLike.includes(newTaste)) {
  //     continue;
  //   } else {
  //     fruit.tastesLike.push(newTaste);
  //   }
  // }

  const mySet = new Set();
  while (mySet.size < 3) {
    taste = tastes[Math.floor(Math.random() * tastes.length)];
    console.log(taste);
    mySet.add(taste);
  }

  fruit.tastesLike = Array.from(mySet);
}
console.log(fruits);

// Section 7 - Find the cheapest Fruit
let cheapestFruit;
let lowestPrice = Infinity;

for (let fruit of fruits) {
  if (fruit.pricePerKg < lowestPrice) {
    lowestPrice = fruit.pricePerKg;
    cheapestFruit = fruit.name;
  }
}

console.log(
  `The cheapest fruit was ${cheapestFruit} with a price of ${lowestPrice}kr per kg`,
);

// Section 8 - Adding and removing keys in a loop

// Add a "good" key to every fruit and set it to "true" using a loop.

for (fruit of fruits) {
  fruit.good = true;
  delete fruit.good;
}

console.log(fruits);

// Section 9 - Object in function

function describeFruit(fruit) {
  return `${fruit.name} contains ${fruit.calories} calories`;
}

console.log(describeFruit(fruits[4]));
