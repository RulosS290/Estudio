document.getElementsByTagName("button")[0].onclick = hello;
document.getElementsByTagName("button")[1].onclick = img;
document.getElementsByTagName("button")[2].onclick = newButton;
document.getElementsByTagName("button")[3].onclick = clear;

function hello(){
    document.querySelector(".box").textContent = "Hello World";
}

function img(){
    document.querySelector(".box").innerHTML = `
    <img src="img/img.jpg" alt="Logo HTML">`
}

function newButton(){
    document.querySelector(".box").innerHTML += `
    <button> Boton </button>`
}

function clear(){
    document.querySelector(".box").innerHTML = ``
}

