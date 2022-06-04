const input = document.querySelector(".input-container input"),
button = document.querySelector(".input-container button"),
grid = document.querySelector(".grid-container");
gridShow = document.querySelector(".grid-container div");

button.addEventListener("click", generateGrid);

function generateGrid() {
grid.innerHTML = "";
grid.style.gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(input.value))}, 1fr)`;
for(let i = 0; i < input.value; i++) {
  let gridDiv = document.createElement("div");
  gridDiv.classList.add(`${i+1}`);
  grid.appendChild(gridDiv);
}
}

grid.addEventListener("click", startColoring)
// Add usability for touch (still in progress)
grid.ontouchstart = function startTouch(e) {
if (!e.target.classList.contains("grid-container")) {
  e.target.style.background = "#333";
}
}

function startColoring() {
grid.classList.toggle("On")

grid.addEventListener("mouseover", coloringTiles)

function coloringTiles(e) {
  if (!e.target.classList.contains("grid-container") && grid.classList.contains("On")) {
      e.target.style.background = "#333";
  }
}
}