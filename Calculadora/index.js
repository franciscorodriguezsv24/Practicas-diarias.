const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesnumeros = document.querySelectorAll('.numero');
const botonesoperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesnumeros.forEach(button => {
    boton.addEventListener('click',() =>  {
        display.agregarNumero(button.innerHTML);
    });
    });







    