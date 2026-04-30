// Lesson 3: Week 1 recap

// Section 1: Variables, Data Types and Operators

// Scenario: An online store managing products.
const storeName = "Joe's Hardware"; // Strings
const productName = "Wireless Earbuds";
let productPrice = 90; // Integer / Int
let productQuantity = 3;
let isInStock = true;
const productTags = ["audio", "wireless", "accessory"]; // Arrays store multiple elements
let discount; // undefined

// Object array / Array of objects
// const komplettStock = [
//   {
//     productName: "sony headphones",
//     price: 2999,
//     stock: 4,
//   },
//   {
//     productName: "robot vaccum",
//     price: 4995,
//     stock: 0,
//   },
// ];
// JSON

// Display variable values using console.log()
console.log(storeName);
console.log(productName);
console.log(productPrice);
console.log(productQuantity);
console.log(isInStock);
console.log(productTags);
console.log(discount);
// You can target specific indexes of arrays. Indexes start at 0!
console.log(productTags[1]);

// Arithmetic operations: Calculate the total cost of our earbuds in stock.

const totalValue = productPrice * productQuantity;
console.log("Total value is:", totalValue);

// Increase the price by 10.
productPrice = productPrice + 10;
productPrice += 10; // Both lines of code do the same, but do it this way!

productPrice -= 5;

console.log(productPrice);

// Increment/Decrement the stock by 1
console.log(productQuantity);
productQuantity += 1;
productQuantity++; //both lines do the same, use ++!

productQuantity -= 1;
productQuantity--; //both lines do the same, use --!

console.log(productQuantity);

// Find the remainder when total cost is divided by 50
const remainder = totalValue % 50;
console.log(totalValue / 50); // 50 50 50 50 50 20
console.log(remainder);

// Section 2: Conditionals and Logical Operators

let basketSize = 275;

// If their basket size is over 300, they qualify for a discount.
//
if (basketSize > 300) {
  console.log("Congratulations, you qualify for a premium discount!");
} else if (basketSize > 250) {
  console.log("You're close to a discount! Spend over 300 to get it");
} else {
  console.log("If you spend more than 300 you will get a discount");
}

// Logical &&  Logical ||

// Show a special message if the product is in stock AND it's on sale (discount = true) OR we have a high quantity (productStock = 100+)
// "Special offer, 15% discount!"
discount = false;
productQuantity += 200;

if (isInStock && (discount || productQuantity >= 100)) {
  console.log("Special offer, 15% discount!");
} else {
  console.log("no discount for you!");
}

// Ternary
// Determine free shipping based on basketSize

basketSize += 1000;

// let shippingCost = "";
// if (basketSize > 500) {
//   shippingCost = "Free shipping!";
// } else {
//   shippingCost = "500kr";
// }

let shippingCost = basketSize > 500 ? "free shipping" : "500kr";

console.log(shippingCost);

// Switch statement

let category = "hamburger";

switch (category) {
  case "audio":
    console.log("This product is in the audio department");
    break;
  case "accessory":
    console.log("This product is in accessories");
    break;
  case "gadget":
    console.log("This is in our gadgets section");
    break;
  default:
    console.log(
      "We don't sell this item. Please leave before I call security.",
    );
}

// Section 3: typeof and truthy/Falsey
console.log(typeof storeName);
console.log(typeof productPrice);

if (typeof productPrice === "string") {
  console.log("The variable is a string.");
} else if (typeof productPrice === "number") {
  console.log("The variable is a number.");
}

// Truthy / Falsey

let value = Infinity;
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
// Infinity

// False
// an empty sting
// 0
// undefined
// null
// NaN

// Secion 4: Template Literals / Template Strings

const firstName = "Henry";
const lastName = "Hanson";
const city = "Edinburogh";
const country = "New Zealand";

// Dynamic!

const welcomeMessage = `Welcome, ${firstName} ${lastName} from ${city}, ${country}! We hope you enjoy shopping with us!`;

// const welcomeMessage =
//   "Welcome," +
//   " " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "from" +
//   " " +
//   city +
//   " " +
//   country +
//   "!" +
//   " " +
//   "We hope you enjoy shoping with us!";

console.log(welcomeMessage);

// Section 5: Mixing Ternary and Template string

// if the basketSize is over 1000, they ARE eligible for free delivery
basketSize = 1;

const delivery = `You ${basketSize > 1000 ? "are" : "aren't"} eligible for free delivery`;

console.log(delivery);
