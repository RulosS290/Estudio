const MINOMBRE = "Daniel";
const IVA = 0.21;
let cantidad = 2;
let precio = 4;

// Quien va dirigido
// Que evento
// Funcion que se va a ejecutar

document.querySelector(".boton1").onclick = saludar;
document.querySelector(".boton1").onclick = calcularIVA;
document.querySelector(".boton2").addEventListener("click", saludar);
document.querySelector(".boton2").addEventListener("click", calcularIVA);

function saludar(){
    escribir(`Hola ${MINOMBRE}`);
}

function calcularIVA(){
    escribir(precio * cantidad * IVA);
}

function escribir(valor){
    document.querySelector(".caja").innerHTML += 
    `<div>
        ${valor}
    </div>`;
}