const CAJA = document.querySelector(".caja");
for(let k = 0; k < 10; k++){
    CAJA.insertAdjacentHTML("afterend", `<button class="bt${k}">Boton ${k+1}</button>`);
    document.querySelector(".bt"+k).addEventListener("click", saludar)
}


function saludar(){
    alert("Hola, que tal.");
}