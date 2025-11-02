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


})

document.querySelector("#clear-button").addEventListener("click", () => {
    num1 = "";
    operator = undefined;
    num2 = "";
    display.value = "";
    console.log(num1);
    console.log(operator);
    console.log(num2);
})

addEventListener("click", (event) => {
    if (num1 !== "" && operator !== undefined && num2 !== "") {
        if (event.target.value === "+") {
            operator = "+"
            Number(num1), Number(num2);
            console.log(isNaN(num1))
            console.log(isNaN(num2))
            num1 += num2
            console.log(num1)
            num2 = "";
            display.value = Number(num1)

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
})






/* Gör tre eventlisteners en för första nummer variabeln, andra för operator variabeln
och tredje för andra nummer variabeln */

//kom ihåg att ändra nummer variabelns värde från string till number
