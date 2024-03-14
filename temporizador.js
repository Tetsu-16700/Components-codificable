const inputSegundos = document.querySelector(".temporizador-input");
const contador = document.querySelector(".temporizador-contador");
const btnEmpezar = document.querySelector(".temporizador-button_empezar");
const btnPausar = document.querySelector(".temporizador-button_pausar");
const btnDetener = document.querySelector(".temporizador-button_detener");

let temporizador;
let segundosRestantes = 0;

// Función para actualizar el contador
function actualizarContador() {
    contador.textContent = segundosRestantes;
}

function empezarTemporizador() {
    const inputValor = parseInt(inputSegundos.value);

    if (isNaN(inputValor)) {
        // Mostrar mensaje de error
        contador.textContent = "Ingresa un número valido";
        contador.style.fontSize = "16px";
        contador.style.color = 'rgba(220, 38, 28, 1)';
        

    } else {
        segundosRestantes = inputValor;
        actualizarContador();

        contador.style.fontSize = "";
        contador.style.color = "";

        // Deshabilitar input y botón de empezar, habilitar Pausar y Detener
        inputSegundos.disabled = true;
        btnEmpezar.disabled = true;
        btnPausar.disabled = false;
        btnDetener.disabled = false;

        // Iniciar el temporizador
        temporizador = setInterval(function() {
            if (segundosRestantes <= 0) {
                detenerTemporizador();
            } else {
                segundosRestantes--;
                actualizarContador();
            }
        }, 1000);
    }
}


//  continuar el temporizador
function pausarContinuarTemporizador() {
    if (temporizador) {
        clearInterval(temporizador);
        temporizador = null;
        btnPausar.textContent = "Continuar";
    } else {
        temporizador = setInterval(function() {
            if (segundosRestantes <= 0) {
                detenerTemporizador();
            } else {
                segundosRestantes--;
                actualizarContador();
            }
        }, 1000);
        btnPausar.textContent = "Pausar";
    }
}

//  detener el temporizador
function detenerTemporizador() {
    clearInterval(temporizador);
    temporizador = null;
    segundosRestantes = 0;
    actualizarContador();
    inputSegundos.value = "";
    inputSegundos.disabled = false;
    btnEmpezar.disabled = false;
    btnPausar.disabled = true;
    btnDetener.disabled = true;

    const beep = document.getElementById("beep");
    beep.play();
}

// Event listeners
btnEmpezar.addEventListener("click", empezarTemporizador);
btnPausar.addEventListener("click", pausarContinuarTemporizador);
btnDetener.addEventListener("click", detenerTemporizador);