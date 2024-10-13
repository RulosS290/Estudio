let box = document.querySelector(".contenedor");
let nameUser = "Daniel";
let edad = 21;
let nameUser1 = "Falco";
let edad1 = 22;
let vivo = true;
let existo;

(nameUser === "Daniel") ? draw("I'm Daniel") : draw("I'm not Daniel");

(nameUser1 === "Falco") ? draw("I'm Falco") : draw("I'm not Falco");

existo = (vivo) ? "Si" :  "No";
draw(existo);

(!vivo) ? existo = "Si" : existo = "No";
draw(existo);

(nameUser === "Daniel" && edad === 21)
? draw("Soy Daniel y tengo 21 años")
: draw(`No soy Daniel, soy ${nameUser1} y no tengo ${edad} años, tengo ${edad1} años.`);

(nameUser1 === "Daniel" || edad1 === 21)
? draw("Soy Daniel o Tengo 21 años")
: draw(`No soy Daniel, soy ${nameUser1} y no tengo ${edad} años, tengo ${edad1} años.`);

function draw(valor){
    box.innerHTML += 
    `<div>
        ${valor}
    </div>`;
}
