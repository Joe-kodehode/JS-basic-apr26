// Lesson 8: JavaScript Objects

// Section 1: What is an Object?

// An object is a data type that stores related data in key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};

console.log(person);

console.log(person.job); // access with dot notation
console.log(person["age"]); // access with bracket notation

// Dot vs bracket:
// - Use dot when you know the key name at code time: person.name
// - Use brackets when the key is dynamic or not a valid identifier: person[key]

// Section 2: Creating, Modifying and Deleting key value pairs.

person.country = "Norway"; // add a new key value pair

person.age += 2; // modify an existing value
person.job = "CEO"; // modify an existing value
delete person.country; // delete an existing key value pair

console.log(person);

// Section 3: Looping through an object using 'for in' loop

const user = {
  name: "joe",
  age: 38,
  location: "Stavanger",
  hobbies: "gaming",
};

// a 'for of' loop, loops over an array. the variable stores a new element in the array each loop.

// a 'for in' loop, loops over an object. the variable stores a different key each loop.

// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["location"]);
// console.log(user["hobbies"]);

for (let key in user) {
  console.log(key);
  console.log(user[key]); // dynamic key access
}

// Dynamic key access is useful when you don’t know the key in advance, like when looping through an object or handling user input.

// Section 4: Nested Objects and Arrays

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isMale: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
};

console.log(userData.hobbies[2]);
console.log(userData.address.postCode);

// Section 4: Array of Objects // Object Array

const products = [
  { productName: "Shirt", productId: 5, stock: 32 },
  { productName: "Pants", productId: 7, stock: 5 },
  { productName: "Socks", productId: 2, stock: 22 },
];

// console.log(products[0].stock);

// Task: In our 'for of' loop, send these 3 strings to the console by accessing the relevant data in the object array.
("The product Shirt has an ID of 5 and has 32 in stock");
("The product Pants has an ID of 7 and has 5 in stock");
("The product Socks has an ID of 2 and has 22 in stock");

for (let product of products) {
  console.log(
    `The product ${product.productName} has an ID of ${product.productId} and has ${product.stock} in stock.`,
  );
}

// Section 6: Descriptive Sentences with Objects and Loops.

const people = [
  {
    name: "Thomas",
    isMale: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMale: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMale: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMale: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    isMale: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    isMale: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    isMale: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping", "css"],
  },
  {
    name: "Cathy",
    isMale: false,
    age: 18,
    hobbies: ["design", "drawing"],
  },
];

//Let's write a 'for of' loop which console logs the persons name, age, if they are a man or woman, a random hobby.
// For example: "Cathy is 18 years old, a woman who enjoys drawing"

// "man" "woman"

for (let person of people) {
  // let gender;

  // if (person.isMale) {
  //   gender = "man";
  // } else {
  //   gender = "woman";
  // }

  // 0-2
  const ranNum = Math.floor(Math.random() * person.hobbies.length);

  let gender = person.isMale ? "man" : "woman";

  console.log(
    `${person.name} is ${person.age} years old, a ${gender} who enjoys ${person.hobbies[ranNum]}`,
  );
}

// Section 7: Working with Object Data

// Calculate total age of all people.
let totalAge = 0;

for (let person of people) {
  totalAge += person.age;
  // console.log(totalAge);
}

// Section 8: Combining hobbies with Spread Syntax

const allHobbies = [];

for (let person of people) {
  // allHobbies.push(...person.hobbies);
  // console.log(...person.hobbies);
}

// console.log(allHobbies);

// Section 9: Adding new key value pairs to objects in an Array

for (let person of people) {
  person.title = person.isMale ? "mr" : "mrs";
  // console.log(person);
}
