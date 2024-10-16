let nombre;
const ELEMENTO = document.querySelector("select");


document.querySelector(".boton").addEventListener("click",leer);
ELEMENTO.addEventListener("keydown", teclado);
ELEMENTO.innerHTML += `<option>JavaScript</option>`
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
    nombre = document.querySelector("select").value.trim().toUpperCase();
    (nombre) && (document.querySelector(".caja").innerHTML = `Hola ${nombre}`);
    limpiar();
}

function limpiar(){
    ELEMENTO.value = "";
    ELEMENTO.focus();
}

