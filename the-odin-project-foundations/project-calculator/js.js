function add(a,b) {
    return Number(a) + Number(b)
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
} 

function divide(a,b) {
    return a/b
}

function operate(numberOne,numberTwo,operator) {

    if (operator == "+") {
        answer = Math.round(add(numberOne,numberTwo)*100)/100
    } else if (operator == "-") {
        answer = Math.round(subtract(numberOne,numberTwo)*100)/100
    } else if (operator == '*') {
        answer = Math.round(multiply(numberOne,numberTwo)*100)/100
    } else if (operator == '/') {
        if (numberTwo !== "0") {
            answer = Math.round(divide(numberOne,numberTwo)*100)/100
        }
        else {
            alert("You cannot divide by 0, retry your calcualtion!");
            clear();
        }
        
    }

    display.textContent = answer;

    return [answer, null, null];
}

function clear() {
    numberOne = 0;
    numberTwo = 0;
    operator = 0;
    answer = 0;
    firstDigitAfterEquals = null;
    firstDigitAfterOperation = null;
    display.textContent = "";
}

let numberOne;
let operator;
let numberTwo;
let answer;
let firstDigitAfterOperation;
let firstDigitAfterEquals;
let helper;

const digits = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const del = document.querySelector(".del");

digits.forEach(btn => {
   
    btn.addEventListener("click", e => {

        helper = true;

        if (firstDigitAfterOperation == true) {
            display.textContent = "";
            firstDigitAfterOperation = false;
            numberTwo = "fill me"
            helper = true
        }

        if (operator == null) {
            clear();
        }

        if (firstDigitAfterEquals == true && helper == false) {
            clear()
        }

        helper = false;
        
        display.textContent += e.target.textContent
    })
})

operations.forEach(btn => {
    
    btn.addEventListener("click", e => {
        
        if (!firstDigitAfterOperation) {
            if (!numberOne) {
                numberOne = display.textContent
            }
            else if (numberOne !== display.textContent) {
                numberTwo = display.textContent
            }
            
            if (numberTwo == "fill me") {
                numberTwo = display.textContent;
            }
    
            if (numberOne && numberTwo && operator) {
                [numberOne, numberTwo, operator] = operate(numberOne,numberTwo,operator);
                operator = e.target.textContent;
            }
            firstDigitAfterOperation = true; 
    
            operator = e.target.textContent
        }
    })
})

equals.addEventListener("click", () => {
    
    if (numberOne && numberTwo && operator) {
        if (numberTwo == "fill me") {
            numberTwo = display.textContent;
        }
        [numberOne, numberTwo, operator] = operate(numberOne,numberTwo,operator);
    }
    else if (numberOne && operator && numberTwo == "fill me") {
        if (numberOne !== display.textContent) {
            numberTwo = display.textContent;
            [numberOne, numberTwo, operator] = operate(numberOne,numberTwo,operator);
        }        
    } 

    numberOne = display.textContent;
    numberTwo = "fill me";

    firstDigitAfterEquals = true;

    operator = null;
})

clearBtn.addEventListener("click", () => clear())

decimal.addEventListener("click", () => {

    if (!display.textContent.includes(".")) {

        helper = true;
    
        if (firstDigitAfterOperation == true) {
            display.textContent = "";
            firstDigitAfterOperation = false;
            numberTwo = "fill me"
            helper = true
        }

        if (firstDigitAfterEquals == true && helper == false) {
            clear()
        }

        helper = false;
        
        display.textContent += '.'
    }
})


del.addEventListener("click", () => {
    if (display.textContent && !firstDigitAfterEquals && !firstDigitAfterOperation) {
        display.textContent = display.textContent.slice(0,-1);
    }
})

document.addEventListener("keydown", (e) => {
    
    const numButton = Array.from(digits).find(btn => btn.textContent === e.key);
    const opButton = Array.from(operations).find(btn => btn.textContent === e.key);
    
    if (numButton) numButton.click();
    else if (opButton) opButton.click();
    else if (e.key === "Enter") document.querySelector(".equals").click();
    else if (e.key === "Backspace") document.querySelector(".del").click();
    else if (e.key === "Escape") document.querySelector(".clear").click();
    else if (e.key === ".") document.querySelector(".decimal").click();
})