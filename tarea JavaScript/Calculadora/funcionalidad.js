 var operandoa;
 var operandob;
 var operacion;

 function init(){
   //varianles
   var resultado = document.getElementById("resultado");
   var Cancelar = document.getElementById('Cancelar');
   var division = document.getElementById('division');
   var multiplicacion = document.getElementById('multiplicacion');
   var restar = document.getElementById('restar');
   var sunmar = document.getElementById('sumar');
   var cero = document.getElementById('cero');
   var btnUno = document.getElementById('uno');
   var dos = document.getElementById('dos');
   var tres = document.getElementById('tres');
   var cuatro = document.getElementById('cuatro');
   var cinco = document.getElementById('cinco');
   var seis = document.getElementById('seis');
   var siete = document.getElementById('siete');
   var ocho = document.getElementById('ocho');
   var nueve = document.getElementById('nueve');
   var punto = document.getElementById("punto")
   var igual = document.getElementById('igual')
   var pantalla = document.getElementById('pantalla')


//eventos
btnUno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}

dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}

tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}

cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}

cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}

seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}

siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}

ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}

nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}

cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
 
punto.onclick = function(e){
    resultado.textContent = resultado.textContent + ".";
}

Cancelar.onclick = function(e){
   cancelar();
}

sumar.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}

restar.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}

division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}

multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}    

igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver()}

pantalla.onclick = function(e){
            operandob = resultado.textContent
            alert(resultado.textContent)
}
 }
function limpiar(){
    resultado.textContent = "";
}

function cancelar(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = " ";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
            
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    cancelar();
    resultado.textContent = res;


}

