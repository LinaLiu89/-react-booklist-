📚 React Book List

A simple React project that displays a list of books using reusable components and props.
This project was built to practice core React fundamentals such as components, props, and list rendering.

🚀 Features
Display multiple books dynamically
Show book image, title, and author
Display ranking numbers (#1, #2, #3)
Responsive layout using CSS Grid
Reusable Book component
Data separated into its own file
🧱 Built With
React
JavaScript (ES6+)
CSS Grid
JSX
📂 Project Structure
src/
│
├── index.js # React entry point
├── App.js # Main component
├── Book.js # Book component
├── books.js # Book data
├── index.css # Styles
└── images/ # Book images
⚙️ Getting Started
1️⃣ Install dependencies
npm install
2️⃣ Start development server
npm start

Then open:

http://localhost:3000
🧠 Key Concepts Practiced

This project focuses on:

Functional components
Props
Props destructuring
Rendering lists using .map()
Passing data between components
Component reusability
CSS positioning
Responsive design
📦 Example Data Structure

Book data is stored in a separate file:

export const books = [
{
author: "Jordan Moore",
title: "Interesting Facts For Curious Minds",
img: "./images/book-1.jpg",
id: 1,
}
];
🔄 How It Works
Book data is stored in books.js
App.js loops through the book array
Each book is passed to the Book component as props
Book.js renders each book card
CSS styles position ranking numbers and layout
🎯 Future Improvements

Possible upgrades:

Add rating stars ⭐
Add search feature
Add filtering options
Fetch book data from an API
Add animations
