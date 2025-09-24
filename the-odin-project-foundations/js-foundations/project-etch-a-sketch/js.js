function createGrid(num) {
    for (let i = 0; i < num*num; i++) {
        let div = document.createElement("div");
        let sideLength = 960/num;
        div.style.width = `${sideLength}px`;
        div.style.height = `${sideLength}px`;
        
        if (darkeningEffect == 1) {
            div.style.opacity = "0";    
        }

        div.addEventListener("mouseenter",e => {
            if (!randomColors && !darkeningEffect) {
                e.target.style.backgroundColor = "red";
            } else if (randomColors && !darkeningEffect) {
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
            } else if (!randomColors && darkeningEffect) {
                e.target.style.backgroundColor = "red";
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            } else if (randomColors && darkeningEffect) {
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            }
        })        

        container.appendChild(div);
    }
}

let randomColors = 0;
let darkeningEffect = 0;

let randomColorsBtn = document.querySelector(".toggles .randomColors");
let darkeningEffectBtn = document.querySelector(".toggles .darkening");

let randomColorsToggle = document.querySelector(".onOrOff .randomColorToggle");
let darkeningEffectToggle = document.querySelector(".onOrOff .darkeningEffectToggle");

randomColorsBtn.addEventListener("click", () => {
    randomColors = 1 - randomColors;
    
    container.replaceChildren()

    if (typeof(numOfSquares) !== "undefined") {
        createGrid(numOfSquares)
    } else {
        createGrid(16)
    }

    if (randomColors) {
        randomColorsToggle.textContent = "on"
        randomColorsToggle.style.color = "#10B981"
    } else {
        randomColorsToggle.textContent = "off"
        randomColorsToggle.style.color = "#888888"
    }
});

darkeningEffectBtn.addEventListener("click", () => {
    darkeningEffect = 1 - darkeningEffect;

    container.replaceChildren()

    if (typeof(numOfSquares) !== "undefined") {
        createGrid(numOfSquares)
    } else {
        createGrid(16)
    }

    if (darkeningEffect) {
        darkeningEffectToggle.textContent = "on"
        darkeningEffectToggle.style.color = "#10B981"
    } else {
        darkeningEffectToggle.textContent = "off"
        darkeningEffectToggle.style.color = "#888888"
    }
});

const container = document.querySelector(".container");
const btn = document.querySelector(".reset button");

let numOfSquares;

createGrid(16);

btn.addEventListener("click", () => {    

    while (!(0 < numOfSquares && numOfSquares < 100)) {
        numOfSquares = prompt("How many squares (1-100)?");
    }

    if (0 < numOfSquares && numOfSquares < 100) {
        container.replaceChildren();
    }

    createGrid(numOfSquares)
})



