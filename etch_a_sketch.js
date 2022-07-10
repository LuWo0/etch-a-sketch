const gridContainer = document.querySelector(".grid-container");
const cell = document.querySelector(".cell");
const smallScreenFit = document.querySelector(":root");


function createGrid(rows, cols, width, height){
    removeAllChildNodes(gridContainer);
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols", cols);
    gridContainer.style.setProperty("--cell-width", width);
    gridContainer.style.setProperty("--cell-height", height);
    
    for (let i = 0; i < (rows * cols); i++){ // creates a square grid with equal cells
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
        fillCell(cell, "red");
    }
}

function fillCell(cell, color) { //Fills the cell with a specified color
    cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", `background-color: ${color};`)
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// function makeGridSmall(){
//     const smallGrid = document.querySelector(".small-grid");
//     smallGrid.addEventListener("click", () => {
//         const newCellWidth = document.querySelector(":root");
//         const newCellHeight = document.querySelector(":root");
//         const newRowNum = document.querySelector(":root");
//         const newColNum = document.querySelector(":root");

//         newCellWidth.style.setProperty("--cell-width", "48px");
//         newCellHeight.style.setProperty("--cell-height", "48px");
//         newRowNum.style.setProperty("--grid-rows", "16");
//         newColNum.style.setProperty("--grid-cols", "16");
//     });
// }
function main(){
    let rows = 32, cols = 32, width = "16px", height = "16px"; //setting the grid to default medium values
    createGrid(rows, cols, width, height); 

    const small = document.querySelector(".small-grid");
    small.addEventListener("click", () => {
        rows = 16;
        cols = 16;
        width = "32px";
        height = "32px";
        createGrid(rows, cols, width, height);
        smallScreenFit.style.setProperty("--adjust-value", "8");
        
    });

    const medium = document.querySelector(".medium-grid");
    medium.addEventListener("click", () => {
        rows = 32;
        cols = 32;
        width = "16px";
        height = "16px";
        createGrid(rows, cols, width, height);
        smallScreenFit.style.setProperty("--adjust-value", "16");
    });

    const large = document.querySelector(".large-grid");
    large.addEventListener("click", () => {
        rows = 64;
        cols = 64;
        width = "8px";
        height = "8px";
        createGrid(rows, cols, width, height);
        smallScreenFit.style.setProperty("--adjust-value", "32");
    
    });
}

main();

