const container = document.querySelector(".container");
let dimension = 16;
let area = 640;

container.style.width = `${dimension*(area/dimension)}px`;
container.style.height = `${dimension*(area/dimension)}px`;
container.style.gridTemplate= `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`;

for (let i = 0; i < dimension; i++)
{
    for (let j = 0; j < dimension; j++)
    {
        const cell = document.createElement("div");
        container.appendChild(cell);  
    }
}