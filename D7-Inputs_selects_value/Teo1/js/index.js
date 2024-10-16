let nombre;
const ELEMENTO = document.querySelector("#campo");


document.querySelector(".boton").addEventListener("click",leer);
ELEMENTO.addEventListener("keydown", teclado);
limpiar();

function teclado(e){
    (e.key === "Enter") && leer();
}

/*

Combierte Todo
toUpperCase()
toLowerCase()
*/

function leer(){
    nombre = document.querySelector("#campo").value.trim().toUpperCase();
    (nombre) && (document.querySelector(".caja").innerHTML = `Hola ${nombre}`);
    limpiar();
}

function limpiar(){
    ELEMENTO.value = "";
    ELEMENTO.focus();
}

