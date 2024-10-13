//document.querySelector("#seccion").innerHTML = `Hola`;

//document.querySelector(".caja .contenido").innerHTML = `Hola`;

//document.getElementsByClassName("caja")[2].getElementsByClassName("contenido")[0].innerHTML = `CUATRO`

//let cajas = document.getElementsByClassName("caja")
//document.getElementById("seccion").innerHTML += `<h1 class="caja">${cajas.length}</h1>`
//document.getElementById("seccion").innerHTML += `<h1 class="caja">${cajas.length}</h1>`

let cajas = document.querySelectorAll(".caja")
document.getElementById("seccion").innerHTML += `<h1 class="caja">${cajas.length}</h1>`
cajas = document.querySelectorAll(".caja")
document.getElementById("seccion").innerHTML += `<h1 class="caja">${cajas.length}</h1>`
cajas = document.querySelectorAll(".caja")
