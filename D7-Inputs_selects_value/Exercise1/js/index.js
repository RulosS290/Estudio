const INPUT = document.querySelector("#nombre");

document.querySelector(".boton").addEventListener("click", leer);
INPUT.addEventListener("keydown", teclado);

function teclado(e){
    (e.key === "Enter") && leer();
}

function leer(){
    const NOMBRE = INPUT.value.trim();
    (NOMBRE) && escribir(convertir(NOMBRE)); 
    vaciar();
}

function vaciar(){
    INPUT.value = "";
    focus();
}

function convertir(valor){
    let nombre = `${valor.substring(0,1).toUpperCase()}${valor.substring(1).toLowerCase()}`
    return nombre;
}

function escribir(nombre){
    (!document.querySelector("select")) && crearSelect();
    document.querySelector("select").innerHTML += `<option>${nombre}</option>`
}

function crearSelect(){
    document.querySelector(".resultado").innerHTML = `<select></select>`
    document.querySelector(".resultado").addEventListener("click", saludo)
}

function saludo(){
    let name = document.querySelector("select").value;
    document.querySelector("span").innerHTML += 
    `<div>
        Hola ${name}
    </div>`
}


