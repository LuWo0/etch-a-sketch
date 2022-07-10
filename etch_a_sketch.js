const gridContainer = document.querySelector(".grid-container");
const cell = document.querySelector(".cell");

function createGrid(rows, cols){
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // cell.innerText = (i + 1);
        gridContainer.appendChild(cell);
        fillCell(cell, "red");
    }
}

function fillCell(cell, color) {
    cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", `background-color: ${color};`)
    });
}


createGrid(16, 16);