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

let num1 = "";
let operator;
let num2 = "";



function operate(num1, operator, num2) {
    multiply(num1, num2)
}

/* på operate funktionen gör så att om man trycker på lika med och man har trycket
på plus så plussar den. Om man har trycket på minus så subtraherar den osv*/


operate(num1, operator, num2)

const buttons = document.querySelectorAll("button")
const display = document.querySelector("input")



addEventListener("click", (event) => {
    if (operator === undefined) {
        switch (event.target.value) {
            case "0":
                if (num1 !== "") {
                    display.value += "0";
                    num1 += "0"
                }
                break;
            case "1":
                display.value += "1";
                num1 += "1"
                break;
            case "2":
                display.value += "2";
                num1 += "2"
                break;
            case "3":
                display.value += "3";
                num1 += "3"
                break;
            case "4":
                display.value += "4";
                num1 += "4"
                break;
            case "5":
                display.value += "5";
                num1 += "5"
                break;
            case "6":
                display.value += "6";
                num1 += "6"
                break;
            case "7":
                display.value += "7";
                num1 += "7"
                break;
            case "8":
                display.value += "8";
                num1 += "8"
                break;
            case "9":
                display.value += "9";
                num1 += "9"
                break;
        }
    }
    console.log(num1);
})

addEventListener("click", (event) => {
    if (num1 !== "") {
        if (event.target.value === "+") {
            operator = "+"
            display.value = ""

        } else if (event.target.value === "-") {
            operator = "-"
            display.value = ""
        } else if (event.target.value === "*") {
            operator = "*"
            display.value = ""
        } else if (event.target.value === "/") {
            operator = "/"
            display.value = ""
        }
    }
    console.log(operator);
    console.log(display.value);
})

addEventListener("click", (event) => {
    if (operator !== undefined) {
        switch (event.target.value) {
            case "0":
                if (num2 !== "") {
                    display.value += "0";
                    num2 += "0"
                }
                break;
            case "1":
                display.value += "1";
                num2 += "1"
                break;
            case "2":
                display.value += "2";
                num2 += "2"
                break;
            case "3":
                display.value += "3";
                num2 += "3"
                break;
            case "4":
                display.value += "4";
                num2 += "4"
                break;
            case "5":
                display.value += "5";
                num2 += "5"
                break;
            case "6":
                display.value += "6";
                num2 += "6"
                break;
            case "7":
                display.value += "7";
                num2 += "7"
                break;
            case "8":
                display.value += "8";
                num2 += "8"
                break;
            case "9":
                display.value += "9";
                num2 += "9"
                break;
        }
    }
    console.log(num2);

})

/* Gör tre eventlisteners en för första nummer variabeln, andra för operator variabeln
och tredje för andra nummer variabeln */

//kom ihåg att ändra nummer variabelns värde från string till number
