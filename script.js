function add(a, b) {
    return a + b;
}

function sub(a, b) {
    if (a > b) {
        return a - b;
    } else if (b > a) {
        return b - a
    }
}

function multiply(a, b) {
    return a * b;
}

const divide = (a, b) => a / b;

let num1;
let operator;
let num2;

function operate(num1, operator, num2) {
    multiply(num1, num2)
}

operate(num1, operator, num2)