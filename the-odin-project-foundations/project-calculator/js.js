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
// let displayInput;

const digits = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

// For testing
const one = document.querySelector(".numberOne")
const two = document.querySelector(".numberTwo")
const container = document.querySelector(".container")
// 12 + 7 - 1 = 18


digits.forEach(btn => {
    btn.addEventListener("click", e => {
        if (firstDigitAfterOperation == true) {
            display.textContent = "";
            firstDigitAfterOperation = false;
            numberTwo = "fill me"
        }

        if (firstDigitAfterEquals == true) {
            display.textContent = "";
            numberOne = null;
            numberTwo = null;
            operator = null;
            firstDigitAfterEquals = false;
        }
        display.textContent += e.target.textContent
    })
})

operations.forEach(btn => {
    btn.addEventListener("click", e => {
        if (!numberOne) {
            numberOne = display.textContent
        }
        else if (numberOne !== display.textContent) {
            numberTwo = display.textContent
        }
        
        if (!operator) {
            operator = e.target.textContent;
        }
        
        if (numberOne && numberTwo && operator) {
            [numberOne, numberTwo, operator] = operate(numberOne,numberTwo,operator);
            operator = e.target.textContent;
        }
        firstDigitAfterOperation = true; 
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
    numberTwo = null;

    firstDigitAfterEquals = true;
})

clearBtn.addEventListener("click", () => clear())

//  Test
