let current = "";
let previous = "";
let op = null;

const display = document.getElementById("display");
const history = document.getElementById("history");

function number(num) {
    if (num === "." && current.includes(".")) return;
    if (current === "0" && num !== ".") current = "";
    
    current += num;
    display.innerText = current;
}

function operator(symbol) {
    if (current === "" && previous === "") return;
    
    if (previous !== "" && current !== "") {
        calculate();
    }
    
    previous = current;
    current = "";
    op = symbol;
    history.innerText = previous + " " + symbol;
}

function calculate() {
    if (previous === "" || current === "" || !op) return;
    
    let a = parseFloat(previous);
    let b = parseFloat(current);
    let result = 0;
    
    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") {
        if (b === 0) {
            display.innerText = "Error";
            current = "";
            previous = "";
            op = null;
            return;
        }
        result = a / b;
    }
    
    history.innerText = previous + " " + op + " " + current + " =";
    current = String(result);
    previous = "";
    op = null;
    display.innerText = current;
}

function clearCalc() {
    current = "";
    previous = "";
    op = null;
    display.innerText = "0";
    history.innerText = "";
}

function backspace() {
    current = current.slice(0, -1);
    display.innerText = current === "" ? "0" : current;
}

function percent() {
    if (current === "") return;
    current = String(parseFloat(current) / 100);
    display.innerText = current;
}