let valor = 0;


document.querySelector(".boton1").onclick = ready;

function ready(){
    document.querySelector(".caja").innerHTML =
    `<div>
        <button class="sum">Añadir 1</button>
        <button class="reiniciar">Reiniciar</button> 
    </div>
    <div class ="incremento"> ${valor} </div>
    `
    document.querySelector(".sum").addEventListener("click", incrementar);
    document.querySelector(".reiniciar").onclick = reiniciar;
}

function incrementar(){
    valor++;
    document.querySelector(".incremento").textContent =
    valor;
}

function reiniciar(){
    valor = 0;
    document.querySelector(".incremento").textContent =
    valor;
}
