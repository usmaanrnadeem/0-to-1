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

    let answer;

    if (operator == "+") {
        answer = add(numberOne,numberTwo)
    } else if (operator == "-") {
        answer = subtract(numberOne,numberTwo)
    } else if (operator == '*') {
        answer = multiply(numberOne,numberTwo) 
    } else if (operator == '/') {
        answer = divide(numberOne,numberTwo)
    }

    display.textContent = answer;

    numberOne = answer;

    numberTwo = null;

    operator = null;
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

const one = document.querySelector(".numberOne")
const two = document.querySelector(".numberTwo")
const container = document.querySelector(".container")
// 12 + 5 + 9 = 14


digits.forEach(btn => {
    btn.addEventListener("click", e => {
        if (firstDigitAfterOperation == true) {
            display.textContent = "";
            firstDigitAfterOperation = false
        }
        display.textContent += e.target.textContent
        displayInput = display.textContent
    })
})

operations.forEach(btn => {

    btn.addEventListener("click", e => {
        if (currentOperation) {
            computePending();
        }
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

container.addEventListener("click", () => {
    one.textContent = numberOne;
    two.textContent = numberTwo;
})
