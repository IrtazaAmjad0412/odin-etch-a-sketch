const gridContainer = document.querySelector(".container");

const createGrid = (rows = 16, columns = 16) => {
  document.querySelectorAll(".grid-row").forEach((row) => row.remove());

  for (let r = 0; r < rows; r++) {
    const gridRow = document.createElement("div");
    gridRow.className = "grid-row ";

    for (let c = 0; c < columns; c++) {
      const gridColumn = document.createElement("div");
      gridColumn.className = "grid-column";
      gridRow.append(gridColumn);
    }
    gridContainer.append(gridRow);
  }
  addHoverEffects();
};

const getRandomColor = () => {
  const hexColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

  return hexColor;
};

const addHoverEffects = () => {
  const gridCells = document.querySelectorAll(".grid-column");

  gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseenter", () => {
      gridCell.style.backgroundColor = getRandomColor();
    });
  });
};

const createButton = () => {
  const newGridBtn = document.createElement("button");
  newGridBtn.textContent = "New Grid";
  newGridBtn.className = "newGridBtn";

  newGridBtn.addEventListener("click", () => {
    let newGridSize;

    do {
      newGridSize = Number(prompt("Enter new grid size. Max grid size is 100.", 16));
    } while (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100);

    createGrid(newGridSize, newGridSize);
  });

  gridContainer.append(newGridBtn);
};

createGrid();
createButton();
