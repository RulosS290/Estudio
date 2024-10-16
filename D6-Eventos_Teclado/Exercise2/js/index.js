document.querySelector(".campo").addEventListener("keydown", teclado)
let pulsaciones = 0;
actualizar();

function teclado(e){
    const TECLA = e.key;
    (TECLA === "." || TECLA === "," )
    ? e.preventDefault()
    : escritura(TECLA);
}

function escritura(valor){
    document.querySelector(".caja").innerHTML += `
    <span class="tecla">
        ${valor}
    </span>`
    pulsaciones++;
    actualizar();
}

function actualizar(){
    const PALABRA = (pulsaciones === 1)
    ? "Tecla pulsada"
    : "Teclas pulsadas";
    document.querySelector(".pulsaciones").innerHTML=`
    ${pulsaciones} ${PALABRA}
    `
}