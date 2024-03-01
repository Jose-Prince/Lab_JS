document.body.style.margin = 0;

let posts = obtainPosts()
let myPosts = null

const user_name = "José Prince"
let receptor = "Grupal"
let mondongo = false

async function miFuncion() {

    let newPosts = await obtainPosts()

    myPosts = newPosts.filter(message1 => !posts.some(message2 => message2.id === message1.id))

    if (myPosts.length > 0){
        if (receptor === "Grupal") {
            sendChats(myPosts)
        } else {
            posts = newPosts
            getMessages(receptor)
        }
    } 
}

const intervaloTiempo = 10000

// Llama a setInterval() y pasa la función y el intervalo de tiempo como parámetros
const intervalID = setInterval(miFuncion, intervaloTiempo);

//Paleta de colores
let background = "black";
let border = "#9F2042";
let messages = "#9BC995";
let chats = "#267891";
let words = "#F8E5EE";

function actualizarColores() {
    const listadoChats = document.getElementById("listado-chats");
    if (listadoChats) {
        listadoChats.style.border = "1px solid " + border;
        listadoChats.style.backgroundColor = background;
    }

    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.style.border = "1px solid " + border;
        mensaje.style.backgroundColor = background;
    }

    const contenidoPerfil = document.getElementById("contenido-perfil");
    if (contenidoPerfil) {
        contenidoPerfil.style.border = "1px solid " + border;
        contenidoPerfil.style.backgroundColor = background;
    }

    const contenidoChat = document.getElementById("contenido-chat");
    if (contenidoChat) {
        contenidoChat.style.border = "1px solid " + border;
        contenidoChat.style.backgroundColor = background;
    }

    const nombre = document.getElementById("nombre");
    if (nombre) {
        nombre.style.color = words;
    }

    const theme = document.getElementById("theme");
    if (theme) {
        theme.style.backgroundColor = border;
    }

    const chattingElements = document.querySelectorAll(".chatting");
    if (chattingElements) {
        chattingElements.forEach(elemento => {
            elemento.style.backgroundColor = chats;
            elemento.style.color = words;
            elemento.style.border = "1px solid " + border;
        });
    }

    const top = document.getElementById("top");
    if (top) {
        top.style.backgroundColor = chats;
        top.style.color = words;
    }

    const messageElements = document.getElementsByClassName("message");
    if (messageElements && messageElements.length > 0) {
        for (let i = 0; i < messageElements.length; i++) {
            messageElements[i].style.backgroundColor = messages;
        }
    }
}


const div1 = document.createElement("div");
div1.id = "contenedor";
document.body.appendChild(div1);

document.getElementById("contenedor").style.display = "grid";
document.getElementById("contenedor").style.gridTemplateColumns = "20% 80%";
document.getElementById("contenedor").style.gridTemplateRows = "94% 6%";
document.getElementById("contenedor").style.border = "1px solid " + border
document.getElementById("contenedor").style.height = "99.8vh";

const div2 = document.createElement("div");
div2.id = "listado-chats";
div1.appendChild(div2);

document.getElementById("listado-chats").style.border = "1px solid " + border;
document.getElementById("listado-chats").style.backgroundColor = background;
document.getElementById("listado-chats").style.display = "flex"
document.getElementById("listado-chats").style.flexDirection = "column"
document.getElementById("listado-chats").style.overflow = "auto"

createChats()

const  div3 = document.createElement("div")
div3.id = "mensaje"
div1.appendChild(div3)

document.getElementById("mensaje").style.border = "1px solid " + border
document.getElementById("mensaje").style.backgroundColor = background

const div3_1 = document.createElement("div")
div3_1.id = "top"
div3.appendChild(div3_1)

document.getElementById("top").style.minHeight = "2.4%"
document.getElementById("top").style.maxHeight = "2.4%"
document.getElementById("top").style.backgroundColor = chats
document.getElementById("top").style.border = "1px solid " + border
document.getElementById("top").style.display = "flex"
document.getElementById("top").style.alignItems = "center"
document.getElementById("top").style.justifyContent = "space-between"
document.getElementById("top").style.padding = "15px"
document.getElementById("top").style.fontSize = "20px"
document.getElementById("top").style.color = words

const receptorName = document.createElement("div")
receptorName.innerHTML = receptor
div3_1.appendChild(receptorName)

const div3_1_2 = document.createElement("textarea")
div3_1_2.id = "search"
div3_1.appendChild(div3_1_2)

document.getElementById("search").style.height = "30px";
document.getElementById("search").style.width = "50%";
document.getElementById("search").style.backgroundColor = '#dfe3eb';
document.getElementById("search").style.resize = "none";
document.getElementById("search").style.fontSize = "16px"
document.getElementById("search").style.fontSize = "16px"
document.getElementById("search").maxLength="140"
document.getElementById("search").placeholder = "Buscar"

document.getElementById("search").addEventListener("input", async function() {
    if (document.getElementById("search").value != ""){
        document.getElementById("mensajes").innerHTML = ""

        const posts = await obtainPosts()
        
        const mensajesFiltrados = posts.filter(elemento => {
            const nombre = elemento.username
            const mensaje = elemento.content
    
            return (nombre == receptor || receptor == "Grupal") && mensaje.toLowerCase().includes(document.getElementById("search").value.toLowerCase())
        })
    
        mensajesFiltrados.forEach(element => {
            const name = document.createElement("p")
            name.textContent = element.username
            name.style.color = "white"
            div3_2.prepend(name)
            if (regexEv(element.content) == 0){
                createImage(element.content, mondongo)
            } else if (regexEv(element.content) == 1) {
                urlPreview(element.content,mondongo)
            } else {
                createMessage(element.content, mondongo)
            } 
        })
    } else {
        if (receptor == "Grupal"){
            sendChats()
        } else {
            getMessages(receptor)
        }
    }
})

const div3_2 = document.createElement("div")
div3_2.id = "mensajes"
div3.appendChild(div3_2)
 
document.getElementById("mensajes").style.padding = "15px"
document.getElementById("mensajes").style.display = "flex"
document.getElementById("mensajes").style.justifyContent = "flex-start"
document.getElementById("mensajes").style.flexDirection = "column-reverse"
document.getElementById("mensajes").style.overflow = "auto"
document.getElementById("mensajes").style.maxHeight = "90%"
document.getElementById("mensajes").style.minHeight = "90%"
document.getElementById("mensajes").style.width = "auto"

const div4 = document.createElement("div");
div4.id = "contenido-perfil";
div1.appendChild(div4);

document.getElementById("contenido-perfil").style.border = "1px solid " + border
document.getElementById("contenido-perfil").style.backgroundColor = background
document.getElementById("contenido-perfil").style.display = "flex"
document.getElementById("contenido-perfil").style.alignItems = "center"
document.getElementById("contenido-perfil").style.justifyContent = "space-around"

const div5 = document.createElement("div")
div5.id = "contenido-chat"
div1.appendChild(div5)

document.getElementById("contenido-chat").style.border = "1px solid " + border;
document.getElementById("contenido-chat").style.backgroundColor = background;
document.getElementById("contenido-chat").style.display = "flex";
document.getElementById("contenido-chat").style.alignItems = "center";
document.getElementById("contenido-chat").style.justifyContent = "space-evenly"

//Image de perfil
const image = document.createElement("img");
image.id = "perfil";
div4.appendChild(image);

document.getElementById("perfil").src = "https://media.posterlounge.com/img/products/760000/757344/757344_poster.jpg";
document.getElementById("perfil").style.width = "50px";
document.getElementById("perfil").style.height = "50px";
document.getElementById("perfil").style.borderRadius = "50%";

const nombre_perfil = document.createElement("p");
nombre_perfil.id = "nombre";
div4.appendChild(nombre_perfil);

document.getElementById("nombre").textContent = user_name;
document.getElementById("nombre").style.color = words;

const color_switch = document.createElement("label");
color_switch.classList.add("switch");

const switchInput = document.createElement("input");
switchInput.type = "checkbox";
switchInput.id = "toggleSwitch";

const slider = document.createElement("span");
slider.classList.add("slider", "round");

color_switch.appendChild(switchInput);
color_switch.appendChild(slider);

div4.appendChild(color_switch);

switchInput.addEventListener("change", function() {
    if (this.checked) {
        localStorage.setItem("switchState", "checked");
        background = "white";
        border = "9F2042";
        messages = "#267891";
        chats = "#9BC995";
        words = "black";
        actualizarColores();
    } else {
        localStorage.setItem("switchState", "unchecked");
        background = "black";
        border = "#9F2042";
        messages = "#9BC995";
        chats = "#267891";
        words = "#F8E5EE";
        actualizarColores();
    }
});

const textbox = document.createElement("textarea");
textbox.className = "text";
div5.appendChild(textbox);

document.getElementsByClassName("text")[0].addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // Evita que se inserte un salto de línea en el textarea
        const contenido = document.getElementsByClassName("text")[0].value
        if (contenido != "") {
            const name = document.createElement("p")
            name.textContent = user_name
            name.style.color = "white"
            div3_2.prepend(name)
            name.style.alignSelf = "flex-end"
            mondongo = true
            if (regexEv(contenido) == 0){
                createImage(contenido, mondongo)
            } else if (regexEv(contenido) == 1) {
                urlPreview(contenido,mondongo)
            } else {
                createMessage(contenido, mondongo)
            } 
            const objeto = {
                "username": user_name,
                "message": contenido
            } 
            postPosts(objeto)
        }    
        document.getElementsByClassName("text")[0].value = ""; // Limpia el contenido del textarea después de enviar el mensaje
    }
})

document.getElementsByClassName("text")[0].style.height = "50%";
document.getElementsByClassName("text")[0].style.width = "90%";
document.getElementsByClassName("text")[0].style.backgroundColor = '#dfe3eb';
document.getElementsByClassName("text")[0].style.resize = "none";
document.getElementsByClassName("text")[0].style.fontSize = "16px"
document.getElementsByClassName("text")[0].style.fontSize = "16px"
document.getElementsByClassName("text")[0].placeholder = "Mensaje"

const send_button = document.createElement("button");
send_button.id = "theme"
div5.appendChild(send_button);

document.getElementById("theme").style.borderRadius = "50%";
document.getElementById("theme").style.height = "45px";
document.getElementById("theme").style.width = "45px";
document.getElementById("theme").style.backgroundColor = border;

send_button.addEventListener("click", function() {
    const contenido = document.getElementsByClassName("text")[0].value
    if (contenido != "") {
        const contenido = document.getElementsByClassName("text")[0].value
                
        if (contenido != "") {
            const name = document.createElement("p")
            name.textContent = user_name
            name.style.color = "white"
            div3_2.prepend(name)
            name.style.alignSelf = "flex-end"
            mondongo = true
            if (regexEv(contenido) == 0){
                createImage(contenido, mondongo)
            } else if (regexEv(contenido) == 1) {
                urlPreview(contenido,mondongo)
            } else {
                createMessage(contenido, mondongo)
            } 
            const objeto = {
                "username": user_name,
                "message": contenido
            } 
            postPosts(objeto)
        }      
        document.getElementsByClassName("text")[0].value = ""; // Limpia el contenido del textarea después de enviar el mensaje
    }
})

if (localStorage.getItem("switchState") == "checked") {
    switchInput.checked = true;
    background = "white";
    border = "9F2042";
    messages = "#646E68";
    chats = "#9BC995";
    words = "black";
    actualizarColores();
}

const sendI = document.createElement("img");
sendI.id = "send";
send_button.appendChild(sendI);

document.getElementById("send").style.height = "32px";
document.getElementById("send").style.width = "32px";
document.getElementById("send").src = "https://static-00.iconduck.com/assets.00/send-icon-1024x1011-38wtwa0n.png";
document.getElementById("send").style.margin = "4px 0px 0px 3px";

function createMessage(contenido,mondongo) {
    const mensaje = document.createElement("div")
    mensaje.className = "message"
    
    mensaje.style.backgroundColor = messages
    mensaje.style.color = "black"
    mensaje.style.marginTop = "5px"
    mensaje.style.padding = "5px"
    mensaje.style.display = "flex"
    mensaje.style.alignItems = "center"
    mensaje.style.whiteSpace = "pre-line"
    mensaje.animate([
        {transform: "translateX(-300px)"},
        {transform: "translateX(0px)"}
    ],{
        duration: 500,
        iterations: 1,
        fill: "forwards"
    })
    
    if (contenido.length > 70) {
    let phrase = "";
    while (contenido.length > 70) {
        let substring = contenido.substring(0, 70);
        let lastSpaceIndex = substring.lastIndexOf(" ");
        if (lastSpaceIndex !== -1) {
            phrase += substring.substring(0, lastSpaceIndex + 1) + "\n";
            contenido = contenido.slice(lastSpaceIndex + 1);
        } else {
            phrase += substring + "\n";
            contenido = contenido.slice(70);
        }
    }
        phrase += contenido;
        mensaje.innerHTML = phrase;
    } else {
        mensaje.innerHTML = contenido;
    }

    const div3_2_1 = document.createElement("div")
    div3_2_1.style.display = "flex"
    div3_2_1.style.justifyContent = (receptor == user_name || mondongo) ? "flex-end" : "flex-start"
    div3_2.prepend(div3_2_1)
    div3_2_1.append(mensaje);
    div3_2.scrollTop = div3_2.scrollHeight
}

function createImage(url, mondongo) {
    const mensaje = document.createElement("div")
    mensaje.className = "message"

    mensaje.style.backgroundColor = messages
    mensaje.style.color = "black"
    mensaje.style.marginTop = "5px"
    mensaje.style.padding = "5px"
    mensaje.style.display = "flex"
    mensaje.style.alignItems = "center"
    mensaje.style.justifyContent = "flex-end"
    mensaje.style.whiteSpace = "pre-line"
    mensaje.style.width = "40%"
    mensaje.animate([
        {transform: "translateX(-300px)"},
        {transform: "translateX(0px)"}
    ],{
        duration: 500,
        iterations: 1,
        fill: "forwards"
    })

    const image = document.createElement("img")
    image.src = url
    image.className = "imagen"
    image.style.width = "100%"
    mensaje.appendChild(image)

    const div3_2_1 = document.createElement("div")
    div3_2_1.style.display = "flex"
    div3_2_1.style.justifyContent = (receptor == user_name || mondongo) ? "flex-end" : "flex-start"
    div3_2.prepend(div3_2_1)
    div3_2_1.append(mensaje);
    div3_2.scrollTop = div3_2.scrollHeight 
}

function createChat(user){
    const newChat = document.createElement("button")
    newChat.className = "chatting"
    newChat.innerText = user
    newChat.style.color = words
    newChat.style.width = "100%"
    newChat.style.minHeight = "6%"
    newChat.style.backgroundColor = chats
    newChat.style.display = "flex"
    newChat.style.alignItems = "center"
    newChat.style.justifyContent = "center"
    newChat.style.border = "1px solid " + border
    newChat.style.fontSize = "17px"


    newChat.addEventListener("click", function() {
        receptor = newChat.innerHTML
        
        if (receptor != document.getElementById("top").innerHTML){
            receptorName.textContent = receptor
            getMessages(receptor)
        }

    })

    return newChat
}

function regexEv(url){
    const imageRegex = /\b(?:https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*\.(?:jpg|jpeg|png|gif)\b/i;
    const webpageRegex = /\b(?:https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*\b/i;
    if (imageRegex.test(url)){
        return 0
    } else if (webpageRegex.test(url)) {
        return 1
    } else {
        return 2
    }

}

//ASYNC FUNCTIONS

async function obtainPosts(){
    const data = await fetch("http://uwu-guate.site:3000/messages",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const posts = await data.json()

    return posts
}

async function postPosts(object){
    const data = await fetch("http://uwu-guate.site:3000/messages",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
}

async function createChats(){
    const names = []
    const myPosts = await obtainPosts()

    const lista = document.getElementById("listado-chats")
    if (lista != null){
        myPosts.map(post=>{
            const newChat = createChat(post.username)
            return newChat
        })
        .forEach(element => {
            if (!names.includes(element.innerHTML)){
                lista.appendChild(element)
                names.push(element.innerHTML)    
            }
        })
    }
}

async function getMessages(receptor) {
    document.getElementById("mensajes").innerHTML = "";

    const posts = await obtainPosts(); // Esperamos a que se obtengan los mensajes

    mondongo = false;

    // Usamos un bucle for...of en lugar de forEach para poder utilizar async/await correctamente
    for (const element of posts) {
        if (element.username === receptor) {
            if (regexEv(element.content) === 0) {
                createImage(element.content, mondongo);
            } else if (regexEv(element.content) === 1) {
                await urlPreview(element.content, mondongo); // Esperamos a que se complete la llamada a urlPreview
            } else {
                createMessage(element.content, mondongo);
            }
        }
    }
}


async function urlData(url){
    // URL de la API de Link Preview y enlace que deseas obtener una vista previa
    const linkPreviewAPI = 'https://api.linkpreview.net';
    const urlToPreview = url;

    // Parámetros de la solicitud (generalmente incluyendo tu clave de API si es necesaria)
    const apiKey = '63b3e6507fbcea99ddae13234a339174'; // Reemplaza 'tu_clave_de_api' con tu clave real
    const queryParams = new URLSearchParams({
    key: apiKey,
    q: urlToPreview
    });

    // URL completa con parámetros de consulta
    const requestURL = `${linkPreviewAPI}?${queryParams}`;    

    const info = fetch(requestURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .catch(error => {
    // Manejar errores de la solicitud aquí
    console.error('Error al obtener la vista previa del enlace:', error);
  })

  return info
}

async function urlPreview(url, mondongo){
    // const data = await urlData(url)

    // const mensaje = document.createElement("div")
    // mensaje.className = "message"

    // mensaje.style.backgroundColor = messages
    // mensaje.style.color = "black"
    // mensaje.style.marginTop = "5px"
    // mensaje.style.padding = "5px"
    // mensaje.style.display = "flex"
    // mensaje.style.alignItems = "center"
    // mensaje.style.flexDirection = "column"
    // mensaje.style.whiteSpace = "pre-line"
    // mensaje.style.width = "40%"
    // mensaje.animate([
    //     {transform: "translateX(-300px)"},
    //     {transform: "translateX(0px)"}
    // ],{
    //     duration: 500,
    //     iterations: 1,
    //     fill: "forwards"
    // })

    // const image = document.createElement("img")
    // image.src = data.image
    // image.className = "imagen"
    // image.style.width = "100%"
    // mensaje.appendChild(image)

    // const titulo = document.createElement("p")
    // titulo.textContent = data.title
    // mensaje.appendChild(titulo)

    // const descripcion = document.createElement("p")
    // descripcion.textContent = data.description
    // mensaje.appendChild(descripcion)

    // const link = document.createElement("a")
    // link.href = data.url
    // link.innerHTML = data.url
    // mensaje.appendChild(link)

    // const div3_2_1 = document.createElement("div")
    // div3_2_1.style.display = "flex"
    // div3_2_1.style.justifyContent = (receptor == user_name || mondongo) ? "flex-end" : "flex-start"
    // div3_2.prepend(div3_2_1)
    // div3_2_1.append(mensaje);
    // div3_2.scrollTop = div3_2.scrollHeight 
}

async function sendChats(mensaje) {
    document.getElementById("mensajes").innerHTML = "";

    const posts = await obtainPosts(); // Esperamos a que se obtengan los mensajes

    // Usamos un bucle for...of en lugar de forEach para poder utilizar async/await correctamente
    if (mensaje != null){
        for (const element of mensaje){
            mondongo = false;
            const name = document.createElement("p")
            name.textContent = element.username
            name.style.color = "white"
            div3_2.prepend(name)
            if (element.username == user_name){
                name.style.alignSelf = "flex-end"
                mondongo = true
            }
    
            if (regexEv(element.content) === 0) {
                createImage(element.content, mondongo);
            } else if (regexEv(element.content) === 1) {
                await urlPreview(element.content, mondongo); // Esperamos a que se complete la llamada a urlPreview
            } else {
                createMessage(element.content, mondongo);
            }
        }
    } else {
        for (const element of posts) {
            mondongo = false;
            const name = document.createElement("p")
            name.textContent = element.username
            name.style.color = "white"
            div3_2.prepend(name)
            if (element.username == user_name){
                name.style.alignSelf = "flex-end"
                mondongo = true
            }
    
            if (regexEv(element.content) === 0) {
                createImage(element.content, mondongo);
            } else if (regexEv(element.content) === 1) {
                await urlPreview(element.content, mondongo); // Esperamos a que se complete la llamada a urlPreview
            } else {
                createMessage(element.content, mondongo);
            }
        }
    }
}

sendChats(myPosts)