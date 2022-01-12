const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button")

createGrid(container,16);
let painting = false;

const size16Button = document.querySelector(".button-size-16");
const size32Button = document.querySelector(".button-size-32");
const size64Button = document.querySelector(".button-size-64");


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

            cell.addEventListener("click", (e)=>{ 
                painting = !painting;
                e.target.style.backgroundColor = "black";
            }); 
            cell.addEventListener("mouseover", (e) => {
                if(painting)
                    e.target.style.backgroundColor = "black";   
            });

            grid.appendChild(cell); 
        }
    }
}

clearButton.addEventListener("click", ()=>{
    const cells = document.querySelectorAll(".container > div")
    cells.forEach((cell)=>{
        cell.style.backgroundColor = "whitesmoke";
    });
});

size16Button.addEventListener("click", ()=>{
    createGrid(container,16);
});

size32Button.addEventListener("click", ()=>{
    createGrid(container,32);
});

size64Button.addEventListener("click", ()=>{
    createGrid(container,64);
});
