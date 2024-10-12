let nombre = "Daniel";
let edad = 21;
let actual = new Date().getFullYear();
let imagen = "img/foto.jpg"

let result = `Mi nombre es ${nombre} tengo ${edad} años y naci en el ${calcularNacimiento(edad)}.`;

document.querySelector("body").innerHTML=`
<div> 
    Mi nombre es <span class="colorRojo">${nombre}</span>
</div>
<button>Aceptar</button>
<div class="imagen">
    <img src="${imagen}"/>
</div>
`

function calcularNacimiento(miEdad){
    return actual - miEdad;
}