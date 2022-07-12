const gridContainer = document.querySelector(".grid-container");
const cell = document.querySelector(".cell");
const screenScalar = document.querySelector(":root");


function createGrid(rows, cols, width, height){
    removeAllChildNodes(gridContainer);

    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols", cols);
    gridContainer.style.setProperty("--cell-width", width);
    gridContainer.style.setProperty("--cell-height", height);
    
    const black = document.querySelector(".black");
    const grey = document.querySelector(".grey-scale");
    const random = document.querySelector(".random");
    const eraser = document.querySelector(".eraser");
    const colorPicker = document.querySelector(".color-btn");
    const clear = document.querySelector(".clear");

    for (let i = 0; i < (rows * cols); i++){ // creates a square grid with equal cells
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);


        let randomColor = getRandomColor();
        
        
        black.addEventListener("click", () => {
            fillCell(cell, "black");
        })

        grey.addEventListener("click", () => {
            fillCell(cell, "grey");
        })

        random.addEventListener("click", () => {
            fillCell(cell, randomColor);
        }) 

        eraser.addEventListener("click", () => {
            fillCell(cell, getComputedStyle(gridContainer).getPropertyValue("--cell-bg-color"));
        });

        colorPicker.addEventListener("click", () => {
            const colorSelector = document.querySelector(".color-picker");
            colorSelector.style.setProperty("display", "flex");
            let color;
            colorSelector.addEventListener("change", e => {
                color = e.target.value;
                fillCell(cell, color);
                colorSelector.style.setProperty("display", "none");
            });
        })

        clear.addEventListener("click", () => {
            const color = getComputedStyle(gridContainer).getPropertyValue("--cell-bg-color");
            cell.style.setProperty("background-color", color);

        });
        
    }
}

function fillCell(cell, color) { //Fills the cell with a specified color
    cell.addEventListener("mouseover", () => {
        // cell.setAttribute("style", `background-color: ${color};`)
        cell.style.backgroundColor = color;
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
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
        screenScalar.style.setProperty("--adjust-value", "8");
        
    });

    const medium = document.querySelector(".medium-grid");
    medium.addEventListener("click", () => {
        rows = 32;
        cols = 32;
        width = "16px";
        height = "16px";
        createGrid(rows, cols, width, height);
        screenScalar.style.setProperty("--adjust-value", "16");
    });

    const large = document.querySelector(".large-grid");
    large.addEventListener("click", () => {
        rows = 64;
        cols = 64;
        width = "8px";
        height = "8px";
        createGrid(rows, cols, width, height);
        screenScalar.style.setProperty("--adjust-value", "32");
    
    });
}

main();

