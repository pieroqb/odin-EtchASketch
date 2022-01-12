const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button");
const sizeSlider = document.querySelector("#size-slider");
const sizeSliderLabel = document.querySelector("#size-slider-value");
const defaultColorButton = document.querySelector(".default-color-button");
const randomColorButton = document.querySelector(".random-color-button");
const customColorPicker = document.querySelector("#custom-color-picker");

createGrid(container,16);

let painting = false;
let color = "default";

function deleteGrid(grid){
    const cells = document.querySelectorAll(".container > div")
    cells.forEach((cell)=>{
        grid.removeChild(cell);
    });
}

function createGrid(grid, size){
    deleteGrid(container);
    grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++)
    {
        for (let j = 0; j < size; j++)
        {
            const cell = document.createElement("div");

            cell.addEventListener("mouseover", (e) => {
                if(painting)
                    e.target.style.backgroundColor = paint(color); 
            });

            grid.appendChild(cell); 
        }
    }
}

function paint(color) {
    switch (color)
    {
        case "default":
            return "#000000";
        break;
        case "random":
            return getRandomColor();
        break;
        default:
            return color;
        break;    
    }
}

function getRandomColor() {
  var chars = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

container.addEventListener("click", (e)=>{ 
    painting = !painting;

    if(e.target.className === "container") return;

    e.target.style.backgroundColor = paint(color);

}); 

clearButton.addEventListener("click", ()=>{
    const cells = document.querySelectorAll(".container > div")
    cells.forEach((cell)=>{
        cell.style.backgroundColor = "whitesmoke";
    });
});

defaultColorButton.addEventListener("click", ()=>{
    color = "default";
});

randomColorButton.addEventListener("click", ()=>{
    color = "random";
});

customColorPicker.addEventListener("input", (e)=>{
    color = customColorPicker.value;
});


sizeSlider.addEventListener("input", ()=>{
    sizeSliderLabel.textContent=`${sizeSlider.value} x ${sizeSlider.value}`
    createGrid(container,sizeSlider.value);
});

