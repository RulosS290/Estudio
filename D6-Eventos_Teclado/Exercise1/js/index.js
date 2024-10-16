/*
-Para MOVER la nave
document.querySelector(".nave").style.bottom="__px";

-Para poder SUSTITUIR una imagen por otra
document.querySelector(".nave").src="img/nave2.png";
*/
let empezar  = false;
let y = 0;

window.addEventListener("keyup", teclado);
window.addEventListener("keydown", teclado);
const NAVE = document.querySelector(".nave");

function teclado(e){
    (e.key==="Enter" && !empezar) && (e.type="keydown") 
    ? combustion()
    : NAVE.src="img/nave1.png";
    //Ternario si se cumple lo 1ero hace lo 2ndo
    (e.key==="ArrowUp" && empezar) && (NAVE.style.bottom=`${y += 5}px`)
}

function combustion(){
    NAVE.src="img/nave2.png"
    empezar = true;
}


