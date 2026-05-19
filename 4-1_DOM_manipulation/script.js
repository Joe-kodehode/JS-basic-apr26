// DOM Manipluation - Document Object Model Manipulation

// Section 1 - What is the DOM?

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// Section 2 - Targeting existing elements in the HTML using JS.

// getElementById
const heading = document.getElementById("heading");

// getElementByClassName
const listItems1 = document.getElementsByClassName("list-item");

// querySelector
const unorderedList = document.querySelector("ul");
const moviesSection = document.querySelector("#movies-section");
const myBox = document.querySelector(".box");
const myButton = document.querySelector("#my-button");

// querySelectorAll
// const listItems = document.querySelectorAll("li");

console.log(listItems1);

// Section 3: Changing text or HTML content

// textContent sets or gets the pain text inside an element (no HTML tags)
heading.textContent = "Welcome to the DOM lesson!";

// innerHTML sets or gets the HTML inside an element (can use HTML tags)
heading.innerHTML =
  "I'm learning <span style='color: red'> DOM </span> manipulation!";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// Section 4: Changing styles using DOM manipulation

heading.style.fontSize = "72px";
heading.style.color = "blue";
heading.style.textTransform = "uppercase";

// Section 5: Creating and Adding New Elements!

// STEP 1 - CREATE THE ELEMENT
// Create new <p> element
const newParagraph = document.createElement("p");
const newParagraph2 = document.createElement("p");

// STEP 2 - ADD SOME FLAVOR
// Give our new p tag some text content
newParagraph.textContent = "I'm a new paragraph!";
newParagraph2.textContent = "I'm a new paragraph also!";

// Give it a class
newParagraph.classList.add("custom-paragraph");
newParagraph2.classList.add("custom-paragraph");

// STEP 3 - APPEND THE ELEMENT TO THE PAGE
// Add the element to the end of the body
// document.body.append(newParagraph);
document.body.append(newParagraph, newParagraph2);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// Creating an image element and adding attributes
const newImage = document.createElement("img");

// newImage.setAttribute("src", "images/apple.jpg");
newImage.src = "images/apple.jpg";
newImage.alt = "A red apple on a white background";

newImage.classList.add("my-image");

document.body.append(newImage);

// 📌 setAttribute vs classList.add:
// setAttribute("class", "one two") → sets or replaces all classes
// classList.add("extra") → adds a class without removing others

// Prepend: Adds element to the beginning rather than the end
const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I was added to the top!";
document.body.prepend(firstParagraph);

// Insert an element into the middle
const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle!";

// select a target to put our new paragraph before
const target = document.querySelector("p:nth-of-type(3)");

document.body.insertBefore(midParagraph, target);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new list item to an existing list
const newListItem = document.createElement("li");
newListItem.textContent = "Item 3";
unorderedList.append(newListItem);

// Section 6: Removing Elements

const firstListItem = document.querySelector("li");
unorderedList.removeChild(firstListItem);

// --------------------------------------
// Section 7: Parent and Child Relationships
// --------------------------------------

// You can move between elements in the DOM using parent/child/sibling relationships

console.log(unorderedList.parentElement); // the parent of the <ul>
console.log(unorderedList.children); // all child <li> elements
console.log(unorderedList.firstElementChild); // first child
console.log(unorderedList.lastElementChild); // last child

// Section 8: classList Methods

// add a class
myBox.classList.add("active");

// remove a class
// myBox.classList.remove("active");

// Toggle a class
myBox.classList.toggle("highlight");

// Check if an element has a class
console.log(myBox.classList.contains("highlight"));

// Section 9: Create a List in a loop

const favoriteMovies = [
  "The Matrix",
  "Lord of the Rings",
  "The Place",
  "The pink panther",
  "Interstellar",
  "Dodgeball",
  "The dark knight",
  "Harry pottah",
];

// Create the h2 heading
// STEP 1 - CREATE THE ELEMENT
const movieHeading = document.createElement("h2");

// STEP 2 - give it textContent, class, etc
movieHeading.textContent = "My Favourite Movies!";

// STEP 3 - Add it to the DOM using append
moviesSection.append(movieHeading);

// Create the ul
const moviesList = document.createElement("ul");
moviesSection.append(moviesList);

// Add the li's to our ul

for (let movie of favoriteMovies) {
  const movieLi = document.createElement("li");
  movieLi.textContent = movie;
  moviesList.append(movieLi);
}
