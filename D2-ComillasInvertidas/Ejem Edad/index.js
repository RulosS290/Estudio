let nombre = "Daniel";
let edad = 21;
let actual = new Date().getFullYear();

let result = `Mi nombre es ${nombre} tengo ${edad} años y naci en el ${calcularNacimiento()}.`;
console.log(result);

let result1 = `Mi nombre es ${nombre} tengo ${edad} años y naci en el ${calcularNacimiento(edad)}.`;
console.log(result1);


function calcularNacimiento(){
    return actual - edad;
}
function calcularNacimientoW(miEdad){
    return actual - miEdad;
}