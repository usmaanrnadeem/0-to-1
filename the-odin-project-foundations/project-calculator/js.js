function add(a,b) {
    return a + b
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