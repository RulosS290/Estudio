const N1 = document.querySelector("#n1");
const N2 = document.querySelector("#n2");

N1.addEventListener("keydown", teclado);
N2.addEventListener("keydown", teclado);

function teclado(e){
    
    (e.key ==="Enter") && verificar();
}

function verificar(){
    (N1.value && N2.value)
    ? calcular()
    : limpiar();
}

function calcular(){
    let var1 = Number(N1.value.trim());
    let var2 = Number(N2.value.trim());

    document.querySelector(".resultado").innerHTML =
    `<div><strong>Calculo Original:</strong> ${var1 * var2}</div>
    <div><strong>Multiplicacion correcta:</strong> ${(var1 * var2).toFixed(2)}</div>
    <div><strong>Resta correcta:</strong> ${(var1 - var2).toFixed(2)}</div>
    <div><strong>Division correcta:</strong> ${(var1 / var2).toFixed(2)}</div>
    <div><strong>Suma correcta:</strong> ${(var1 + var2).toFixed(2)}</div>` 

}

function limpiar(){
    document.querySelector(".resultado").innerHTML = "";
}