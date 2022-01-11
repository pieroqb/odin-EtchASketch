const container = document.querySelector(".container");
let dimension = 16;
let painting = false;

container.style.gridTemplate= `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`;

for (let i = 0; i < dimension; i++)
{
    for (let j = 0; j < dimension; j++)
    {
        const cell = document.createElement("div");
        container.appendChild(cell);  
    }
}

container.addEventListener("click", (e)=>{ 
    painting = !painting;
    e.target.style.backgroundColor = "black";
});

container.addEventListener('mouseover', (e) => {
    if (painting)
    e.target.style.backgroundColor = "black";   
});