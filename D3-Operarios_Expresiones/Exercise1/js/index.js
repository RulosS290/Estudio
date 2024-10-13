// Valor a modificar
let nota=7;
let boxResultado = document.querySelector(".resultado");
let boxNota = document.querySelector(".nota");
/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")

A mostrar en el <div class="nota">
De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/

/* Usar sólo TERNARIOS
(...) ? :
*/

let pass = (nota >= 5 && nota <= 10) ? ["¡¡Has APROBADO!!", "aprobado" ] : ["Has suspendido", "suspendido"];
let result = (nota < 0 || nota > 10)
            ? "No te flipes"
            : (nota < 5)
                ? "Suspendido"
                : (nota < 7)
                    ? "Aprobado"
                    : (nota < 9)
                        ? "Notable"
                        : "Excelente"

dibujar(pass)
dibujarNota(result)


function dibujar(valor){
    boxResultado.innerHTML =
    `<div class="${valor[1]}">
        ${valor[0]}
    </div>`
};

function dibujarNota(valor){
    boxNota.innerHTML =
    `${valor}`
};



