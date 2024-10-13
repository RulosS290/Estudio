let caja = document.querySelector(".contenedor");
let numero1 = 2;
let numero2= 3;
let numero3= "3";
let nombre = "Daniel";

// !
// false | 0 | "" | null | | undefined | NaN => Conversion ! = True

dibujar(resultado);







function dibujar(valor){
    caja.innerHTML += `<div>${valor}</div>`
}