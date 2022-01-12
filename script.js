const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button");
const slider = document.querySelector("#size-slider");
const sliderLabel = document.querySelector("#size-slider-value")

createGrid(container,16);
let painting = false;

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
                    e.target.style.backgroundColor = "black";   
            });

            grid.appendChild(cell); 
        }
    }
}


container.addEventListener("click", (e)=>{ 
    painting = !painting;

    if(e.target.className === "container") return;

    e.target.style.backgroundColor = "black";

}); 

clearButton.addEventListener("click", ()=>{
    const cells = document.querySelectorAll(".container > div")
    cells.forEach((cell)=>{
        cell.style.backgroundColor = "whitesmoke";
    });
});

slider.addEventListener("input", ()=>{
    sliderLabel.textContent=`${slider.value} x ${slider.value}`
    createGrid(container,slider.value);
});