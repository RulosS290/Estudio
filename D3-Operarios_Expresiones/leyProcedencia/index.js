let box = document.querySelector(".contenedor");
let nameUser = "Daniel"
let age = 21;
let heads = 1;
let nameUser1 = "Sebastian"
let age1 = 17;

//Js le da prioridad al &&, para nosotros eligir la prioridad utilizamos parentesis

((nameUser === "Daniel" || age >= 18) && heads == 1)
? draw(`Soy ${nameUser}, tengo ${age} y tengo ${heads} cabeza.`)
: draw("No cumplo algun requisito");

//((false || false) && true) => (false && true) => false
((nameUser1 === "Daniel" || age1 >= 18) && heads == 1) 
? draw(`Soy ${nameUser}, tengo ${age} y tengo ${heads} cabeza.`)
: draw("No cumplo algun requisito o ninguno");


//Prioridad *, / y % luego siguen + y -
let result = 1 + 2 * 3;
draw(result);

function draw(value){
    box.innerHTML += 
    `<div>
        ${value}
    </div>`
}