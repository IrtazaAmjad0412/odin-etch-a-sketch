# Odin Etch-a-Sketch

A simple browser-based Etch-a-Sketch project built with HTML, CSS, and JavaScript. Users can hover over a grid to color cells, and create a new grid of customizable size.

---

## Features

- Hover over grid cells to color them with random colors.
- Create a new grid with a user-specified size (1-100).
- Responsive layout that adapts to different screen sizes.
- Single "New Grid" button that stays in place.

---

## Usage

- Hover your mouse over grid cells to color them randomly.
- Click "New Grid" to resize the grid.
- Enter a number between 1 and 100 when prompted.
- The grid will regenerate with the specified size.

---

## File Structure

odin-etch-a-sketch/
│
├── index.html # Main HTML file
├── css/
│ └── styles.css # CSS styles
├── js/
│ └── index.js # JavaScript code
└── README.md # Project documentation

---

## JavaScript Overview

- createGrid(rows, columns): Generates a grid of divs dynamically.
- getRandomColor(): Returns a random hex color for hover effects.
- addHoverEffects(): Adds the hover color effect to each grid cell.
- createButton(): Creates a single "New Grid" button and handles resizing with input validation using a do...while loop.

---

## Technologies Used

- HTML5
- CSS3 (Flexbox)
- JavaScript (ES6+)
