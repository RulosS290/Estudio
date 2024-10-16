const PRICE = document.querySelector("#precio");

PRICE.addEventListener("keyup", teclado);
document.querySelector("select").addEventListener("change", leer)


function teclado(e){
    (e.key === "Enter") && leer();
    (e.key === "Backspace") && leer();
}

function leer(){
    (PRICE.value)
    ? calcular()
    : vaciar();
}   

function vaciar(){
    document.querySelector("#descuento").value = "";
    document.querySelector("#total").value = "";
}

function calcular(){
    let valuePrice = Number(PRICE.value);
    let descuento = (parseInt(document.querySelector("select").value)/100) * valuePrice;
    document.querySelector("#descuento").value = `${descuento}`
    let total = valuePrice - descuento;
    document.querySelector("#total").value = `${valuePrice} - ${descuento} = ${total}`
    PRICE.focus();
}