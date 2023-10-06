let numeroPrevio = "";
let operador = "";
let numeroActual = "0";

function updateDisplay() {
    document.getElementById("operation").textContent = numeroPrevio + operador + numeroActual;
    document.getElementById("result").textContent = numeroActual;
}

function clearAll() {
    numeroPrevio = "";
    operador = "";
    numeroActual = "0";
    updateDisplay();
}

function deleteDigit() {
    if (numeroActual.length > 1) {
        numeroActual = numeroActual.slice(0, -1);
    } else {
        numeroActual = "0";
    }
    updateDisplay();
}

function appendNumber(digit) {
    if (numeroActual === "0" || operador) {
        numeroActual = digit;
    } else {
        numeroActual += digit;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!numeroActual.includes(".")) {
        numeroActual += ".";
        updateDisplay();
    }
}

function setOperator(operatorValue) {
    if (!operador) {
        numeroPrevio = numeroActual;
        operador = operatorValue;
        numeroActual = "0";
        updateDisplay();
    } else {
        operador = operatorValue;
    }
}

function calculate() {
    if (operador && numeroPrevio && numeroActual) {
        switch (operador) {
            case "+":
                numeroActual = (parseFloat(numeroPrevio) + parseFloat(numeroActual)).toString();
                break;
            case "-":
                numeroActual = (parseFloat(numeroPrevio) - parseFloat(numeroActual)).toString();
                break;
            case "*":
                numeroActual = (parseFloat(numeroPrevio) * parseFloat(numeroActual)).toString();
                break;
            case "/":
                if (numeroActual === "0") {
                    alert("No se puede dividir por cero");
                    clearAll();
                    return;
                }
                numeroActual = (parseFloat(numeroPrevio) / parseFloat(numeroActual)).toString();
                break;
        }
        numeroPrevio = "";
        operador = "";
        updateDisplay();
    }
}

updateDisplay();
