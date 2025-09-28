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
        return add(numberOne,numberTwo)
    } else if (operate == "-") {
        return subtract(numberOne,numberTwo)
    } else if (operate == '*') {
        return multiply(numberOne,numberTwo) 
    } else if (operate == '/') {
        return divide(numberOne,numberTwo)
    }
}

let numberOne;
let operator;
let numberTwo;
let displayInput;
let currentOperation;
let answer;
let firstDigitAfterOperation = false;

const digits = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector(".equals");

digits.forEach(btn => {
    btn.addEventListener("click", e => {
        if (firstDigitAfterOperation == true) {
            display.textContent = "";
            displayInput = 0;
            firstDigitAfterOperation = false
        }
        display.textContent += e.target.textContent
        displayInput = display.textContent
    })
})

operations.forEach(btn => {
    btn.addEventListener("click", e => {
        numberOne = displayInput;
        currentOperation = e.target.textContent;
        firstDigitAfterOperation = true; 
    })
})

equals.addEventListener("click", e => {
    numberTwo = displayInput;
    answer = operate(numberOne,numberTwo,currentOperation);
    display.textContent = answer;
    currentOperation = "";
})
