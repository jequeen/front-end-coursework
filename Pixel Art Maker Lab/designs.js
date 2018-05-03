

const submitButton = document.querySelector("input[type=submit]");
const colorPicker = document.querySelector("#colorPicker");
const pixelGrid = document.querySelector("#pixelCanvas");
const inputWidth = document.querySelector("#inputWidth");
const inputHeight = document.querySelector("#inputHeight");

// Select color input
const chosenColor = function (){
  return colorPicker.value;
}
// Select size input
const chosenSize = function (){
	const x = inputWidth.value;
    const y = inputHeight.value;
    return {x: x,
            y: y
    };
}

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (pixelGrid.hasChildNodes()) {
        clearGrid();
      	makeGrid();
    }else{
        makeGrid();
    }
});

function clearGrid(){
    while (pixelGrid.firstChild) {
        pixelGrid.removeChild(pixelGrid.firstChild);
    }
}

function makeGrid() {
  // Your code goes here!
    const grid = chosenSize();
    const columnSize = grid.x;
    const rowSize = grid.y;

    for (let i = 1; i <= Number(rowSize); i++){
        let row = document.createElement('tr');
        for(let j = 1; j <= Number(columnSize); j++){
            let col = document.createElement('td');
            row.appendChild(col);
        }
        pixelGrid.appendChild(row);
    }
    const pixels = document.querySelectorAll("td");
    for (let pixel of pixels) {
        pixel.addEventListener("click",function (e) {
            pixel.style.backgroundColor = chosenColor();
        });
    }
}

