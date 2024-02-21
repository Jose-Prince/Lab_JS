document.body.style.margin = 0

//Paleta de colores
let background = "black"
let border = "#9F2042"
let messages = "9BC995"
let chats = "646E68"
let words = "F8E5EE"

let div1 = document.createElement("div")
div1.id = "contenedor"
document.body.appendChild(div1)

document.getElementById("contenedor").style.display = "grid"
document.getElementById("contenedor").style.gridTemplateColumns = "20% 80%"
document.getElementById("contenedor").style.gridTemplateRows = "94% 6%"
document.getElementById("contenedor").style.border = "1px solid #9F2042"
document.getElementById("contenedor").style.height = "calc(100vh - 0px)"

let div2 = document.createElement("div")
div2.id = "listado-chats"
div1.appendChild(div2)

document.getElementById("listado-chats").style.border = "1px solid #9F2042"
document.getElementById("listado-chats").style.backgroundColor = background

let div3 = document.createElement("div")
div3.id = "mensaje"
div1.appendChild(div3)

document.getElementById("mensaje").style.border = "1px solid #9F2042"
document.getElementById("mensaje").style.backgroundColor = background

let div4 = document.createElement("div")
div4.id = "contenido-perfil"
div1.appendChild(div4)

document.getElementById("contenido-perfil").style.border = "1px solid #9F2042"
document.getElementById("contenido-perfil").style.backgroundColor = background

let div5 = document.createElement("div")
div5.id = "contenido-chat"
div1.appendChild(div5)

document.getElementById("contenido-chat").style.border = "1px solid #9F2042"
document.getElementById("contenido-chat").style.backgroundColor = background




