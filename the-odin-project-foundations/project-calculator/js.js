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
    } else if (operator == "-") {
        return subtract(numberOne,numberTwo)
    } else if (operator == '*') {
        return multiply(numberOne,numberTwo) 
    } else if (operator == '/') {
        return divide(numberOne,numberTwo)
    }
}

function computePending() {
    numberTwo = displayInput;
    answer = operate(numberOne,numberTwo,currentOperation);
    display.textContent = answer;
    numberOne = display.textContent;
}

let numberOne;
let operator;
let numberTwo;
let displayInput;
let currentOperation;
let answer;
let firstDigitAfterOperation = false;
let clickEvent = new Event('click');

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

    if (!isNaN(Number(numberOne)) && (operator == "+" || operator == "-" || operator == "*" || operator == "/")) {
        computePending();
    }

    btn.addEventListener("click", e => {
        numberOne = displayInput;
        currentOperation = e.target.textContent;
        firstDigitAfterOperation = true; 
    })
})

equals.addEventListener("click", () => {
    if (currentOperation) {
        computePending()
    }
})