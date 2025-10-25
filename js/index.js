const createGrid = (rows = 16, columns = 16) => {
  const gridContainer = document.querySelector(".container");
  console.log(gridContainer);

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

createGrid();
addHoverEffects();
