let numeroPrevio = "";
let operador = "";
let numeroActual = "0";

function appendToDisplay(digit) {
    if (numeroActual === "0" || numeroActual === "-0") {
        numeroActual = digit;
    } else {
        numeroActual += digit;
    }
    updateDisplay();
}


function appendDecimal(decimal) {
    if (!numeroActual.includes(decimal)) {
        numeroActual += decimal;
    }
    updateDisplay();
}


function setOperator(op) {
    if (numeroActual !== "") {
        if (numeroPrevio === "") {
            numeroPrevio = numeroActual;
        } else {
            calcularResultado();
        }
        operador = op;
        numeroActual = "";
        updateDisplay();
    }
}


function calcularResultado() {
    let result = 0;
    const num1 = parseFloat(numeroPrevio);
    const num2 = parseFloat(numeroActual);

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (operador) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Error";
                }
                break;
        }
    }

    numeroPrevio = result.toString();
    operador = "";
    numeroActual = "";
    updateDisplay();
}

function calculateResult() {
    if (operador !== "") {
        calcularResultado();
    }
}

function clearDisplay() {
    numeroPrevio = "";
    operador = "";
    numeroActual = "0";
    updateDisplay();
}
function clearDigit() {
    if (numeroActual.length > 1) {
        // Si el número actual tiene más de un dígito, elimina el último dígito.
        numeroActual = numeroActual.slice(0, -1);
    } else {
        // Si el número actual tiene solo un dígito, establece el número actual en "0".
        numeroActual = "0";
    }
    updateDisplay();
}
function updateDisplay() {
    const operationDisplay = document.getElementById("operation");
    const resultDisplay = document.getElementById("result");

    operationDisplay.textContent = numeroPrevio + operador;
    resultDisplay.textContent = numeroActual;
}

